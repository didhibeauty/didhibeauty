/**
 * TRANSLATIONS
 * ------------
 * Every piece of text on the site, in Spanish (default) and English.
 * Edit the wording here; both languages share the same structure.
 */
import { BRAND } from "@/config/brand";
import { BUSINESS } from "@/config/business";
import type { Lang, PageKey } from "./routes";

const es = {
  nav: {
    home: "Inicio",
    about: "Sobre nosotros",
    treatments: "Tratamientos",
    experience: "Experiencia",
    contact: "Contacto",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
    book: "Reservar",
    language: "Idioma",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Masajes en Puerto Banús, Marbella",
    titleLine1: "El arte de desconectar.",
    titleLine2: "El placer de cuidarte.",
    subtitle:
      "Centro de masajes y estética en Puerto Banús. Masaje relajante, deportivo y completo, reflexología y maderoterapia, adaptados a lo que tu cuerpo necesita.",
    ctaTreatments: "Descubrir tratamientos",
    ctaBook: "Reservar experiencia",
    scroll: "Desliza",
    location: "Puerto Banús · Marbella",
  },
  about: {
    eyebrow: "Sobre nosotros",
    title: "Un espacio para volver a ti.",
    lead: "Un refugio sereno en Puerto Banús, Marbella, pensado para que el tiempo se detenga y el cuerpo vuelva a su calma natural.",
    paragraphs: [
      "Cada sesión comienza escuchándote. Tu ritmo, tus necesidades y cómo te sientes ese día marcan el tratamiento, nunca al revés.",
      "Creemos en un bienestar sencillo y honesto: manos atentas, materiales naturales, luz suave y el silencio necesario para desconectar de verdad.",
    ],
    philosophyEyebrow: "Nuestra filosofía",
    philosophyTitle: "Cuidar con calma, con intención y con detalle.",
    pillars: [
      {
        title: "Escucha",
        text: "Antes de empezar, hablamos. Entender cómo llegas es la base de cada tratamiento.",
      },
      {
        title: "Atención personalizada",
        text: "Presión, ritmo, aceites y duración se adaptan a ti en cada visita.",
      },
      {
        title: "Relajación",
        text: "Un ambiente sin prisas, pensado para que cuerpo y mente bajen el ritmo.",
      },
      {
        title: "Bienestar",
        text: "Salir más ligero, más presente y con la sensación de haberte regalado tiempo.",
      },
    ],
    cta: "Conocer más",
  },
  treatments: {
    eyebrow: "Tratamientos",
    title: "Rituales de masaje a tu medida",
    intro:
      "Una selección de tratamientos pensados para relajar, aliviar y renovar. Cada sesión se adapta a lo que tu cuerpo necesita.",
    book: "Reservar",
    bookAria: (name: string) => `Reservar ${name} por WhatsApp`,
    minutes: "min",
    viewAll: "Ver todos los tratamientos",
    session: "Sesión",
    moreNote: "¿Buscas otro tratamiento? Escríbenos por WhatsApp y te informamos.",
    price: (n: number) => `${n} €`,
  },
  experience: {
    eyebrow: "La experiencia",
    titleLine1: "Mucho más que un masaje.",
    titleLine2: "Un momento para ti.",
    intro:
      "Desde que cruzas la puerta, todo está pensado para que dejes atrás el ruido: aromas suaves, texturas naturales, luz mediterránea y un trato cercano y discreto.",
    steps: [
      {
        title: "Bienvenida",
        text: "Te recibimos con calma, en un espacio pensado para llegar sin prisas.",
      },
      {
        title: "Conversación",
        text: "Hablamos sobre cómo te sientes para elegir juntos el tratamiento y la presión ideal.",
      },
      {
        title: "Tratamiento",
        text: "Tu masaje, en una sala cálida y silenciosa, con aceites y materiales naturales.",
      },
      {
        title: "Pausa final",
        text: "Unos minutos de reposo para volver despacio y llevarte contigo esa sensación de calma.",
      },
    ],
    quote: "El verdadero lujo es el tiempo que te dedicas a ti.",
    cta: "Descubrir la experiencia",
  },
  space: {
    eyebrow: "Nuestro espacio",
    title: "Un refugio en Puerto Banús",
    intro:
      "Luz cálida, materiales naturales y un ambiente tranquilo en la Avenida Julio Iglesias, a pocos pasos del puerto. Así es nuestro centro de masajes en Puerto Banús.",
    cta: "Cómo llegar",
  },
  gallery: {
    eyebrow: "Galería",
    title: "Luz, texturas y calma",
  },
  testimonials: {
    eyebrow: "Opiniones",
    title: "Lo que dicen nuestros clientes",
    demoBadge: "Contenido de demostración",
    demoNote:
      "Estas opiniones son textos de ejemplo y se sustituirán por reseñas reales de clientes.",
    rating: (n: number) => `Valoración: ${n} de 5`,
  },
  contact: {
    eyebrow: "Contacto",
    title: "Reserva tu momento",
    intro:
      "La forma más sencilla de reservar es por WhatsApp. Cuéntanos qué tratamiento te interesa y te responderemos con la disponibilidad.",
    labels: {
      address: "Dirección",
      whatsapp: "WhatsApp",
      phone: "Teléfono",
      hours: "Horario",
    },
    addressPending: "Dirección exacta por confirmar",
    cta: "Reservar por WhatsApp",
    mapTitle: "Mapa de ubicación en Marbella",
    mapNote: "Avenida Julio Iglesias · Puerto Banús, Marbella",
    openMaps: "Abrir en Google Maps",
  },
  bookingBand: {
    eyebrow: "Reservas",
    title: "Regálate una pausa.",
    text: "Escríbenos por WhatsApp y te ayudaremos a elegir el tratamiento ideal para ti.",
    cta: "Reservar por WhatsApp",
  },
  footer: {
    description:
      "Centro de masajes y estética en Puerto Banús, Marbella. Un espacio sereno para desconectar y cuidarte.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    legalTitle: "Legal",
    rights: "Todos los derechos reservados.",
  },
  whatsapp: {
    generic:
      "Hola, me gustaría reservar una cita. ¿Podrían informarme sobre la disponibilidad? Gracias.",
    treatment: (t: string) =>
      `Hola, me gustaría reservar una cita para el tratamiento de ${t}. ¿Podrían informarme sobre la disponibilidad? Gracias.`,
    floating: "Reservar por WhatsApp",
  },
  legal: {
    updated: "Última actualización: noviembre de 2026",
    privacy: {
      eyebrow: "Legal",
      title: "Política de privacidad",
      sections: [
        {
          title: "Responsable del tratamiento",
          text: `${BRAND.name}, con domicilio en ${BUSINESS.address.street}, ${BUSINESS.address.area}, ${BUSINESS.address.locality} (${BUSINESS.address.region}), es responsable de los datos personales recogidos a través de este sitio web.`,
        },
        {
          title: "Datos que recogemos",
          text: "Este sitio web no dispone de formularios ni registro de usuarios. Si nos contactas por WhatsApp o por teléfono, trataremos los datos que nos facilites únicamente para gestionar tu cita y responder a tus consultas.",
        },
        {
          title: "Base legal y conservación",
          text: "El tratamiento se basa en tu consentimiento y en la gestión de la relación con el cliente. Los datos se conservarán el tiempo necesario para atender tu solicitud y cumplir las obligaciones legales.",
        },
        {
          title: "Tus derechos",
          text: "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad contactando con nosotros por WhatsApp o en nuestro centro. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
        },
      ],
    },
    cookies: {
      eyebrow: "Legal",
      title: "Política de cookies",
      sections: [
        {
          title: "¿Qué son las cookies?",
          text: "Las cookies son pequeños archivos que los sitios web guardan en tu navegador para recordar información sobre tu visita.",
        },
        {
          title: "Cookies que utiliza este sitio",
          text: "Este sitio web no utiliza cookies propias de análisis ni de publicidad. La página de contacto muestra un mapa de Google Maps, que puede instalar cookies de terceros cuando se carga.",
        },
        {
          title: "Cómo gestionarlas",
          text: "Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento.",
        },
      ],
    },
  },
  seo: {
    home: {
      title: `${BRAND.name} | Masajes en Puerto Banús, Marbella`,
      description:
        "Centro de masajes en Puerto Banús, Marbella: masajes relajantes, deportivos y de cuerpo completo, reflexología y maderoterapia. Reserva tu cita por WhatsApp.",
    },
    about: {
      title: `Sobre nosotros · Centro de masajes en Puerto Banús | ${BRAND.name}`,
      description: `Conoce ${BRAND.name}, centro de masajes y estética en Puerto Banús, Marbella: atención personalizada, ambiente tranquilo y tratamientos adaptados a ti.`,
    },
    treatments: {
      title: `Masajes y precios en Puerto Banús, Marbella | ${BRAND.name}`,
      description:
        "Masaje relajante, deportivo y de cuerpo completo, reflexología y maderoterapia en Puerto Banús, Marbella. Precios desde 40 €. Reserva por WhatsApp.",
    },
    experience: {
      title: `Cómo es tu masaje en Puerto Banús, Marbella | ${BRAND.name}`,
      description: `Bienvenida, conversación, tratamiento y pausa final: así es una sesión de masaje en ${BRAND.name}, Puerto Banús. Un momento de calma para ti en Marbella.`,
    },
    contact: {
      title: `Contacto y reservas · Masajes en Puerto Banús | ${BRAND.name}`,
      description: `Reserva tu masaje en Puerto Banús por WhatsApp o teléfono (${BUSINESS.phone.display}). Dirección en Avenida Julio Iglesias, horario y mapa para llegar.`,
    },
    privacy: {
      title: `Política de privacidad · ${BRAND.name}`,
      description: `Información sobre el tratamiento de datos personales en ${BRAND.name}, Marbella.`,
    },
    cookies: {
      title: `Política de cookies · ${BRAND.name}`,
      description: `Información sobre el uso de cookies en el sitio web de ${BRAND.name}.`,
    },
    keywords:
      "masajes Puerto Banús, masaje Puerto Banús, masajes en Marbella, masaje relajante Puerto Banús, masaje de cuerpo completo Marbella",
  } satisfies Record<PageKey, { title: string; description: string }> & { keywords: string },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    treatments: "Treatments",
    experience: "Experience",
    contact: "Contact",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    book: "Book",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Massage in Puerto Banús, Marbella",
    titleLine1: "The Art of Unwinding.",
    titleLine2: "The Pleasure of Self-Care.",
    subtitle:
      "Massage and beauty center in Puerto Banús. Relaxing, sports and full body massage, reflexology and wood therapy, tailored to what your body needs.",
    ctaTreatments: "Discover Treatments",
    ctaBook: "Book Your Experience",
    scroll: "Scroll",
    location: "Puerto Banús · Marbella",
  },
  about: {
    eyebrow: "About",
    title: "A Space to Reconnect With Yourself.",
    lead: "A serene retreat in Puerto Banús, Marbella, designed so time slows down and the body returns to its natural calm.",
    paragraphs: [
      "Every session begins by listening. Your pace, your needs and how you feel that day shape the treatment — never the other way around.",
      "We believe in simple, honest well-being: attentive hands, natural materials, soft light and the quiet you need to truly switch off.",
    ],
    philosophyEyebrow: "Our philosophy",
    philosophyTitle: "Care with calm, intention and attention to detail.",
    pillars: [
      {
        title: "Listening",
        text: "Before we begin, we talk. Understanding how you arrive is the foundation of every treatment.",
      },
      {
        title: "Personalized care",
        text: "Pressure, pace, oils and duration are adapted to you on every visit.",
      },
      {
        title: "Relaxation",
        text: "An unhurried atmosphere where body and mind can finally slow down.",
      },
      {
        title: "Well-being",
        text: "Leave lighter, more present, with the feeling of having given yourself time.",
      },
    ],
    cta: "Learn more",
  },
  treatments: {
    eyebrow: "Treatments",
    title: "Massage rituals tailored to you",
    intro:
      "A curated selection of treatments to relax, relieve and renew. Every session adapts to what your body needs.",
    book: "Book",
    bookAria: (name: string) => `Book ${name} on WhatsApp`,
    minutes: "min",
    viewAll: "View all treatments",
    session: "Session",
    moreNote: "Looking for another treatment? Message us on WhatsApp and we'll tell you more.",
    price: (n: number) => `€${n}`,
  },
  experience: {
    eyebrow: "The experience",
    titleLine1: "More Than a Massage.",
    titleLine2: "A Moment Just for You.",
    intro:
      "From the moment you step inside, everything is designed to leave the noise behind: soft scents, natural textures, Mediterranean light and warm, discreet care.",
    steps: [
      {
        title: "Welcome",
        text: "We greet you calmly, in a space designed to help you arrive unhurried.",
      },
      {
        title: "Conversation",
        text: "We talk about how you feel to choose the right treatment and pressure together.",
      },
      {
        title: "Treatment",
        text: "Your massage, in a warm and quiet room, with natural oils and materials.",
      },
      {
        title: "Closing pause",
        text: "A few minutes of rest to return slowly and carry that sense of calm with you.",
      },
    ],
    quote: "True luxury is the time you give to yourself.",
    cta: "Discover the experience",
  },
  space: {
    eyebrow: "Our space",
    title: "A retreat in Puerto Banús",
    intro:
      "Warm light, natural materials and a calm atmosphere on Avenida Julio Iglesias, just steps from the marina. This is our massage center in Puerto Banús.",
    cta: "Get directions",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Light, texture and calm",
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "What our clients say",
    demoBadge: "Demonstration content",
    demoNote: "These reviews are sample texts and will be replaced with genuine client reviews.",
    rating: (n: number) => `Rating: ${n} out of 5`,
  },
  contact: {
    eyebrow: "Contact",
    title: "Book your moment",
    intro:
      "The easiest way to book is on WhatsApp. Tell us which treatment you're interested in and we'll reply with availability.",
    labels: {
      address: "Address",
      whatsapp: "WhatsApp",
      phone: "Phone",
      hours: "Opening hours",
    },
    addressPending: "Exact address to be confirmed",
    cta: "Book on WhatsApp",
    mapTitle: "Location map in Marbella",
    mapNote: "Avenida Julio Iglesias · Puerto Banús, Marbella",
    openMaps: "Open in Google Maps",
  },
  bookingBand: {
    eyebrow: "Bookings",
    title: "Give yourself a pause.",
    text: "Message us on WhatsApp and we'll help you choose the perfect treatment.",
    cta: "Book on WhatsApp",
  },
  footer: {
    description:
      "Massage and beauty center in Puerto Banús, Marbella. A serene space to unwind and take care of yourself.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    rights: "All rights reserved.",
  },
  whatsapp: {
    generic:
      "Hello, I would like to book an appointment. Could you please let me know your availability? Thank you.",
    treatment: (t: string) =>
      `Hello, I would like to book an appointment for ${t}. Could you please let me know your availability? Thank you.`,
    floating: "Book on WhatsApp",
  },
  legal: {
    updated: "Last updated: November 2026",
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      sections: [
        {
          title: "Data controller",
          text: `${BRAND.name}, located at ${BUSINESS.address.street}, ${BUSINESS.address.area}, ${BUSINESS.address.locality} (${BUSINESS.address.region}), is responsible for the personal data collected through this website.`,
        },
        {
          title: "Data we collect",
          text: "This website has no forms or user accounts. If you contact us by WhatsApp or phone, we will use the details you provide only to manage your appointment and answer your questions.",
        },
        {
          title: "Legal basis and retention",
          text: "Processing is based on your consent and on managing the client relationship. Data is kept only as long as needed to handle your request and meet legal obligations.",
        },
        {
          title: "Your rights",
          text: "You may exercise your rights of access, rectification, erasure, objection, restriction and portability by contacting us on WhatsApp or at our center. You may also file a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        },
      ],
    },
    cookies: {
      eyebrow: "Legal",
      title: "Cookie Policy",
      sections: [
        {
          title: "What are cookies?",
          text: "Cookies are small files that websites store in your browser to remember information about your visit.",
        },
        {
          title: "Cookies used on this site",
          text: "This website does not use its own analytics or advertising cookies. The contact page displays a Google Maps map, which may set third-party cookies when it loads.",
        },
        {
          title: "How to manage them",
          text: "You can allow, block or delete cookies from your browser settings at any time.",
        },
      ],
    },
  },
  seo: {
    home: {
      title: `${BRAND.name} | Massage in Puerto Banús, Marbella`,
      description:
        "Massage in Puerto Banús, Marbella: relaxing, sports and full body massage, reflexology and wood therapy. Check availability and book on WhatsApp.",
    },
    about: {
      title: `About · Massage Center in Puerto Banús | ${BRAND.name}`,
      description: `Meet ${BRAND.name}, a massage and beauty center in Puerto Banús, Marbella: personalized care, a calm atmosphere and treatments adapted to you.`,
    },
    treatments: {
      title: `Massage & Prices in Puerto Banús, Marbella | ${BRAND.name}`,
      description:
        "Relaxing, sports and full body massage, reflexology and wood therapy in Puerto Banús, Marbella. Prices from €40. Book on WhatsApp.",
    },
    experience: {
      title: `Your Massage in Puerto Banús, Marbella | ${BRAND.name}`,
      description: `Welcome, conversation, treatment and a closing pause: this is a massage session at ${BRAND.name}, Puerto Banús. A calm moment for you in Marbella.`,
    },
    contact: {
      title: `Contact & Booking · Massage Puerto Banús | ${BRAND.name}`,
      description: `Book your massage in Puerto Banús on WhatsApp or by phone (${BUSINESS.phone.display}). Address on Avenida Julio Iglesias, opening hours and map.`,
    },
    privacy: {
      title: `Privacy Policy · ${BRAND.name}`,
      description: `How ${BRAND.name}, Marbella, handles personal data.`,
    },
    cookies: {
      title: `Cookie Policy · ${BRAND.name}`,
      description: `Information about cookies on the ${BRAND.name} website.`,
    },
    keywords:
      "massage Puerto Banus, massage Marbella, relaxing massage Marbella, full body massage Marbella, sports massage Marbella",
  },
};

export const translations: Record<Lang, Dictionary> = { es, en };
