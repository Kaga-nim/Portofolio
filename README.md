# 🌐 Portfolio — Habib Abdul Ghani

<div align="center">

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap%205-7952B3?logo=bootstrap&logoColor=white)
![GoatCounter](https://img.shields.io/badge/Analytics-GoatCounter-3AAA35?logo=data:image/svg+xml;base64,)
![License](https://img.shields.io/badge/Template-BootstrapMade-blue)

**Personal portfolio of Habib Abdul Ghani — Guru DKV · Python Programmer · AI Enthusiast**

[🚀 Live Demo](https://habibabdulghani.vercel.app/) · [📊 Visitor Stats](https://habibabdulghani.vercel.app/visitor.html) · [👤 GitHub](https://github.com/Kaga-nim)

</div>

---

## 📸 Preview

> A modern, responsive portfolio featuring real-time visitor analytics, an interactive Semester 4 file explorer, GitHub activity integration, and a planned admin panel for dynamic content management.

---

## ✨ Features

### Core
- **Responsive Design** — seamlessly adapts to mobile, tablet, and desktop
- **Animated Sections** — smooth scroll animations via AOS library
- **Dark Background Theme** — professional, modern aesthetic
- **SEO Optimized** — meta tags, Open Graph, Twitter Cards, sitemap
- **Fast Loading** — lazy-loaded images, optimized assets

### Analytics & Tracking
- **Visitor Badge** — real-time counter displayed in the hero section; links to dedicated stats page
- **GoatCounter Integration** — open-source, privacy-friendly analytics (no cookies, no GDPR hassle)
- **CounterAPI** — lightweight total-visit counter, zero config
- **Dedicated Stats Page** (`/visitor.html`) — traffic overview with GoatCounter public dashboard embed

### Semester 4 File Explorer (`/semester4/`)
- **Windows File Explorer UI** — familiar tree sidebar, breadcrumb address bar, column file listing
- **All File Types** — PDF, PPTX, DOCX, PHP, SQL, PKT, and more — mirroring the actual OneDrive folder structure
- **Download All ZIP** — one-click ZIP download per mata kuliah
- **Active mata kuliah:** Cloud Computing (more coming soon)

### GitHub Integration
- **GitHub Contribution Calendar** — live activity graph from ghchart.rshah.org
- **GitHub Stats Card** — stars, commits, PRs, and more via github-readme-stats
- **Direct Profile Link** — quick-access button to [@Kaga-nim](https://github.com/Kaga-nim)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 5 |
| Scripting | Vanilla JavaScript |
| Animations | AOS (Animate On Scroll) |
| Icons | Bootstrap Icons |
| Lightbox | GLightbox |
| Carousel | Swiper |
| Counters | PureCounter |
| Analytics | GoatCounter + CounterAPI |
| Hosting | Vercel |
| Version Control | GitHub |

---

## 📁 Project Structure

```
portofolio/
├── assets/
│   ├── css/               # Main stylesheet
│   ├── img/               # Profile, portfolio, and icon images
│   ├── docs/              # CV and downloadable documents
│   └── vendor/            # Third-party libraries
├── semester4/
│   ├── cloud-computing/           # All Cloud Computing course files
│   ├── cloud-computing.html       # File Explorer page — Cloud Computing
│   ├── cloud-computing-semester4.zip
│   └── [more mata kuliah coming soon]
├── forms/                 # Form templates
├── index.html             # Main portfolio page
├── visitor.html           # Visitor analytics dashboard
├── portfolio-details.html
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 🗺️ Roadmap

### ✅ Done
- [x] Portfolio homepage with animated sections
- [x] Semester 4 file explorer — Cloud Computing
- [x] Visitor badge in hero section (real-time counter)
- [x] Visitor stats page (`/visitor.html`) with GoatCounter embed
- [x] GitHub contribution graph & stats card section
- [x] Download All ZIP per mata kuliah

### 🔄 In Progress
- [ ] Semester 4 file explorer — Basis Data I
- [ ] Semester 4 file explorer — Pemrograman Web
- [ ] Semester 4 file explorer — remaining 5 mata kuliah

### 🧭 Planned
- [ ] **Admin Panel** — private, login-protected dashboard styled as a Windows File Explorer
  - Drag-and-drop file management (add/remove shareable files per mata kuliah)
  - Toggle visibility of individual files without touching code
  - Session-based login for single-user access
  - Mirrors the public file explorer UI for familiarity
- [ ] **Dynamic Portfolio** — connect admin panel to a lightweight backend (PHP/Node.js/Supabase) to manage content without redeploying
- [ ] **Real-time Visitor Dashboard** — replace GoatCounter iframe with a custom-built analytics view using the GoatCounter API
- [ ] **Dark/Light Mode Toggle** — user-switchable theme preference
- [ ] **Multi-language Support** — Indonesian and English
- [ ] **Progressive Web App (PWA)** — installable, offline-capable

---

## 🚀 How to Run Locally

```bash
# Option 1: Python
python -m http.server 8000
# Then open http://localhost:8000

# Option 2: Node.js
npx serve .

# Option 3: VS Code Live Server
# Right-click index.html → Open with Live Server
```

---

## 🚢 Deployment

### Vercel (recommended — current)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Select branch (`main`)
3. Live at `https://kaga-nim.github.io/portofolio/`

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📊 Visitor Analytics

This portfolio uses **GoatCounter** for privacy-friendly, open-source analytics.

- No cookies · No personal data collected · GDPR-compliant by design
- Public stats: [habibabdulghani.goatcounter.com](https://habibabdulghani.goatcounter.com/)
- Stats page: [habibabdulghani.vercel.app/visitor.html](https://habibabdulghani.vercel.app/visitor.html)

---

## 👤 Author

<div align="center">

**Habib Abdul Ghani** · [@Kaga-nim](https://github.com/Kaga-nim)

[![GitHub followers](https://img.shields.io/github/followers/Kaga-nim?label=Follow%20%40Kaga-nim&style=social)](https://github.com/Kaga-nim)

| | |
|---|---|
| 🐙 GitHub | [@Kaga-nim](https://github.com/Kaga-nim) |
| 💼 LinkedIn | [habibabdulghani01](https://www.linkedin.com/in/habibabdulghani01) |
| 📧 Email | ab.ghanie123@gmail.com |

</div>

---

## 🙏 Acknowledgments

- [BootstrapMade](https://bootstrapmade.com/) — iPortfolio template
- [Bootstrap](https://getbootstrap.com/) — CSS framework
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [GoatCounter](https://www.goatcounter.com/) — privacy-friendly analytics
- [CounterAPI](https://counterapi.dev/) — lightweight hit counter
- [ghchart.rshah.org](https://ghchart.rshah.org/) — GitHub contribution calendar embed
- [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) — GitHub stats card

---

<div align="center">

Made with ❤️ by **Habib Abdul Ghani** · [habibabdulghani.vercel.app](https://habibabdulghani.vercel.app/)

⭐ Star this repo if you find it useful!

</div>
