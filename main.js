/* ── TAILWIND CONFIG ────────────────────────────────────── */
/* NOTE: This must run before Tailwind processes classes.    */
/* It is loaded via a <script> tag before tailwind.js in    */
/* index.html so that Tailwind picks up the custom config.  */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        mono:    ['"DM Mono"', 'monospace'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        accent: '#E8621A',
      }
    }
  }
};

/* ── DARK MODE TOGGLE ───────────────────────────────────── */
(function initTheme() {
  const html = document.documentElement;
  if (
    localStorage.theme === 'dark' ||
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    html.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.getElementById('themeToggle');
  const label  = document.getElementById('themeLabel');
  const html   = document.documentElement;
  const yearNow = document.getElementById('yearNow');

  // Set copyright year to current year
  const currentYear = new Date().getFullYear();
  yearNow.innerText = currentYear;

  // Set label to reflect current state on load
  label.textContent = html.classList.contains('dark') ? 'dark' : 'light';

  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.theme   = isDark ? 'dark' : 'light';
    label.textContent    = isDark ? 'dark' : 'light';
  });

  /* ── FORMSPREE CONTACT FORM ───────────────────────────── */
  /*
    HOW TO ACTIVATE:
    1. Go to https://formspree.io and sign up (free plan = 50 submissions/month)
    2. Create a new form — Formspree will give you an endpoint like:
        https://formspree.io/f/xabc1234
    3. Replace YOUR_FORM_ID below with your ID (just the part after /f/)
  */
  const FORMSPREE_ID = 'YOUR_FORM_ID'; // ← replace this

  const submitBtn   = document.getElementById('submitBtn');
  const btnText     = document.getElementById('btnText');
  const btnSpinner  = document.getElementById('btnSpinner');
  const formFields  = document.getElementById('formFields');
  const formSuccess = document.getElementById('formSuccess');
  const formError   = document.getElementById('formError');
  const resetBtn    = document.getElementById('resetForm');

  submitBtn.addEventListener('click', async () => {
    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    // Basic validation — highlight empty fields
    let valid = true;
    ['cf-name', 'cf-email', 'cf-message'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.classList.add('border-red-400');
        valid = false;
      }
    });
    if (!valid) return;

    // Loading state
    submitBtn.disabled      = true;
    btnText.textContent     = 'Sending…';
    btnSpinner.classList.remove('hidden');
    formError.classList.add('hidden');

    try {
      const res = await fetch(`https://formspree.io/f/xaqppnkr`, {
        method:  'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        formFields.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        formSuccess.classList.add('flex');
      } else {
        throw new Error('Non-OK response');
      }
    } catch {
      formError.classList.remove('hidden');
      btnText.textContent = 'Send message →';
      btnSpinner.classList.add('hidden');
      submitBtn.disabled  = false;
    }
  });

  // Clear red borders when the user starts typing
  ['cf-name', 'cf-email', 'cf-message'].forEach(id => {
    document.getElementById(id).addEventListener('input', function () {
      this.classList.remove('border-red-400');
    });
  });

  // Reset form back to empty state
  resetBtn.addEventListener('click', () => {
    ['cf-name', 'cf-email', 'cf-message'].forEach(id => {
      document.getElementById(id).value = '';
    });
    formSuccess.classList.add('hidden');
    formSuccess.classList.remove('flex');
    formFields.classList.remove('hidden');
    btnText.textContent = 'Send message →';
    submitBtn.disabled  = false;
  });

});
