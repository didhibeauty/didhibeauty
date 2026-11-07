/**
 * IMAGE LIBRARY
 * -------------
 * Every photo on the site is imported here. To replace a photo, drop the new
 * file into src/assets/ and change the import path below — nothing else to edit.
 */
import heroSpaRoom from "@/assets/hero-spa-room.webp";
import aboutTherapist from "@/assets/about-therapist.webp";
import experienceTerrace from "@/assets/experience-terrace.webp";
import experienceRitual from "@/assets/experience-ritual.webp";
import galleryInterior from "@/assets/gallery-interior.webp";
import galleryCandles from "@/assets/gallery-candles.webp";
import treatmentRelaxing from "@/assets/treatment-relaxing.webp";
import treatmentDeepTissue from "@/assets/treatment-deep-tissue.webp";
import treatmentTherapeutic from "@/assets/treatment-therapeutic.webp";
import treatmentHotStone from "@/assets/treatment-hot-stone.webp";
import treatmentAromatherapy from "@/assets/treatment-aromatherapy.webp";
import treatmentLymphatic from "@/assets/treatment-lymphatic.webp";
import treatmentThai from "@/assets/treatment-thai.webp";
import treatmentSports from "@/assets/treatment-sports.webp";

import type { Lang } from "@/i18n/routes";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: Record<Lang, string>;
};

export const IMAGES = {
  hero: {
    src: heroSpaRoom,
    width: 1920,
    height: 1088,
    alt: {
      es: "Sala de masajes luminosa con vistas al Mediterráneo en Marbella",
      en: "Bright massage room overlooking the Mediterranean in Marbella",
    },
  },
  about: {
    src: aboutTherapist,
    width: 900,
    height: 1125,
    alt: {
      es: "Manos de la terapeuta preparando aceite natural para un masaje",
      en: "Therapist's hands warming natural oil before a massage",
    },
  },
  terrace: {
    src: experienceTerrace,
    width: 1920,
    height: 1280,
    alt: {
      es: "Terraza mediterránea de relajación con vistas al mar en Marbella",
      en: "Mediterranean relaxation terrace with sea views in Marbella",
    },
  },
  ritual: {
    src: experienceRitual,
    width: 900,
    height: 1125,
    alt: {
      es: "Ritual de bienvenida con flores de azahar, velas y té de hierbas",
      en: "Welcome ritual with orange blossom, candles and herbal tea",
    },
  },
  interior: {
    src: galleryInterior,
    width: 900,
    height: 1125,
    alt: {
      es: "Pasillo con arcos de piedra que conduce a la sala de tratamientos",
      en: "Stone-arched corridor leading to the treatment room",
    },
  },
  candles: {
    src: galleryCandles,
    width: 900,
    height: 720,
    alt: {
      es: "Velas encendidas y toallas suaves en un estante de travertino",
      en: "Lit candles and soft towels on a travertine shelf",
    },
  },
  relaxing: {
    src: treatmentRelaxing,
    width: 900,
    height: 1125,
    alt: {
      es: "Toallas de algodón, lavanda y aceite de masaje sobre travertino",
      en: "Cotton towels, lavender and massage oil on travertine",
    },
  },
  deepTissue: {
    src: treatmentDeepTissue,
    width: 900,
    height: 1125,
    alt: {
      es: "Herramientas de masaje de madera de olivo y bálsamo ámbar",
      en: "Olive wood massage tools and amber balm",
    },
  },
  therapeutic: {
    src: treatmentTherapeutic,
    width: 900,
    height: 1125,
    alt: {
      es: "Eucalipto fresco y bálsamo natural en tarro de cerámica",
      en: "Fresh eucalyptus and natural balm in a ceramic jar",
    },
  },
  hotStone: {
    src: treatmentHotStone,
    width: 900,
    height: 1125,
    alt: {
      es: "Piedras volcánicas calientes apiladas sobre una toalla",
      en: "Warm volcanic stones stacked on a towel",
    },
  },
  aromatherapy: {
    src: treatmentAromatherapy,
    width: 900,
    height: 1125,
    alt: {
      es: "Aceites esenciales con azahar y romero",
      en: "Essential oils with orange blossom and rosemary",
    },
  },
  lymphatic: {
    src: treatmentLymphatic,
    width: 900,
    height: 1125,
    alt: {
      es: "Cepillo corporal natural y agua con limón y menta",
      en: "Natural body brush and water with lemon and mint",
    },
  },
  thai: {
    src: treatmentThai,
    width: 900,
    height: 1125,
    alt: {
      es: "Saquitos de hierbas tailandesas, hierba limón y orquídea",
      en: "Thai herbal compresses, lemongrass and orchid",
    },
  },
  sports: {
    src: treatmentSports,
    width: 900,
    height: 1125,
    alt: {
      es: "Toalla enrollada, bola de corcho y bálsamo de recuperación",
      en: "Rolled towel, cork ball and recovery balm",
    },
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

/** Gallery order and layout. size: "tall" | "wide" | "square" */
export const GALLERY: { image: ImageKey; size: "tall" | "wide" | "square" }[] = [
  { image: "interior", size: "tall" },
  { image: "candles", size: "wide" },
  { image: "aromatherapy", size: "square" },
  { image: "hotStone", size: "square" },
  { image: "terrace", size: "wide" },
  { image: "ritual", size: "tall" },
  { image: "relaxing", size: "square" },
  { image: "thai", size: "square" },
];
