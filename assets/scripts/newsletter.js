/* ── Interest checkboxes ── */
document.querySelectorAll('.interest-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
  });
});

/* ── Frequency tabs ── */
document.querySelectorAll('.freq-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.freq-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ── Submit ── */
const submitBtn = document.getElementById('nl-submit');
const nlStatus  = document.getElementById('nl-status');

submitBtn.addEventListener('click', async () => {
  const name  = document.getElementById('nl-name').value.trim();
  const email = document.getElementById('nl-email').value.trim();

  if (!name) {
    nlStatus.textContent = 'Please enter your name.';
    nlStatus.className = 'err';
    return;
  }
  if (!email || !email.includes('@')) {
    nlStatus.textContent = 'Please enter a valid email address.';
    nlStatus.className = 'err';
    return;
  }

  const interests = [...document.querySelectorAll('.interest-item.checked')]
    .map(el => el.dataset.val).join(', ') || 'none selected';

  const frequency = document.querySelector('.freq-tab.active')?.dataset.freq || 'whenever';

  submitBtn.disabled = true;
  submitBtn.querySelector('span').textContent = 'Sending…';
  nlStatus.textContent = '';
  nlStatus.className = '';

  try {
    const res = await fetch('https://formspree.io/f/xvgbagja', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: 'Newsletter subscription',
        name,
        email,
        interests,
        frequency,
      }),
    });

    if (res.ok) {
      document.getElementById('form-wrap').style.display = 'none';
      document.getElementById('nl-success').classList.add('show');
    } else {
      throw new Error('Server error');
    }
  } catch {
    nlStatus.textContent = 'Something went wrong. Please try again.';
    nlStatus.className = 'err';
    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = 'Subscribe →';
  }
});