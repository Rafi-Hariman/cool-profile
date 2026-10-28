// Data for the article "PJU Mati di Sleman: Mengapa Penanganannya Bisa Lambat?"
// Facts are drawn from the public sources listed below. No invented numbers,
// names, dates, or statuses. Where a public page does not expose a fact (for
// example the full completion timeline), that gap is recorded as a limitation
// rather than filled in.

export const articleMeta = {
  slug: "pju-mati-sleman",
  title: "PJU Mati di Sleman: Mengapa Penanganannya Bisa Lambat?",
  seoTitle: "PJU Mati di Sleman: Mengapa Bisa Lambat?",
  description:
    "Analisis kasus PJU mati di Sleman dan daerah lain pada 2023–2026, dari laporan warga, kewenangan, diagnosis, hingga perbaikan.",
  category: "Layanan Publik",
  language: "id-ID",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  readingTime: "9 menit baca",
  author: {
    name: "Muhamad Rafi Hariman Saputra",
    shortName: "Rafi Hariman",
    url: "https://rafihariman.my.id",
  },
} as const;

export interface ArticleReference {
  id: string;
  publisher: string;
  title: string;
  publishedAt?: string;
  accessedAt: string;
  url: string;
}

// Ordered by first use in the article body. Inline markers [1]…[N] link to
// #ref-<index> in the references section.
export const references = [
  {
    id: "dprd-kaliurang",
    publisher: "DPRD DIY",
    title: "Komisi C Tindaklanjuti Aduan Warga, 43 Lampu PJU Mati di Jakal Km 10",
    publishedAt: "2025-09-24",
    accessedAt: "2026-10-27",
    url: "https://dprd-diy.jogjaprov.go.id/komisi-c-tindaklanjuti-aduan-warga-43-lampu-pju-mati-di-jakal-km-10/",
  },
  {
    id: "elapor-tajem",
    publisher: "E-Lapor DIY",
    title: "Tiket 1608250002 — Laporan PJU mati, Jalan Raya Tajem",
    publishedAt: "2025-08-16",
    accessedAt: "2026-10-27",
    url: "https://jogjaprov.go.id/e-lapor/detail-e-lapor/1608250002",
  },
  {
    id: "elapor-tamanmartani",
    publisher: "E-Lapor DIY",
    title: "Tiket 0602260005 — Laporan PJU mati, Tamanmartani",
    publishedAt: "2026-02-05",
    accessedAt: "2026-10-27",
    url: "https://jogjaprov.go.id/e-lapor/detail-e-lapor/0602260005",
  },
  {
    id: "jss-polowijan",
    publisher: "Jogja Smart Service",
    title: "Aduan #PJU30808 — PJU mati, Polowijan",
    accessedAt: "2026-10-27",
    url: "https://jss.jogjakota.go.id/v6/pengaduan/TnpFek1EZ3dPQT09N3M1",
  },
  {
    id: "dishub-tulungagung",
    publisher: "Dinas Perhubungan Kabupaten Tulungagung",
    title: "Lampu PJU Sering Mati? Ini Dia Penyebabnya!",
    publishedAt: "2024-07-08",
    accessedAt: "2026-10-27",
    url: "https://dishub.tulungagung.go.id/2024/07/09/lampu-pju-sering-mati-ini-dia-penyebabnya/",
  },
  {
    id: "dishub-klaten",
    publisher: "Dinas Perhubungan Kabupaten Klaten",
    title: "Gercep 2 Jam! Dishub Klaten Perbaiki PJU Mati Tegalyoso–Pemda Klaten Selatan",
    publishedAt: "2026-01-17",
    accessedAt: "2026-10-27",
    url: "https://dishub.klaten.go.id/perbaikan-pju-tegalyoso-pemda-klaten-selatan-januari-2026",
  },
  {
    id: "harianjogja-kulonprogo",
    publisher: "Harian Jogja",
    title: "Sejumlah LPJU di 4 Kapanewon Kulonprogo Mati, Ternyata Komponennya Hilang Digondol Maling",
    publishedAt: "2023-11-08",
    accessedAt: "2026-10-27",
    url: "https://jogjapolitan.harianjogja.com/r-1154360/sejumlah-lpju-di-4-kapanewon-kulonprogo-mati-ternyata-komponennya-hilang-digondol-maling",
  },
  {
    id: "jss-sorosutan",
    publisher: "Jogja Smart Service",
    title: "Aduan #PJU30383 — PJU mati, Sorosutan",
    accessedAt: "2026-10-27",
    url: "https://jss.jogjakota.go.id/v6/pengaduan/TnpFek1ETTRNdz09N3M1",
  },
  {
    id: "jss-jetisharjo",
    publisher: "Jogja Smart Service",
    title: "Aduan #PJU29302 — PJU mati, Gang Jetisharjo",
    accessedAt: "2026-10-27",
    url: "https://jss.jogjakota.go.id/v6/pengaduan/TnpFeU9UTXdNZz09N3M1",
  },
  {
    id: "rri-bangka",
    publisher: "RRI",
    title: "Dishub Bangka Tangani Laporan PJU Mati",
    publishedAt: "2026-07-18",
    accessedAt: "2026-10-27",
    url: "https://rri.co.id/sungailiat/regional/2577653/dishub-bangka-tangani-laporan-pju-mati",
  },
  {
    id: "radarcirebon",
    publisher: "Radar Cirebon",
    title: "Dishub Punya UPT PJU: Personel dan Anggaran Masih Terbatas",
    publishedAt: "2026-08-31",
    accessedAt: "2026-10-27",
    url: "https://radarcirebon.id/2026/08/31/dishub-punya-upt-pju-personel-dan-anggaran-masih-terbatas/",
  },
] as const satisfies readonly ArticleReference[];

// Closed set of reference ids, derived from `references` so a source id that
// doesn't exist is a compile error rather than a silent undefined lookup.
export type ArticleReferenceId = (typeof references)[number]["id"];

export interface KeyFinding {
  title: string;
  body: string;
  href: string;
  hrefLabel: string;
}

export const keyFindings: KeyFinding[] = [
  {
    title: "43 lampu padam dalam satu pemeriksaan",
    body: "Pemeriksaan yang menindaklanjuti laporan warga di Jalan Kaliurang KM 10 menemukan 43 titik PJU tidak berfungsi pada 24 September 2025.",
    href: "#ref-1",
    hrefLabel: "DPRD DIY",
  },
  {
    title: "Pembagian kewenangan menambah tahap",
    body: "Lampu di ruas yang sama dapat menjadi tanggung jawab provinsi atau kabupaten, sehingga penentuan penanggung jawab ikut menentukan kecepatan tindak lanjut.",
    href: "#ref-1",
    hrefLabel: "DPRD DIY",
  },
  {
    title: "“Lampu mati” adalah gejala, bukan diagnosis",
    body: "Penyebab teknisnya beragam — dari MCB trip hingga kabel putus — sehingga laporan “mati” belum memberi tahu teknisi apa yang harus diperbaiki.",
    href: "#penyebab-teknis",
    hrefLabel: "Bagian penyebab teknis",
  },
  {
    title: "Respons cepat juga terjadi",
    body: "Kasus pembanding menunjukkan laporan yang ditindaklanjuti dalam hitungan jam, sehingga kelambatan bukan pola tunggal di semua daerah.",
    href: "#ref-6",
    hrefLabel: "Dishub Klaten",
  },
];

export interface ArticleSection {
  id: string;
  number: string;
  label: string;
  title: string;
}

// Editorial section map shared by the table of contents and the article body,
// so anchor ids and heading order can never drift apart.
export const articleSections: ArticleSection[] = [
  { id: "pembukaan", number: "01", label: "Konteks", title: "Empat puluh tiga lampu padam di satu ruas" },
  { id: "ruang-lingkup", number: "02", label: "Batasan", title: "Apa yang bisa dan tidak bisa disimpulkan" },
  { id: "tiga-kasus", number: "03", label: "Kasus Sleman", title: "Tiga laporan dari Sleman" },
  { id: "laporan-digital", number: "04", label: "Proses", title: "Laporan digital hanya memulai proses" },
  { id: "faktor-lambat", number: "05", label: "Faktor", title: "Delapan hal yang dapat memperlambat penanganan" },
  { id: "penyebab-teknis", number: "06", label: "Diagnosis", title: "“Lampu mati” bukan diagnosis" },
  { id: "penanganan-cepat", number: "07", label: "Pembanding", title: "Respons cepat juga terjadi" },
  { id: "waktu-gangguan", number: "08", label: "Waktu", title: "Waktu gangguan bukan waktu tiket" },
  { id: "data-seharusnya", number: "09", label: "Data", title: "Data yang seharusnya terlihat" },
  { id: "rancangan-antarmuka", number: "10", label: "Antarmuka", title: "Dari temuan ke rancangan antarmuka" },
  { id: "kesimpulan", number: "11", label: "Kesimpulan", title: "Kesimpulan" },
];

export const slowdownFactors = [
  { label: "Gangguan terlambat diketahui", detail: "Lampu bisa padam jauh sebelum ada yang melaporkan." },
  { label: "Lokasi tidak menunjuk aset tertentu", detail: "Ruas jalan belum tentu sama dengan tiang atau titik yang bermasalah." },
  { label: "Pembagian kewenangan", detail: "Penanggung jawab provinsi atau kabupaten harus dipastikan lebih dahulu." },
  { label: "“Lampu mati” bukan diagnosis teknis", detail: "Penyebab pastinya baru diketahui setelah pemeriksaan." },
  { label: "Satu gangguan dapat memadamkan banyak titik", detail: "Satu komponen bisa memengaruhi beberapa lampu sekaligus." },
  { label: "Kapasitas petugas dan volume laporan", detail: "Jumlah petugas dan banyaknya laporan memengaruhi antrean." },
  { label: "Anggaran, alat, kabel, dan suku cadang", detail: "Ketersediaan sumber daya ikut menentukan kapan perbaikan berjalan." },
  { label: "Status publik yang terlalu umum", detail: "Label seperti “diproses” tidak menjelaskan tahap sebenarnya." },
] as const;

export interface SlemanCase {
  id: string;
  location: string;
  region: string;
  date: string;
  scale: string;
  reportChannel?: string;
  knownStatus: string;
  evidence: string;
  limitation: string;
  sourceIds: ArticleReferenceId[];
}

export const slemanCases: SlemanCase[] = [
  {
    id: "kaliurang",
    location: "Jalan Kaliurang KM 10",
    region: "Sinduharjo, Sleman",
    date: "24 September 2025",
    scale: "43 titik tidak berfungsi",
    reportChannel: "Laporan warga melalui pemerintah kalurahan",
    knownStatus:
      "Pemeriksaan dilakukan untuk menindaklanjuti laporan dan memilah kewenangan provinsi serta kabupaten.",
    evidence:
      "Angka 43 titik berasal dari pemeriksaan yang diberitakan DPRD DIY sebagai tindak lanjut aduan warga.",
    limitation:
      "Tidak diketahui kapan setiap lampu mulai padam dan kapan seluruh titik kembali menyala.",
    sourceIds: ["dprd-kaliurang"],
  },
  {
    id: "tajem",
    location: "Jalan Raya Tajem",
    region: "Sleman",
    date: "16 Agustus 2025",
    scale: "Banyak PJU mati di sepanjang ruas",
    reportChannel: "E-Lapor DIY",
    knownStatus:
      "Halaman publik memperlihatkan laporan dan disposisi/tindak lanjut, tetapi data penyelesaian tidak dapat diasumsikan bila tidak tampil.",
    evidence:
      "Laporan menyebut PJU mati dari SMKN 1 Depok hingga Pasar Stan dan visibilitas berkurang.",
    limitation:
      "Jumlah titik tidak disebutkan; ketiadaan pembaruan publik bukan bukti bahwa tidak ada tindakan.",
    sourceIds: ["elapor-tajem"],
  },
  {
    id: "tamanmartani",
    location: "Jalan Prambanan–Cangkringan KM 5",
    region: "Tamanmartani, Kalasan",
    date: "5 Februari 2026",
    scale: "Enam titik disebut telah lama mati",
    reportChannel: "E-Lapor DIY",
    knownStatus:
      "Pada tampilan publik yang diriset, laporan telah diteruskan kepada unit terkait, sementara respons penyelesaian belum terlihat.",
    evidence:
      "Laporan menyebut enam titik PJU telah lama mati tanpa menyebut durasi pastinya.",
    limitation:
      "Frasa “lama” tidak memberi durasi; ketiadaan pembaruan publik bukan bukti tindakan di luar sistem tidak terjadi.",
    sourceIds: ["elapor-tamanmartani"],
  },
];

export interface ComparisonCase {
  id: string;
  location: string;
  region: string;
  timeline: string;
  detail: string;
  note?: string;
  sourceIds: ArticleReferenceId[];
}

// Cases that show fast or otherwise fully-documented response, used to avoid
// selection bias in the analysis.
export const fastResponseCases: ComparisonCase[] = [
  {
    id: "klaten",
    location: "Jl. Pemuda, Tegalyoso–Pemda",
    region: "Klaten Selatan, Klaten",
    timeline: "Laporan ±11.00 → tim di lokasi ±13.00",
    detail:
      "Aduan WhatsApp ditindaklanjuti sekitar dua jam kemudian; penyebab yang disebut berupa kabel putus, koneksi longgar, atau komponen yang perlu diganti.",
    note: "Satu kasus cepat bukan standar seluruh daerah.",
    sourceIds: ["dishub-klaten"],
  },
  {
    id: "polowijan",
    location: "Polowijan",
    region: "Kota Yogyakarta",
    timeline: "Tiket 28 Mar 21.48 → selesai 30 Mar 11.04",
    detail:
      "Durasi tiket digital hingga selesai 1 hari 13 jam 16 menit; keterangan petugas menyebut MCB beban trip.",
    note: "Menurut pelapor, gangguan telah berlangsung sekitar empat hari sebelum laporan.",
    sourceIds: ["jss-polowijan"],
  },
  {
    id: "sorosutan",
    location: "Sorosutan",
    region: "Kota Yogyakarta",
    timeline: "Laporan 19 Feb 21.21 → selesai 24 Feb 08.56",
    detail: "Tiga titik mati; durasi laporan hingga status selesai 4 hari 11 jam 35 menit.",
    sourceIds: ["jss-sorosutan"],
  },
  {
    id: "jetisharjo",
    location: "Gang Jetisharjo",
    region: "Kota Yogyakarta",
    timeline: "Laporan 28 Nov 19.57 → selesai 1 Des 09.25",
    detail: "Durasi laporan hingga status selesai 2 hari 13 jam 28 menit.",
    sourceIds: ["jss-jetisharjo"],
  },
];

// Distinct technical causes reported across regions — "mati" is a symptom.
export const technicalCauses = [
  {
    cause: "MCB beban trip",
    location: "Polowijan, Kota Yogyakarta",
    sourceIds: ["jss-polowijan"],
  },
  {
    cause: "Korsleting atau beban berlebih",
    location: "Tulungagung",
    sourceIds: ["dishub-tulungagung"],
  },
  {
    cause: "Kabel putus, koneksi longgar, komponen perlu diganti",
    location: "Klaten",
    sourceIds: ["dishub-klaten"],
  },
  {
    cause: "Pencurian MCB, magnetic contactor, dan timer",
    location: "Kulon Progo",
    sourceIds: ["harianjogja-kulonprogo"],
  },
] as const;

// Steps a report goes through before a light is confirmed back on.
export const reportFlow = [
  { id: "lapor", label: "Laporan", detail: "Warga melaporkan titik atau ruas yang padam." },
  { id: "verifikasi", label: "Verifikasi lokasi", detail: "Lokasi dan cakupan gangguan dipastikan." },
  { id: "aset", label: "Identifikasi aset", detail: "Tiang dan titik dicocokkan dengan data aset." },
  { id: "kewenangan", label: "Penentuan kewenangan", detail: "Penanggung jawab provinsi atau kabupaten ditetapkan." },
  { id: "diagnosis", label: "Diagnosis", detail: "Penyebab teknis diperiksa, bukan sekadar gejala “mati”." },
  { id: "penugasan", label: "Penugasan", detail: "Petugas, alat, dan komponen disiapkan." },
  { id: "perbaikan", label: "Perbaikan", detail: "Tindakan teknis dilakukan di lapangan." },
  { id: "konfirmasi", label: "Konfirmasi", detail: "Lampu dipastikan kembali menyala dan laporan ditutup." },
] as const;

// UI concept state model. Identifiers stay in English (code-level), labels are
// Indonesian so the concept reads as an interface, not a code dump.
export const reportStatuses = [
  { id: "reported", label: "Dilaporkan" },
  { id: "verifying", label: "Diverifikasi" },
  { id: "routed", label: "Diteruskan" },
  { id: "assigned", label: "Ditugaskan" },
  { id: "inspected", label: "Diperiksa" },
  { id: "repairing", label: "Diperbaiki" },
  { id: "resolved", label: "Selesai" },
  { id: "reopened", label: "Dibuka kembali" },
] as const;

// Simulated data for the interface demonstration. Explicitly NOT government
// data — see the label rendered by the UI concept section.
export const simulatedTicket = {
  id: "PJU-SIM-2026-001",
  asset: "Tiang PJU #SLE-0142",
  coordinate: "-7.7310, 110.4082",
  authority: "Kabupaten Sleman",
  reportedAt: "26 Okt 2026, 20.12",
  diagnosis: "MCB beban trip",
  unit: "Tim PJU Sleman",
  status: "repairing",
  history: [
    { status: "reported", at: "26 Okt 2026, 20.12" },
    { status: "verifying", at: "27 Okt 2026, 08.05" },
    { status: "routed", at: "27 Okt 2026, 08.40" },
    { status: "assigned", at: "27 Okt 2026, 09.15" },
    { status: "inspected", at: "27 Okt 2026, 10.02" },
    { status: "repairing", at: "27 Okt 2026, 10.30" },
  ],
} as const;
