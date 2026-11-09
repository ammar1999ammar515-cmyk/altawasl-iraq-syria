import { describe, expect, it } from "vitest";

import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";

describe("WhatsApp contact link", () => {
  it("opens a direct wa.me chat with the company number and a prefilled message", () => {
    const url = new URL(whatsappLink("مرحبا"));
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe(`/${WHATSAPP_NUMBER}`);
    expect(url.searchParams.get("text")).toBe("مرحبا");
  });

  it("uses digits only for the number", () => {
    expect(WHATSAPP_NUMBER).toMatch(/^\d+$/);
  });
});
