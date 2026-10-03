import { LinkItem, CommunityGroup, FaqItem } from '@/types';

export const OFFICIAL_LINKS: LinkItem[] = [
  {
    id: 'main-portal',
    title: 'Portal Web Utama STUDYGRUP',
    category: 'portal',
    url: 'https://studygrupmahasiswa.org',
    badge: 'Domain Resmi Utama',
    status: 'online',
    serverLocation: 'Singapore Core (Fast Route)',
    latencyMs: 18,
    description: 'Akses penuh ke dashboard mahasiswa, materi kuliah, bank soal, jadwal belajar bareng, dan live room.',
    isRecommended: true,
  },
  {
    id: 'mirror-cloudflare',
    title: 'Mirror Cloudflare Edge Direct',
    category: 'mirror',
    url: 'https://sgm-direct.pages.dev',
    badge: 'Anti-Blokir ISP',
    status: 'online',
    serverLocation: 'Global Edge CDN (Anycast)',
    latencyMs: 22,
    description: 'Jalur alternatif berkecepatan tinggi tanpa batasan DNS provider internet kampus & seluler.',
    isRecommended: true,
  },
  {
    id: 'mirror-jakarta',
    title: 'Mirror Server Indonesia (IDC)',
    category: 'mirror',
    url: 'https://studygrup.id',
    badge: 'Latency Terendah',
    status: 'online',
    serverLocation: 'Jakarta Cyber Building (IIX)',
    latencyMs: 14,
    description: 'Server lokal Indonesia dengan throughput optimal untuk streaming video kelas & download modul cepat.',
  },
  {
    id: 'mirror-backup',
    title: 'Mirror Cadangan Siaga (Tokyo Node)',
    category: 'mirror',
    url: 'https://app.sgm-info.link',
    badge: 'Failover Server',
    status: 'online',
    serverLocation: 'Tokyo Node 02',
    latencyMs: 46,
    description: 'Server cadangan otomatis aktif jika server utama mengalami lonjakan traffic atau maintenance berkala.',
  },
  {
    id: 'web-pwa',
    title: 'SGM Web Apps (PWA Mobile & Desktop)',
    category: 'app',
    url: 'https://apps.studygrupmahasiswa.org',
    badge: 'Bisa Diinstall',
    status: 'online',
    serverLocation: 'Multi-Region High Availability',
    latencyMs: 25,
    description: 'Aplikasi web progresif ringan tanpa perlu unduh file berat. Akses instan di smartphone Android/iOS & Laptop.',
  },
  {
    id: 'academic-bot',
    title: 'Portal Bot Riset & Perpustakaan Digital',
    category: 'tool',
    url: 'https://library.studygrupmahasiswa.org',
    badge: 'E-Perpus & Jurnal',
    status: 'online',
    serverLocation: 'Cloudflare Workers Edge',
    latencyMs: 28,
    description: 'Pencarian jurnal open access, DOI resolver, format sitasi otomatis (APA/IEEE/Harvard), dan kalkulator statistik.',
  },
];

export const COMMUNITY_GROUPS: CommunityGroup[] = [
  {
    id: 'wa-saintek',
    name: 'WhatsApp Study Lounge #1 (Saintek & IT)',
    platform: 'whatsapp',
    members: '994',
    maxMembers: '1024',
    topic: 'Kalkulus, Pemrograman, Teknik, Fisika, Data Science',
    link: 'https://chat.whatsapp.com/invite/studygrup-saintek',
    badge: 'Hampir Penuh',
    activeNow: '142 online',
  },
  {
    id: 'wa-soshum',
    name: 'WhatsApp Study Lounge #2 (Soshum & Bisnis)',
    platform: 'whatsapp',
    members: '942',
    maxMembers: '1024',
    topic: 'Manajemen, Akuntansi, Hukum, Hubungan Internasional, Psikologi',
    link: 'https://chat.whatsapp.com/invite/studygrup-soshum',
    badge: 'Terbuka',
    activeNow: '98 online',
  },
  {
    id: 'wa-medis',
    name: 'WhatsApp Study Lounge #3 (Kesehatan & Farmasi)',
    platform: 'whatsapp',
    members: '880',
    maxMembers: '1024',
    topic: 'Kedokteran, Keperawatan, Farmakologi, Gizi, Kesehatan Masyarakat',
    link: 'https://chat.whatsapp.com/invite/studygrup-medis',
    badge: 'Terbuka',
    activeNow: '76 online',
  },
  {
    id: 'telegram-channel',
    name: 'Telegram Channel Resmi STUDYGRUP MAHASISWA',
    platform: 'telegram',
    members: '26.850+',
    topic: 'Update Link Cepat, Pengumuman Beasiswa, Bank E-Book, Info Lomba Kampus',
    link: 'https://t.me/studygrupmahasiswa_official',
    badge: 'Channel Utama',
    activeNow: 'Update Tiap Hari',
  },
  {
    id: 'discord-lounge',
    name: 'Discord Mahasiswa Indonesia 24/7',
    platform: 'discord',
    members: '14.200+',
    topic: 'Voice Study Room, Pomodoro Tracker, Coding Lounge, Bantuan Skripsi',
    link: 'https://discord.gg/studygrupmahasiswa',
    badge: 'Voice 24 Jam',
    activeNow: '380+ di Voice Room',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Mengapa STUDYGRUPMAHASISWA menyediakan banyak link mirror?',
    answer:
      'Karena beberapa penyedia layanan internet (ISP) atau WiFi kampus terkadang membatasi akses DNS secara otomatis. Mirror link disediakan agar mahasiswa tetap dapat membuka materi, ruang belajar, dan aplikasi tanpa terganggu kapan saja dan dari mana saja.',
  },
  {
    question: 'Apakah semua link dan aplikasi di portal ini aman dan resmi?',
    answer:
      'Ya, 100% aman dan terenkripsi menggunakan protokol HTTPS dengan sertifikat SSL terverifikasi. Kami secara berkala memantau integritas setiap domain mirror agar mahasiswa bebas dari tautan phishing atau penipuan.',
  },
  {
    question: 'Bagaimana cara bergabung ke grup WhatsApp yang sudah penuh?',
    answer:
      'Jika grup WhatsApp mencapai batas kuota (1024 anggota), bot kami akan otomatis membuka link grup batch berikutnya, atau kamu dapat bergabung ke Discord dan Telegram kami yang tidak memiliki batas kapasitas anggota.',
  },
  {
    question: 'Bagaimana jika link utama tidak bisa dibuka di WiFi kampus?',
    answer:
      'Cukup klik "Salin Link" atau buka "Mirror Cloudflare Edge Direct" atau "Mirror Server Indonesia". Alternatif lain adalah mengaktifkan DNS Pribadi 1.1.1.1 (Cloudflare WARP) di ponsel atau laptop kamu sesuai panduan di bawah.',
  },
  {
    question: 'Apakah penggunaan aplikasi dan layanan STUDYGRUPMAHASISWA gratis?',
    answer:
      'Seluruh portal update link, materi komunitas, grup WhatsApp, Discord, dan web apps dapat diakses secara gratis oleh seluruh mahasiswa di Indonesia untuk mendukung pemerataan pendidikan.',
  },
];
