# 🎮 Portfolio WebXP — Roobika M

A pixel-art RPG themed developer portfolio. No frameworks, no build step — pure HTML, CSS, and JS.

## 📁 Project Structure

```
portfolio/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles (pixel art, animations, layout)
├── js/
│   └── main.js         ← Typewriter, scroll reveal, form, nav
├── assets/             ← Drop your images/icons/resume PDF here
└── README.md
```

## 🚀 How to Run

Just open `index.html` in any browser. No build tools needed.

For local development with live reload:
```bash
npx live-server
# or
python3 -m http.server 8080
```

## ✏️ Customization

### Update Links
In `index.html`, search and replace:
- `https://github.com/roobika-m` → your real GitHub URL
- `https://leetcode.com/roobika` → your real LeetCode URL
- `roobika23csb21@kgkite.ac.in` → your email

### Add Resume Download
Place your resume PDF in `assets/resume.pdf`, then add to the hero buttons:
```html
<a href="assets/resume.pdf" download class="pixel-btn btn-ghost">
  <span>📄 RESUME</span>
</a>
```

### Add Project GitHub Links
Each project card has a `VIEW CODE ▶` button. Update the `href` with the specific repo URL.

### Connect the Contact Form
Replace the `setTimeout` in `js/main.js` with a real handler:

**Using Formspree (free):**
1. Sign up at formspree.io
2. Create a form and get your endpoint
3. Replace the form tag:
```html
<form class="contact-form pixel-card" action="https://formspree.io/f/YOUR_ID" method="POST">
```
And remove the JS form override in `main.js`.

**Using EmailJS:**
```js
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
  name: formData.name,
  email: formData.email,
  message: formData.message
});
```

## 🎨 Theme Colors

| Token         | Hex       | Usage                  |
|---------------|-----------|------------------------|
| `--bg-dark`   | `#0f0d18` | Page background        |
| `--bg-alt`    | `#15122a` | Alternate sections     |
| `--bg-card`   | `#1e1a35` | Card backgrounds       |
| `--accent`    | `#a78bfa` | Primary purple glow    |
| `--accent2`   | `#60a5fa` | Blue highlights        |
| `--accent3`   | `#f472b6` | Pink accents           |

## 🌐 Deployment

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Portfolio WebXP"
git remote add origin https://github.com/YOUR_USERNAME/portfolio
git push -u origin main
# Enable GitHub Pages in Settings → Pages → main branch
```

**Netlify:**
Drag and drop the `portfolio/` folder at netlify.com/drop

**Vercel:**
```bash
npx vercel
```
