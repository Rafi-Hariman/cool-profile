# Konten Portofolio — Final Content Inventory

> Versi final teks publik untuk `cool-profile`.
>
> Arah penyampaian: singkat, natural, present-first, dan berbasis bukti. Posisi utama adalah **Frontend Developer at BSI UII**. Status sebagai mahasiswa Informatika dan freelancer menjadi konteks pendukung, bukan identitas yang diulang pada setiap bagian.
>
> Placeholder bertanda `[NEEDS INPUT]` tidak boleh tampil di production sebelum datanya dilengkapi.

---

## 0. Prinsip Penyampaian

1. Mulai dari pekerjaan dan fokus saat ini.
2. Ceritakan perjalanan karier hanya untuk memberi konteks.
3. Gunakan proyek sebagai bukti kemampuan, bukan sekadar daftar teknologi.
4. Bedakan kontribusi pribadi dari hasil kerja tim.
5. Jangan mengklaim dampak, skala, klien, atau angka yang belum dapat dibuktikan.
6. Gunakan kalimat pendek dan mudah dipindai.
7. Tampilkan kanal kontak yang benar-benar dapat digunakan.
8. Sembunyikan bagian yang belum memiliki isi nyata.

---

# 1. Metadata & Shell

## Metadata

| Elemen | Teks final |
|---|---|
| Default title | Muhamad Rafi Hariman Saputra — Frontend Developer |
| Child page title template | %s — Muhamad Rafi Hariman Saputra |
| Meta description | Frontend Developer at BSI UII building responsive, maintainable web interfaces with Angular and TypeScript. Also studying Informatics at UMBY and taking selected freelance web projects. |
| Meta keywords | frontend developer, Angular developer, TypeScript, web developer, Muhamad Rafi Hariman Saputra, BSI UII, portfolio |
| Open Graph site name | Muhamad Rafi Hariman Saputra — Portfolio |
| Open Graph description | Selected frontend work, professional experience, and technical projects by Muhamad Rafi Hariman Saputra. |

## Sidebar dan Mobile Header

| Elemen | Teks final |
|---|---|
| Nama | Muhamad Rafi Hariman Saputra |
| Role | Frontend Developer at BSI UII |
| Tagline | I build and maintain web interfaces, turn UI designs into working products, and take selected freelance projects for profile and business websites. |
| Lokasi | Yogyakarta, Indonesia |
| Status | Open to selected freelance projects |
| Tombol utama | Get in touch |
| Navigation | About · Experience · Projects · Skills · Contact |
| Social: GitHub | GitHub profile |
| Social: LinkedIn | LinkedIn profile `[NEEDS INPUT: valid URL]` |
| Social: Email | Email me `[NEEDS INPUT: professional email]` |
| Resume | View résumé `[NEEDS INPUT: public résumé URL]` |
| Skip link | Skip to content |

### Catatan implementasi

- Jangan tampilkan tombol LinkedIn, email, atau résumé jika URL belum tersedia.
- Jangan gunakan GitHub sebagai pengganti tombol kontak utama apabila email profesional sudah tersedia.
- Hapus `Writing` dari navigasi sampai minimal satu artikel selesai dan dapat dibuka.

## Robot Card

| Elemen | Teks final |
|---|---|
| Accessible label | Interactive 3D robot illustration |
| Fallback | 3D illustration available on supported desktop devices |

## Footer

```text
© {currentYear} Muhamad Rafi Hariman Saputra.
Built with Next.js, TypeScript, and a small robot.
```

---

# 2. About

| Elemen | Teks final |
|---|---|
| Nomor + eyebrow | 01 · About |
| Heading | Frontend work, shaped by practice and continuous learning. |
| Lead | I’m a Frontend Developer at BSI UII, focused on building responsive interfaces and maintaining web applications with clear, reusable code. |

## Paragraf 1

```text
My path into software development started with a six-to-eight-month internship at BSI UII, where I worked across backend and frontend tasks. That experience gave me a practical view of how interfaces, APIs, data, and team workflows fit together.
```

## Paragraf 2

```text
After the internship, I joined BSI UII as a contract Frontend Developer. I now translate UI/UX designs into application interfaces, develop and maintain frontend features, and collaborate with backend developers and project stakeholders.
```

## Paragraf 3

```text
Alongside work, I study Informatics in the employee-class program at Universitas Mercu Buana Yogyakarta. I also take selected freelance projects, particularly profile websites, landing pages, and practical web solutions for small businesses.
```

| Elemen | Teks final |
|---|---|
| Link ke proyek | View selected work ↓ |

### Catatan penyampaian

- Tidak perlu menambahkan paragraf penutup seperti “This portfolio documents my journey”. Fungsi tersebut sudah terlihat dari isi halaman.
- Jangan mengulang “frontend developer, student, freelancer” dalam empat bentuk berbeda pada bagian ini.
- Jika layout terlalu panjang, paragraf pertama dan kedua boleh digabung tanpa mengubah fakta.

---

# 3. Experience

| Elemen | Teks final |
|---|---|
| Nomor + eyebrow | 02 · Experience |
| Heading | From internship to frontend development. |

## Entri 1 — Frontend Developer

| Field | Teks final |
|---|---|
| Periode | `[NEEDS INPUT: exact contract start month/year]` — Present |
| Role | Frontend Developer |
| Organisasi | BSI UII |
| Tipe | Contract employee (SPK) |

### Ringkasan

```text
Continued at BSI UII after the internship, with a primary focus on frontend development, feature delivery, and application maintenance.
```

### Kontribusi

- Translate UI/UX designs into responsive application interfaces.
- Develop and maintain frontend features for institutional web applications.
- Collaborate with backend developers and stakeholders during implementation.
- Improve interface consistency and maintainability across ongoing work.

### Catatan verifikasi

- Gunakan maksimal tiga poin jika kartu terlihat terlalu panjang.
- Jangan menyebut nama sistem internal, data pengguna, arsitektur, atau metrik tanpa izin.
- Jika tanggung jawab tertentu tidak lagi dikerjakan, ubah tense atau hapus poin tersebut.

## Entri 2 — Backend & Frontend Developer Intern

| Field | Teks final |
|---|---|
| Periode | `[NEEDS INPUT: exact internship start month/year]` — `[NEEDS INPUT: exact internship end month/year]` |
| Role | Backend & Frontend Developer Intern |
| Organisasi | BSI UII |
| Tipe | Internship · approximately 6–8 months |

### Ringkasan

```text
Contributed to backend and frontend tasks while learning how APIs, databases, interfaces, and delivery workflows connect in real software projects.
```

### Kontribusi

- Supported API and data work required by frontend features.
- Contributed to interface implementation and website maintenance.
- Worked across both sides of the application before specializing in frontend development.

### Catatan verifikasi

- Tampilkan Go, MySQL, Angular, atau teknologi lain hanya setelah dikonfirmasi dari CV atau source yang benar.
- Jika durasi resmi berbeda dari 6–8 bulan, gunakan tanggal resmi dan hapus estimasi durasi.

## Current Focus

| Elemen | Teks final |
|---|---|
| Label | Currently |
| Ringkasan | Frontend Developer at BSI UII · Informatics student at UMBY · selected freelance work |

### Versi deskriptif opsional

Gunakan hanya jika desain memerlukan deskripsi tambahan:

```text
I currently balance professional frontend work, an Informatics degree at UMBY, and selected freelance projects for profiles, landing pages, and small-business websites.
```

## Education

| Field | Teks final |
|---|---|
| Program | Bachelor of Informatics |
| Institution | Universitas Mercu Buana Yogyakarta |
| Format | Employee-class program |
| Status | Currently enrolled |
| Periode | `[NEEDS INPUT: start year]` — Present |

### Catatan struktur

Jika halaman tidak mempunyai bagian Education tersendiri, letakkan blok ini setelah Experience. Jangan memasukkannya sebagai pekerjaan ketiga.

---

# 4. Selected Work

| Elemen | Teks final |
|---|---|
| Nomor + eyebrow | 03 · Selected Work |
| Heading | Projects that show how I build and learn. |
| Deskripsi opsional | A selection of reusable foundations, interface prototypes, and learning projects from my GitHub. |

## Project 1 — Ionic Angular Boilerplate

| Field | Teks final |
|---|---|
| Status | Boilerplate |
| Judul | Ionic Angular Boilerplate |
| Ringkasan | A reusable starting point for Ionic and Angular applications, created to reduce repeated setup for mobile-ready navigation, PWA support, Capacitor, and server-side rendering. |
| Kontribusi | Structured the frontend foundation and documented the reusable setup. |
| Stack | Ionic · Angular · TypeScript · Capacitor · PWA · SSR |
| CTA utama | View live demo |
| CTA sekunder | View repository |

### Alt text screenshot

```text
Ionic Angular application showing the mobile-ready navigation and interface foundation.
```

### Catatan verifikasi

- Pastikan live demo masih aktif.
- Pastikan SSR, PWA, dan Capacitor benar-benar dikonfigurasi pada repository.
- Jangan menyebut proyek sebagai production application jika statusnya boilerplate.

## Project 2 — BSG Cashier

| Field | Teks final |
|---|---|
| Status | Prototype |
| Judul | BSG Cashier |
| Ringkasan | A cashier interface prototype built to explore product management, transaction flows, and reliable local persistence in an Angular application. |
| Kontribusi | Designed the frontend structure, implemented the interface flow, and added IndexedDB persistence with Dexie. |
| Stack | Angular · TypeScript · Tailwind CSS · Dexie |
| CTA | View repository |

### Alt text screenshot

```text
BSG Cashier prototype showing the product and transaction interface.
```

### Catatan verifikasi

- Pastikan IndexedDB dan Dexie digunakan pada source aktual.
- Jika contribution dikerjakan bersama tim, ubah kalimat agar membedakan kontribusi pribadi dan hasil tim.

## Project 3 — Matematik Apps

| Field | Teks final |
|---|---|
| Status | Learning Project |
| Judul | Matematik Apps |
| Ringkasan | An interactive mathematics application used to practise component design, typed React development, and responsive learning interfaces. |
| Kontribusi | Built the interface and interaction flow while developing practical experience with React and TypeScript. |
| Stack | React · TypeScript · Vite · Tailwind CSS |
| CTA | View repository |

### Alt text screenshot

```text
Matematik Apps interface showing an interactive mathematics learning activity.
```

### Catatan umum proyek

- Tampilkan maksimal tiga proyek pada homepage.
- Stack merupakan metadata, bukan isi utama deskripsi.
- Jika tidak ada screenshot nyata, gunakan visual fallback internal tanpa stock image palsu.
- Sembunyikan tombol live demo jika URL tidak tersedia atau gagal dibuka.
- Hindari klaim seperti “production-ready”, “scalable”, atau “used by users” tanpa bukti.

---

# 5. Skills

| Elemen | Teks final |
|---|---|
| Nomor + eyebrow | 04 · Skills |
| Heading | Technologies I work with. |
| Deskripsi | A focused view of the tools I use at work, in projects, and while learning. |

## Group 01 — Frontend

```text
Angular
TypeScript
JavaScript
HTML
CSS
Tailwind CSS
Responsive Web Design
```

## Group 02 — Project Experience

```text
React
Next.js
Ionic
Capacitor
Progressive Web Apps
Dexie
Firebase
```

## Group 03 — Tools & Workflow

```text
Git
GitHub
Vite
```

### Catatan penyajian

- Pertahankan Angular dan TypeScript sebagai teknologi utama jika memang digunakan pada pekerjaan aktif.
- `Project Experience` berarti pernah digunakan dalam proyek, bukan tingkat ahli.
- Hapus Firebase jika tidak dapat dibuktikan dari proyek atau pekerjaan yang boleh dipublikasikan.
- Jangan gunakan persentase proficiency.
- Jangan gunakan heading “Tools I reach for without thinking” karena memberi kesan penguasaan setara pada seluruh daftar.

---

# 6. Writing

## Status final saat ini

**Jangan tampilkan section Writing dan jangan masukkan Writing ke navigasi sampai minimal satu artikel selesai.**

Panel berikut harus dihapus dari UI publik:

```text
Writing in progress — technical notes on the projects above and the lessons behind them are being prepared. This section will appear once there is something real to share.
```

## Artikel pertama yang direkomendasikan

```text
What I Learned Building Local Persistence for an Angular Cashier Prototype
```

### Struktur artikel

1. Why the prototype needed local persistence
2. Why IndexedDB and Dexie were selected
3. Data shape and transaction flow
4. Implementation challenges
5. What worked and what should improve next

## Teks section setelah artikel tersedia

| Elemen | Teks final |
|---|---|
| Nomor + eyebrow | 05 · Writing |
| Heading | Notes from building and learning. |
| Deskripsi | Practical notes from frontend work, side projects, and the decisions behind them. |
| CTA | Read the note |

---

# 7. Contact

> Jika Writing disembunyikan, gunakan nomor `05 · Contact`. Jika Writing sudah aktif, gunakan `06 · Contact`.

| Elemen | Teks final |
|---|---|
| Nomor + eyebrow | 05 · Contact |
| Heading | Have a project or frontend problem to discuss? |
| Deskripsi | I’m open to selected freelance work for profile websites, landing pages, and small-business web needs, as well as professional frontend collaboration. |
| CTA utama | Email me `[NEEDS INPUT: professional email]` |
| CTA sekunder | View GitHub |
| CTA tambahan | Connect on LinkedIn `[NEEDS INPUT: valid URL]` |

## Alternatif heading yang lebih hangat

```text
Let’s build something useful.
```

Gunakan alternatif tersebut hanya jika konsisten dengan tone halaman. Jangan menampilkan kedua heading sekaligus.

## Empty-state rule

Jika email dan LinkedIn belum tersedia:

- Jangan menampilkan tombol palsu.
- Tampilkan GitHub sebagai satu-satunya CTA sementara.
- Ubah deskripsi menjadi:

```text
You can find my public projects and current experiments on GitHub.
```

---

# 8. Urutan Homepage Final

## Saat Writing belum tersedia

```text
01 About
02 Experience
03 Projects
04 Skills
05 Contact
```

## Setelah Writing tersedia

```text
01 About
02 Experience
03 Projects
04 Skills
05 Writing
06 Contact
```

---

# 9. Data yang Masih Dibutuhkan

Sebelum publish final, lengkapi:

- `[NEEDS INPUT]` Bulan dan tahun mulai internship.
- `[NEEDS INPUT]` Bulan dan tahun selesai internship.
- `[NEEDS INPUT]` Bulan dan tahun mulai kontrak/SPK.
- `[NEEDS INPUT]` Tahun mulai S1 Informatika UMBY.
- `[NEEDS INPUT]` Email profesional.
- `[NEEDS INPUT]` URL LinkedIn yang benar.
- `[NEEDS INPUT]` URL résumé publik, jika memang ingin ditampilkan.
- `[NEEDS INPUT]` Konfirmasi apakah seluruh project contribution akurat.
- `[NEEDS INPUT]` Screenshot nyata untuk setiap project.

---

# 10. Checklist Publikasi

- [ ] Tidak ada `Adi Pratama`, `Your Company`, atau data dummy lain.
- [ ] Tidak ada label `Senior Frontend Engineer`.
- [ ] Tanggal Experience sudah resmi dan konsisten.
- [ ] Role utama terbaca sebagai Frontend Developer at BSI UII.
- [ ] Status mahasiswa dan freelance tampil sebagai konteks pendukung.
- [ ] Tidak ada informasi internal BSI UII yang bersifat rahasia.
- [ ] Setiap project memiliki purpose, contribution, stack, dan status.
- [ ] Semua CTA mengarah ke URL yang benar.
- [ ] Writing disembunyikan sampai artikel nyata tersedia.
- [ ] Email atau LinkedIn tersedia sebagai kanal komunikasi.
- [ ] Screenshot memiliki alt text yang deskriptif.
- [ ] Kontras, keyboard focus, reduced motion, dan mobile layout sudah diperiksa.
- [ ] Lint, type-check, dan production build berhasil.

---

# 11. Ringkasan Voice & Tone

Gunakan suara yang:

- Profesional tetapi tidak kaku.
- Percaya diri tetapi tidak berlebihan.
- Spesifik tetapi tidak membuka informasi internal.
- Berbasis kontribusi nyata, bukan jargon.
- Mudah dipindai dalam waktu singkat.

Hindari frasa abstrak seperti:

```text
practical digital solutions
technical growth
passionate developer
innovative solutions
cutting-edge technology
pixel-perfect
highly scalable
```

Frasa tersebut hanya boleh digunakan jika kalimat berikutnya memberikan bukti yang jelas. Lebih baik menyebut pekerjaan konkret, misalnya:

```text
I translate UI/UX designs into responsive application interfaces.
```

atau:

```text
I built local persistence for a cashier prototype with IndexedDB and Dexie.
```

---

**Content status:** Ready for implementation after `[NEEDS INPUT]` fields and project claims are verified.

**Documentation sync: clear.**
