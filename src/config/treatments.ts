/**
 * TREATMENT CATALOG
 * -----------------
 * Edit names, descriptions, durations and prices here.
 * Each treatment can have several options (e.g. 1 hour / 30 minutes).
 * The order of this list is the order shown on the site.
 */
import type { Lang } from "@/i18n/routes";
import type { ImageKey } from "./images";

export type TreatmentOption = {
  /** Duration in minutes. Leave out when the price is per session. */
  durationMin?: number;
  /** Price in euros */
  price: number;
};

export type Treatment = {
  id: string;
  image: ImageKey;
  options: TreatmentOption[];
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  /** Show on the home page */
  featured?: boolean;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "relaxing",
    image: "relaxing",
    featured: true,
    options: [
      { durationMin: 60, price: 70 },
      { durationMin: 30, price: 50 },
    ],
    name: { es: "Masaje Relajante", en: "Relaxing Massage" },
    description: {
      es: "Movimientos suaves y envolventes para liberar tensiones, calmar la mente y devolver al cuerpo su ritmo natural.",
      en: "Slow, enveloping strokes to release tension, quiet the mind and return the body to its natural rhythm.",
    },
  },
  {
    id: "sports",
    image: "sports",
    featured: true,
    options: [
      { durationMin: 60, price: 80 },
      { durationMin: 30, price: 60 },
    ],
    name: { es: "Masaje Deportivo", en: "Sports Massage" },
    description: {
      es: "Presión firme y precisa pensada para personas activas: prepara el cuerpo antes del esfuerzo y ayuda a recuperarse después.",
      en: "Firm, precise pressure designed for active people: prepares the body before exercise and helps it recover afterwards.",
    },
  },
  {
    id: "full",
    image: "therapeutic",
    featured: true,
    options: [
      { durationMin: 60, price: 100 },
      { durationMin: 30, price: 65 },
    ],
    name: { es: "Masaje Completo", en: "Full Body Massage" },
    description: {
      es: "Un masaje de cuerpo entero, de la cabeza a los pies, para soltar tensiones y salir con una sensación de ligereza total.",
      en: "A head-to-toe, full body massage to release tension and leave you with a complete feeling of lightness.",
    },
  },
  {
    id: "reflexology",
    image: "reflexology",
    options: [
      { durationMin: 60, price: 60 },
      { durationMin: 30, price: 40 },
    ],
    name: { es: "Reflexología", en: "Reflexology" },
    description: {
      es: "Presiones suaves y precisas en puntos concretos de los pies para una relajación profunda de todo el cuerpo.",
      en: "Gentle, precise pressure on specific points of the feet for a deep, whole-body relaxation.",
    },
  },
  {
    id: "wood-therapy",
    image: "deepTissue",
    options: [{ price: 50 }],
    name: { es: "Maderoterapia", en: "Wood Therapy" },
    description: {
      es: "Técnica de masaje con instrumentos de madera que trabajan el cuerpo de forma intensa y revitalizante.",
      en: "A massage technique using wooden tools that work the body in an intense, revitalizing way.",
    },
  },
];
