import { describe, expect, it } from "vitest";

import { BUSINESS, WHATSAPP_NUMBER } from "@/config/business";
import { TREATMENTS } from "@/config/treatments";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const prices = (id: string) =>
  TREATMENTS.find((t) => t.id === id)?.options.map((o) => [o.durationMin ?? null, o.price]);

describe("Didhi Beauty business rules", () => {
  it("sends every booking to WhatsApp 610 32 63 55 (Spain)", () => {
    expect(WHATSAPP_NUMBER).toBe("34610326355");
    expect(buildWhatsAppUrl("es", "Reflexología")).toContain("https://wa.me/34610326355?");
  });

  it("opens the Puerto Banús address in Google Maps", () => {
    expect(BUSINESS.mapsUrl).toContain("google.com/maps");
    expect(decodeURIComponent(BUSINESS.mapsUrl)).toContain("Avenida Julio Iglesias, Puerto Banús");
  });

  it("prices the relaxing massage at 70 € per hour and 50 € per half hour", () => {
    expect(prices("relaxing")).toEqual([[60, 70], [30, 50]]);
  });

  it("prices the sports massage at 80 € per hour and 60 € per half hour", () => {
    expect(prices("sports")).toEqual([[60, 80], [30, 60]]);
  });

  it("prices the full body massage at 100 € per hour and 65 € per half hour", () => {
    expect(prices("full")).toEqual([[60, 100], [30, 65]]);
  });

  it("prices reflexology at 60 € per hour and 40 € per half hour", () => {
    expect(prices("reflexology")).toEqual([[60, 60], [30, 40]]);
  });

  it("prices wood therapy at 50 € per session", () => {
    expect(prices("wood-therapy")).toEqual([[null, 50]]);
  });

  it("no longer offers the deep tissue massage", () => {
    expect(TREATMENTS.some((t) => t.id === "deep-tissue")).toBe(false);
  });

  it("shows the confirmed opening hours in both languages", () => {
    expect(BUSINESS.hours.es).toEqual([
      "Lunes a viernes: 11:00 – 19:00",
      "Sábado: 09:00 – 17:00",
      "Domingo: cerrado",
    ]);
    expect(BUSINESS.hours.en).toEqual([
      "Monday to Friday: 11:00 – 19:00",
      "Saturday: 09:00 – 17:00",
      "Sunday: closed",
    ]);
  });
});
