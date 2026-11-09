import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp";
import { COMPANY_SHORT, whatsappLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/routes", label: "المسارات" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="شعار التواصل الذهبي"
            width={44}
            height={44}
            className="size-11 rounded-xl bg-foreground object-contain p-0.5"
          />
          <div className="leading-tight">
            <span className="block font-display text-lg font-bold">{COMPANY_SHORT}</span>
            <span className="block text-xs text-muted-foreground">للشحن السريع</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-surface-raised data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" size="default" className="hidden sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4" />
              اطلب عرض سعر
            </a>
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="md:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-muted-foreground data-[status=active]:bg-surface-raised data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="whatsapp" size="xl" className="mt-2">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" />
                اطلب عرض سعر عبر واتساب
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
