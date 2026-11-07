/**
 * TREATMENT CATALOG
 * -----------------
 * Edit names, descriptions, durations and prices here.
 * PRICES AND DURATIONS ARE PLACEHOLDERS — replace them with the real ones.
 * The order of this list is the order shown on the site.
 */
import type { Lang } from "@/i18n/routes";
import type { ImageKey } from "./images";

export type Treatment = {
  id: string;
  image: ImageKey;
  /** Duration in minutes — PLACEHOLDER */
  durationMin: number;
  /** Price in euros — PLACEHOLDER */
  price: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  /** Show on the home page */
  featured?: boolean;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "relaxing",
    image: "relaxing",
    durationMin: 60,
    price: 80,
    featured: true,
    name: { es: "Masaje Relajante", en: "Relaxing Massage" },
    description: {
      es: "Movimientos suaves y envolventes para liberar tensiones, calmar la mente y devolver al cuerpo su ritmo natural.",
      en: "Slow, enveloping strokes to release tension, quiet the mind and return the body to its natural rhythm.",
    },
  },
  {
    id: "deep-tissue",
    image: "deepTissue",
    durationMin: 60,
    price: 95,
    featured: true,
    name: { es: "Masaje de Tejido Profundo", en: "Deep Tissue Massage" },
    description: {
      es: "Presión firme y precisa sobre las capas musculares más profundas para aliviar la rigidez acumulada.",
      en: "Firm, precise pressure on the deeper muscle layers to ease built-up stiffness.",
    },
  },
  {
    id: "therapeutic",
    image: "therapeutic",
    durationMin: 60,
    price: 90,
    name: { es: "Masaje Terapéutico", en: "Therapeutic Massage" },
    description: {
      es: "Una sesión adaptada a las zonas que más lo necesitan, combinando técnicas para recuperar bienestar y movilidad.",
      en: "A session tailored to the areas that need it most, combining techniques to restore comfort and ease of movement.",
    },
  },
  {
    id: "hot-stone",
    image: "hotStone",
    durationMin: 75,
    price: 110,
    featured: true,
    name: { es: "Masaje con Piedras Calientes", en: "Hot Stone Massage" },
    description: {
      es: "El calor de las piedras volcánicas se funde con el masaje para una relajación profunda y reconfortante.",
      en: "The warmth of volcanic stones melts into the massage for a deep, comforting relaxation.",
    },
  },
  {
    id: "aromatherapy",
    image: "aromatherapy",
    durationMin: 60,
    price: 90,
    name: { es: "Masaje con Aromaterapia", en: "Aromatherapy Massage" },
    description: {
      es: "Aceites esenciales seleccionados según tu momento, para un masaje que relaja los sentidos.",
      en: "Essential oils chosen for how you feel today, for a massage that soothes every sense.",
    },
  },
  {
    id: "lymphatic",
    image: "lymphatic",
    durationMin: 60,
    price: 95,
    name: { es: "Masaje Linfático", en: "Lymphatic Massage" },
    description: {
      es: "Maniobras lentas, ligeras y rítmicas que aportan una agradable sensación de ligereza.",
      en: "Slow, light and rhythmic movements that leave a pleasant feeling of lightness.",
    },
  },
  {
    id: "thai",
    image: "thai",
    durationMin: 90,
    price: 120,
    name: { es: "Masaje Tailandés", en: "Thai Massage" },
    description: {
      es: "Estiramientos asistidos y presiones rítmicas inspirados en la tradición tailandesa.",
      en: "Assisted stretches and rhythmic pressure inspired by the Thai tradition.",
    },
  },
  {
    id: "sports",
    image: "sports",
    durationMin: 60,
    price: 90,
    name: { es: "Masaje Deportivo", en: "Sports Massage" },
    description: {
      es: "Pensado para personas activas: prepara el cuerpo antes del esfuerzo y favorece la recuperación después.",
      en: "Designed for active people: prepares the body before exercise and supports recovery afterwards.",
    },
  },
];
