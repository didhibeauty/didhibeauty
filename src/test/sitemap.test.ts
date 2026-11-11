import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { BRAND } from "@/config/brand";
import { ROUTES } from "@/i18n/routes";

const read = (f: string) => readFileSync(resolve(__dirname, "../../public", f), "utf8");
const SITE = "https://www.didhibeauty.com";

describe("sitemap.xml and robots.txt", () => {
  const xml = read("sitemap.xml");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  it("lists exactly every Spanish and English page, once, on the production domain", () => {
    const expected = Object.values(ROUTES).flatMap((l) => Object.values(l).map((p) => `${SITE}${p}`));
    expect([...locs].sort()).toEqual([...expected].sort());
    expect(new Set(locs).size).toBe(locs.length);
  });

  it("uses the same production domain as the page canonicals", () => {
    expect(BRAND.siteUrl).toBe(SITE);
  });

  it("robots.txt allows crawling and points to the sitemap", () => {
    const robots = read("robots.txt");
    expect(robots).not.toMatch(/^Disallow:\s*\/\s*$/m);
    expect(robots).toContain(`Sitemap: ${SITE}/sitemap.xml`);
  });
});
