import { describe, expect, it } from "vitest";

import { TREATMENTS } from "@/config/treatments";
import { localBusinessJsonLd, pageHead } from "@/lib/seo";

const ORIGIN = "https://www.didhibeauty.com";
const metaOf = (h: ReturnType<typeof pageHead>, key: string) =>
  h.meta.find((m) => m["name"] === key || m["property"] === key)?.["content"];

describe("SEO", () => {
  it("home page uses the requested Spanish title", () => {
    const h = pageHead({ lang: "es", page: "home", origin: ORIGIN, image: "hero" });
    expect(h.meta[0]).toEqual({ title: "Masajes en Puerto Banús y Marbella | Didhi Beauty" });
  });

  it("pages are indexable and canonical to the production domain", () => {
    const h = pageHead({ lang: "es", page: "treatments", origin: ORIGIN });
    expect(metaOf(h, "robots")).toBe("index, follow, max-image-preview:large");
    expect(h.links.find((l) => l.rel === "canonical")?.href).toBe(`${ORIGIN}/tratamientos`);
  });

  it("share image is the 1200x630 copy", () => {
    const h = pageHead({ lang: "es", page: "home", origin: ORIGIN, image: "hero" });
    expect(metaOf(h, "og:image:width")).toBe("1200");
    expect(metaOf(h, "og:image:height")).toBe("630");
  });

  it("business data uses the real phone and prices and has no ratings or reviews", () => {
    const d = localBusinessJsonLd("es", ORIGIN);
    const json = JSON.stringify(d);
    expect(d["telephone"]).toBe("+34610326355");
    expect(d["priceRange"]).toBe("40 € – 100 €");
    const offers = (d["hasOfferCatalog"] as { itemListElement: unknown[] }).itemListElement;
    expect(offers).toHaveLength(TREATMENTS.flatMap((t) => t.options).length);
    expect(json).not.toMatch(/aggregateRating|"review"/);
  });
});
