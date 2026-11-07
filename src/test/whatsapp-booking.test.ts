import { describe, expect, it } from "vitest";

import { WHATSAPP_NUMBER } from "@/config/business";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const textOf = (url: string) => new URL(url).searchParams.get("text");

describe("WhatsApp booking", () => {
  it("opens a chat with the central business number", () => {
    expect(buildWhatsAppUrl("es").startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`)).toBe(true);
  });

  it("names the selected treatment in the Spanish booking message", () => {
    expect(textOf(buildWhatsAppUrl("es", "Masaje Relajante"))).toBe(
      "Hola, me gustaría reservar una cita para el tratamiento de Masaje Relajante. ¿Podrían informarme sobre la disponibilidad? Gracias.",
    );
  });

  it("names the selected treatment in the English booking message", () => {
    expect(textOf(buildWhatsAppUrl("en", "Hot Stone Massage"))).toBe(
      "Hello, I would like to book an appointment for Hot Stone Massage. Could you please let me know your availability? Thank you.",
    );
  });

  it("uses a general booking request when no treatment is chosen", () => {
    expect(buildWhatsAppMessage("en")).not.toContain("for ");
    expect(buildWhatsAppMessage("es")).not.toContain("tratamiento de");
  });
});
