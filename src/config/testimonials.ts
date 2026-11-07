/**
 * TESTIMONIALS
 * ------------
 * DEMONSTRATION CONTENT ONLY. These are NOT real customer reviews.
 * Replace with genuine reviews (with the client's permission) and then set
 * `TESTIMONIALS_ARE_DEMO` to false to remove the "demonstration" labels.
 */
import type { Lang } from "@/i18n/routes";

export const TESTIMONIALS_ARE_DEMO = true;

export type Testimonial = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: Record<Lang, string>;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Cliente de ejemplo · Example client",
    rating: 5,
    text: {
      es: "Texto de ejemplo: aquí aparecerá la opinión real de un cliente sobre su experiencia.",
      en: "Sample text: a real client's review of their experience will appear here.",
    },
  },
  {
    name: "Cliente de ejemplo · Example client",
    rating: 5,
    text: {
      es: "Texto de ejemplo: un espacio para compartir cómo se sintió el cliente tras su tratamiento.",
      en: "Sample text: a space to share how the client felt after their treatment.",
    },
  },
  {
    name: "Cliente de ejemplo · Example client",
    rating: 5,
    text: {
      es: "Texto de ejemplo: sustituir por una reseña auténtica con el permiso del cliente.",
      en: "Sample text: replace with a genuine review, shared with the client's permission.",
    },
  },
];
