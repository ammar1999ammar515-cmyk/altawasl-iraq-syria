import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpLeft,
  MapPin,
  MessageSquareText,
  PackageCheck,
  Route as RouteIcon,
  ShieldCheck,
  Truck,
} from "lucide-react";

import heroTruck from "@/assets/hero-truck.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp";
import { DESTINATIONS, ORIGINS, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "التواصل الذهبي للشحن السريع | شحن من العراق إلى سوريا" },
      {
        name: "description",
        content:
          "شحن بري سريع وموثوق من أربيل وبغداد إلى القامشلي والحسكة والرقة وحلب ودمشق. اطلب عرض سعرك عبر واتساب.",
      },
      { property: "og:title", content: "التواصل الذهبي للشحن السريع | من العراق إلى سوريا" },
      {
        property: "og:description",
        content: "شحن بري سريع وموثوق من العراق إلى سوريا. عرض السعر عبر واتساب مباشرة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://iraq-syria-shipping-rates.lovable.app/og/home.jpg" },
      { name: "twitter:image", content: "https://iraq-syria-shipping-rates.lovable.app/og/home.jpg" },
    ],
  }),
  staticData: { sitemap: true },
  component: Index,
});

const STEPS = [
  {
    icon: MapPin,
    title: "حدّد المسار",
    text: "اختر مدينة الانطلاق في العراق والوجهة في سوريا.",
  },
  {
    icon: MessageSquareText,
    title: "راسلنا على واتساب",
    text: "أرسل نوع البضاعة ووزنها التقريبي في رسالة واحدة.",
  },
  {
    icon: PackageCheck,
    title: "استلم عرض السعر",
    text: "نرسل لك عرض سعر خاص بشحنتك ونبدأ التنفيذ.",
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
              شحن بري · العراق ← سوريا
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.25] md:text-6xl md:leading-[1.2]">
              بضاعتك تصل <span className="text-ember">أسرع</span>، وبأمان تام.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              نشحن من أربيل وبغداد إلى المدن السورية الرئيسية. راسلنا على واتساب واحصل على عرض سعر
              خاص بشحنتك.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-5" />
                  اطلب عرض سعر عبر واتساب
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/routes">
                  تعرّف على المسارات
                  <ArrowLeft />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Routes count */}
        <div className="bento-tile animate-rise p-6 [animation-delay:80ms]">
          <RouteIcon className="size-7 text-primary" />
          <div className="mt-6 font-display text-6xl font-bold text-ember">
            {ORIGINS.length * DESTINATIONS.length}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">مسارات شحن بين العراق وسوريا</p>
        </div>

        {/* Quote via WhatsApp */}
        <div className="bento-tile animate-rise p-6 [animation-delay:140ms]">
          <MessageSquareText className="size-7 text-primary" />
          <h3 className="mt-6 text-xl font-semibold">عرض سعر خاص</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            كل شحنة لها عرض سعر يناسبها، يصلك مباشرة على واتساب.
          </p>
        </div>

        {/* Safety */}
        <div className="bento-tile animate-rise p-6 [animation-delay:200ms]">
          <ShieldCheck className="size-7 text-primary" />
          <h3 className="mt-6 text-xl font-semibold">شحن موثوق</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            نتابع شحنتك من التحميل حتى التسليم في الوجهة.
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
              المسارات
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
            <h3 className="text-xl font-semibold">تغليف وتحميل بعناية</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              نتعامل مع بضاعتك كأنها بضاعتنا، من المستودع حتى الوصول.
            </p>
          </div>
        </div>

        {/* WhatsApp tile */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="bento-tile group animate-rise flex flex-col justify-between p-6 md:row-span-2 [animation-delay:380ms]"
        >
          <div className="grid size-14 place-items-center rounded-2xl bg-whatsapp text-whatsapp-foreground">
            <WhatsAppIcon className="size-8" />
          </div>
          <div>
            <h3 className="mt-5 text-xl font-semibold">الأسعار عبر واتساب فقط</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              راسلنا بتفاصيل شحنتك ونرد عليك بعرض السعر.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-whatsapp">
              ابدأ المحادثة
              <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </div>
        </a>

        {/* Booking tile */}
        <Link
          to="/contact"
          className="bento-tile group animate-rise flex flex-col justify-between p-6 md:col-span-2 [animation-delay:440ms]"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">احجز شحنتك في دقيقة</h3>
            <ArrowLeft className="size-5 text-muted-foreground transition-transform group-hover:-translate-x-1 group-hover:text-primary" />
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            املأ نموذجاً قصيراً بالمسار والوزن، وسنفتح لك محادثة واتساب جاهزة بالطلب.
          </p>
          <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-surface-raised px-4 py-2 text-sm">
            <MessageSquareText className="size-4 text-primary" />
            نموذج طلب الشحن
          </span>
        </Link>
      </section>

      {/* How it works */}
      <section className="mt-24">
        <div className="max-w-xl">
          <span className="text-sm font-medium text-primary">كيف نعمل</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">ثلاث خطوات لشحن بضاعتك</h2>
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
              تواصل معنا الآن على واتساب واحصل على عرض سعر لشحنتك.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" />
              تواصل عبر واتساب
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
