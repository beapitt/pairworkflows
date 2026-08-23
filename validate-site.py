#!/usr/bin/env python3
"""Read-only validation checks for the PairWorkflows static site."""

from __future__ import annotations

import json
import sys
from collections import Counter, defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent
REQUIRED_SEARCH_FIELDS = ("id", "title", "category", "url", "tags", "description")
PAIRWORKFLOWS_HOSTS = {"pairworkflows.com", "www.pairworkflows.com"}
UTILITY_META_WARNING_FILES = {"contact.html", "legal.html", "search.html"}


class SiteHTMLParser(HTMLParser):
    """Collect the small set of HTML values needed by the validator."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.in_title = False
        self.title_parts: list[str] = []
        self.has_meta_description = False
        self.canonicals: list[str] = []
        self.links: list[str] = []
        self.in_json_ld = False
        self.json_ld_parts: list[str] = []
        self.json_ld_blocks: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = {name.lower(): value for name, value in attrs}
        tag = tag.lower()

        if tag == "title":
            self.in_title = True
        elif tag == "meta" and (attributes.get("name") or "").lower() == "description":
            if (attributes.get("content") or "").strip():
                self.has_meta_description = True
        elif tag == "link" and (attributes.get("rel") or "").lower() == "canonical":
            href = (attributes.get("href") or "").strip()
            if href:
                self.canonicals.append(href)
        elif tag == "a":
            href = (attributes.get("href") or "").strip()
            if href:
                self.links.append(href)
        elif tag == "script" and (attributes.get("type") or "").lower() == "application/ld+json":
            self.in_json_ld = True
            self.json_ld_parts = []

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag == "title":
            self.in_title = False
        elif tag == "script" and self.in_json_ld:
            self.json_ld_blocks.append("".join(self.json_ld_parts))
            self.json_ld_parts = []
            self.in_json_ld = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.in_json_ld:
            self.json_ld_parts.append(data)

    @property
    def title(self) -> str:
        return "".join(self.title_parts).strip()


def local_html_target(url: str) -> Path | None:
    """Return a repository-root HTML target for a root-relative URL."""
    parsed = urlparse(url)
    if parsed.scheme or parsed.netloc or not parsed.path.startswith("/"):
        return None
    if not parsed.path.lower().endswith(".html"):
        return None
    relative = parsed.path.lstrip("/")
    if "/" in relative or not relative:
        return ROOT / relative
    return ROOT / relative


def add_duplicates(errors: dict[str, list[str]], category: str, label: str, values: list[str]) -> None:
    for value, count in sorted(Counter(values).items()):
        if value and count > 1:
            errors[category].append(f"Duplicate {label} ({count} occurrences): {value}")


def validate_search_index(errors: dict[str, list[str]]) -> tuple[list[dict], list[str]]:
    category = "search-index.json"
    path = ROOT / "search-index.json"
    if not path.is_file():
        errors[category].append("Missing search-index.json")
        return [], []

    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        errors[category].append(f"Could not parse search-index.json: {exc}")
        return [], []

    if not isinstance(data, list):
        errors[category].append("Root value must be an array")
        return [], []

    entries: list[dict] = []
    ids: list[str] = []
    urls: list[str] = []
    for index, entry in enumerate(data):
        location = f"entry {index}"
        if not isinstance(entry, dict):
            errors[category].append(f"{location} must be an object")
            continue

        entries.append(entry)
        for field in REQUIRED_SEARCH_FIELDS:
            if field not in entry:
                errors[category].append(f"{location} is missing required field: {field}")

        entry_id = entry.get("id")
        url = entry.get("url")
        if isinstance(entry_id, str):
            ids.append(entry_id)
        if isinstance(url, str):
            urls.append(url)
            target = local_html_target(url)
            if target is not None and not target.is_file():
                errors[category].append(f"{location} references missing HTML file: {url}")

    add_duplicates(errors, category, "id", ids)
    add_duplicates(errors, category, "URL", urls)
    return entries, urls


def validate_sitemap(errors: dict[str, list[str]]) -> tuple[list[str], str]:
    category = "sitemap.xml"
    path = ROOT / "sitemap.xml"
    if not path.is_file():
        errors[category].append("Missing sitemap.xml")
        return [], ""

    try:
        text = path.read_text(encoding="utf-8")
        root = ET.fromstring(text)
    except (OSError, UnicodeError, ET.ParseError) as exc:
        errors[category].append(f"Could not parse sitemap.xml: {exc}")
        return [], ""

    locations = [element.text.strip() for element in root.iter() if element.tag.rsplit("}", 1)[-1] == "loc" and element.text]
    add_duplicates(errors, category, "sitemap URL", locations)

    for url in locations:
        parsed = urlparse(url)
        if parsed.hostname and parsed.hostname.lower() in PAIRWORKFLOWS_HOSTS and parsed.path.lower().endswith(".html"):
            target = ROOT / parsed.path.lstrip("/")
            if not target.is_file():
                errors[category].append(f"PairWorkflows URL references missing HTML file: {url}")
    return locations, text


def validate_html(
    errors: dict[str, list[str]], warnings: dict[str, list[str]]
) -> None:
    category = "HTML files"
    for path in sorted(ROOT.glob("*.html")):
        try:
            text = path.read_text(encoding="utf-8")
            parser = SiteHTMLParser()
            parser.feed(text)
            parser.close()
        except (OSError, UnicodeError) as exc:
            errors[category].append(f"{path.name}: could not read file: {exc}")
            continue

        if not parser.title:
            errors[category].append(f"{path.name}: missing or empty <title>")
        if not parser.has_meta_description:
            finding = f"{path.name}: missing or empty meta description"
            if path.name in UTILITY_META_WARNING_FILES:
                warnings[category].append(finding)
            else:
                errors[category].append(finding)

        for canonical in parser.canonicals:
            canonical_path = urlparse(canonical).path
            canonical_name = Path(canonical_path).name
            if path.name == "index.html" and canonical_path in {"/", "/index.html"}:
                continue
            if canonical_name != path.name:
                errors[category].append(
                    f"{path.name}: canonical filename is {canonical_name or '(empty)'}"
                )

        for href in parser.links:
            target = local_html_target(href)
            if target is not None and not target.is_file():
                errors[category].append(f"{path.name}: broken internal link: {href}")

        for block_number, block in enumerate(parser.json_ld_blocks, start=1):
            try:
                json.loads(block)
            except json.JSONDecodeError as exc:
                errors["FAQ JSON-LD"].append(
                    f"{path.name}: invalid JSON-LD block {block_number}: {exc}"
                )


def validate_discovery(
    errors: dict[str, list[str]], search_entries: list[dict], sitemap_locations: list[str]
) -> None:
    category = "Workflow discovery"
    sitemap_paths = {urlparse(url).path for url in sitemap_locations}
    for index, entry in enumerate(search_entries):
        url = entry.get("url")
        if isinstance(url, str) and urlparse(url).path.lower().endswith(".html"):
            path = urlparse(url).path
            if path not in sitemap_paths:
                errors[category].append(
                    f"search entry {index} is absent from sitemap.xml: {url}"
                )


def main() -> int:
    errors: dict[str, list[str]] = defaultdict(list)
    warnings: dict[str, list[str]] = defaultdict(list)

    search_entries, _ = validate_search_index(errors)
    sitemap_locations, _ = validate_sitemap(errors)
    validate_html(errors, warnings)
    validate_discovery(errors, search_entries, sitemap_locations)

    print("PairWorkflows validation")
    print("------------------------")

    categories = (
        "search-index.json",
        "sitemap.xml",
        "HTML files",
        "FAQ JSON-LD",
        "Workflow discovery",
    )
    for category in categories:
        print(f"\n{category}")
        error_findings = errors.get(category, [])
        warning_findings = warnings.get(category, [])
        if error_findings or warning_findings:
            for finding in error_findings:
                print(f"  ERROR: {finding}")
            for finding in warning_findings:
                print(f"  WARNING: {finding}")
        else:
            print("  OK")

    warning_count = sum(len(items) for items in warnings.values())
    error_count = sum(len(items) for items in errors.values())
    print(f"\nWarnings: {warning_count}")
    if error_count:
        print(f"FAIL — {error_count} validation error(s) found")
        return 1

    print("PASS — no validation errors found")
    return 0


if __name__ == "__main__":
    sys.exit(main())
