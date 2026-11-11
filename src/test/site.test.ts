import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import * as site from "@/lib/site";
import { routeTree } from "@/routeTree.gen";

const allNumbers = site.CONTACTS.flatMap((c) => c.offices.flatMap((o) => o.numbers));

describe("WhatsApp contact links", () => {
  it("general buttons open the Erbil head office number", () => {
    expect(site.WHATSAPP_NUMBER).toBe("9647506550001");
    const url = new URL(site.whatsappLink("مرحبا"));
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/9647506550001");
    expect(url.searchParams.get("text")).toBe("مرحبا");
  });

  it("lists every office number the company provided", () => {
    expect(allNumbers.sort()).toEqual(
      [
        "9647506550001",
        "9647506560001",
        "9647517236278",
        "9647702963703",
        "9647721100074",
        "963932904444",
        "963981966403",
        "963981275000",
        "9647506550001",
        "8615024571462",
      ].sort(),
    );
  });

  it("stores numbers as digits only so wa.me links work", () => {
    for (const n of allNumbers) expect(n).toMatch(/^\d+$/);
  });

  it("sends booking requests from Baghdad to the Baghdad office", () => {
    expect(site.originNumber("بغداد")).toBe("9647702963703");
    expect(site.originNumber("أربيل")).toBe("9647506550001");
  });

  it("formats numbers for display", () => {
    expect(site.formatPhone("9647506550001")).toBe("+964 750 655 0001");
    expect(site.formatPhone("963932904444")).toBe("+963 932 904 444");
    expect(site.formatPhone("8615024571462")).toBe("+86 150 2457 1462");
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
