import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import * as site from "@/lib/site";
import { routeTree } from "@/routeTree.gen";

describe("WhatsApp contact link", () => {
  it("opens a direct wa.me chat with the company number and a prefilled message", () => {
    const url = new URL(site.whatsappLink("مرحبا"));
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe(`/${site.WHATSAPP_NUMBER}`);
    expect(url.searchParams.get("text")).toBe("مرحبا");
  });

  it("uses digits only for the number", () => {
    expect(site.WHATSAPP_NUMBER).toMatch(/^\d+$/);
  });
});

describe("Prices are only shared via WhatsApp", () => {
  it("has no prices page on the website", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/prices");
    expect(matches.at(-1)?.routeId).toBe(rootRouteId);
  });

  it("site data exposes no price list or price directory link", () => {
    expect(Object.keys(site)).not.toContain("SAMPLE_PRICES");
    expect(Object.keys(site)).not.toContain("APP_URL");
  });
});
