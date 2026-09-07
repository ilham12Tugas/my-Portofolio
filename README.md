# PORTOFOLIO

Portofolio React — tema Retro Futuristic / Pixel Art / Space / Gaming Tech / Neon Digital.

## Struktur Project

```
PORTOFOLIO/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # entry point
    ├── App.jsx                # merangkai semua section
    ├── data/
    │   └── siteData.js        # SEMUA konten (nama, timeline, skills, projects, dll) terpusat di sini
    ├── icons/
    │   ├── pixelPatterns.js   # pola grid pixel 8-bit untuk tiap ikon
    │   ├── PixelIcon.jsx      # renderer SVG dari pola pixel
    │   ├── PlanetIcon.jsx
    │   └── PixelBadge.jsx     # badge monogram untuk ikon sosial media
    ├── hooks/
    │   ├── useTypingEffect.js
    │   ├── useScrollSpy.js
    │   ├── useReveal.js
    │   ├── useSkillBars.js
    │   └── useTilt.js
    ├── components/
    │   ├── Nav.jsx
    │   ├── BottomNav.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Timeline.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        └── global.css          # semua styling tema (warna, font, efek neon/pixel)
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Build untuk produksi:

```bash
npm run build
npm run preview
```

## Mengubah Konten

Semua teks (nama, timeline, skills, project, kontak) ada di satu file:
`src/data/siteData.js`

## Tema

- Warna: Navy Dark `#071A45`, Dark Blue `#0D2D63`, Blue `#1677D2`, Neon Blue `#35B8FF`, Yellow `#FFC400`, Light Yellow `#FFD83D`, Pink `#FF8FC7`.
- Font: Heading `Press Start 2P`, Body `Poppins`.
- Ikon: semua custom SVG pixel-grid (tanpa emoji), didefinisikan di `src/icons/pixelPatterns.js`.
