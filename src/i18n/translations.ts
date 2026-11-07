/**
 * TRANSLATIONS
 * ------------
 * Every piece of text on the site, in Spanish (default) and English.
 * Edit the wording here; both languages share the same structure.
 * Text in [square brackets] is a placeholder to replace with real information.
 */
import { BRAND } from "@/config/brand";
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
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Masajes y bienestar · Marbella",
    titleLine1: "El arte de desconectar.",
    titleLine2: "El placer de cuidarte.",
    subtitle:
      "Descubre una experiencia de bienestar única en Marbella. Tratamientos personalizados para recuperar tu equilibrio y armonía.",
    ctaTreatments: "Descubrir tratamientos",
    ctaBook: "Reservar experiencia",
    scroll: "Desliza",
    location: "Marbella · Costa del Sol",
  },
  about: {
    eyebrow: "Sobre nosotros",
    title: "Un espacio para volver a ti.",
    lead: "Un refugio sereno en Marbella, pensado para que el tiempo se detenga y el cuerpo vuelva a su calma natural.",
    paragraphs: [
      "Cada sesión comienza escuchándote. Tu ritmo, tus necesidades y cómo te sientes ese día marcan el tratamiento, nunca al revés.",
      "Creemos en un bienestar sencillo y honesto: manos atentas, materiales naturales, luz suave y el silencio necesario para desconectar de verdad.",
    ],
    therapistLabel: "Tu terapeuta",
    therapistName: "[Nombre de la terapeuta]",
    therapistBio:
      "[Breve presentación de la terapeuta: quién es, qué le inspira y cómo entiende el masaje.]",
    experienceLabel: "Formación y experiencia",
    experienceText: "[Añadir aquí la formación y la trayectoria profesional reales.]",
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
    placeholderNote:
      "Precios y duraciones orientativos, pendientes de confirmación. Consulta por WhatsApp para más detalles.",
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
        text: "Te recibimos con calma, con una infusión y un espacio para llegar sin prisas.",
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
      email: "Email",
      instagram: "Instagram",
      hours: "Horario",
    },
    addressPending: "Dirección exacta por confirmar",
    pending: "Por confirmar",
    cta: "Reservar por WhatsApp",
    mapTitle: "Mapa de ubicación en Marbella",
    mapNote: "Ubicación aproximada · Marbella",
  },
  bookingBand: {
    eyebrow: "Reservas",
    title: "Regálate una pausa.",
    text: "Escríbenos por WhatsApp y te ayudaremos a elegir el tratamiento ideal para ti.",
    cta: "Reservar por WhatsApp",
  },
  footer: {
    description:
      "Experiencias de masaje y bienestar en Marbella. Un espacio sereno para desconectar y cuidarte.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    followTitle: "Síguenos",
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
    draftNote:
      "Texto orientativo pendiente de revisión legal. Completar con los datos reales del titular antes de publicar.",
    updated: "Última actualización: [fecha]",
    privacy: {
      eyebrow: "Legal",
      title: "Política de privacidad",
      sections: [
        {
          title: "Responsable del tratamiento",
          text: `[Nombre o razón social], con NIF [número] y domicilio en [dirección], Marbella (Málaga), es responsable de los datos personales recogidos a través de este sitio web de ${BRAND.name}.`,
        },
        {
          title: "Datos que recogemos",
          text: "Este sitio web no dispone de formularios ni registro de usuarios. Si nos contactas por WhatsApp, teléfono o email, trataremos los datos que nos facilites únicamente para gestionar tu cita y responder a tus consultas.",
        },
        {
          title: "Base legal y conservación",
          text: "El tratamiento se basa en tu consentimiento y en la gestión de la relación con el cliente. Los datos se conservarán el tiempo necesario para atender tu solicitud y cumplir las obligaciones legales.",
        },
        {
          title: "Tus derechos",
          text: "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a [email de contacto]. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
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
      title: `${BRAND.name} · Masajes en Marbella | Bienestar y relajación`,
      description:
        "Centro de masajes en Marbella: masaje relajante, terapéutico, piedras calientes y más. Una experiencia de bienestar y relajación personalizada. Reserva por WhatsApp.",
    },
    about: {
      title: `Sobre nosotros · ${BRAND.name} Marbella`,
      description:
        "Un espacio para volver a ti. Conoce nuestra filosofía de bienestar y atención personalizada en nuestro centro de masajes en Marbella.",
    },
    treatments: {
      title: `Tratamientos y precios · Masajes en Marbella | ${BRAND.name}`,
      description:
        "Masaje relajante, tejido profundo, terapéutico, piedras calientes, aromaterapia, linfático, tailandés y deportivo en Marbella. Reserva tu masaje por WhatsApp.",
    },
    experience: {
      title: `La experiencia · Bienestar en Marbella | ${BRAND.name}`,
      description:
        "Mucho más que un masaje: un ritual de bienestar y relajación de inspiración mediterránea en Marbella.",
    },
    contact: {
      title: `Contacto y reservas · Masajes Marbella | ${BRAND.name}`,
      description:
        "Reserva tu masaje en Marbella por WhatsApp. Información de contacto, horario y ubicación de nuestro centro de bienestar.",
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
      "masajes en Marbella, masaje relajante Marbella, masajes terapéuticos Marbella, centro de masajes Marbella, bienestar y relajación Marbella",
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
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Massage & wellness · Marbella",
    titleLine1: "The Art of Unwinding.",
    titleLine2: "The Pleasure of Self-Care.",
    subtitle:
      "Discover a unique wellness experience in Marbella. Personalized treatments designed to restore your balance and harmony.",
    ctaTreatments: "Discover Treatments",
    ctaBook: "Book Your Experience",
    scroll: "Scroll",
    location: "Marbella · Costa del Sol",
  },
  about: {
    eyebrow: "About",
    title: "A Space to Reconnect With Yourself.",
    lead: "A serene retreat in Marbella, designed so time slows down and the body returns to its natural calm.",
    paragraphs: [
      "Every session begins by listening. Your pace, your needs and how you feel that day shape the treatment — never the other way around.",
      "We believe in simple, honest well-being: attentive hands, natural materials, soft light and the quiet you need to truly switch off.",
    ],
    therapistLabel: "Your therapist",
    therapistName: "[Therapist's name]",
    therapistBio:
      "[Short introduction of the therapist: who she is, what inspires her and how she approaches massage.]",
    experienceLabel: "Training & experience",
    experienceText: "[Add the real training and professional background here.]",
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
    placeholderNote:
      "Prices and durations are indicative and pending confirmation. Message us on WhatsApp for details.",
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
        text: "We greet you calmly, with an herbal infusion and a space to arrive unhurried.",
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
      email: "Email",
      instagram: "Instagram",
      hours: "Opening hours",
    },
    addressPending: "Exact address to be confirmed",
    pending: "To be confirmed",
    cta: "Book on WhatsApp",
    mapTitle: "Location map in Marbella",
    mapNote: "Approximate location · Marbella",
  },
  bookingBand: {
    eyebrow: "Bookings",
    title: "Give yourself a pause.",
    text: "Message us on WhatsApp and we'll help you choose the perfect treatment.",
    cta: "Book on WhatsApp",
  },
  footer: {
    description:
      "Massage and wellness experiences in Marbella. A serene space to unwind and take care of yourself.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    followTitle: "Follow us",
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
    draftNote:
      "Template text pending legal review. Complete with the owner's real details before publishing.",
    updated: "Last updated: [date]",
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      sections: [
        {
          title: "Data controller",
          text: `[Name or company name], tax ID [number], registered at [address], Marbella (Málaga), is responsible for the personal data collected through the ${BRAND.name} website.`,
        },
        {
          title: "Data we collect",
          text: "This website has no forms or user accounts. If you contact us by WhatsApp, phone or email, we will use the details you provide only to manage your appointment and answer your questions.",
        },
        {
          title: "Legal basis and retention",
          text: "Processing is based on your consent and on managing the client relationship. Data is kept only as long as needed to handle your request and meet legal obligations.",
        },
        {
          title: "Your rights",
          text: "You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to [contact email]. You may also file a complaint with the Spanish Data Protection Agency (www.aepd.es).",
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
      title: `${BRAND.name} · Luxury Massage in Marbella | Wellness`,
      description:
        "Luxury massage in Marbella: relaxing, therapeutic, hot stone massage and more. A personalized wellness experience with a dedicated massage therapist. Book on WhatsApp.",
    },
    about: {
      title: `About · ${BRAND.name} Marbella`,
      description:
        "A space to reconnect with yourself. Discover our philosophy of wellness and personalized care in Marbella.",
    },
    treatments: {
      title: `Treatments & Prices · Massage in Marbella | ${BRAND.name}`,
      description:
        "Relaxing, deep tissue, therapeutic, hot stone, aromatherapy, lymphatic, Thai and sports massage in Marbella. Book your massage on WhatsApp.",
    },
    experience: {
      title: `The Experience · Wellness Marbella | ${BRAND.name}`,
      description:
        "More than a massage: a Mediterranean-inspired wellness and relaxation ritual in Marbella.",
    },
    contact: {
      title: `Contact & Booking · Massage Marbella | ${BRAND.name}`,
      description:
        "Book your massage in Marbella on WhatsApp. Contact details, opening hours and location of our wellness space.",
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
      "massage in Marbella, luxury massage Marbella, relaxing massage Marbella, wellness Marbella, massage therapist Marbella",
  },
};

export const translations: Record<Lang, Dictionary> = { es, en };
