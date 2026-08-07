(function() {
  var style = document.createElement('style');
  style.textContent = `
    .navbar {
      background: #021a12;
      border-bottom: 1px solid #0a4a30;
      padding: 0 2rem;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      position: relative;
      z-index: 100;
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
    .nav-right {
      display: flex;
      align-items: center;
      gap: 4px;
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
    .nav-dropdown-menu.workflows-menu {
      min-width: 380px;
      left: 0;
    }
    .workflows-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      padding: 2px;
    }
    .workflows-grid a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #374151;
      text-decoration: none;
      padding: 9px 12px;
      border-radius: 6px;
      transition: all .15s;
      white-space: nowrap;
    }
    .workflows-grid a:hover {
      color: #111827;
      background: #f3f4f6;
    }
    .workflows-grid a .wf-icon {
      font-size: 15px;
      flex-shrink: 0;
    }
    .search-trigger {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      cursor: pointer;
      color: rgba(255,255,255,0.7);
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .15s;
      flex-shrink: 0;
      margin-left: 4px;
    }
    .search-trigger:hover {
      background: rgba(255,255,255,0.15);
      color: #ffffff;
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
      margin-left: 4px;
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
    .nav-mobile-divider {
      height: 1px;
      background: #e5e7eb;
      margin: 8px 0;
    }
    @media(max-width:700px) {
      .navbar { padding: 0 1rem; }
      .nav-desktop-links { display: none !important; }
      .nav-hamburger { display: flex; }
    }
    @media(min-width:701px) {
      .nav-hamburger { display: none; }
      .nav-mobile-menu { display: none !important; }
    }
  `;
  document.head.appendChild(style);

  var navbarHTML = `
    <nav class="navbar">
      <a href="https://www.pairworkflows.com" class="nav-logo">
        <span class="logo-pair">Pair</span><span class="logo-workflows">Workflows</span>
      </a>
      <div class="nav-right">
        <div class="nav-desktop-links" style="display:flex;align-items:center;gap:4px;">

          <!-- GUIDES -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('workflows')" id="navDropdownToggle-workflows">
              Workflows
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="nav-dropdown-menu" id="navDropdownMenu-workflows" style="min-width:420px;">
              <div class="nav-dropdown-label">📘 Claude Workflows</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:2px;">
                <a href="https://www.pairworkflows.com/claude-finance-workflows.html">Finance</a>
                <a href="https://www.pairworkflows.com/claude-hr-workflows.html">HR</a>
                <a href="https://www.pairworkflows.com/claude-marketing-workflows.html">Marketing</a>
                <a href="https://www.pairworkflows.com/claude-legal-workflows.html">Legal</a>
                <a href="https://www.pairworkflows.com/claude-operations-workflows.html">Operations</a>
                <a href="https://www.pairworkflows.com/claude-sales-workflows.html">Sales</a>
                <a href="https://www.pairworkflows.com/claude-customer-service-workflows.html">Customer Service</a>
                <a href="https://www.pairworkflows.com/claude-excel-workflows.html">Excel</a>
              </div>
              <div class="nav-dropdown-divider"></div>
              <div class="nav-dropdown-label">✨ Gemini Workflows</div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:2px;">
                <a href="https://www.pairworkflows.com/gemini-finance-workflows.html">Finance</a>
                <a href="https://www.pairworkflows.com/gemini-hr-workflows.html">HR</a>
                <a href="https://www.pairworkflows.com/gemini-marketing-workflows.html">Marketing</a>
                <a href="https://www.pairworkflows.com/gemini-legal-workflows.html">Legal</a>
                <a href="https://www.pairworkflows.com/gemini-operations-workflows.html">Operations</a>
                <a href="https://www.pairworkflows.com/gemini-sales-workflows.html">Sales</a>
                <a href="https://www.pairworkflows.com/gemini-customer-service-workflows.html">Customer Service</a>
                </div>
            </div>
          </div>

          <!-- COMPARE AI -->

          <!-- PROMPT BUILDER -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('prompts')" id="navDropdownToggle-prompts">
              Prompt Builder
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="nav-dropdown-menu" id="navDropdownMenu-prompts">
              <div class="nav-dropdown-label">⚡ Generate a custom prompt</div>
              <a href="https://www.pairworkflows.com/claude-prompts-excel.html">Excel &amp; Google Sheets</a>
              <a href="https://www.pairworkflows.com/claude-prompts-finance.html">Finance</a>
              <a href="https://www.pairworkflows.com/claude-prompts-hr.html">HR</a>
              <a href="https://www.pairworkflows.com/claude-prompts-marketing.html">Marketing</a>
              <a href="https://www.pairworkflows.com/claude-prompts-sales.html">Sales</a>
              <a href="https://www.pairworkflows.com/claude-prompts-customer-service.html">Customer Service</a>
              <a href="https://www.pairworkflows.com/claude-prompts-operations.html">Operations</a>
              <a href="https://www.pairworkflows.com/claude-prompts-legal.html">Legal</a>
            </div>
          </div>

          <!-- PROMPT LIBRARY -->
          <a href="https://www.pairworkflows.com/prompt-library.html" class="nav-dropdown-toggle" style="text-decoration:none">Prompt Library</a>

          <!-- SITE BUILDER -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('builder')" id="navDropdownToggle-builder">
              Site Builder
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="nav-dropdown-menu" id="navDropdownMenu-builder">
              <div class="nav-dropdown-label">🏗️ AI Site Builders</div>
              <a href="https://www.pairworkflows.com/ai-portfolio-website-builder.html">Portfolio Site Builder</a>
              <a href="https://www.pairworkflows.com/ai-pizza-website-builder.html">🍕 Pizza & Takeaway Builder</a>
            </div>
          </div>

          <!-- GUIDES -->
          <!-- COMPARE AI -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('compare')" id="navDropdownToggle-compare">
              Compare AI
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="nav-dropdown-menu" id="navDropdownMenu-compare">
              <a href="https://www.pairworkflows.com/claude-vs-gemini.html">Claude vs Gemini</a>
              <a href="https://www.pairworkflows.com/claude-vs-gemini-finance.html">Claude vs Gemini Finance</a>
              <a href="https://www.pairworkflows.com/claude-vs-copilot-excel.html">Claude vs Copilot Excel</a>
            </div>
          </div>

          <!-- TEMPLATES -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" onclick="toggleNavDropdown('templates')" id="navDropdownToggle-templates">
              Templates
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="nav-dropdown-menu" id="navDropdownMenu-templates">
              <div class="nav-dropdown-label">📥 Free Excel Templates</div>
              <a href="https://www.pairworkflows.com/car-loan-template.html">Car Loan Amortization Schedule</a>
              <a href="https://www.pairworkflows.com/kpi-dashboard-template.html">KPI Dashboard Excel</a>
            </div>
          </div>

        </div>

        <!-- SEARCH -->
        <button class="search-trigger" onclick="openSearch()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>

        <!-- HAMBURGER -->
        <button class="nav-hamburger" onclick="toggleMobileMenu()" id="navHamburger">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>

      </div>
    </nav>

    <!-- MOBILE MENU -->
    <div class="nav-mobile-menu" id="navMobileMenu">
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Prompt Builder</div>
        <a href="https://www.pairworkflows.com/claude-prompts-excel.html">Excel &amp; Google Sheets</a>
        <a href="https://www.pairworkflows.com/claude-prompts-finance.html">Finance</a>
        <a href="https://www.pairworkflows.com/claude-prompts-hr.html">HR</a>
        <a href="https://www.pairworkflows.com/claude-prompts-marketing.html">Marketing</a>
        <a href="https://www.pairworkflows.com/claude-prompts-sales.html">Sales</a>
        <a href="https://www.pairworkflows.com/claude-prompts-customer-service.html">Customer Service</a>
        <a href="https://www.pairworkflows.com/claude-prompts-operations.html">Operations</a>
        <a href="https://www.pairworkflows.com/claude-prompts-legal.html">Legal</a>
        <a href="https://www.pairworkflows.com/prompt-library.html">Prompt Library</a>
      </div>
      <div class="nav-mobile-divider"></div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Site Builder</div>
        <a href="https://www.pairworkflows.com/ai-portfolio-website-builder.html">🏗️ Portfolio Site Builder</a>
        <a href="https://www.pairworkflows.com/ai-pizza-website-builder.html">🍕 Pizza & Takeaway Builder</a>
      </div>
      <div class="nav-mobile-divider"></div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Claude Workflows</div>
        <a href="https://www.pairworkflows.com/claude-finance-workflows.html">Finance</a>
        <a href="https://www.pairworkflows.com/claude-hr-workflows.html">HR</a>
        <a href="https://www.pairworkflows.com/claude-marketing-workflows.html">Marketing</a>
        <a href="https://www.pairworkflows.com/claude-legal-workflows.html">Legal</a>
        <a href="https://www.pairworkflows.com/claude-operations-workflows.html">Operations</a>
        <a href="https://www.pairworkflows.com/claude-sales-workflows.html">Sales</a>
        <a href="https://www.pairworkflows.com/claude-customer-service-workflows.html">Customer Service</a>
        <a href="https://www.pairworkflows.com/claude-excel-workflows.html">Excel</a>
        <div class="nav-mobile-divider"></div>
        <div class="nav-mobile-label">Gemini Workflows</div>
        <a href="https://www.pairworkflows.com/gemini-finance-workflows.html">Finance</a>
        <a href="https://www.pairworkflows.com/gemini-hr-workflows.html">HR</a>
        <a href="https://www.pairworkflows.com/gemini-marketing-workflows.html">Marketing</a>
        <a href="https://www.pairworkflows.com/gemini-legal-workflows.html">Legal</a>
        <a href="https://www.pairworkflows.com/gemini-operations-workflows.html">Operations</a>
        <a href="https://www.pairworkflows.com/gemini-sales-workflows.html">Sales</a>
        <a href="https://www.pairworkflows.com/gemini-customer-service-workflows.html">Customer Service</a>
        <a href="https://www.pairworkflows.com/gemini-workflows.html">General</a>
      </div>
      <div class="nav-mobile-divider"></div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Compare AI</div>
        <a href="https://www.pairworkflows.com/claude-vs-gemini.html">Claude vs Gemini</a>
        <a href="https://www.pairworkflows.com/claude-vs-gemini-finance.html">Claude vs Gemini Finance</a>
        <a href="https://www.pairworkflows.com/claude-vs-copilot-excel.html">Claude vs Copilot Excel</a>
      </div>
      <div class="nav-mobile-divider"></div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Templates</div>
        <a href="https://www.pairworkflows.com/car-loan-template.html">Car Loan Amortization Schedule</a>
        <a href="https://www.pairworkflows.com/kpi-dashboard-template.html">KPI Dashboard Excel</a>
      </div>
    </div>
  `;

  var placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }

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
