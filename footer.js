(function() {
  function renderFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    footer.style.cssText = 'background:#fafafa; border-top:1px solid #f0f0f0; padding:2rem 1.5rem 1.25rem; margin-top:0;';
    footer.innerHTML = `
<div style="max-width:1100px; margin:0 auto">
  <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:1.5rem; margin-bottom:1.5rem">

    <div>
  <strong style="display:block; font-size:12px; font-weight:600; color:#374151; margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.6px">Excel Workflows</strong>
  <a href="https://www.pairworkflows.com/excel-workflows.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">All Excel Workflows</a>
  <a href="https://www.pairworkflows.com/excel-errors.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Fix Excel Errors</a>
  <a href="https://www.pairworkflows.com/excel-formulas.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Formulas &amp; Functions</a>
  <a href="https://www.pairworkflows.com/excel-finance-models.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Finance Models</a>
  <a href="https://www.pairworkflows.com/excel-data-cleaning.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Data Cleaning</a>
  <a href="https://www.pairworkflows.com/excel-reports.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Dynamic Reports</a>
</div>

    <div>
      <strong style="display:block; font-size:12px; font-weight:600; color:#374151; margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.6px">Prompt Tools</strong>
      <a href="https://www.pairworkflows.com/prompt-generator-excel.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Excel Prompt Builder</a>
      <a href="https://www.pairworkflows.com/prompt-generator-finance.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Finance Prompt Builder</a>
      <a href="https://www.pairworkflows.com/prompt-generator-hr.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">HR Prompt Builder</a>
      <a href="https://www.pairworkflows.com/prompt-generator-marketing.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Marketing Prompt Builder</a>
    </div>

    <div>
      <strong style="display:block; font-size:12px; font-weight:600; color:#374151; margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.6px">Company</strong>
      <a href="https://www.pairworkflows.com/about.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">About</a>
      <a href="https://www.pairworkflows.com/contact.html" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Contact</a>
      <a href="https://www.pairworkflows.com/legal.html#privacy" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Privacy Policy</a>
      <a href="https://www.pairworkflows.com/legal.html#terms" style="display:block; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:0.4rem; transition:color .15s" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#6b7280'">Terms of Use</a>
    </div>

  </div>

  <div style="border-top:1px solid #f0f0f0; padding-top:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem">
    <span style="font-size:13px; color:#9ca3af">&copy; 2026 <a href="https://www.pairworkflows.com" style="color:#6b7280; text-decoration:none">PairWorkflows</a>. All rights reserved.</span>
    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap">
      <a href="https://www.trustpilot.com/review/pairworkflows.com" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:6px;height:32px;padding:0 12px;background:transparent;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;font-size:12px;color:#6b7280;transition:border-color .15s" onmouseover="this.style.borderColor='#9ca3af'" onmouseout="this.style.borderColor='#e5e7eb'">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
        Trustpilot
      </a>
      <button onclick="copyLink()" id="copyLinkBtn" style="display:flex;align-items:center;gap:6px;height:32px;padding:0 12px;background:transparent;border:1px solid #e5e7eb;border-radius:8px;color:#6b7280;font-size:12px;font-weight:500;font-family:'Inter',sans-serif;cursor:pointer;transition:border-color .15s" onmouseover="this.style.borderColor='#9ca3af'" onmouseout="this.style.borderColor='#e5e7eb'">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
        Copy link
      </button>
      <a href="#" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href),'_blank');return false" style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;background:transparent;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;transition:border-color .15s" onmouseover="this.style.borderColor='#9ca3af'" onmouseout="this.style.borderColor='#e5e7eb'" title="Share on LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#6b7280" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
      </a>
      <a href="#" onclick="window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(window.location.href),'_blank');return false" style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;background:transparent;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;transition:border-color .15s" onmouseover="this.style.borderColor='#9ca3af'" onmouseout="this.style.borderColor='#e5e7eb'" title="Share on X">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#6b7280" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
    </div>
  </div>

</div>`;

    // copyLink function
    if (!window.copyLink) {
      window.copyLink = function() {
        navigator.clipboard.writeText(window.location.href).then(function() {
          var btn = document.getElementById('copyLinkBtn');
          if (btn) {
            btn.textContent = 'Copied!';
            setTimeout(function() {
              btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg> Copy link';
            }, 2000);
          }
        });
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
