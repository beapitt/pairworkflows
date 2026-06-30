(function() {
  // NAVBAR STYLES
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
      gap: 8px;
    }
    .nav-link {
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 6px;
      transition: all .15s;
      white-space: nowrap;
    }
    .nav-link:hover {
      color: #ffffff;
      background: rgba(255,255,255,0.08);
    }
    .nav-link.active {
      color: #1d9e75;
    }

    /* DROPDOWN */
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
    .nav-dropdown-toggle:hover {
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
      right: 0;
      background: #021a12;
      border: 1px solid #0a4a30;
      border-radius: 10px;
      padding: 6px;
      min-width: 220px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      z-index: 999;
    }
    .nav-dropdown-menu.open {
      display: block;
    }
    .nav-dropdown-menu a {
      display: block;
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 6px;
      transition: all .15s;
      white-space: nowrap;
    }
    .nav-dropdown-menu a:hover {
      color: #ffffff;
      background: rgba(255,255,255,0.08);
    }
    .nav-dropdown-divider {
      height: 1px;
      background: #0a4a30;
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

    /* SEARCH TRIGGER */
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
    }
    .search-trigger:hover {
      background: rgba(255,255,255,0.15);
      color: #ffffff;
    }

    /* MOBILE HAMBURGER */
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

    /* MOBILE MENU */
    .nav-mobile-menu {
      display: none;
      position: fixed;
      top: 52px;
      left: 0;
      right: 0;
      background: #021a12;
      border-bottom: 1px solid #0a4a30;
      padding: 1rem;
      z-index: 99;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
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
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      padding: 9px 12px;
      border-radius: 6px;
      transition: all .15s;
    }
    .nav-mobile-menu a:hover {
      color: #ffffff;
      background: rgba(255,255,255,0.08);
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

  // NAVBAR HTML
  var currentPath = window.location.pathname;

  function isActive(path) {
    return currentPath.includes(path) ? ' active' : '';
  }

  var navbarHTML = `
    <nav class="navbar">
      <a href="https://www.pairworkflows.com" class="nav-logo">
        <span class="logo-pair">Pair</span><span class="logo-workflows">Workflows</span>
      </a>

      <div class="nav-right">

        <!-- DESKTOP LINKS -->
        <div class="nav-desktop-links" style="display:flex;align-items:center;gap:4px;">

          <a href="https://www.pairworkflows.com/index.html" class="nav-link${isActive('index')}">Courses</a>

          <!-- PROMPTS DROPDOWN -->
          <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" onclick="toggleNavDropdown()" id="navDropdownToggle">
              Prompts
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="nav-dropdown-menu" id="navDropdownMenu">
              <div class="nav-dropdown-label">By Role</div>
              <a href="https://www.pairworkflows.com/claude-prompts-excel.html">Excel &amp; Google Sheets</a>
              <a href="https://www.pairworkflows.com/claude-prompts-finance.html">Finance</a>
              <a href="https://www.pairworkflows.com/claude-prompts-hr.html">HR</a>
              <a href="https://www.pairworkflows.com/claude-prompts-marketing.html">Marketing</a>
              <a href="https://www.pairworkflows.com/claude-prompts-sales.html">Sales</a>
              <a href="https://www.pairworkflows.com/claude-prompts-customer-service.html">Customer Service</a>
              <a href="https://www.pairworkflows.com/claude-prompts-operations.html">Operations</a>
              <a href="https://www.pairworkflows.com/claude-prompts-legal.html">Legal</a>
              <div class="nav-dropdown-divider"></div>
              <div class="nav-dropdown-label">General</div>
              <a href="https://www.pairworkflows.com/prompt-library.html">General Prompt Library</a>
            </div>
          </div>

          <a href="https://www.pairworkflows.com/claude-vs-gemini.html" class="nav-link${isActive('claude-vs-gemini')}">Claude vs Gemini</a>
          <a href="https://www.pairworkflows.com/glossary.html" class="nav-link${isActive('glossary')}">Glossary</a>

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
        <div class="nav-mobile-label">Navigate</div>
        <a href="https://www.pairworkflows.com/index.html">All Courses</a>
        <a href="https://www.pairworkflows.com/claude-vs-gemini.html">Claude vs Gemini</a>
        <a href="https://www.pairworkflows.com/glossary.html">AI Glossary</a>
      </div>
      <div class="nav-mobile-section">
        <div class="nav-mobile-label">Prompts by Role</div>
        <a href="https://www.pairworkflows.com/claude-prompts-excel.html">Excel &amp; Google Sheets</a>
        <a href="https://www.pairworkflows.com/claude-prompts-finance.html">Finance</a>
        <a href="https://www.pairworkflows.com/claude-prompts-hr.html">HR</a>
        <a href="https://www.pairworkflows.com/claude-prompts-marketing.html">Marketing</a>
        <a href="https://www.pairworkflows.com/claude-prompts-sales.html">Sales</a>
        <a href="https://www.pairworkflows.com/claude-prompts-customer-service.html">Customer Service</a>
        <a href="https://www.pairworkflows.com/claude-prompts-operations.html">Operations</a>
        <a href="https://www.pairworkflows.com/claude-prompts-legal.html">Legal</a>
        <a href="https://www.pairworkflows.com/prompt-library.html">General Prompt Library</a>
      </div>
    </div>
  `;

  // INJECT NAVBAR
  var placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }

  // DROPDOWN TOGGLE
  window.toggleNavDropdown = function() {
    var toggle = document.getElementById('navDropdownToggle');
    var menu = document.getElementById('navDropdownMenu');
    if (!toggle || !menu) return;
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  };

  // MOBILE MENU TOGGLE
  window.toggleMobileMenu = function() {
    var menu = document.getElementById('navMobileMenu');
    var hamburger = document.getElementById('navHamburger');
    if (!menu || !hamburger) return;
    menu.classList.toggle('open');
    hamburger.innerHTML = menu.classList.contains('open')
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  };

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  document.addEventListener('click', function(e) {
    var dropdown = document.querySelector('.nav-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
      var toggle = document.getElementById('navDropdownToggle');
      var menu = document.getElementById('navDropdownMenu');
      if (toggle) toggle.classList.remove('open');
      if (menu) menu.classList.remove('open');
    }
  });

})();
