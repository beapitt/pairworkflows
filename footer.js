(function() {
  // Inject CSS fix for layout
  var style = document.createElement('style');
  style.textContent = '.course-wrap{max-width:1100px!important;margin:0 auto!important;padding:2rem 1rem!important;display:block!important}.course-shell{border-radius:16px!important;border:1px solid #e8ecef!important;overflow:hidden!important;display:grid!important;grid-template-columns:240px 1fr!important;margin:0!important;max-width:none!important}.section-hero{margin:0!important;border-radius:0!important}';
  document.head.appendChild(style);

  function renderFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    footer.style.cssText = 'background:#021a12; padding:2.5rem 1rem 1.5rem; margin-top:0';
    footer.innerHTML = `
<div style="max-width:1100px; margin:0 auto">
<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap:2.5rem; margin-bottom:2rem">
<div>
<strong style="display:block; font-size:13.5px; font-weight:600; color:#ffffff; margin-bottom:1rem; letter-spacing:0.5px">Guides by Role</strong>
<a href="https://www.pairworkflows.com/claude-for-finance.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Finance Teams</a>
<a href="https://www.pairworkflows.com/claude-for-hr.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for HR Teams</a>
<a href="https://www.pairworkflows.com/claude-for-marketing.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Marketing Teams</a>
<a href="https://www.pairworkflows.com/claude-for-legal.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Legal Teams</a>
<a href="https://www.pairworkflows.com/claude-for-operations.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Operations Teams</a>
<a href="https://www.pairworkflows.com/claude-for-sales.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Sales Teams</a>
<a href="https://www.pairworkflows.com/claude-for-customer-service.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Customer Service</a>
<a href="https://www.pairworkflows.com/ai-for-excel.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI for Excel</a>
</div>
<div>
<strong style="display:block; font-size:13.5px; font-weight:600; color:#ffffff; margin-bottom:1rem; letter-spacing:0.5px">Prompt Tools</strong>
<a href="https://www.pairworkflows.com/prompt-generator-excel.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Excel Prompt Generator</a>
<a href="https://www.pairworkflows.com/prompt-generator-finance.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Finance Prompt Generator</a>
<a href="https://www.pairworkflows.com/prompt-generator-hr.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">HR Prompt Generator</a>
<a href="https://www.pairworkflows.com/prompt-generator-marketing.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Marketing Prompt Generator</a>
<a href="https://www.pairworkflows.com/prompt-library.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">General Prompt Library</a>
</div>
<div>
<strong style="display:block; font-size:13.5px; font-weight:600; color:#ffffff; margin-bottom:1rem; letter-spacing:0.5px">Resources</strong>
<a href="https://www.pairworkflows.com/hr-workflow.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">HR Workflows</a>
<a href="https://www.pairworkflows.com/claude-workflows.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">All Claude Workflows</a>
<a href="https://www.pairworkflows.com/gemini-workflows.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">All Gemini Workflows</a>
<a href="https://www.pairworkflows.com/glossary.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">AI Glossary</a>
<a href="https://www.pairworkflows.com/claude-vs-gemini.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Claude vs Gemini</a>
</div>
<div>
<strong style="display:block; font-size:13.5px; font-weight:600; color:#ffffff; margin-bottom:1rem; letter-spacing:0.5px">Company &amp; Legal</strong>
<a href="https://www.pairworkflows.com/about.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">About</a>
<a href="https://www.pairworkflows.com/contact.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Contact</a>
<a href="https://www.pairworkflows.com/suggest-a-course.html" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Suggest a Guide</a>
<a href="https://www.pairworkflows.com/legal.html#privacy" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Privacy Policy</a>
<a href="https://www.pairworkflows.com/legal.html#terms" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Terms of Use</a>
<a href="https://www.pairworkflows.com/legal.html#cookies" style="display:block; font-size:14px; color:#94a3b8; text-decoration:none; margin-bottom:0.55rem">Cookie Policy</a>
</div>
</div>
<div style="text-align:center; margin-bottom:2rem">
<p style="font-size:13.5px; color:#64748b; line-height:1.55; max-width:520px; margin:0 auto">Free practical AI guides for Claude &amp; Gemini.<br>Built for real work. No ads, no paywalls.</p>
</div>
<div style="border-top:1px solid #0a4a30; padding-top:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem">
<span style="font-size:13px; color:#475569">&copy; 2026 <a href="https://www.pairworkflows.com" style="color:#1d9e75; text-decoration:none">PairWorkflows</a>. All rights reserved.</span>
<div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap">
<button onclick="copyLink()" id="copyLinkBtn" style="display:flex;align-items:center;gap:8px;height:40px;padding:0 16px;background:#1f2937;border:1px solid rgba(255,255,255,.1);border-radius:12px;color:#e5e7eb;font-size:12px;font-weight:500;font-family:'Inter',sans-serif;cursor:pointer;transition:all .2s" onmouseover="this.style.background='#374151'" onmouseout="this.style.background='#1f2937'">
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
  Copy link
</button>
<a href="https://www.trustpilot.com/review/pairworkflows.com" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:7px;height:40px;padding:0 14px;background:#1f2937;border:1px solid rgba(255,255,255,.1);border-radius:12px;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#374151'" onmouseout="this.style.background='#1f2937'">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
  <span style="font-size:12px;font-weight:500;color:#e5e7eb">Trustpilot</span><span style="color:#00b67a;font-size:13px">★★★★★</span>
</a>
<a href="#" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href),'_blank');return false" style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#1f2937;border:1px solid rgba(255,255,255,.1);border-radius:12px;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#0a66c2'" onmouseout="this.style.background='#1f2937'" title="Share on LinkedIn">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
</a>
<a href="#" onclick="window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(window.location.href),'_blank');return false" style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#1f2937;border:1px solid rgba(255,255,255,.1);border-radius:12px;text-decoration:none;transition:all .2s" onmouseover="this.style.background='#000'" onmouseout="this.style.background='#1f2937'" title="Share on X">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
</a>
</div>
</div>
</div>`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
