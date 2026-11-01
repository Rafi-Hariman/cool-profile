// Marketing homepage content: copy, navigation, services, packages, and FAQ.
// Everything here is either a factual description of the service or a
// configurable value. No prices, customer counts, ratings, testimonials, or
// delivery guarantees are invented.

export const business = {
  // Commercial service brand (Rahesa) — distinct from the professional
  // identity (Rafi Hariman) which lives in data/person.ts.
  brand: "Rahesa",
  brandDisplayName: "RAHESA",
  brandDescriptor: "DIGITAL SYSTEMS",
  formalName: "Rahesa Digital Systems",
  serviceDescriptor: "Sistem & Aplikasi Custom",
  location: "Yogyakarta, Indonesia",
  description:
    "Jasa pembuatan sistem untuk bisnis, organisasi, pendidikan, penelitian, dan kebutuhan personal.",
  logoPath: "/brand/rahesa-logo.png",
  iconPath: "/brand/rahesa-icon-cropped.png",
} as const;

export const marketingNav = [
  { href: "#beranda", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#paket", label: "Paket" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#faq", label: "FAQ" },
  { href: "/articles", label: "Blog" },
  { href: "/profile", label: "Profil" },
] as const;

export const heroBenefits = [
  "Sesuai kebutuhan",
  "Responsive",
  "Support",
  "Bisa dikembangkan",
] as const;

export interface Problem {
  id: string;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    id: "manual",
    title: "Proses masih manual",
    description:
      "Pencatatan, rekap, atau pengecekan masih dilakukan berulang.",
  },
  {
    id: "data",
    title: "Data sulit dikelola",
    description:
      "Informasi tersebar di spreadsheet, chat, atau dokumen berbeda.",
  },
  {
    id: "belum-ada",
    title: "Belum punya sistem",
    description:
      "Kebutuhan sudah ada, tetapi belum menjadi aplikasi yang dapat digunakan.",
  },
  {
    id: "pengembangan",
    title: "Sistem perlu dikembangkan",
    description:
      "Aplikasi lama membutuhkan fitur, integrasi, atau tampilan baru.",
  },
];

export interface SolutionBenefit {
  title: string;
  description: string;
}

export const solutionBenefits: SolutionBenefit[] = [
  {
    title: "Data lebih teratur",
    description: "Informasi tersimpan di satu tempat dan mudah dicari.",
  },
  {
    title: "Proses lebih praktis",
    description: "Alur kerja berulang dapat disederhanakan.",
  },
  {
    title: "Mudah dipantau",
    description: "Aktivitas dan laporan dapat dilihat dari satu dashboard.",
  },
  {
    title: "Dapat dikembangkan",
    description: "Fitur baru dapat ditambahkan sesuai kebutuhan.",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "sistem-informasi",
    title: "Sistem Informasi",
    description: "Kelola data dan proses administrasi.",
  },
  {
    id: "aplikasi-web",
    title: "Aplikasi Web",
    description: "Aplikasi yang digunakan melalui browser.",
  },
  {
    id: "aplikasi-android",
    title: "Aplikasi Android",
    description: "Aplikasi mobile sesuai kebutuhan pengguna.",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Pantau data, aktivitas, dan laporan.",
  },
  {
    id: "sistem-transaksi",
    title: "Sistem Transaksi",
    description: "Kelola produk, pembayaran, dan laporan.",
  },
  {
    id: "booking-reservasi",
    title: "Booking & Reservasi",
    description: "Atur jadwal dan pemesanan secara online.",
  },
  {
    id: "integrasi-sistem",
    title: "Integrasi Sistem",
    description: "WhatsApp, pembayaran, AI, dan API.",
  },
  {
    id: "sistem-custom",
    title: "Sistem Custom",
    description: "Fitur dan alur sesuai kebutuhan Anda.",
  },
];

export const configurableFeatures = [
  "Responsive",
  "Login & hak akses",
  "Dashboard",
  "Pengelolaan data",
  "Pencarian & filter",
  "Laporan",
  "Notifikasi",
  "Integrasi API",
  "WhatsApp",
  "Payment gateway",
  "AI & chatbot",
  "Support",
] as const;

export interface Package {
  id: string;
  name: string;
  /** Short category label shown above the title (e.g. "WEBSITE"). */
  label: string;
  description: string;
  items: string[];
  recommended?: boolean;
}

export const packages: Package[] = [
  {
    id: "website",
    name: "Website",
    label: "Website",
    description:
      "Untuk profil, layanan, promosi, katalog, dan kebutuhan informasi.",
    items: [
      "Desain responsive",
      "Halaman profil atau layanan",
      "WhatsApp dan media sosial",
      "Domain, SSL, dan deployment",
      "SEO dasar",
      "Support",
    ],
  },
  {
    id: "sistem-informasi",
    name: "Sistem Informasi",
    label: "Aplikasi",
    description:
      "Untuk pengelolaan data, pengguna, proses, dashboard, dan laporan.",
    items: [
      "Login dan hak akses",
      "Dashboard",
      "Pengelolaan data",
      "Laporan dan ekspor",
      "Notifikasi",
      "Deployment dan support",
    ],
    recommended: true,
  },
  {
    id: "sistem-custom",
    name: "Sistem Custom",
    label: "Custom",
    description:
      "Untuk fitur, alur, platform, atau integrasi yang lebih khusus.",
    items: [
      "Web atau Android",
      "WhatsApp dan payment gateway",
      "AI atau chatbot",
      "Booking dan transaksi",
      "Integrasi layanan lain",
      "Maintenance opsional",
    ],
  },
];

export interface Reason {
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    title: "Sesuai kebutuhan",
    description: "Fitur disusun mengikuti proses yang benar-benar Anda jalankan.",
  },
  {
    title: "Bisa dimulai sederhana",
    description: "Mulai dari fitur inti, lalu kembangkan secara bertahap.",
  },
  {
    title: "Responsive",
    description: "Nyaman digunakan di desktop, tablet, dan HP.",
  },
  {
    title: "Proses transparan",
    description: "Ruang lingkup dan progres dibahas secara jelas.",
  },
  {
    title: "Progres dapat ditinjau",
    description: "Anda dapat meninjau perkembangan sistem selama pengerjaan.",
  },
  {
    title: "Support",
    description: "Bantuan tetap tersedia setelah sistem digunakan.",
  },
];

export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Konsultasi",
    description: "Ceritakan kebutuhan, pengguna, dan proses yang ingin dibuat lebih praktis.",
  },
  {
    title: "Konsep",
    description: "Kami susun gambaran alur, fitur, dan platform yang sesuai.",
  },
  {
    title: "Penawaran",
    description: "Anda menerima ruang lingkup, estimasi biaya, dan jadwal pengerjaan.",
  },
  {
    title: "Pengerjaan",
    description: "Sistem dibangun bertahap dan progres dapat ditinjau.",
  },
  {
    title: "Online",
    description: "Sistem diuji dan dipublikasikan, lalu siap digunakan.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Berapa biaya pembuatan sistem?",
    answer:
      "Biaya ditentukan setelah kebutuhan, fitur, platform, dan tingkat integrasi diketahui. Setelah konsultasi, Anda menerima penawaran dengan ruang lingkup yang jelas sebelum pengerjaan dimulai.",
  },
  {
    question: "Apakah harus sudah memiliki konsep atau desain?",
    answer:
      "Tidak perlu. Anda cukup menceritakan proses dan masalah yang ingin diselesaikan. Kami membantu menyusun alur, fitur, dan gambaran antarmukanya.",
  },
  {
    question: "Apakah sistem bisa digunakan melalui HP?",
    answer:
      "Bisa. Antarmuka sistem dibuat responsive sehingga dapat digunakan melalui browser di HP, tablet, dan desktop. Untuk kebutuhan khusus, aplikasi Android juga tersedia.",
  },
  {
    question: "Apakah bisa terhubung dengan WhatsApp atau pembayaran?",
    answer:
      "Bisa, selama layanan yang digunakan menyediakan API atau akses integrasi yang sesuai. Ruang lingkup integrasi akan dikonfirmasi saat konsultasi.",
  },
  {
    question: "Apakah server dan domain sudah termasuk?",
    answer:
      "Domain, server, dan deployment dapat disiapkan sebagai bagian dari paket. Jika Anda sudah memiliki domain atau server, sistem dapat disesuaikan dengan lingkungan yang ada.",
  },
  {
    question: "Apakah bisa melanjutkan sistem yang sudah ada?",
    answer:
      "Bisa, setelah kami meninjau kode, data, dan infrastruktur yang ada. Kelayakan serta estimasi akan disampaikan sebelum pengerjaan.",
  },
];
