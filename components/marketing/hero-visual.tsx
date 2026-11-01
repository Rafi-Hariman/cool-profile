const chartHeights = ["34%", "61%", "48%", "82%", "69%"];

/**
 * Decorative product composition (mirrors the `product-art` reference):
 * a perspective-tilted dashboard, a phone card, and two floating badges.
 * Numbers are illustrative UI data only — no real customers, revenue, or
 * ratings. Hidden from assistive tech because it conveys no information.
 */
export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto min-h-[430px] w-full max-w-[680px] select-none max-[680px]:min-h-[415px]"
    >
      {/* Dashboard */}
      <div className="absolute right-2 top-6 w-[88%] rounded-[21px] bg-[#fbfcff] p-[17px] shadow-[0_30px_68px_rgba(5,22,72,0.32)] [transform:perspective(900px)_rotateY(-6deg)_rotateX(3deg)] max-[680px]:right-[-18px] max-[680px]:w-full">
        <div className="flex justify-between border-b border-brand-line pb-3 text-[10px] text-[#697386]">
          <div className="flex gap-[5px]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#d4dae5]" />
            <span className="h-[7px] w-[7px] rounded-full bg-[#d4dae5]" />
            <span className="h-[7px] w-[7px] rounded-full bg-[#d4dae5]" />
          </div>
          <span>Dashboard Sistem</span>
        </div>

        <div className="grid grid-cols-[82px_1fr] gap-[13px] pt-[13px] max-[680px]:grid-cols-[64px_1fr]">
          <div className="grid content-start gap-2">
            <span className="h-[9px] rounded-full bg-[#e9edf5]" />
            <span className="h-[9px] rounded-full bg-[#d3ddff]" />
            <span className="h-[9px] rounded-full bg-[#e9edf5]" />
            <span className="h-[9px] rounded-full bg-[#e9edf5]" />
            <span className="h-[9px] rounded-full bg-[#e9edf5]" />
          </div>

          <div className="min-w-0">
            <div className="grid grid-cols-3 gap-2 max-[680px]:grid-cols-1">
              <div className="rounded-[11px] bg-[#f1f4fa] p-[11px] text-[#18223b]">
                <span className="block text-[8px] text-[#717b8e]">
                  Data Aktif
                </span>
                <strong className="text-[18px] font-bold">1.248</strong>
              </div>
              <div className="rounded-[11px] bg-[#f1f4fa] p-[11px] text-[#18223b] max-[680px]:hidden">
                <span className="block text-[8px] text-[#717b8e]">Diproses</span>
                <strong className="text-[18px] font-bold">87%</strong>
              </div>
              <div className="rounded-[11px] bg-[#f1f4fa] p-[11px] text-[#18223b] max-[680px]:hidden">
                <span className="block text-[8px] text-[#717b8e]">Hari Ini</span>
                <strong className="text-[18px] font-bold">46</strong>
              </div>
            </div>

            <div className="mt-[9px] flex h-[155px] items-end gap-[10px] rounded-xl bg-gradient-to-b from-[#f8faff] to-[#edf2ff] px-[17px] py-[24px]">
              {chartHeights.map((height) => (
                <span
                  key={height}
                  style={{ height }}
                  className="flex-1 rounded-t-[6px] rounded-b-[2px] bg-gradient-to-b from-[#48c8ee] to-[#2457e6]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 right-0 w-[145px] rounded-[27px] bg-[#111827] p-[7px] shadow-[0_22px_48px_rgba(5,22,72,0.35)] max-[680px]:w-[143px]">
        <div className="rounded-[21px] bg-[#f8fafc] px-[11px] py-[15px] text-[#172033]">
          <span className="text-[9px] text-[#717b8e]">Aktivitas</span>
          <h3 className="my-[9px] text-[15px] font-bold">Pengingat Aktif</h3>

          <div className="mt-[9px] rounded-xl border border-brand-line bg-white p-[10px] text-[9px]">
            <span className="flex justify-between font-semibold">
              <span>Notifikasi</span>
              <span className="rounded-full bg-brand-green-soft px-[5px] py-[2px] text-brand-green">
                Berjalan
              </span>
            </span>
            <p className="mt-1 text-[#697386]">
              Informasi dikirim sesuai jadwal.
            </p>
          </div>

          <div className="mt-[9px] rounded-xl border border-brand-line bg-white p-[10px] text-[9px]">
            <span className="flex justify-between font-semibold">
              <span>Data Tersimpan</span>
              <span>24</span>
            </span>
            <p className="mt-1 text-[#697386]">
              Dapat dipantau melalui dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute left-0 top-[120px] rounded-[14px] bg-white px-[14px] py-[12px] text-[11px] text-[#172033] shadow-[0_18px_48px_rgba(28,62,140,0.10)] max-[680px]:top-[145px]">
        <strong className="block text-[16px] text-brand-blue">Custom</strong>
        Sesuai kebutuhan
      </div>
      <div className="absolute bottom-[36px] left-[52px] rounded-[14px] bg-white px-[14px] py-[12px] text-[11px] text-[#172033] shadow-[0_18px_48px_rgba(28,62,140,0.10)] max-[680px]:left-[20px]">
        <strong className="block text-[16px] text-brand-blue">
          Web &amp; Mobile
        </strong>
        Siap digunakan
      </div>
    </div>
  );
}
