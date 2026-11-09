import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp";
import { DESTINATIONS, ORIGINS, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "مسارات الشحن | التواصل الذهبي للشحن السريع" },
      {
        name: "description",
        content: "مسارات الشحن من أربيل وبغداد إلى القامشلي والحسكة والرقة وحلب ودمشق.",
      },
      { property: "og:title", content: "مسارات الشحن من العراق إلى سوريا" },
      {
        property: "og:description",
        content: "انطلاق من أربيل وبغداد، وتوصيل إلى أربع وجهات رئيسية في سوريا.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-14">
      <header className="max-w-2xl animate-rise">
        <span className="text-sm font-medium text-primary">المسارات</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">من العراق إلى سوريا</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          نقطتا انطلاق في العراق، وأربع وجهات في سوريا. لكل مسار سعره الخاص لكل صنف.
        </p>
      </header>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {ORIGINS.map((origin, oi) => (
          <section
            key={origin}
            className="bento-tile animate-rise p-7"
            style={{ animationDelay: `${oi * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-ember text-primary-foreground">
                <MapPin className="size-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">مدينة الانطلاق</p>
                <h2 className="text-2xl font-bold">{origin}</h2>
              </div>
            </div>

            <ul className="mt-7 space-y-3">
              {DESTINATIONS.map((dest) => (
                <li
                  key={dest}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background/40 px-4 py-3.5"
                >
                  <span className="text-sm font-medium">{origin}</span>
                  <div className="relative h-px flex-1 bg-border">
                    <Truck className="absolute -top-2.5 size-5 animate-travel text-primary" />
                  </div>
                  <span className="text-sm font-semibold">{dest}</span>
                  <a
                    href={whatsappLink(`مرحباً، أريد الاستفسار عن الشحن من ${origin} إلى ${dest}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`استفسر عن مسار ${origin} إلى ${dest} عبر واتساب`}
                    className="grid size-8 place-items-center rounded-full bg-whatsapp/15 text-whatsapp transition-colors hover:bg-whatsapp hover:text-whatsapp-foreground"
                  >
                    <WhatsAppIcon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6">
        <p className="text-muted-foreground">لديك وجهة غير موجودة في القائمة؟ اسألنا مباشرة.</p>
        <Button asChild variant="whatsapp" size="lg">
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" />
            اسأل على واتساب
            <ArrowLeft />
          </a>
        </Button>
      </div>
    </div>
  );
}
