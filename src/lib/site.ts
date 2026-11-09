export const COMPANY_NAME = "شركة التواصل الذهبي للشحن السريع";
export const COMPANY_SHORT = "التواصل الذهبي";
export const APP_URL = "https://appcsvgy5gndvnwccug.teable.app/";

export const ORIGINS = ["أربيل", "بغداد"] as const;
export const DESTINATIONS = ["قامشلي - حسكة", "الرقة", "حلب", "دمشق"] as const;

export const CATALOG_SIZE = 68;

/** Sample prices from the app (Erbil → Qamishli-Hasakah, USD per 1000 kg). */
export const SAMPLE_PRICES = [
  { name: "كافة أنواع الألبسة", price: 4600 },
  { name: "أحذية كافة الأنواع", price: 3550 },
  { name: "فرش كراسي + فرش سيارات + تابلو", price: 2600 },
  { name: "شاشات سيارات", price: 2100 },
  { name: "مسجلات سيارات", price: 2100 },
  { name: "حقائب نسائية + سفرية", price: 1950 },
  { name: "مستحضرات العناية بالبشرة", price: 1600 },
  { name: "مستحضرات العناية بالشعر", price: 1600 },
  { name: "قواطع كهربائية + هاوسات + ريلي", price: 850 },
  { name: "قطع تبديل سيارات + محركات + دواليب", price: 700 },
  { name: "اكسسوارات صحية", price: 600 },
  { name: "شحوم وزيوت سيارات", price: 575 },
] as const;

export const formatUsd = (n: number) => `$${n.toLocaleString("en-US")}`;
