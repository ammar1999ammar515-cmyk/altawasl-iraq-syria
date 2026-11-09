import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, MapPin, MessageSquareText } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp";
import {
  CONTACTS,
  DESTINATIONS,
  ORIGINS,
  WHATSAPP_NUMBER,
  formatPhone,
  originNumber,
  whatsappLink,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا عبر واتساب | التواصل الذهبي للشحن السريع" },
      {
        name: "description",
        content: "راسلنا مباشرة على واتساب لحجز شحنتك والحصول على عرض سعر.",
      },
      { property: "og:title", content: "تواصل مع التواصل الذهبي للشحن السريع" },
      {
        property: "og:description",
        content: "رد سريع على واتساب لحجز الشحنات وعروض الأسعار.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

function ContactPage() {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState<string>(ORIGINS[0]);
  const [dest, setDest] = useState<string>(DESTINATIONS[0]);
  const [goods, setGoods] = useState("");
  const [weight, setWeight] = useState("");

  const message = [
    "مرحباً، أريد عرض سعر لشحنة:",
    name && `الاسم: ${name}`,
    `المسار: ${origin} ← ${dest}`,
    goods && `نوع البضاعة: ${goods}`,
    weight && `الوزن التقريبي: ${weight} كغ`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="mx-auto max-w-7xl px-5 pt-14">
      <header className="max-w-2xl animate-rise">
        <span className="text-sm font-medium text-primary">تواصل معنا</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">راسلنا مباشرة على واتساب</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          املأ التفاصيل وسنفتح لك محادثة واتساب جاهزة بالرسالة. أو اضغط الزر وابدأ مباشرة.
        </p>
      </header>

      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {/* Booking form → WhatsApp */}
        <form
          className="bento-tile animate-rise space-y-5 p-7 lg:col-span-3"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(
              whatsappLink(message, originNumber(origin)),
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquareText className="size-5 text-primary" />
            طلب عرض سعر
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">الاسم</span>
              <input
                className={fieldClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسمك الكريم"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">الوزن التقريبي (كغ)</span>
              <input
                className={fieldClass}
                inputMode="numeric"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="مثال: 500"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">من</span>
              <select
                className={fieldClass}
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                {ORIGINS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted-foreground">إلى</span>
              <select className={fieldClass} value={dest} onChange={(e) => setDest(e.target.value)}>
                {DESTINATIONS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="block space-y-2 text-sm">
            <span className="text-muted-foreground">نوع البضاعة</span>
            <input
              className={fieldClass}
              value={goods}
              onChange={(e) => setGoods(e.target.value)}
              placeholder="مثال: ألبسة، قطع سيارات..."
            />
          </label>

          <Button type="submit" variant="whatsapp" size="xl" className="w-full">
            <WhatsAppIcon className="size-5" />
            اطلب عرض السعر على واتساب
          </Button>
        </form>

        {/* Head office */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="bento-tile group animate-rise flex flex-col justify-between p-7 lg:col-span-2 [animation-delay:100ms]"
        >
          <div className="grid size-14 place-items-center rounded-2xl bg-whatsapp text-whatsapp-foreground">
            <WhatsAppIcon className="size-8" />
          </div>
          <div className="mt-8">
            <p className="text-sm text-muted-foreground">الإدارة العامة - أربيل</p>
            <p className="mt-1 font-display text-3xl font-bold" dir="ltr">
              {formatPhone(WHATSAPP_NUMBER)}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-whatsapp">
              ابدأ المحادثة الآن
              <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </div>
        </a>
      </div>

      {/* All offices */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">مكاتبنا وأرقام الواتساب</h2>
        <p className="mt-2 text-muted-foreground">اضغط على أي رقم لفتح محادثة واتساب مباشرة.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {CONTACTS.map((c) => (
            <div key={c.country} className="bento-tile p-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {c.flag}
                </span>
                <h3 className="text-xl font-bold">{c.country}</h3>
              </div>
              <div className="mt-6 space-y-6">
                {c.offices.map((o) => (
                  <div key={o.city}>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin className="size-4 text-primary" />
                      {o.city}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {o.numbers.map((n) => (
                        <li key={n}>
                          <a
                            href={whatsappLink(undefined, n)}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`واتساب ${o.city} ${formatPhone(n)}`}
                            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-2.5 transition-colors hover:border-whatsapp/60 hover:bg-whatsapp/10"
                          >
                            <span className="font-display text-sm font-semibold" dir="ltr">
                              {formatPhone(n)}
                            </span>
                            <WhatsAppIcon className="size-4 text-whatsapp" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
