import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo.jpg";
import {
  COMPANY_NAME,
  CONTACTS,
  DESTINATIONS,
  ORIGINS,
  WHATSAPP_NUMBER,
  formatPhone,
  whatsappLink,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              className="size-12 rounded-xl bg-foreground object-contain p-0.5"
            />
            <span className="font-display text-xl font-bold">{COMPANY_NAME}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            شحن بري سريع وموثوق من العراق إلى سوريا. للأسعار والحجز تواصل معنا عبر واتساب.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">المسارات</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>من: {ORIGINS.join(" · ")}</li>
            <li>إلى: {DESTINATIONS.join(" · ")}</li>
            <li>مكاتبنا: {CONTACTS.map((c) => c.country).join(" · ")}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">روابط</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/routes" className="hover:text-primary">
                المسارات
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                تواصل معنا
              </Link>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                واتساب الإدارة: <span dir="ltr">{formatPhone(WHATSAPP_NUMBER)}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {COMPANY_NAME}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
