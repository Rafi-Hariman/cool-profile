/**
 * Single source of truth for the public WhatsApp contact and the prefilled
 * consultation brief. The number is intentionally written in international
 * format without a leading "+" (wa.me accepts it in both forms).
 */
export const WHATSAPP_NUMBER = "628979670295";
export const WHATSAPP_DISPLAY = "+62 897-9670-295";

const BRIEF = [
  "Nama:",
  "Jenis kebutuhan:",
  "Masalah yang ingin diselesaikan:",
  "Siapa yang akan menggunakan:",
  "Fitur yang dibayangkan:",
  "Web, Android, atau belum tahu:",
  "Tenggat:",
  "Perkiraan anggaran, jika ada:",
].join("\n");

/**
 * The default consultation message. `topic` lets package CTAs open the same
 * brief with the package already named (e.g. "paket Website").
 */
export function consultationMessage(topic?: string): string {
  const opener = topic
    ? `Halo Kak Rafi, saya ingin berkonsultasi mengenai ${topic}.`
    : "Halo Kak Rafi, saya ingin berkonsultasi mengenai pembuatan sistem.";

  return `${opener}\n\n${BRIEF}`;
}

export function whatsappUrl(topic?: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    consultationMessage(topic)
  )}`;
}
