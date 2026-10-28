import type { ReactNode } from "react";
import {
  articleSections,
  references,
  slemanCases,
  technicalCauses,
  slowdownFactors,
  reportStatuses,
  simulatedTicket,
  type ArticleSection,
  type ArticleReferenceId,
} from "@/data/articles/pju-mati-sleman";
import { EvidenceCallout } from "@/components/articles/evidence-callout";
import { ProcessFlow } from "@/components/articles/process-flow";
import { CaseComparison } from "@/components/articles/case-comparison";

// Total 1-based index over every reference id. Built from `references` itself,
// so a missing/typo'd id is a compile error (see ArticleReferenceId) instead of
// a runtime `[undefined]` marker.
const refIndex = references.reduce(
  (acc, r, i) => {
    acc[r.id] = i + 1;
    return acc;
  },
  {} as Record<ArticleReferenceId, number>
);

function section(id: string): ArticleSection {
  const s = articleSections.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown article section: ${id}`);
  return s;
}

/** Clickable inline source marker [N] pointing to #ref-N. */
function Ref({ n }: { n: number }) {
  return (
    <a
      href={`#ref-${n}`}
      aria-label={`Lihat referensi ${n}`}
      className="font-mono text-[0.75em] text-article-accent no-underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-article-accent"
    >
      [{n}]
    </a>
  );
}

function Section({
  s,
  children,
}: {
  s: ArticleSection;
  children: ReactNode;
}) {
  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
      <p
        aria-hidden="true"
        className="font-mono text-xs uppercase tracking-[0.2em] text-article-accent"
      >
        <span className="text-article-muted">{s.number}</span>
        <span className="mx-2">—</span>
        {s.label}
      </p>
      <h2
        id={`${s.id}-title`}
        className="mt-3 text-2xl font-bold tracking-tight text-article-foreground sm:text-3xl"
      >
        {s.title}
      </h2>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

export function ArticleBody() {
  return (
    <div className="space-y-14">
      <Section s={section("pembukaan")}>
        <p className="article-prose">
          Pada 24 September 2025, Komisi C DPRD DIY menindaklanjuti aduan warga
          di Jalan Kaliurang KM 10, Sleman. Pemeriksaan yang menyusul laporan itu
          menemukan 43 titik Penerangan Jalan Umum (PJU) tidak berfungsi.
          <Ref n={refIndex["dprd-kaliurang"]} />
        </p>
        <p className="article-prose">
          Aduan masuk melalui pemerintah kalurahan, bukan saluran digital
          langsung. Jumlahnya besar untuk satu ruas, tetapi yang membuat kasus
          ini menarik bukan angkanya semata. Saat pemeriksaan berlangsung,
          pembicaraan bergeser ke persoalan yang lebih mendasar: lampu-lampu di
          ruas yang sama dapat menjadi tanggung jawab pemerintah provinsi atau
          pemerintah kabupaten. Sebelum ada perbaikan, harus ada kepastian siapa
          yang bertanggung jawab.
          <Ref n={refIndex["dprd-kaliurang"]} />
        </p>
        <p className="article-prose">
          Artikel ini mencoba menjawab satu pertanyaan: mengapa penanganan PJU
          mati bisa lambat? Jawabannya tidak tunggal. Kelambatan dapat terjadi
          jauh sebelum teknisi menyentuh instalasi — dimulai dari saat lampu
          mulai padam hingga ada yang menyadarinya.
        </p>
      </Section>

      <Section s={section("ruang-lingkup")}>
        <p className="article-prose">
          Analisis ini bersandar pada laporan publik, situs pemerintah, dan
          pemberitaan periode 2023–2026. Sleman menjadi fokus, sementara daerah
          lain menjadi pembanding. Data yang tersedia bukan sensus. Dari data
          ini tidak mungkin menghitung kinerja seluruh pemerintah daerah, dan
          artikel ini tidak berusaha melakukannya.
        </p>
        <p className="article-prose">
          Penulis juga tidak memiliki akses ke dasbor internal, jadwal teknisi,
          stok komponen, atau keseluruhan tiket. Karena itu, yang disajikan
          adalah apa yang dapat dilihat publik: jarak antara laporan, tindak
          lanjut, dan penyelesaian.
        </p>
      </Section>

      <Section s={section("tiga-kasus")}>
        <p className="article-prose">
          Tiga laporan dari Sleman memperlihatkan pola yang sama: gangguan nyata
          di lapangan, tetapi informasi publik yang tersedia tidak selalu cukup
          untuk mengetahui kapan lampu menyala kembali.
        </p>

        {slemanCases.map((c) => (
          <div key={c.id}>
            <h3 className="text-lg font-semibold leading-snug text-article-foreground">
              {c.location}
              <span className="font-normal text-article-muted"> · {c.date}</span>
            </h3>
            <p className="mt-1 text-sm text-article-muted">
              {c.scale}
              {c.reportChannel ? ` · ${c.reportChannel}` : ""}
            </p>
            <div className="mt-3 space-y-3">
              <EvidenceCallout kind="case">
                <p className="article-prose">{c.evidence}</p>
                <p className="mt-2">{c.knownStatus}</p>
              </EvidenceCallout>
              <EvidenceCallout kind="limitation">
                <p className="article-prose">{c.limitation}</p>
              </EvidenceCallout>
            </div>
            <p className="mt-2 text-sm text-article-muted">
              Sumber:{" "}
              {c.sourceIds.map((id, i) => (
                <span key={id}>
                  {i > 0 ? ", " : ""}
                  <Ref n={refIndex[id]} />
                </span>
              ))}
            </p>
          </div>
        ))}
      </Section>

      <Section s={section("laporan-digital")}>
        <p className="article-prose">
          Laporan digital — lewat aplikasi, situs, atau WhatsApp — mempercepat
          penyampaian informasi. Setelah laporan masuk, masih ada serangkaian
          tahap sebelum lampu benar-benar menyala.
        </p>
        <blockquote className="border-l-2 border-article-accent pl-5 font-serif text-xl italic leading-relaxed text-article-foreground">
          Menekan tombol kirim bukan akhir proses.
        </blockquote>
        <ProcessFlow />
        <p className="article-prose">
          Setiap tahap bisa tertunda karena informasi yang kurang. Laporan yang
          hanya menyebut “PJU mati di ruas ini” memberi sinyal bahwa ada
          masalah, tetapi belum memberi tahu tiang mana, di bawah kewenangan
          siapa, dan kerusakan apa.
        </p>
      </Section>

      <Section s={section("faktor-lambat")}>
        <p className="article-prose">
          Delapan faktor berikut muncul berulang dalam kasus-kasus yang
          ditelusuri. Tidak semua berlaku di setiap daerah, tetapi semuanya
          memperpanjang jarak antara laporan dan lampu menyala.
        </p>
        <ol className="article-prose space-y-3">
          {slowdownFactors.map((factor, i) => (
            <li key={factor.label} className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-mono text-xs text-article-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold text-article-foreground">
                  {factor.label}
                </p>
                <p className="text-article-body">
                  {factor.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="article-prose">
          Keterbatasan sumber daya bukan asumsi. Di Kabupaten Bangka, instansi
          menyebut penanganan terkendala anggaran dan luas wilayah layanan.
          <Ref n={refIndex["rri-bangka"]} /> Di Kota Cirebon, pemberitaan
          mengutip UPT PJU yang menyebut tujuh petugas lapangan menangani laporan
          sepanjang 2025.
          <Ref n={refIndex["radarcirebon"]} /> Angka itu tidak boleh dibaca
          sebagai produktivitas petugas — tanpa data tim, jam kerja, dan tingkat
          kerusakan, perhitungan semacam itu tidak bisa dilakukan.
        </p>
      </Section>

      <Section s={section("penyebab-teknis")}>
        <p className="article-prose">
          Lampu padam adalah gejala. Penyebab teknisnya bisa sangat berbeda dari
          satu lokasi ke lokasi lain, dan perbedaan itu menentukan apa yang harus
          dibawa dan dikerjakan petugas.
        </p>
        <ul className="article-prose space-y-3">
          {technicalCauses.map((t) => (
            <li
              key={t.cause}
              className="flex flex-wrap items-baseline gap-x-2 text-article-body"
            >
              <span className="font-semibold text-article-foreground">
                {t.cause}
              </span>
              <span className="text-article-muted">— {t.location}</span>
              {t.sourceIds.map((id) => (
                <Ref key={id} n={refIndex[id]} />
              ))}
            </li>
          ))}
        </ul>
        <p className="article-prose">
          Di Polowijan, keterangan petugas menyebut MCB beban trip.
          <Ref n={refIndex["jss-polowijan"]} /> Miniature Circuit Breaker
          (MCB) adalah pemutus arus yang melindungi instalasi dari beban lebih
          atau hubungan pendek; jika MCB trip, lampu padam tetapi belum tentu
          lampunya yang rusak. Di Tulungagung, pemeriksaan menyebut korsleting:
          kabel yang seharusnya dilewati 30 ampere menerima beban hingga 40
          ampere.
          <Ref n={refIndex["dishub-tulungagung"]} /> Artikel ini tidak
          memberikan panduan perbaikan listrik; tujuannya menunjukkan bahwa
          “mati” adalah gejala, bukan diagnosis.
        </p>
      </Section>

      <Section s={section("penanganan-cepat")}>
        <p className="article-prose">
          Kasus pembanding penting untuk menghindari bias seleksi. Tidak semua
          laporan berakhir lambat, dan respons cepat terdokumentasi di beberapa
          daerah.
        </p>
        <CaseComparison />
        <p className="article-prose">
          Di Klaten, aduan WhatsApp yang masuk sekitar pukul 11.00 ditanggapi
          dengan kehadiran tim di lokasi sekitar pukul 13.00 pada hari yang sama.
          <Ref n={refIndex["dishub-klaten"]} /> Kasus Polowijan dan
          Sorosutan memperlihatkan durasi tiket digital yang jauh lebih rinci.
          <Ref n={refIndex["jss-polowijan"]} />
          <Ref n={refIndex["jss-sorosutan"]} /> Angka-angka ini menunjukkan
          respons cepat bisa terjadi — tetapi satu kasus cepat bukan standar,
          sama seperti satu kasus lambat bukan kesimpulan umum.
        </p>
      </Section>

      <Section s={section("waktu-gangguan")}>
        <p className="article-prose">
          Membandingkan respons antar daerah menuntut kehati-hatian pada satu
          hal: waktu pada tiket bukan waktu gangguan. Lampu bisa mati lebih
          dulu, warga baru mengetahuinya kemudian, laporan dibuat setelahnya,
          unit menerima pada jam kerja, teknisi mulai bekerja, dan lampu baru
          menyala pada waktu yang berbeda lagi.
        </p>
        <p className="article-prose">
          Kasus Polowijan memperlihatkan perbedaannya. Tiket digital selesai
          dalam 1 hari 13 jam 16 menit, tetapi menurut pelapor gangguan telah
          berlangsung sekitar empat hari sebelum laporan dibuat.
          <Ref n={refIndex["jss-polowijan"]} /> Mengutip durasi tiket
          sebagai “durasi gangguan” akan mengecilkan masalah yang sebenarnya.
        </p>
      </Section>

      <Section s={section("data-seharusnya")}>
        <p className="article-prose">
          Agar warga bisa memahami apa yang sedang terjadi, data publik
          seharusnya memperlihatkan lebih dari sekadar “diproses”. Informasi yang
          berguna dalam satu laporan meliputi: identitas aset atau tiang,
          koordinat, instansi berwenang, waktu setiap tahap, diagnosis, petugas
          atau unit, komponen atau tindakan, foto sebelum dan sesudah, konfirmasi
          lampu menyala, serta riwayat gangguan berulang.
        </p>
      </Section>

      <Section s={section("rancangan-antarmuka")}>
        <p className="article-prose">
          Sebagai pengembang frontend, persoalan ini menarik karena ujungnya
          adalah antarmuka. Status laporan, identitas aset, kewenangan,
          penugasan, diagnosis, dan bukti penyelesaian adalah data yang bisa
          diterjemahkan menjadi layar yang lebih jelas.
        </p>
        <p className="article-prose">
          Status yang terlalu luas — seperti “diproses” — tidak memberi tahu
          warga apa yang sedang terjadi. Model yang lebih berguna memecah proses
          menjadi tahap yang lebih spesifik, dan status “dibuka kembali”
          diperlukan karena lampu bisa padam lagi setelah sebelumnya dinyatakan
          selesai.
        </p>

        <div className="overflow-hidden rounded-xl border border-article-border bg-article-surface">
          <div className="flex items-center justify-between gap-3 border-b border-article-border bg-article-surface-muted px-5 py-3">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-article-muted">
              Data simulasi — demonstrasi antarmuka
            </span>
            <span className="font-mono text-xs text-article-accent">
              {simulatedTicket.id}
            </span>
          </div>

          <div className="space-y-5 p-5">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
                  Aset
                </dt>
                <dd className="mt-1 text-article-foreground">
                  {simulatedTicket.asset}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
                  Koordinat
                </dt>
                <dd className="mt-1 font-mono text-xs text-article-body">
                  {simulatedTicket.coordinate}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
                  Kewenangan
                </dt>
                <dd className="mt-1 text-article-foreground">
                  {simulatedTicket.authority}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
                  Diagnosis
                </dt>
                <dd className="mt-1 text-article-foreground">
                  {simulatedTicket.diagnosis}
                </dd>
              </div>
            </dl>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
                Riwayat status
              </p>
              <ol className="mt-3 space-y-2 border-l border-article-border pl-4">
                {simulatedTicket.history.map((h) => {
                  const label =
                    reportStatuses.find((s) => s.id === h.status)?.label ??
                    h.status;
                  return (
                    <li
                      key={h.status}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-article-foreground">{label}</span>
                      <span className="font-mono text-xs text-article-muted">
                        {h.at}
                      </span>
                    </li>
                  );
                })}
                <li className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-article-foreground">Dibuka kembali</span>
                  <span className="font-mono text-xs text-article-muted">
                    contoh · lampu padam lagi
                  </span>
                </li>
              </ol>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-article-muted">
                Model status
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {reportStatuses.map((s) => (
                  <li
                    key={s.id}
                    className="rounded-full border border-article-border px-3 py-1 font-mono text-xs text-article-body"
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-article-muted">
          Data simulasi untuk demonstrasi antarmuka. Bukan data resmi pemerintah.
          Konsep ini menunjukkan bagaimana status, aset, dan diagnosis dapat
          ditampilkan secara berurutan; ia tidak menyatakan bahwa desain ini
          pasti mempercepat perbaikan.
        </p>
      </Section>

      <Section s={section("kesimpulan")}>
        <p className="article-prose">
          Judul artikel ini bertanya mengapa penanganan PJU mati bisa lambat.
          Jawabannya: kelambatan bisa terjadi sebelum teknisi menyentuh
          instalasi. Gangguan yang terlambat diketahui, lokasi yang tidak
          menunjuk aset tertentu, pembagian kewenangan, diagnosis yang belum
          jelas, keterbatasan petugas dan komponen, serta status publik yang
          terlalu umum — semuanya menambah jarak antara laporan dan lampu
          menyala.
        </p>
        <p className="article-prose">
          Kanal pengaduan digital tetap penting. Ia mempercepat penyampaian
          informasi. Tetapi kualitas layanan tidak bisa diukur hanya dari
          diterimanya laporan; ia harus diukur sampai lampu benar-benar menyala.
          Untuk itu, data publik perlu memperlihatkan prosesnya, bukan sekadar
          statusnya.
        </p>
      </Section>
    </div>
  );
}
