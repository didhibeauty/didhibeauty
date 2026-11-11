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
import treatmentReflexology from "@/assets/treatment-reflexology.webp";
// Real photos of the Didhi Beauty space (Puerto Banús)
import spaceTreatmentRoom from "@/assets/space-treatment-room.webp";
import spaceReception from "@/assets/space-reception.webp";
import spaceLounge from "@/assets/space-lounge.webp";
import spaceStorefront from "@/assets/space-storefront.webp";
// Smaller copy of the home photo for phones (faster first load)
import heroSpaRoom960 from "@/assets/hero-spa-room-960.webp";
// Share previews (WhatsApp, Facebook, X…), cropped to 1200×630
import ogHome from "@/assets/og/og-home.jpg";
import ogSpaceRoom from "@/assets/og/og-space-room.jpg";
import ogHotStone from "@/assets/og/og-hot-stone.jpg";
import ogAromatherapy from "@/assets/og/og-aromatherapy.jpg";
import ogStorefront from "@/assets/og/og-storefront.jpg";

import type { Lang } from "@/i18n/routes";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: Record<Lang, string>;
};

export const IMAGES = {
  spaceRoom: {
    src: spaceTreatmentRoom,
    width: 740,
    height: 1078,
    alt: {
      es: "Sala de masajes de Didhi Beauty con camilla, orquídeas y luz cálida",
      en: "Didhi Beauty massage room with treatment bed, orchids and warm light",
    },
  },
  spaceReception: {
    src: spaceReception,
    width: 689,
    height: 539,
    alt: {
      es: "Recepción de Didhi Beauty con detalles naturales y aroma ambiental",
      en: "Didhi Beauty reception with natural details and room fragrance",
    },
  },
  spaceLounge: {
    src: spaceLounge,
    width: 689,
    height: 528,
    alt: {
      es: "Sala de espera de Didhi Beauty con sillones y lámparas de fibra natural",
      en: "Didhi Beauty waiting area with armchairs and natural-fibre lamps",
    },
  },
  spaceStorefront: {
    src: spaceStorefront,
    width: 1448,
    height: 1086,
    alt: {
      es: "Fachada de Didhi Beauty, centro de masajes y estética en Puerto Banús",
      en: "Didhi Beauty storefront, massage and beauty center in Puerto Banús",
    },
  },
  reflexology: {
    src: treatmentReflexology,
    width: 900,
    height: 1125,
    alt: {
      es: "Varilla de madera para reflexología, piedras y aceite natural",
      en: "Wooden reflexology stick, stones and natural oil",
    },
  },
  hero: {
    src: heroSpaRoom,
    width: 1920,
    height: 1088,
    alt: {
      es: "Camilla de masaje con velas, olivo y cortinas de lino en una sala de luz cálida",
      en: "Massage bed with candles, olive branches and linen curtains in a warmly lit room",
    },
  },
  about: {
    src: aboutTherapist,
    width: 900,
    height: 1125,
    alt: {
      es: "Manos preparando aceite natural para un masaje",
      en: "Hands warming natural oil before a massage",
    },
  },
  terrace: {
    src: experienceTerrace,
    width: 1920,
    height: 1280,
    alt: {
      es: "Tumbonas de relajación con té de hierbas a la sombra de un olivo",
      en: "Relaxation loungers with herbal tea in the shade of an olive tree",
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

/** Responsive sources for the home photo (browser picks the lightest that fits). */
export const HERO_SRCSET = `${heroSpaRoom960} 960w, ${heroSpaRoom} 1920w`;

/** 1200×630 share-preview copies of the photo each page shows at the top. */
export const OG_IMAGES: Partial<Record<ImageKey, string>> = {
  hero: ogHome,
  spaceRoom: ogSpaceRoom,
  hotStone: ogHotStone,
  aromatherapy: ogAromatherapy,
  spaceStorefront: ogStorefront,
};

/** Gallery order and layout. size: "tall" | "wide" | "square" */
export const GALLERY: { image: ImageKey; size: "tall" | "wide" | "square" }[] = [
  { image: "spaceRoom", size: "tall" },
  { image: "spaceLounge", size: "wide" },
  { image: "aromatherapy", size: "square" },
  { image: "hotStone", size: "square" },
  { image: "spaceStorefront", size: "wide" },
  { image: "ritual", size: "tall" },
  { image: "spaceReception", size: "square" },
  { image: "candles", size: "square" },
];
