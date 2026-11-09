export const COMPANY_NAME = "شركة التواصل الذهبي للشحن السريع";
export const COMPANY_SHORT = "التواصل الذهبي";

export const ORIGINS = ["أربيل", "بغداد"] as const;
export const DESTINATIONS = ["قامشلي - حسكة", "الرقة", "حلب", "دمشق"] as const;

/** WhatsApp number in international format, digits only (no +). PLACEHOLDER until the user sends the real one. */
export const WHATSAPP_NUMBER = "9647500000000";
export const WHATSAPP_DISPLAY = "+964 750 000 0000";

/** Prices are never shown on the website — customers get a quote only through WhatsApp. */
export const whatsappLink = (message = "مرحباً، أود الحصول على عرض سعر لشحنة من العراق إلى سوريا.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
