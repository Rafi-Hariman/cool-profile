# Search Console — Checklist Pasca-Deploy

Setelah deploy ke `https://rafihariman.my.id`, lakukan langkah berikut dan
rekam bukti (screenshot) untuk assignment.

1. Verifikasi properti di Google Search Console.
2. Inspeksi URL `/` — pastikan "Live test" lulus dan halaman ter-render.
3. Inspeksi URL `/profile`.
4. Jalankan "Test Live URL" untuk kedua halaman.
5. Konfirmasi canonical yang dideklarasikan:
   - `/` → `https://rafihariman.my.id/`
   - `/profile` → `https://rafihariman.my.id/profile`
6. Setelah re-indexing, cek canonical yang dipilih Google (boleh berbeda sementara).
7. Minta pengindeksan (Request Indexing) untuk kedua URL.
8. Submit sitemap `https://rafihariman.my.id/sitemap.xml`.
9. Pantau status pengindeksan di laporan "Halaman".
10. Pantau perubahan title & snippet pada hasil pencarian.
11. Pantau query berikut:
    - `rafi hariman`
    - `muhamad rafi hariman saputra`
    - `rafi hariman frontend developer`
    - `rahesa`
    - `rahesa digital systems`
    - `jasa pembuatan sistem`
12. Rekam screenshot perubahan hasil pencarian.

> Perubahan hasil pencarian tidak langsung. Google perlu merender ulang dan
> me-reindex halaman; beri waktu beberapa hari hingga beberapa minggu.
