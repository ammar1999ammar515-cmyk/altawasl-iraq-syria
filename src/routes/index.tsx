import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpLeft,
  Calculator,
  DollarSign,
  MapPin,
  PackageSearch,
  Route as RouteIcon,
  Search,
  Truck,
} from "lucide-react";

import heroTruck from "@/assets/hero-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp";
import {
  APP_URL,
  CATALOG_SIZE,
  DESTINATIONS,
  ORIGINS,
  SAMPLE_PRICES,
  formatUsd,
  whatsappLink,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "التواصل الذهبي للشحن السريع | شحن من العراق إلى سوريا" },
      {
        name: "description",
        content:
          "شحن بري سريع من أربيل وبغداد إلى القامشلي والحسكة والرقة وحلب ودمشق. أسعار واضحة بالدولار لأكثر من 68 صنف.",
      },
      { property: "og:title", content: "التواصل الذهبي للشحن السريع | من العراق إلى سوريا" },
      {
        property: "og:description",
        content: "شحن بري سريع وموثوق مع دليل أسعار مباشر لكل صنف ولكل مسار.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  {
    icon: MapPin,
    title: "حدّد المسار",
    text: "اختر مدينة الانطلاق في العراق والوجهة في سوريا.",
  },
  {
    icon: Search,
    title: "ابحث عن الصنف",
    text: "اكتب اسم البضاعة لتظهر لك تكلفة الشحن المسجّلة فوراً.",
  },
  {
    icon: Calculator,
    title: "احسب حسب الوزن",
    text: "أدخل وزن شحنتك واحصل على التكلفة الإجمالية بالدولار.",
  },
];

function Index() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-8">
      {/* Bento grid */}
      <section className="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
        {/* Hero tile */}
        <div className="bento-tile animate-rise md:col-span-3 md:row-span-3">
          <img
            src={heroTruck}
            alt="شاحنة شحن على الطريق عند الغروب"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-shade" />
          <div className="relative flex h-full min-h-[460px] flex-col justify-end p-7 md:p-10">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-background/50 px-3 py-1 text-xs text-primary-glow backdrop-blur">
              <span className="size-2 animate-ember rounded-full bg-primary" />
              شحن بري يومي · العراق ← سوريا
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.25] md:text-6xl md:leading-[1.2]">
              بضاعتك تصل <span className="text-ember">أسرع</span>، وبسعر تعرفه مسبقاً.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              نشحن من أربيل وبغداد إلى كل المدن السورية الرئيسية، مع دليل أسعار مباشر لكل صنف.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href={APP_URL} target="_blank" rel="noreferrer">
                  افتح دليل الأسعار
                  <ArrowUpLeft />
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-5" />
                  اطلب شحنتك عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Catalog stat */}
        <div className="bento-tile animate-rise p-6 [animation-delay:80ms]">
          <PackageSearch className="size-7 text-primary" />
          <div className="mt-6 font-display text-6xl font-bold text-ember">{CATALOG_SIZE}</div>
          <p className="mt-2 text-sm text-muted-foreground">صنفاً مسعّراً في دليل المنتجات</p>
        </div>

        {/* USD */}
        <div className="bento-tile animate-rise p-6 [animation-delay:140ms]">
          <DollarSign className="size-7 text-primary" />
          <h3 className="mt-6 text-xl font-semibold">أسعار بالدولار</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            سعر ثابت وواضح لكل 1000 كغ، بدون مفاجآت.
          </p>
        </div>

        {/* Calculator */}
        <div className="bento-tile animate-rise p-6 [animation-delay:200ms]">
          <Calculator className="size-7 text-primary" />
          <h3 className="mt-6 text-xl font-semibold">حاسبة الوزن</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            احسب تكلفة شحنتك حسب وزنها الفعلي خلال ثوانٍ.
          </p>
        </div>

        {/* Routes */}
        <Link
          to="/routes"
          className="bento-tile group animate-rise p-6 md:col-span-2 [animation-delay:260ms]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RouteIcon className="size-5 text-primary" />
              {ORIGINS.length * DESTINATIONS.length} مسارات شحن
            </div>
            <ArrowLeft className="size-5 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-primary" />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex flex-col gap-2">
              {ORIGINS.map((o) => (
                <span
                  key={o}
                  className="rounded-full bg-surface-raised px-4 py-1.5 text-sm font-medium"
                >
                  {o}
                </span>
              ))}
            </div>
            <div className="relative h-px flex-1 bg-border">
              <Truck className="absolute -top-3 size-6 animate-travel text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {DESTINATIONS.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-primary/30 px-3 py-1.5 text-center text-xs text-foreground"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Warehouse image */}
        <div className="bento-tile animate-rise md:row-span-2 [animation-delay:320ms]">
          <img
            src={warehouse}
            alt="بضائع مغلفة جاهزة للشحن"
            width={1200}
            height={1200}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-shade" />
          <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6">
            <h3 className="text-xl font-semibold">كل أنواع البضائع</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              ألبسة، أحذية، قطع سيارات، إلكترونيات ومستحضرات.
            </p>
          </div>
        </div>

        {/* Prices preview */}
        <Link
          to="/prices"
          className="bento-tile group animate-rise p-6 md:col-span-2 [animation-delay:380ms]"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">نماذج من الأسعار</h3>
            <span className="flex items-center gap-1 text-sm text-primary">
              كل الأسعار
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">أربيل ← قامشلي - حسكة · لكل 1000 كغ</p>
          <ul className="mt-5 divide-y divide-border">
            {SAMPLE_PRICES.slice(0, 3).map((p) => (
              <li key={p.name} className="flex items-center justify-between py-3">
                <span className="text-sm">{p.name}</span>
                <span className="font-display text-lg font-bold" dir="ltr">
                  {formatUsd(p.price)}
                </span>
              </li>
            ))}
          </ul>
        </Link>

        {/* WhatsApp tile */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="bento-tile group animate-rise p-6 [animation-delay:440ms]"
        >
          <div className="grid size-12 place-items-center rounded-2xl bg-whatsapp text-whatsapp-foreground">
            <WhatsAppIcon className="size-7" />
          </div>
          <h3 className="mt-5 text-xl font-semibold">رد سريع على واتساب</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            اسألنا عن أي صنف أو احجز شحنتك مباشرة.
          </p>
        </a>
      </section>

      {/* How it works */}
      <section className="mt-24">
        <div className="max-w-xl">
          <span className="text-sm font-medium text-primary">كيف يعمل دليل الأسعار</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">ثلاث خطوات لتعرف تكلفة شحنتك</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="bento-tile p-7">
              <div className="flex items-center justify-between">
                <s.icon className="size-7 text-primary" />
                <span className="font-display text-5xl font-bold text-foreground/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative mt-24 overflow-hidden rounded-3xl border border-primary/30 bg-surface p-10 md:p-14">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">جاهز لشحن بضاعتك؟</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              تواصل معنا الآن على واتساب واحصل على عرض سعر لشحنتك خلال دقائق.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" />
                تواصل عبر واتساب
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={APP_URL} target="_blank" rel="noreferrer">
                دليل الأسعار
                <ArrowUpLeft />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
