/*
  LeadCapture stub (see components/base/LeadCapture.astro for the payload shape).
  Validates the email, drops honeypot submissions, then either stores the payload in sessionStorage
  (stub, default) or POSTs JSON to the form's action when the form carries data-live.
*/
const STORE = 'lm-lead-capture';
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

document.querySelectorAll<HTMLFormElement>('[data-lead-capture] form').forEach((form) => {
  const wrap = form.closest<HTMLElement>('[data-lead-capture]')!;
  const email = form.querySelector<HTMLInputElement>('input[name="email"]')!;
  const error = form.querySelector<HTMLElement>('.capture__error');
  const success = wrap.querySelector<HTMLElement>('.capture__success');

  email.addEventListener('input', () => {
    if (email.getAttribute('aria-invalid') === 'true' && emailOk(email.value)) {
      email.removeAttribute('aria-invalid');
      if (error) error.textContent = '';
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (String(data.get('company') ?? '').trim()) return; // honeypot

    if (!emailOk(email.value)) {
      email.setAttribute('aria-invalid', 'true');
      if (error) error.textContent = 'Please enter an email address we can reach you on.';
      email.focus();
      return;
    }

    const consentText = form.querySelector('.capture__consent-text')?.textContent?.trim() ?? '';
    const payload = {
      list: form.dataset.list ?? 'newsletter',
      email: email.value.trim(),
      first_name: (String(data.get('first_name') ?? '').trim() || null) as string | null,
      marketing_consent: data.get('marketing_consent') === 'yes',
      consent_text: consentText,
      source_path: location.pathname,
      referrer: document.referrer || null,
      submitted_at: new Date().toISOString(),
    };

    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (button) button.disabled = true;

    try {
      if (form.hasAttribute('data-live')) {
        const res = await fetch(form.action, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        try {
          const saved = JSON.parse(sessionStorage.getItem(STORE) ?? '[]');
          saved.push(payload);
          sessionStorage.setItem(STORE, JSON.stringify(saved));
        } catch {
          /* storage can be unavailable in private windows; the success state still shows */
        }
      }
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus({ preventScroll: true });
      }
    } catch {
      if (error) error.textContent = 'That did not go through. Please try again in a moment.';
      if (button) button.disabled = false;
    }
  });
});
