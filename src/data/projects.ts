export type ProjectTagId =
  | "DART"
  | "FLUTTER"
  | "SUPABASE"
  | "SQLITE"
  | "ASTRO"
  | "HTML"
  | "CSS"
  | "TAILWIND";

export type ProjectLinkType = "appstore" | "googleplay" | "github";

export interface ProjectLinkRaw {
  type: ProjectLinkType;
  url: string;
  titleSection: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  title_l?: string;
  date?: string;
  description: string;
  descriptionShort?: string;
  image: string;
  imgs?: string[];
  tagIds: ProjectTagId[];
  links?: ProjectLinkRaw[];
  link?: string;
  github?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "vademecum-2024",
    title: "Vademecum 2024",
    title_l: "Vademecum 2024 - Referencia Médica",
    date: "Octubre de 2023",
    description:
      "Vademecum 2024 es una aplicación completa y actualizada que ofrece información detallada sobre medicamentos y tratamientos médicos. Está diseñada tanto para profesionales de la salud como para el público en general que desea conocer más sobre el uso adecuado de los fármacos. La app incluye fichas técnicas de medicamentos, indicaciones terapéuticas, contraindicaciones, efectos secundarios y dosis recomendadas, así como interacciones con otros medicamentos y advertencias especiales. Además, cuenta con un buscador avanzado que facilita la localización rápida de información específica, y se actualiza constantemente para asegurar que los usuarios dispongan de datos precisos y actualizados sobre más de 20.000 medicamentos disponibles en el mercado. Ideal para médicos, farmacéuticos, estudiantes de ciencias de la salud y cualquier persona interesada en un uso responsable de la medicación.",
    descriptionShort:
      "Vademecum 2024 es una app de referencia médica que proporciona información actualizada sobre medicamentos, incluyendo indicaciones, dosis y efectos secundarios, dirigida a profesionales de la salud y usuarios interesados en conocer más sobre tratamientos farmacológicos.",
    image: "/vademecum.webp",
    imgs: ["/vad1.webp", "/vad2.webp", "/vad3.webp", "/vad4.webp"],
    tagIds: ["FLUTTER", "DART", "SQLITE"],
    links: [
      {
        type: "appstore",
        url: "https://apps.apple.com/es/app/vademecum-2023-medicamentos/id1187696022",
        titleSection: "App Store",
      },
      {
        type: "googleplay",
        url: "https://play.google.com/store/apps/details?id=es.impulsit.vademecum&hl=es",
        titleSection: "Google Play",
      },
    ],
    link: "/project/vademecum-2024",
  },
  {
    slug: "pickupwatch",
    title: "PickUpWatch",
    title_l: "PickUpWatch - Sistema de Seguridad Escolar",
    date: "Septiembre de 2023",
    description:
      "PickUpWatch es un sistema de seguridad inteligente que utiliza reconocimiento facial para identificar a los padres o tutores autorizados en el momento de recoger a los niños en la escuela. Cuando una persona registrada se acerca al centro educativo, el sistema detecta su rostro y envía una notificación automática al profesor responsable, confirmando que se trata de alguien autorizado para llevarse al menor. Esto permite asegurar que solo las personas previamente verificadas puedan recoger a los estudiantes, mejorando significativamente la seguridad durante las salidas escolares. Además, el sistema optimiza el proceso de recogida, evitando confusiones y posibles errores, y ofreciendo una solución tecnológica avanzada que aporta tranquilidad tanto a los padres como al personal docente.",
    descriptionShort:
      "PickUpWatch es un sistema de seguridad inteligente que utiliza reconocimiento facial para detectar la llegada de los padres a la escuela y notificar a los profesores. Esto garantiza que solo personas autorizadas puedan recoger a los niños, mejorando la seguridad durante las salidas.",
    image: "/pickupwatch.webp",
    imgs: ["/pick1.webp", "/pick2.webp"],
    tagIds: ["FLUTTER", "DART", "SUPABASE"],
    links: [
      {
        type: "github",
        url: "https://github.com/pausiete7/pickUpWatch",
        titleSection: "GitHub",
      },
    ],
    link: "/project/pickupwatch",
    github: "https://github.com/pausiete7/pickUpWatch",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Un sitio web personal que muestra mi experiencia, proyectos y habilidades como programador. Desarrollado con Astro y Tailwind.",
    image: "/porfolio.webp",
    tagIds: ["ASTRO", "TAILWIND"],
    link: "https://pausevilla.com/",
    github: "https://github.com/pausiete7/porfolio-pau",
  },
];

export function getProjectsWithDetail(): ProjectData[] {
  return PROJECTS.filter((p) => p.imgs != null && p.imgs.length > 0);
}
