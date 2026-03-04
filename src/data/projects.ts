import type { Lang } from "@/i18n/config";

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

export interface ProjectText {
  title: string;
  titleLong?: string;
  date?: string;
  description: string;
  descriptionShort?: string;
}

export interface ProjectData {
  slug: string;
  image: string;
  imgs?: string[];
  tagIds: ProjectTagId[];
  links?: ProjectLinkRaw[];
  link?: string;
  github?: string;
  text: Record<Lang, ProjectText>;
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "vademecum-2024",
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
    text: {
      en: {
        title: "Vademecum 2024",
        titleLong: "Vademecum 2024 - Medical Reference",
        date: "October 2023",
        description:
          "Vademecum 2024 is a comprehensive and up-to-date application that offers detailed information about medicines and medical treatments. It is designed for both healthcare professionals and the general public who want to know more about the proper use of drugs. The app includes technical data sheets, therapeutic indications, contraindications, side effects and recommended doses, as well as interactions with other medications and special warnings. It also features an advanced search engine that facilitates quick location of specific information, and is constantly updated to ensure users have accurate and up-to-date data on more than 20,000 medicines available on the market. Ideal for doctors, pharmacists, health science students and anyone interested in responsible medication use.",
        descriptionShort:
          "Vademecum 2024 is a medical reference app that provides up-to-date information on medicines, including indications, dosages and side effects, aimed at healthcare professionals and users interested in learning more about pharmacological treatments.",
      },
      es: {
        title: "Vademecum 2024",
        titleLong: "Vademecum 2024 - Referencia Médica",
        date: "Octubre de 2023",
        description:
          "Vademecum 2024 es una aplicación completa y actualizada que ofrece información detallada sobre medicamentos y tratamientos médicos. Está diseñada tanto para profesionales de la salud como para el público en general que desea conocer más sobre el uso adecuado de los fármacos. La app incluye fichas técnicas de medicamentos, indicaciones terapéuticas, contraindicaciones, efectos secundarios y dosis recomendadas, así como interacciones con otros medicamentos y advertencias especiales. Además, cuenta con un buscador avanzado que facilita la localización rápida de información específica, y se actualiza constantemente para asegurar que los usuarios dispongan de datos precisos y actualizados sobre más de 20.000 medicamentos disponibles en el mercado. Ideal para médicos, farmacéuticos, estudiantes de ciencias de la salud y cualquier persona interesada en un uso responsable de la medicación.",
        descriptionShort:
          "Vademecum 2024 es una app de referencia médica que proporciona información actualizada sobre medicamentos, incluyendo indicaciones, dosis y efectos secundarios, dirigida a profesionales de la salud y usuarios interesados en conocer más sobre tratamientos farmacológicos.",
      },
      ca: {
        title: "Vademecum 2024",
        titleLong: "Vademecum 2024 - Referència Mèdica",
        date: "Octubre de 2023",
        description:
          "Vademecum 2024 és una aplicació completa i actualitzada que ofereix informació detallada sobre medicaments i tractaments mèdics. Està dissenyada tant per a professionals de la salut com per al públic en general que desitja conèixer més sobre l'ús adequat dels fàrmacs. L'app inclou fitxes tècniques de medicaments, indicacions terapèutiques, contraindicacions, efectes secundaris i dosis recomanades, així com interaccions amb altres medicaments i advertiments especials. A més, compta amb un cercador avançat que facilita la localització ràpida d'informació específica, i s'actualitza constantment per assegurar que els usuaris disposin de dades precises i actualitzades sobre més de 20.000 medicaments disponibles al mercat. Ideal per a metges, farmacèutics, estudiants de ciències de la salut i qualsevol persona interessada en un ús responsable de la medicació.",
        descriptionShort:
          "Vademecum 2024 és una app de referència mèdica que proporciona informació actualitzada sobre medicaments, incloent indicacions, dosis i efectes secundaris, dirigida a professionals de la salut i usuaris interessats a conèixer més sobre tractaments farmacològics.",
      },
    },
  },
  {
    slug: "pickupwatch",
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
    text: {
      en: {
        title: "PickUpWatch",
        titleLong: "PickUpWatch - School Security System",
        date: "September 2023",
        description:
          "PickUpWatch is an intelligent security system that uses facial recognition to identify authorized parents or guardians when picking up children at school. When a registered person approaches the school, the system detects their face and sends an automatic notification to the responsible teacher, confirming that it is someone authorized to take the child. This ensures that only previously verified people can pick up students, significantly improving security during school dismissals. Additionally, the system optimizes the pick-up process, avoiding confusion and possible errors, and offering an advanced technological solution that provides peace of mind for both parents and teaching staff.",
        descriptionShort:
          "PickUpWatch is an intelligent security system that uses facial recognition to detect parents' arrival at school and notify teachers. This ensures that only authorized people can pick up children, improving security during school dismissals.",
      },
      es: {
        title: "PickUpWatch",
        titleLong: "PickUpWatch - Sistema de Seguridad Escolar",
        date: "Septiembre de 2023",
        description:
          "PickUpWatch es un sistema de seguridad inteligente que utiliza reconocimiento facial para identificar a los padres o tutores autorizados en el momento de recoger a los niños en la escuela. Cuando una persona registrada se acerca al centro educativo, el sistema detecta su rostro y envía una notificación automática al profesor responsable, confirmando que se trata de alguien autorizado para llevarse al menor. Esto permite asegurar que solo las personas previamente verificadas puedan recoger a los estudiantes, mejorando significativamente la seguridad durante las salidas escolares. Además, el sistema optimiza el proceso de recogida, evitando confusiones y posibles errores, y ofreciendo una solución tecnológica avanzada que aporta tranquilidad tanto a los padres como al personal docente.",
        descriptionShort:
          "PickUpWatch es un sistema de seguridad inteligente que utiliza reconocimiento facial para detectar la llegada de los padres a la escuela y notificar a los profesores. Esto garantiza que solo personas autorizadas puedan recoger a los niños, mejorando la seguridad durante las salidas.",
      },
      ca: {
        title: "PickUpWatch",
        titleLong: "PickUpWatch - Sistema de Seguretat Escolar",
        date: "Setembre de 2023",
        description:
          "PickUpWatch és un sistema de seguretat intel·ligent que utilitza reconeixement facial per identificar els pares o tutors autoritzats en el moment de recollir els nens a l'escola. Quan una persona registrada s'acosta al centre educatiu, el sistema detecta el seu rostre i envia una notificació automàtica al professor responsable, confirmant que es tracta d'algú autoritzat per endur-se el menor. Això permet assegurar que només les persones prèviament verificades puguin recollir els estudiants, millorant significativament la seguretat durant les sortides escolars. A més, el sistema optimitza el procés de recollida, evitant confusions i possibles errors, i oferint una solució tecnològica avançada que aporta tranquil·litat tant als pares com al personal docent.",
        descriptionShort:
          "PickUpWatch és un sistema de seguretat intel·ligent que utilitza reconeixement facial per detectar l'arribada dels pares a l'escola i notificar els professors. Això garanteix que només persones autoritzades puguin recollir els nens, millorant la seguretat durant les sortides.",
      },
    },
  },
  {
    slug: "portfolio",
    image: "/porfolio.webp",
    tagIds: ["ASTRO", "TAILWIND"],
    link: "https://pausevilla.com/",
    github: "https://github.com/pausiete7/porfolio-pau",
    text: {
      en: {
        title: "Portfolio",
        description:
          "A personal website showcasing my experience, projects and skills as a developer. Built with Astro and Tailwind.",
      },
      es: {
        title: "Portfolio",
        description:
          "Un sitio web personal que muestra mi experiencia, proyectos y habilidades como programador. Desarrollado con Astro y Tailwind.",
      },
      ca: {
        title: "Portafoli",
        description:
          "Un lloc web personal que mostra la meva experiència, projectes i habilitats com a programador. Desenvolupat amb Astro i Tailwind.",
      },
    },
  },
];

export function getProjectsWithDetail(): ProjectData[] {
  return PROJECTS.filter((p) => p.imgs != null && p.imgs.length > 0);
}
