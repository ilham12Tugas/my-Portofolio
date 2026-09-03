import { Home, User, History, Code2, FolderKanban, Mail } from "lucide-react";

/* =====================================================================
   CONTENT DATA — semua konten terpusat di sini
===================================================================== */
const DATA = {
  brand: "The Space Lab",
  name: "ILHAM RAMDAN",
  role: "Frontend Developer",
  typingWords: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind",
    "Bootstrap",
  ],
  whatsappNumber: "082121577001",

  navItems: [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "timeline", label: "Timeline", icon: History },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "projects", label: "Project", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
  ],

  stats: [
    { value: "5+", label: "Project" },
    { value: "6+", label: "Framework" },
    { value: "2Y+", label: "Experience" },
  ],

  /* ikon sosial pakai logo asli (react-icons) lewat BrandIcon, key harus cocok dgn brandIcons.js */
  socials: [
    { key: "github", url: "https://github.com/ilham12Tugas" },
    { key: "linkedin", url: "#" },
    {
      key: "instagram",
      url: "https://www.instagram.com/ilhamr985?igsh=MXFtMnFrYWVmcDIyaQ==",
    },
    {
      key: "tiktok",
      url: "https://www.tiktok.com/@ilham_aja.1?_r=1&_t=ZS-96Aa0samybY",
    },
    { key: "facebook", url: "#" },
  ],

  about: {
    photo: "/images/profile.jpg",
    bio: `Saya adalah seorang pengembang yang percaya bahwa teknologi harus terasa "manusiawi". Dengan latar belakang di Informatika dan seni digital, saya menjembatani kesenjangan antara fungsi teknis yang rumit dan estetika visual.`,
    value: `Saya tidak hanya membangun aplikasi; saya membangun solusi yang scalable, aman, dan memanjakan mata pengguna, yang terbukti meningkatkan retensi user hingga 40%.`,
  },

  timeline: [
    {
      slug: "timeline-roblox",
      year: "2026",
      side: "right",
      badge: "LATEST",
      title: "Roblox Games & Interactive Web",
      desc: "Mengembangkan ekosistem game di Roblox dan terus bereksperimen dengan UI futuristik serta sistem animasi web yang kompleks.",
      images: [
        {
          src: "/images/timeline/roblox-1.jpg",
          label: "ROBLOX ECOSYSTEM",
          variant: 1,
        },
        {
          src: "/images/timeline/roblox-2.jpg",
          label: "UI FUTURISTIK",
          variant: 2,
        },
        {
          src: "/images/timeline/roblox-3.jpg",
          label: "WEB ANIMATION",
          variant: 3,
        },
      ],
    },
    {
      slug: "timeline Peta Wilayah",
      year: "2026",
      side: "left",
      title: "Pembuatan Peta Wilayah Dengan Qgis",
      desc: "Fokus pada proyek AI berbasis Python untuk analisis atlet dan visualisasi data tanaman bunga matahari dengan layout interaktif.",
      images: [
        { src: "/images/timeline/ai-1.jpg", label: "Peta Administrasi Wilayah", variant: 2 },
        { src: "/images/timeline/ai-2.jpg", label: "ATHLETE DATA", variant: 3 },
        {
          src: "/images/timeline/ai-3.jpg",
          label: "SUNFLOWER VIZ",
          variant: 1,
        },
      ],
    },
    {
      slug: "timeline-iot",
      year: "2024",
      side: "right",
      title: "IoT Fish Feeding Automation",
      desc: "Membangun sistem otomasi pemberi makan ikan berbasis IoT menggunakan protokol MQTT untuk kebutuhan riset akademik.",
      images: [
        { src: "/images/timeline/iot-1.jpg", label: "IOT SYSTEM", variant: 3 },
        {
          src: "/images/timeline/iot-2.jpg",
          label: "MQTT PROTOCOL",
          variant: 1,
        },
        { src: "/images/timeline/iot-3.jpg", label: "AUTO FEEDER", variant: 2 },
      ],
    },
    {
      slug: "timeline-cisco",
      year: "2023",
      side: "left",
      title: "Cisco Networking & Web Basics",
      desc: "Mulai mempelajari jaringan komputer dengan Cisco Packet Tracer dan membangun fondasi kuat dalam HTML, CSS, dan JavaScript.",
      images: [
        {
          src: "/images/timeline/cisco-1.jpg",
          label: "PACKET TRACER",
          variant: 1,
        },
        {
          src: "/images/timeline/cisco-2.jpg",
          label: "NETWORK BASICS",
          variant: 2,
        },
        {
          src: "/images/timeline/cisco-3.jpg",
          label: "WEB FOUNDATIONS",
          variant: 3,
        },
      ],
    },
  ],

  skills: {
    hard: [
      { name: "HTML", pct: 90 },
      { name: "CSS", pct: 90 },
      { name: "JavaScript", pct: 80 },
    ],
    framework: [
      { name: "React JS", pct: 80 },
      { name: "Bootstrap", pct: 80 },
      { name: "Tailwind", pct: 80 },
    ],
    soft: [
      "Kepemimpinan Tim",
      "Komunikasi Klien",
      "Problem Solving",
      "Manajemen Waktu",
      "Adaptasi Cepat",
      "Kerja Tim",
    ],
    tools: ["VS Code", "Git & GitHub", "Figma", "Postman", "Firebase", "MySQL"],
  },

  projects: [
    {
      slug: "project-pos",
      art: "LOCALES PRO",
      cover: "/images/projects/loginlcs.png",
      meta: "Frontend Dev • 2026",
      title: "Sistem Poin Of Sale",
      role: "Peran: Lead, Frontend Dev & Backend Dev",
      description:
        "Sistem POS end-to-end untuk retail lokal, mencakup manajemen produk, transaksi kasir real-time, dan laporan penjualan harian.",
      tech: ["HTML, CSS & JavaScript", "React JS & PHP Laravel", "MySQL"],
      images: [
        {
          src: "/images/projects/loginlcs.png",
          label: "LOCALES PRO",
          variant: 1,
        },
        {
          src: "/images/projects/dsadmin.png",
          label: "REACT + LARAVEL",
          variant: 2,
        },
        {
          src: "/images/projects/dskasir.png",
          label: "MYSQL BACKEND",
          variant: 3,
        },
      ],
    },
    {
      slug: "project-energy",
      art: "ENERGY MONITOR",
      cover: "/images/projects/loginlcs.png",
      meta: "IoT Web App • 2025",
      title: "Dashboard Monitoring Energi",
      role: "Peran: Frontend Architect",
      description:
        "Dashboard real-time untuk memantau konsumsi energi berbasis IoT, lengkap dengan grafik historis dan notifikasi ambang batas.",
      tech: ["Vue.js", "D3.js", "Firebase"],
      images: [
        {
          src: "/images/projects/loginlcs.png",
          label: "ENERGY MONITOR",
          variant: 2,
        },
        { src: "/images/projects/dsadmin.png", label: "VUE + D3", variant: 3 },
        {
          src: "/images/projects/dskasir.png",
          label: "FIREBASE SYNC",
          variant: 1,
        },
      ],
    },
    {
      slug: "project-boba",
      art: "LOCALES POS",
      cover: "/images/projects/loginlcs.png",
      meta: "Web App • 2026",
      title: "Locales Boba Tea POS",
      role: "Peran: Fullstack Developer",
      description:
        "Aplikasi kasir untuk gerai minuman boba dengan alur pemesanan cepat dan manajemen stok bahan baku.",
      tech: ["React", "PHP", "CSS"],
      images: [
        {
          src: "/images/projects/loginlcs.png",
          label: "LOCALES POS",
          variant: 3,
        },
        { src: "/images/projects/dsadmin.png", label: "REACT UI", variant: 1 },
        { src: "/images/projects/dskasir.png", label: "PHP API", variant: 2 },
      ],
    },
  ],

  contactMethods: [
    { key: "email", label: "Email", url: "mailto:ilhamramdas335@gmail.com" },
    { key: "github", label: "Github", url: "https://github.com/ilham12Tugas" },
    { key: "linkedin", label: "LinkedIn", url: "#" },
    {
      key: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/ilhamr985?igsh=MXFtMnFrYWVmcDIyaQ==",
    },
    {
      key: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@ilham_aja.1?_r=1&_t=ZS-96Aa0samybY",
    },
    { key: "facebook", label: "Facebook", url: "#" },
  ],
};

export default DATA;
