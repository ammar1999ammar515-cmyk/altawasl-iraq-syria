import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp";
import { APP_URL, CATALOG_SIZE, SAMPLE_PRICES, formatUsd, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "أسعار الشحن | التواصل الذهبي للشحن السريع" },
      {
        name: "description",
        content: "نماذج من أسعار الشحن بالدولار لكل 1000 كغ من أربيل إلى القامشلي والحسكة.",
      },
      { property: "og:title", content: "أسعار الشحن من العراق إلى سوريا" },
      {
        property: "og:description",
        content: "أسعار واضحة بالدولار لكل صنف، مع دليل كامل لأكثر من 68 صنف.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricesPage,
});

function PricesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-14">
      <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl animate-rise">
          <span className="text-sm font-medium text-primary">الأسعار</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">نماذج من أسعار الشحن</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            مسار أربيل ← قامشلي - حسكة، السعر لكل 1000 كغ بالدولار الأمريكي.
          </p>
        </div>
        <Button asChild variant="hero" size="xl">
          <a href={APP_URL} target="_blank" rel="noreferrer">
            كل الأسعار ({CATALOG_SIZE} صنف)
            <ArrowUpLeft />
          </a>
        </Button>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_PRICES.map((p, i) => (
          <article
            key={p.name}
            className="bento-tile animate-rise flex flex-col justify-between p-6"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <h2 className="text-lg font-semibold leading-8">{p.name}</h2>
            <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground">لكل 1000 كغ</span>
              <span className="font-display text-3xl font-bold text-ember" dir="ltr">
                {formatUsd(p.price)}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground">
        <Info className="mt-0.5 size-5 shrink-0 text-primary" />
        <p className="leading-7">
          الأسعار المعروضة للاطلاع وقد تتغير. للحصول على السعر المحدّث لكل مسار وحساب التكلفة حسب
          الوزن، افتح دليل الأسعار أو{" "}
          <a
            href={whatsappLink("مرحباً، أريد عرض سعر محدّث لشحنتي.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-whatsapp hover:underline"
          >
            <WhatsAppIcon className="size-4" />
            اطلب عرض سعر على واتساب
          </a>
          .
        </p>
      </div>
    </div>
  );
}
