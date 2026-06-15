/* ════════════════════════════════════════════════════
   PORTFOLIO WEBXP · main.js
   ════════════════════════════════════════════════════ */

// ── TYPEWRITER ────────────────────────────────────────
const lines = [
  "Hi! I'm a CS undergrad who builds AI-powered systems and backend APIs.",
  "I turn satellite images into forest maps, screens into AI summaries,",
  "and ideas into working products. Want to see my work?"
];

let lineIdx = 0, charIdx = 0;
const el = document.getElementById('typewriter');

function typeNext() {
  if (!el) return;
  const line = lines[lineIdx];
  if (charIdx < line.length) {
    el.textContent += line[charIdx++];
    setTimeout(typeNext, 28);
  } else if (lineIdx < lines.length - 1) {
    setTimeout(() => {
      el.textContent += ' ';
      lineIdx++;
      charIdx = 0;
      typeNext();
    }, 600);
  }
}
setTimeout(typeNext, 800);

// ── HUD NAV scroll style ──────────────────────────────
const nav = document.getElementById('hud-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── SCROLL REVEAL ────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.about-card, .skill-category, .project-card, .cert-card, .contact-link, .contact-form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── SPRITE WALK ON HOVER ─────────────────────────────
const sprite = document.getElementById('sprite');
if (sprite) {
  sprite.addEventListener('mouseenter', () => {
    sprite.style.animationPlayState = 'running';
  });
}

// ── CONTACT FORM ─────────────────────────────────────
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const name = form.elements.name?.value.trim();
    const email = form.elements.email?.value.trim();
    const message = form.elements.message?.value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = 'PLEASE FILL OUT EVERY FIELD BEFORE TRANSMITTING.';
      formMsg.className = 'form-msg error';
      return;
    }

    btn.textContent = 'TRANSMITTING...';
    btn.disabled = true;

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message
    ].join('\n'));
    const mailto = `mailto:roobika_23csb21@kgkite.ac.in?subject=${subject}&body=${body}`;

    formMsg.textContent = 'OPENING YOUR EMAIL APP...';
    formMsg.className = 'form-msg success';
    window.location.href = mailto;

    setTimeout(() => {
      btn.textContent = 'TRANSMIT ▶';
      btn.disabled = false;
      form.reset();
    }, 800);
  });
}

// ── PIXEL GLITCH ON NAME HOVER ───────────────────────
const heroName = document.querySelector('.hero-name');
if (heroName) {
  heroName.addEventListener('mouseenter', () => {
    heroName.style.animation = 'glitch 0.4s steps(2) 2';
  });
  heroName.addEventListener('animationend', () => {
    heroName.style.animation = '';
  });
}

// ── ACTIVE NAV LINK ───────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.hud-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--accent)';
      a.style.textShadow = '0 0 8px var(--accent)';
    } else {
      a.style.textShadow = '';
    }
  });
}, { passive: true });
