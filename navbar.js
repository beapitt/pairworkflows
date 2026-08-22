(function() {
  var style = document.createElement('style');
  style.textContent = `
    .navbar {
      background: #021a12;
      border-bottom: 1px solid #0a4a30;
      height: 52px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      z-index: 100;
    }
    .nav-inner {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo {
      display: flex;
      align-items: baseline;
      gap: 1px;
      text-decoration: none;
    }
    .logo-pair {
      font-size: 16px;
      font-weight: 600;
      color: #1d9e75;
      letter-spacing: -0.3px;
    }
    .logo-workflows {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
    }
    .nav-left {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .nav-desktop-links {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }
    .nav-search-btn {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: transparent;
      border: 1px solid transparent;
      cursor: pointer;
      color: rgba(255,255,255,0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .15s;
      flex-shrink: 0;
    }
    .nav-search-btn:hover,
    .nav-search-btn.open {
      color: #ffffff;
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.15);
    }
    .nav-search-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }
    .nav-search-form {
      display: flex;
      align-items: center;
      overflow: hidden;
      max-width: 0;
      opacity: 0;
      transition: max-width .2s ease, opacity .15s ease;
    }
    .nav-search-form.open {
      max-width: 220px;
      opacity: 1;
      margin-right: 6px;
    }
    .nav-search-input {
      width: 200px;
      max-width: 200px;
      font-size: 13px;
      font-family: 'Inter', sans-serif;
      color: #ffffff;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 6px;
      padding: 6px 10px;
      outline: none;
    }
    .nav-search-input::placeholder {
      color: rgba(255,255,255,0.45);
    }
    .nav-search-input:focus {
      border-color: #1d9e75;
    }
    .nav-search-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      width: 260px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 6px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      z-index: 1000;
      max-height: 320px;
      overflow-y: auto;
    }
    .nav-search-dropdown.open {
      display: block;
    }
    .nav-suggestion-item {
      display: block;
      font-size: 13px;
      color: #374151;
      text-decoration: none;
      padding: 8px 10px;
      border-radius: 6px;
      transition: all .1s;
      white-space: normal;
      line-height: 1.35;
    }
    .nav-suggestion-item:hover,
    .nav-suggestion-item:focus {
      color: #111827;
      background: #f3f4f6;
      outline: none;
    }
    .nav-suggestion-seeall {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: #1d9e75;
      text-decoration: none;
      padding: 8px 10px;
      border-radius: 6px;
      margin-top: 2px;
      border-top: 1px solid #e5e7eb;
    }
    .nav-suggestion-seeall:hover,
    .nav-suggestion-seeall:focus {
      background: #f3f4f6;
      outline: none;
    }
    .nav-suggestion-empty {
      font-size: 12.5px;
      color: #9ca3af;
      padding: 8px 10px;
    }
    .nav-mobile-search {
      position: relative;
      margin-bottom: 1rem;
    }
    .nav-mobile-search input {
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      color: #111827;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      padding: 9px 12px;
      outline: none;
    }
    .nav-mobile-search input:focus {
      border-color: #1d9e75;
    }
    .nav-mobile-search input::placeholder {
      color: #9ca3af;
    }
    .nav-mobile-search-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 6px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      z-index: 1000;
      max-height: 280px;
      overflow-y: auto;
    }
    .nav-mobile-search-dropdown.open {
      display: block;
    }
    .nav-dropdown {
      position: relative;
    }
    .nav-dropdown-toggle {
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 6px 10px;
      border-radius: 6px;
      transition: all .15s;
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: 'Inter', sans-serif;
      white-space: nowrap;
    }
    .nav-dropdown-toggle:hover,
    .nav-dropdown-toggle.open {
      color: #ffffff;
      background: rgba(255,255,255,0.08);
    }
    .nav-dropdown-toggle svg {
      transition: transform .2s;
      flex-shrink: 0;
    }
    .nav-dropdown-toggle.open svg {
      transform: rotate(180deg);
    }
    .nav-dropdown-menu {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 6px;
      min-width: 200px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      z-index: 999;
    }
    .nav-dropdown-menu.open {
      display: block;
    }
    .nav-dropdown-menu a {
      display: block;
      font-size: 13px;
      color: #374151;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 6px;
      transition: all .15s;
      white-space: nowrap;
    }
    .nav-dropdown-menu a:hover {
      color: #111827;
      background: #f3f4f6;
    }
    .nav-dropdown-menu a.sub-item {
      padding-left: 24px;
      font-size: 12px;
      color: #6b7280;
    }
    .nav-dropdown-menu a.sub-item:hover {
      color: #111827;
      background: #f3f4f6;
    }
    .nav-dropdown-divider {
      height: 1px;
      background: #e5e7eb;
      margin: 4px 6px;
    }
    .nav-dropdown-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: #1d9e75;
      padding: 6px 12px 2px;
    }
    .nav-hamburger {
      display: none;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      cursor: pointer;
      color: rgba(255,255,255,0.7);
      align-items: center;
      justify-content: center;
      transition: all .15s;
      flex-shrink: 0;
    }
    .nav-hamburger:hover {
      background: rgba(255,255,255,0.15);
      color: #ffffff;
    }
    .nav-mobile-menu {
      display: none;
      position: fixed;
      top: 52px;
      left: 0;
      right: 0;
      background: #ffffff;
      border-bottom: 1px solid #e5e7eb;
      padding: 1rem;
      z-index: 99;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      max-height: calc(100vh - 52px);
      overflow-y: auto;
    }
    .nav-mobile-menu.open {
      display: block;
    }
    .nav-mobile-section {
      margin-bottom: 1rem;
    }
    .nav-mobile-section:last-child {
      margin-bottom: 0;
    }
    .nav-mobile-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: #1d9e75;
      margin-bottom: 6px;
      padding: 0 4px;
    }
    .nav-mobile-menu a {
      display: block;
      font-size: 14px;
      color: #374151;
      text-decoration: none;
      padding: 9px 12px;
      border-radius: 6px;
      transition: all .15s;
    }
    .nav-mobile-menu a:hover {
      color: #111827;
      background: #f3f4f6;
    }
    .nav-mobile-menu a.sub-item {
      padding-left: 24px;
      font-size: 13px;
      color: #6b7280;
    }
    .nav-mobile-divider {
      height: 1px;
      background: #e5e7eb;
      margin: 8px 0;
    }
    @media(max-width:700px) {
      .nav-inner { padding: 0 1rem; }
      .nav-left { gap: 12px; }
      .nav-desktop-links { display: none !important; }
      .nav-hamburger { display: flex; }
      .nav-search-btn { display: none !important; }
      .nav-search-form { display: none !important; }
    }
    @media(min-width:701px) {
      .nav-hamburger { display: none; }
      .nav-mobile-menu { display: none !important; }
    }
  `;
  document.head.appendChild(style);

  var navbarHTML = `
    <nav class="navbar">
      <div class="nav-inner">

        <!-- LEFT: logo + menu links -->
        <div class="nav-left">
          <a href="https://www.pairworkflows.com" class="nav-logo">
            <span class="logo-pair">Pair</span><span class="logo-workflows">Workflows</span>
          </a>
          <div class="nav-desktop-links">

            <!-- EXCEL WORKFLOWS -->
            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('workflows')" id="navDropdownToggle-workflows">
                Excel Workflows
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="nav-dropdown-menu" id="navDropdownMenu-workflows" style="min-width:220px;">
                <a href="https://www.pairworkflows.com/excel-workflows.html">All Excel Workflows</a>
                <div class="nav-dropdown-divider"></div>
                <div class="nav-dropdown-label">By topic</div>
                <a href="https://www.pairworkflows.com/excel-errors.html">Fix Excel Errors</a>
                <a href="https://www.pairworkflows.com/excel-formulas.html">Formulas &amp; Functions</a>
                <a href="https://www.pairworkflows.com/excel-data-cleaning.html">Data Cleaning</a>
                <a href="https://www.pairworkflows.com/excel-finance-models.html">Finance Models</a>
                <a href="https://www.pairworkflows.com/excel-reports.html">Dynamic Reports</a>
              </div>
            </div>

            <!-- PROMPT TOOLS -->
            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('prompts')" id="navDropdownToggle-prompts">
                Prompt Tools
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="nav-dropdown-menu" id="navDropdownMenu-prompts">
                <div class="nav-dropdown-label">Prompt Builder</div>
                <a href="https://www.pairworkflows.com/prompt-generator-excel.html">Excel &amp; Google Sheets</a>
                <a href="https://www.pairworkflows.com/prompt-generator-finance.html">Finance</a>
                <a href="https://www.pairworkflows.com/prompt-generator-hr.html">HR</a>
                <a href="https://www.pairworkflows.com/prompt-generator-marketing.html">Marketing</a>
                <a href="https://www.pairworkflows.com/prompt-generator-sales.html">Sales</a>
                <a href="https://www.pairworkflows.com/prompt-generator-customer-service.html">Customer Service</a>
                <a href="https://www.pairworkflows.com/prompt-generator-operations.html">Operations</a>
                <a href="https://www.pairworkflows.com/prompt-generator-legal.html">Legal</a>
              </div>
            </div>

            <!-- WEBSITE PROMPTS -->
            <div class="nav-dropdown">
              <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('builder')" id="navDropdownToggle-builder">
                Website Prompts
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="nav-dropdown-menu" id="navDropdownMenu-builder">
                <div class="nav-dropdown-label">Build a site with AI</div>
                <a href="https://www.pairworkflows.com/ai-restaurant-website-builder.html">Restaurant Website</a>
                <a class="sub-item" href="https://www.pairworkflows.com/ai-pizza-website-builder.html">Pizza &amp; Takeaway</a>
                <a class="sub-item" href="https://www.pairworkflows.com/ai-fine-dining-website-builder.html">Fine Dining</a>
                <a class="sub-item" href="https://www.pairworkflows.com/ai-cafe-bakery-website-builder.html">Café &amp; Bakery</a>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT: search + hamburger -->
        <div class="nav-right" id="navRight">
          <div class="nav-search-wrap" id="navSearchWrap">
            <form class="nav-search-form" id="navSearchForm" role="search">
              <input type="text" class="nav-search-input" id="navSearchInput" placeholder="Search Excel workflows…" aria-label="Search PairWorkflows" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="navSearchDropdown">
            </form>
            <div class="nav-search-dropdown" id="navSearchDropdown" role="listbox" aria-label="Search suggestions"></div>
          </div>
          <button type="button" class="nav-search-btn" onclick="toggleNavSearch()" id="navSearchBtn" aria-label="Search PairWorkflows" aria-expanded="false">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button class="nav-hamburger" onclick="toggleMobileMenu()" id="navHamburger">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>

      </div>
    </nav>

    <!-- MOBILE MENU -->
    <div class="nav-mobile-menu" id="navMobileMenu">
      <div class="nav-mobile-search" id="navMobileSearchWrap">
        <form role="search" id="navMobileSearchForm">
          <input type="text" id="navMobileSearchInput" placeholder="Search Excel workflows…" aria-label="Search PairWorkflows" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="navMobileSearchDropdown">
        </form>
        <div class="nav-mobile-search-dropdown" id="navMobileSearchDropdown" role="listbox" aria-label="Search suggestions"></div>
      </div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Excel Workflows</div>
        <a href="https://www.pairworkflows.com/excel-workflows.html">All Excel Workflows</a>
        <a href="https://www.pairworkflows.com/excel-errors.html">Fix Excel Errors</a>
        <a href="https://www.pairworkflows.com/excel-formulas.html">Formulas &amp; Functions</a>
        <a href="https://www.pairworkflows.com/excel-data-cleaning.html">Data Cleaning</a>
        <a href="https://www.pairworkflows.com/excel-finance-models.html">Finance Models</a>
        <a href="https://www.pairworkflows.com/excel-reports.html">Dynamic Reports</a>
      </div>
      <div class="nav-mobile-divider"></div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Prompt Tools</div>
        <a href="https://www.pairworkflows.com/prompt-generator-excel.html">Excel &amp; Google Sheets</a>
        <a href="https://www.pairworkflows.com/prompt-generator-finance.html">Finance</a>
        <a href="https://www.pairworkflows.com/prompt-generator-hr.html">HR</a>
        <a href="https://www.pairworkflows.com/prompt-generator-marketing.html">Marketing</a>
        <a href="https://www.pairworkflows.com/prompt-generator-sales.html">Sales</a>
        <a href="https://www.pairworkflows.com/prompt-generator-customer-service.html">Customer Service</a>
        <a href="https://www.pairworkflows.com/prompt-generator-operations.html">Operations</a>
        <a href="https://www.pairworkflows.com/prompt-generator-legal.html">Legal</a>
      </div>
      <div class="nav-mobile-divider"></div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Website Prompts</div>
        <a href="https://www.pairworkflows.com/ai-restaurant-website-builder.html">Restaurant Website</a>
        <a class="sub-item" href="https://www.pairworkflows.com/ai-pizza-website-builder.html">Pizza &amp; Takeaway</a>
        <a class="sub-item" href="https://www.pairworkflows.com/ai-fine-dining-website-builder.html">Fine Dining</a>
        <a class="sub-item" href="https://www.pairworkflows.com/ai-cafe-bakery-website-builder.html">Café &amp; Bakery</a>
      </div>
    </div>
  `;

  var placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }

  var path = window.location.pathname;
  var isHomepage = path === '/' || path === '/index.html';

  if (isHomepage) {
    var searchBtn = document.getElementById('navSearchBtn');
    var searchWrap = document.getElementById('navSearchWrap');
    var mobileSearchWrap = document.getElementById('navMobileSearchWrap');
    if (searchBtn) searchBtn.style.display = 'none';
    if (searchWrap) searchWrap.style.display = 'none';
    if (mobileSearchWrap) mobileSearchWrap.style.display = 'none';
  }

  function doSearch(term) {
    var q = (term || '').trim();
    if (!q) return;
    window.location.href = '/search.html?q=' + encodeURIComponent(q);
  }

  // --- Live suggestions: reuses the same /search-index.json data source
  // and scoring logic as search.html so results stay consistent. ---
  var SUGGESTION_LIMIT = 6;
  var searchIndexData = [];
  var searchIndexLoaded = false;
  var STOPWORDS = {'for':1,'the':1,'a':1,'an':1,'and':1,'or':1,'to':1,'in':1,'of':1,'is':1,'it':1,'at':1,'on':1,'how':1,'what':1,'with':1,'your':1,'you':1,'that':1,'this':1,'are':1,'can':1,'do':1,'by':1};

  function scoreItem(item, terms) {
    var titleLow = item.title.toLowerCase();
    var descLow = item.description.toLowerCase();
    var tagsLow = item.tags.join(' ').toLowerCase();
    var catLow = item.category.toLowerCase();
    var score = 0;
    terms.forEach(function(t) {
      if (t.length < 2) return;
      if (titleLow.indexOf(t) !== -1) score += 10;
      if (tagsLow.indexOf(t) !== -1) score += 6;
      if (descLow.indexOf(t) !== -1) score += 3;
      if (catLow.indexOf(t) !== -1) score += 2;
    });
    var significantTerms = terms.filter(function(t) { return t.length >= 3 && !STOPWORDS[t]; });
    if (significantTerms.length > 0) {
      var matched = significantTerms.filter(function(t) {
        var full = titleLow + ' ' + tagsLow + ' ' + descLow;
        return full.indexOf(t) !== -1;
      });
      if (matched.length >= Math.ceil(significantTerms.length / 2)) score += 5;
    }
    return score;
  }

  function searchSuggestions(query) {
    var terms = query.toLowerCase().trim().split(/\s+/);
    var scored = searchIndexData.map(function(item) { return { item: item, score: scoreItem(item, terms) }; });
    return scored.filter(function(s) { return s.score > 0; })
      .sort(function(a, b) { return b.score - a.score; })
      .map(function(s) { return s.item; });
  }

  if (!isHomepage) {
    fetch('/search-index.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        searchIndexData = data;
        searchIndexLoaded = true;
      })
      .catch(function() {});
  }

  function closeDropdown(dropdownEl, inputEl) {
    if (!dropdownEl) return;
    dropdownEl.classList.remove('open');
    dropdownEl.innerHTML = '';
    if (inputEl) inputEl.setAttribute('aria-expanded', 'false');
  }

  function renderSuggestions(dropdownEl, inputEl, query) {
    if (!dropdownEl || !inputEl) return;
    var q = query.trim();
    if (!q || !searchIndexLoaded) {
      closeDropdown(dropdownEl, inputEl);
      return;
    }
    var results = searchSuggestions(q);
    dropdownEl.innerHTML = '';
    if (results.length === 0) {
      var empty = document.createElement('div');
      empty.className = 'nav-suggestion-empty';
      empty.textContent = 'No matches found.';
      dropdownEl.appendChild(empty);
      dropdownEl.classList.add('open');
      inputEl.setAttribute('aria-expanded', 'true');
      return;
    }
    var shown = results.slice(0, SUGGESTION_LIMIT);
    shown.forEach(function(item) {
      var a = document.createElement('a');
      a.className = 'nav-suggestion-item';
      a.href = item.url;
      a.textContent = item.title;
      a.setAttribute('role', 'option');
      dropdownEl.appendChild(a);
    });
    if (results.length > shown.length) {
      var seeAll = document.createElement('a');
      seeAll.className = 'nav-suggestion-seeall';
      seeAll.href = '/search.html?q=' + encodeURIComponent(q);
      seeAll.textContent = 'See all ' + results.length + ' results';
      dropdownEl.appendChild(seeAll);
    }
    dropdownEl.classList.add('open');
    inputEl.setAttribute('aria-expanded', 'true');
  }

  function wireSearchInput(inputEl, dropdownEl) {
    if (!inputEl || !dropdownEl) return;
    inputEl.addEventListener('input', function() {
      renderSuggestions(dropdownEl, inputEl, inputEl.value);
    });
    inputEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        doSearch(inputEl.value);
      } else if (e.key === 'Escape') {
        closeDropdown(dropdownEl, inputEl);
        if (inputEl === navSearchInput) window.toggleNavSearch(true);
      } else if (e.key === 'ArrowDown') {
        var first = dropdownEl.querySelector('a');
        if (first) { e.preventDefault(); first.focus(); }
      }
    });
    dropdownEl.addEventListener('keydown', function(e) {
      var items = Array.prototype.slice.call(dropdownEl.querySelectorAll('a'));
      var idx = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var next = items[idx + 1] || items[0];
        if (next) next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (idx <= 0) { inputEl.focus(); } else { items[idx - 1].focus(); }
      } else if (e.key === 'Escape') {
        closeDropdown(dropdownEl, inputEl);
        inputEl.focus();
        if (inputEl === navSearchInput) window.toggleNavSearch(true);
      }
    });
  }

  window.toggleNavSearch = function(forceClose) {
    var btn = document.getElementById('navSearchBtn');
    var form = document.getElementById('navSearchForm');
    var input = document.getElementById('navSearchInput');
    var dropdown = document.getElementById('navSearchDropdown');
    if (!btn || !form || !input) return;
    var isOpen = form.classList.contains('open');
    if (isOpen || forceClose === true) {
      form.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      closeDropdown(dropdown, input);
      input.value = '';
    } else {
      form.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      setTimeout(function() { input.focus(); }, 50);
    }
  };

  var navSearchForm = document.getElementById('navSearchForm');
  var navSearchInput = document.getElementById('navSearchInput');
  var navSearchDropdown = document.getElementById('navSearchDropdown');
  if (navSearchForm) {
    navSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      doSearch(navSearchInput ? navSearchInput.value : '');
    });
  }
  wireSearchInput(navSearchInput, navSearchDropdown);

  var navMobileSearchForm = document.getElementById('navMobileSearchForm');
  var navMobileSearchInput = document.getElementById('navMobileSearchInput');
  var navMobileSearchDropdown = document.getElementById('navMobileSearchDropdown');
  if (navMobileSearchForm) {
    navMobileSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      doSearch(navMobileSearchInput ? navMobileSearchInput.value : '');
    });
  }
  wireSearchInput(navMobileSearchInput, navMobileSearchDropdown);

  document.addEventListener('click', function(e) {
    var form = document.getElementById('navSearchForm');
    var btn = document.getElementById('navSearchBtn');
    if (form && btn) {
      if (!e.target.closest('.nav-search-wrap') && !e.target.closest('.nav-search-btn')) {
        if (form.classList.contains('open')) {
          form.classList.remove('open');
          btn.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
        closeDropdown(document.getElementById('navSearchDropdown'), document.getElementById('navSearchInput'));
      }
    }
    if (!e.target.closest('.nav-mobile-search')) {
      closeDropdown(document.getElementById('navMobileSearchDropdown'), document.getElementById('navMobileSearchInput'));
    }
  });

  window.toggleNavDropdown = function(id) {
    var toggle = document.getElementById('navDropdownToggle-' + id);
    var menu = document.getElementById('navDropdownMenu-' + id);
    if (!toggle || !menu) return;
    var isOpen = menu.classList.contains('open');
    document.querySelectorAll('.nav-dropdown-toggle').forEach(function(t) { t.classList.remove('open'); });
    document.querySelectorAll('.nav-dropdown-menu').forEach(function(m) { m.classList.remove('open'); });
    if (!isOpen) {
      toggle.classList.add('open');
      menu.classList.add('open');
    }
  };

  window.toggleMobileMenu = function() {
    var menu = document.getElementById('navMobileMenu');
    var hamburger = document.getElementById('navHamburger');
    if (!menu || !hamburger) return;
    menu.classList.toggle('open');
    hamburger.innerHTML = menu.classList.contains('open')
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  };

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown-toggle').forEach(function(t) { t.classList.remove('open'); });
      document.querySelectorAll('.nav-dropdown-menu').forEach(function(m) { m.classList.remove('open'); });
    }
  });

})();
