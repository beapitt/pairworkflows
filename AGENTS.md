# PairWorkflows Project Instructions

## Project type

PairWorkflows is a flat static website built with HTML, CSS, and JavaScript.

New Excel workflow pages are top-level `.html` files.

Shared navigation is loaded from:

* `/navbar.js`
* `/footer.js`

Do not introduce a framework, build system, package manager, or new architecture unless explicitly requested.

## Core safety rules

* Never commit changes unless explicitly requested.
* Never push to GitHub unless explicitly requested.
* Never deploy to production unless explicitly requested.
* Never delete or rename existing files unless explicitly requested.
* Do not make unrelated cleanup or formatting changes.
* Keep changes limited to the files required for the requested workflow.
* Before making changes, inspect the relevant existing files rather than assuming their structure.

## Workflow creation process

A new Excel workflow page must not be created until its three ChatGPT test prompts have been validated and explicitly approved as PASS.

The normal process is:

1. Define and test Prompt 1.
2. Receive PASS.
3. Define and test Prompt 2.
4. Receive PASS.
5. Define and test Prompt 3.
6. Receive PASS.
7. Only then implement the final workflow page.

Do not invent untested examples, formulas, Power Query behavior, expected results, or technical claims.

The final page must faithfully reflect the three approved tests.

## Workflow HTML template

Use a recent approved Excel workflow as the structural template.

Prefer `remove-duplicates-excel.html` when appropriate, or a newer workflow explicitly identified by the user.

Preserve the existing PairWorkflows design rather than redesigning the page.

A workflow page normally contains, in this order:

1. SEO metadata
2. FAQ JSON-LD
3. shared navbar/footer loading
4. hero
5. prompt selector with exactly 3 tested prompt tabs
6. matching Before / After panel for each tab
7. diagnosis section
8. practical steps
9. visible FAQ
10. related workflows
11. existing-style JavaScript for tabs, copying, FAQ behavior, and search

Keep page-specific CSS and JavaScript inline unless explicitly instructed otherwise.

Do not add Open Graph, Twitter metadata, frameworks, dependencies, or unrelated features unless requested.

## SEO requirements

Every new workflow page must include:

* `<title>`
* meta description
* canonical URL
* one clear H1
* FAQ JSON-LD when visible FAQ is present

The visible FAQ and FAQ JSON-LD must contain the same questions and substantively matching answers.

Use the SEO keyword research supplied for the specific workflow.
Do not redo keyword research or web research unless explicitly requested.

Do not keyword-stuff.

## Before / After accuracy

Each Before / After panel must correspond to one of the three tested prompts.

Do not invent output that was not supported by the approved test.

Check that:

* sample rows match the tested data
* formulas or Power Query settings are accurate
* expected results are mathematically and logically correct
* ambiguous results are not presented as certain
* source data remains unchanged when the tested solution was non-destructive

## `excel-workflows.html`

Every new workflow must be added to `excel-workflows.html`.

Hub cards use an absolute production URL.

Use this compact structure:

```html
<a href="https://www.pairworkflows.com/example-workflow.html" class="workflow-card">
  <h3>Workflow Title</h3>
  <span class="workflow-card-arrow">Read workflow →</span>
</a>
```

Rules:

* no `<p>`
* no description
* no category tag
* no additional markup
* preserve the surrounding section and grid structure
* do not reformat unrelated existing cards

## Excel category pages

Every new workflow must also be added to the single most appropriate Excel category page.

Current category pages include:

* `excel-errors.html`
* `excel-formulas.html`
* `excel-data-cleaning.html`
* `excel-finance-models.html`
* `excel-reports.html`

Choose the category based primarily on the problem solved by the workflow.

Category cards use root-relative URLs and must follow the existing full card structure:

```html
<a href="/example-workflow.html" class="workflow-card">
  <div class="workflow-card-tag">Category label</div>
  <h3>Workflow Title</h3>
  <p>Concise workflow description.</p>
  <span class="workflow-card-arrow">Read workflow →</span>
</a>
```

Do not use the compact hub-card markup on a category page.

Match the category tag wording already used by that category file.

## `search-index.json`

Every new workflow must be added to `search-index.json`.

For new workflow entries use:

* a unique `id`
* the real page title
* `"category": "workflow"` unless the user explicitly specifies otherwise
* root-relative workflow URL
* relevant SEO and content-derived tags
* concise description matching the actual page

Keep the `tags` array on one line.

For the final entry, the end of the file must visually follow this pattern:

```json
},
{
  "id": "example-workflow",
  "title": "Example Workflow",
  "category": "workflow",
  "url": "/example-workflow.html",
  "tags": ["excel", "example"],
  "description": "Example description."
}
]
```

There must be:

* a comma after the previous object
* no trailing comma after the new final object
* valid JSON syntax

Do not reformat older entries merely to make indentation consistent.

## `sitemap.xml`

Every new workflow must be added to `sitemap.xml`.

Follow the sitemap's existing format exactly.

Current workflow entries normally use:

```xml
<url><loc>https://www.pairworkflows.com/example-workflow.html</loc><lastmod>YYYY-MM-DD</lastmod><priority>0.7</priority></url>
```

Place the workflow in the most appropriate existing sitemap section.

Use the actual current date for `<lastmod>` when implementing a new workflow.

Do not convert the sitemap to a different formatting style.

## Related workflows

Use root-relative links in the Related Workflows section.

Choose genuinely related existing pages.

Do not invent URLs.
Verify that every linked local file exists.

## Mandatory validation before reporting completion

After implementing a workflow, verify at minimum:

1. the new HTML file exists
2. canonical URL matches the filename
3. title, meta description, and H1 are present
4. all three prompt tabs have matching panels
5. all three Before / After panels correspond to the approved tests
6. visible FAQ matches FAQ JSON-LD
7. `excel-workflows.html` contains the new card
8. the correct category page contains the full category card
9. `search-index.json` parses successfully as JSON
10. the new search-index ID and URL are unique
11. `sitemap.xml` contains the workflow URL
12. related internal links point to existing files
13. no unrelated files were changed

If no validation script exists, use safe read-only commands or parsers to perform these checks.

## Completion report

After implementation, report:

* files created
* files modified
* category chosen
* validation results
* any warnings or uncertainty

Then show the Git diff or summarize the exact diff for review.

Do not commit, push, or deploy.
