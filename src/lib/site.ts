export const COMPANY_NAME = "شركة التواصل الذهبي للشحن السريع";
export const COMPANY_SHORT = "التواصل الذهبي";

export const ORIGINS = ["أربيل", "بغداد"] as const;
export const DESTINATIONS = ["قامشلي - حسكة", "الرقة", "حلب", "دمشق"] as const;

export type Office = { city: string; numbers: string[] };
export type Country = { country: string; flag: string; offices: Office[] };

/** WhatsApp numbers in international format, digits only (no + or 00). */
export const CONTACTS: Country[] = [
  {
    country: "العراق",
    flag: "🇮🇶",
    offices: [
      { city: "الإدارة - أربيل", numbers: ["9647506550001", "9647506560001", "9647517236278"] },
      { city: "بغداد", numbers: ["9647702963703", "9647721100074"] },
    ],
  },
  {
    country: "سوريا",
    flag: "🇸🇾",
    offices: [
      { city: "الإدارة في سوريا - القامشلي", numbers: ["963932904444"] },
      { city: "الرقة", numbers: ["963981966403"] },
      { city: "حلب", numbers: ["963981275000"] },
      { city: "دمشق", numbers: ["9647506550001"] },
    ],
  },
  {
    country: "الصين",
    flag: "🇨🇳",
    offices: [{ city: "غوانزو", numbers: ["8615024571462"] }],
  },
];

/** Main number (Erbil head office) used by every general WhatsApp button. */
export const WHATSAPP_NUMBER: string = "9647506550001";
const BAGHDAD_NUMBER: string = "9647702963703";

/** WhatsApp number for the office in a shipment's origin city. */
export const originNumber = (origin: string) =>
  origin === "بغداد" ? BAGHDAD_NUMBER : WHATSAPP_NUMBER;

/** "9647506550001" → "+964 750 655 0001" */
export const formatPhone = (digits: string) => {
  const cc = ["964", "963", "86"].find((c) => digits.startsWith(c)) ?? "";
  const rest = digits.slice(cc.length);
  const groups = rest.length === 11 ? rest.match(/(\d{3})(\d{4})(\d{4})/) : rest.match(/(\d{3})(\d{3})(\d+)/);
  return `+${cc} ${groups ? groups.slice(1).join(" ") : rest}`;
};

/** Prices are never shown on the website — customers get a quote only through WhatsApp. */
export const whatsappLink = (
  message = "مرحباً، أود الحصول على عرض سعر لشحنة من العراق إلى سوريا.",
  number: string = WHATSAPP_NUMBER,
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
