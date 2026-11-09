import type { Lang } from "@/i18n/config";
import type { ImageMetadata } from "astro";

import vademecumImg from "@/assets/projects/vademecum.webp";
import vetImg from "@/assets/projects/vademecum-vet.webp";
import aptoImg from "@/assets/projects/apto.webp";
import parcelarioImg from "@/assets/projects/parcelario.webp";
import manipuladorImg from "@/assets/projects/manipulador.webp";
import flipebooksImg from "@/assets/projects/flipebooks.webp";

/** Datos públicos de contacto. El teléfono no va nunca en la web. */
export const CONTACT = {
  email: "pau.sevilla@icloud.com",
  linkedin: "https://www.linkedin.com/in/pau-sevilla",
  github: "https://github.com/pausiete7",
  instagram: "https://www.instagram.com/pau.sevilla7/",
  x: "https://x.com/pausiete7",
};

export type LinkKind = "appstore" | "googleplay" | "web";

export interface ProjectLink {
  kind: LinkKind;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  image: ImageMetadata;
  /** Captura de móvil (vertical) o de web. */
  shot: "app" | "web";
  /** Color sacado de la propia captura, para el fondo de la imagen. */
  tint: string;
  featured?: boolean;
  stack: string[];
  links: ProjectLink[];
  text: Record<Lang, { summary: string; metric?: string; metricNote?: string; imageAlt: string }>;
}

export const PROJECTS: Project[] = [
  {
    id: "vademecum",
    name: "Vademecum",
    year: "2023 – 2026",
    image: vademecumImg,
    shot: "app",
    tint: "#e5483f",
    featured: true,
    stack: ["Flutter", "SQLite", "Supabase", "RevenueCat"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id1187696022" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.vademecum" },
    ],
    text: {
      es: {
        summary:
          "Una app de medicamentos con los datos oficiales de la AEMPS que se había quedado muy desactualizada. La rehíce desde cero en Flutter. La base de datos va en el móvil, cifrada, y se sincroniza en tiempo real con Supabase. Las suscripciones las gestiona RevenueCat.",
        metric: "Más de 10.000 descargas en Google Play",
        metricNote: "4,8 de valoración en App Store (13 valoraciones)",
        imageAlt: "Pantalla de búsqueda de Vademecum",
      },
      en: {
        summary:
          "I rebuilt a badly outdated medicines app from scratch in Flutter, using official data from the Spanish Medicines Agency (AEMPS). The database lives on the phone, encrypted, and syncs in real time with Supabase. Subscriptions are handled by RevenueCat.",
        metric: "10,000+ downloads on Google Play",
        metricNote: "Rated 4.8 on the App Store (13 ratings)",
        imageAlt: "Vademecum search screen",
      },
      ca: {
        summary:
          "Una app de medicaments amb les dades oficials de l'AEMPS que havia quedat obsoleta. La vaig refer des de zero en Flutter. La base de dades va al mòbil, xifrada, i se sincronitza en temps real amb Supabase. Les subscripcions les gestiona RevenueCat.",
        metric: "Més de 10.000 descàrregues a Google Play",
        metricNote: "4,8 de valoració a l'App Store (13 valoracions)",
        imageAlt: "Pantalla de cerca de Vademecum",
      },
    },
  },
  {
    id: "vademecum-vet",
    name: "Vademecum Veterinario",
    year: "2026",
    image: vetImg,
    shot: "app",
    tint: "#2f6d4f",
    stack: ["Flutter", "Node.js", "Dart", "Supabase", "GitHub Actions"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id6817796985" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.vademecumvet" },
    ],
    text: {
      es: {
        summary:
          "Más de 3.700 medicamentos veterinarios de CIMAVet que se consultan sin conexión. Un backend descarga, valida y publica el catálogo cada día con GitHub Actions y, si falla, abre una incidencia. Bajé esa descarga de 29 a 16 minutos.",
        imageAlt: "Búsqueda de medicamentos en Vademecum Veterinario",
      },
      en: {
        summary:
          "Over 3,700 veterinary medicines from CIMAVet, available offline. A backend downloads, validates and publishes the catalogue every day with GitHub Actions and opens an issue if anything fails. I cut that download from 29 to 16 minutes.",
        imageAlt: "Medicine search in Vademecum Veterinario",
      },
      ca: {
        summary:
          "Més de 3.700 medicaments veterinaris de CIMAVet que es consulten sense connexió. Un backend descarrega, valida i publica el catàleg cada dia amb GitHub Actions i, si falla, obre una incidència. Vaig baixar aquesta descàrrega de 29 a 16 minuts.",
        imageAlt: "Cerca de medicaments a Vademecum Veterinario",
      },
    },
  },
  {
    id: "apto",
    name: "Apto: test DGT",
    year: "2026",
    image: aptoImg,
    shot: "app",
    tint: "#3f9a5b",
    stack: ["Flutter", "SQLite", "Python", "RevenueCat"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id6813851821" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.apto" },
    ],
    text: {
      es: {
        summary:
          "Sirve para preparar el teórico de coche, moto y ciclomotor. Tiene más de 1.500 preguntas de coche, más de 500 de moto y otras tantas de ciclomotor, y cada una indica su fuente oficial. Los paquetes de preguntas se montan con Python, pasan un linter en la CI y llegan a la app firmados.",
        imageAlt: "Resultado de un simulacro en Apto",
      },
      en: {
        summary:
          "Prep for the Spanish driving theory test for car, motorbike and moped. It has over 1,500 car questions and over 500 each for motorbike and moped, and every question cites its official source. The question packs are built with Python, linted in CI and shipped to the app signed.",
        imageAlt: "Mock exam result in Apto",
      },
      ca: {
        summary:
          "Serveix per preparar el teòric de cotxe, moto i ciclomotor. Té més de 1.500 preguntes de cotxe, més de 500 de moto i unes altres tantes de ciclomotor, i cadascuna indica la seva font oficial. Els paquets de preguntes es munten amb Python, passen un linter a la CI i arriben a l'app signats.",
        imageAlt: "Resultat d'un simulacre a Apto",
      },
    },
  },
  {
    id: "parcelario",
    name: "Parcelario",
    year: "2026",
    image: parcelarioImg,
    shot: "app",
    tint: "#d9a92e",
    stack: ["Flutter", "MapLibre", "SQLite"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id6822248499" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.parcelassigpac" },
    ],
    text: {
      es: {
        summary:
          "Visor de parcelas SIGPAC y Catastro sobre la ortofoto del PNOA. Buscas por polígono y parcela o por referencia catastral y mides fincas. Un workflow comprueba dos veces al día que siguen respondiendo las APIs públicas de las que depende.",
        imageAlt: "Mapa de recintos SIGPAC en Parcelario",
      },
      en: {
        summary:
          "A viewer for Spanish land parcels (SIGPAC and Cadastre) over aerial imagery. You search by polygon and parcel or by cadastral reference, and measure plots. A workflow checks twice a day that the public APIs it relies on are still up.",
        imageAlt: "SIGPAC parcel map in Parcelario",
      },
      ca: {
        summary:
          "Visor de parcel·les SIGPAC i Cadastre sobre l'ortofoto del PNOA. Cerques per polígon i parcel·la o per referència cadastral i mesures finques. Un workflow comprova dues vegades al dia que les APIs públiques de què depèn continuen responent.",
        imageAlt: "Mapa de recintes SIGPAC a Parcelario",
      },
    },
  },
  {
    id: "manipulador",
    name: "Manipulador Hoy",
    year: "2026",
    image: manipuladorImg,
    shot: "web",
    tint: "#1f7a3d",
    featured: true,
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Stripe", "Brevo", "Google Wallet"],
    links: [{ kind: "web", url: "https://manipuladorhoy.es" }],
    text: {
      es: {
        summary:
          "Web y app para sacar el certificado de manipulador de alimentos. El examen es gratis y, si apruebas, pagas con Stripe y te descargas el certificado con un QR para verificarlo. Se puede guardar en Google Wallet, los correos salen por Brevo y hay un asistente hecho con la API de Claude.",
        metric: "Lanzado en 2026, ya con ventas",
        imageAlt: "Portada de manipuladorhoy.es",
      },
      en: {
        summary:
          "Web and mobile app to get a Spanish food handler certificate. The exam is free and, if you pass, you pay with Stripe and download a certificate with a QR code to verify it. It can be saved to Google Wallet, emails go out through Brevo and there's an assistant built on the Claude API.",
        metric: "Launched in 2026, already selling",
        imageAlt: "manipuladorhoy.es home page",
      },
      ca: {
        summary:
          "Web i app per treure el certificat de manipulador d'aliments. L'examen és gratuït i, si aproves, pagues amb Stripe i et descarregues el certificat amb un QR per verificar-lo. Es pot desar a Google Wallet, els correus surten per Brevo i hi ha un assistent fet amb l'API de Claude.",
        metric: "Llançat el 2026, ja amb vendes",
        imageAlt: "Portada de manipuladorhoy.es",
      },
    },
  },
  {
    id: "flipebooks",
    name: "Flipebooks",
    year: "2026",
    image: flipebooksImg,
    shot: "web",
    tint: "#c98a3d",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Vitest", "Playwright"],
    links: [{ kind: "web", url: "https://flipebooks.com" }],
    text: {
      es: {
        summary:
          "Una web que convierte PDFs en flipbooks interactivos. La hice con otro desarrollador. Tiene planes de pago y un chat de IA, y la probamos con Vitest y Playwright.",
        imageAlt: "Portada de flipebooks.com",
      },
      en: {
        summary:
          "A web app that turns PDFs into interactive flipbooks. I built it with another developer. It has paid plans and an AI chat, and we test it with Vitest and Playwright.",
        imageAlt: "flipebooks.com home page",
      },
      ca: {
        summary:
          "Una web que converteix PDFs en flipbooks interactius. La vaig fer amb un altre desenvolupador. Té plans de pagament i un xat d'IA, i la provem amb Vitest i Playwright.",
        imageAlt: "Portada de flipebooks.com",
      },
    },
  },
];

interface ExperienceItem {
  title: string;
  stack: string[];
  text: string;
  now?: boolean;
}

interface Copy {
  meta: { title: string; description: string };
  nav: { projects: string; experience: string; about: string; contact: string };
  skip: string;
  hero: { kicker: string; headline: string; summary: string; pitch: string; cta: string; photoAlt: string };
  projects: { title: string; intro: string; appstore: string; googleplay: string; web: string };
  experience: { title: string; org: string; role: string; date: string; now: string; items: ExperienceItem[] };
  about: {
    title: string;
    text: string;
    aiTitle: string;
    aiText: string;
    educationTitle: string;
    education: { title: string; detail: string; date: string }[];
    languagesTitle: string;
    languages: string;
  };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  contact: { title: string; available: string; text: string; elsewhere: string };
  footer: string;
}

const SKILLS_ITEMS = {
  languages: ["Dart", "TypeScript", "JavaScript", "Python", "C++", "PHP", "SQL", "MATLAB"],
  frameworks: ["Flutter", "Angular", "Laravel", "React", "React Native (Expo)", "Next.js", "Node.js"],
  data: ["PostgreSQL", "Supabase", "SQLite", "RevenueCat", "Stripe", "Brevo", "Google Wallet"],
  tools: ["Git", "GitHub Actions", "Codemagic", "Sentry", "Jest", "Vitest", "Playwright", "Maestro", "Slurm"],
};

const EXP_STACK = {
  lacan: ["C++", "Python"],
  hpc: ["Angular", "Node.js", "Slurm"],
  turniton: ["Angular", "Laravel", "PHP"],
  matlab: ["MATLAB", "C++"],
};

export const COPY: Record<Lang, Copy> = {
  es: {
    meta: {
      title: "Pau Sevilla · Desarrollador full-stack y móvil",
      description:
        "Pau Sevilla, desarrollador full-stack y móvil en el inLab FIB (UPC) y estudiante de Ingeniería Informática en la FIB. Ha publicado seis apps y webs; Vademecum pasa de 10.000 descargas en Google Play.",
    },
    nav: { projects: "Proyectos", experience: "Experiencia", about: "Sobre mí", contact: "Contacto" },
    skip: "Saltar al contenido",
    hero: {
      kicker: "Pau Sevilla · Barcelona",
      headline: "Hago apps móviles y webs.",
      summary:
        "Estudio cuarto de Ingeniería Informática en la FIB y trabajo en el inLab desde diciembre de 2024, en webs para la universidad y en código C++ de grupos de investigación. Además publico mis propias apps, y Vademecum pasa de 10.000 descargas en Google Play.",
      pitch: "¿Necesitas una app móvil o una web? Cuéntame tu idea.",
      cta: "Escríbeme",
      photoAlt: "Foto de Pau Sevilla",
    },
    projects: {
      title: "Proyectos propios",
      intro: "Apps y webs mías que puedes descargar o visitar.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visitar la web",
    },
    experience: {
      title: "Experiencia",
      org: "inLab FIB (UPC)",
      role: "Desarrollador full-stack y de computación (colaborador en formación)",
      date: "Barcelona · desde diciembre de 2024",
      now: "Ahora",
      items: [
        {
          title: "Biblioteca del LaCàN",
          stack: EXP_STACK.lacan,
          now: true,
          text: "Llevo el refactor de la biblioteca open source de ingeniería computacional del LaCàN, que empezó en MATLAB, hacia C++ moderno con bindings de Python y tests. La interfaz y el servidor los desarrolla otro equipo.",
        },
        {
          title: "Portal HPC para el grupo BIT de la Escola de Camins",
          stack: EXP_STACK.hpc,
          text: "Para el proyecto europeo E-Med hice una web desde la que el grupo manda trabajos Slurm a su servidor. Me encargué del frontend, del backend y de la cola de ejecución.",
        },
        {
          title: "TurnItOn",
          stack: EXP_STACK.turniton,
          text: "Hice el frontend y el backend de la nueva web del laboratorio para encender ordenadores a distancia y conectarse a ellos. Sustituyó a una herramienta que se había quedado anticuada.",
        },
        {
          title: "De MATLAB a C++",
          stack: EXP_STACK.matlab,
          text: "Durante dos cuatrimestres pasé a C++ un código de MATLAB y lo optimicé. Cambié sus estructuras de datos para que consumieran menos memoria.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      text: "Empecé a programar con 14 años. Vivo en Barcelona y soy monitor en el Agrupament Escolta Albada de Rubí, donde voy por mi tercer curso.",
      aiTitle: "Cómo uso la IA",
      aiText:
        "Desde hace un año programo con agentes de IA (Claude Code y Codex). Reviso lo que escriben y nada se publica sin pasar los tests. También he integrado IA en mis productos, como el asistente de Manipulador Hoy.",
      educationTitle: "Formación",
      education: [
        { title: "Grado en Ingeniería Informática", detail: "FIB, UPC · cuarto curso", date: "2023 – hoy" },
        { title: "Bachillerato Tecnológico", detail: "Maristes Rubí · trabajo de investigación sobre reconocimiento facial con IA", date: "2021 – 2023" },
      ],
      languagesTitle: "Idiomas",
      languages: "Catalán y castellano nativos; inglés de nivel medio.",
    },
    skills: {
      title: "Habilidades",
      groups: [
        { name: "Lenguajes", items: SKILLS_ITEMS.languages },
        { name: "Frameworks", items: SKILLS_ITEMS.frameworks },
        { name: "Datos y servicios", items: SKILLS_ITEMS.data },
        { name: "Herramientas", items: SKILLS_ITEMS.tools },
      ],
    },
    contact: {
      title: "Contacto",
      available: "Estoy disponible para trabajar.",
      text: "Para proyectos u ofertas, escríbeme al correo:",
      elsewhere: "También estoy en",
    },
    footer: "Web hecha con Astro.",
  },
  en: {
    meta: {
      title: "Pau Sevilla · Full-stack and mobile developer",
      description:
        "Pau Sevilla, full-stack and mobile developer at inLab FIB (UPC) and Computer Engineering student at FIB. Six apps and websites published; Vademecum has over 10,000 downloads on Google Play.",
    },
    nav: { projects: "Projects", experience: "Experience", about: "About", contact: "Contact" },
    skip: "Skip to content",
    hero: {
      kicker: "Pau Sevilla · Barcelona",
      headline: "I build mobile apps and websites.",
      summary:
        "I'm in my fourth year of Computer Engineering at FIB and, since December 2024, I've worked at inLab on web apps for the university and on C++ code for research groups. I also ship my own apps, and Vademecum has over 10,000 downloads on Google Play.",
      pitch: "Need a mobile app or a website? Tell me about your idea.",
      cta: "Get in touch",
      photoAlt: "Photo of Pau Sevilla",
    },
    projects: {
      title: "Personal projects",
      intro: "Apps and websites of mine you can download or visit.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visit site",
    },
    experience: {
      title: "Experience",
      org: "inLab FIB (UPC)",
      role: "Trainee developer · full-stack and C++",
      date: "Barcelona · since December 2024",
      now: "Now",
      items: [
        {
          title: "LaCàN library",
          stack: EXP_STACK.lacan,
          now: true,
          text: "I'm in charge of refactoring LaCàN's open-source computational engineering library, which started out in MATLAB, into modern C++ with Python bindings and tests. Another team builds the interface and the server.",
        },
        {
          title: "HPC portal for the BIT group at the Barcelona School of Civil Engineering",
          stack: EXP_STACK.hpc,
          text: "For the European E-Med project I built a web app from which the group sends Slurm jobs to its server. I handled the frontend, the backend and the execution queue.",
        },
        {
          title: "TurnItOn",
          stack: EXP_STACK.turniton,
          text: "I built the frontend and backend of the lab's new web app for switching computers on remotely and connecting to them. It replaced a tool that had become outdated.",
        },
        {
          title: "From MATLAB to C++",
          stack: EXP_STACK.matlab,
          text: "Over two semesters I ported MATLAB code to C++ and optimised it, changing its data structures so they used less memory.",
        },
      ],
    },
    about: {
      title: "About",
      text: "I started coding at 14. I live in Barcelona and I'm a scout leader with the Agrupament Escolta Albada in Rubí, now in my third year.",
      aiTitle: "How I use AI",
      aiText:
        "For the past year I've been coding with AI agents (Claude Code and Codex). I review what they write and nothing ships without passing the tests. I've also built AI into my products, such as the Manipulador Hoy assistant.",
      educationTitle: "Education",
      education: [
        { title: "BSc in Computer Engineering", detail: "FIB, UPC · fourth year", date: "2023 – present" },
        { title: "Technology Baccalaureate", detail: "Maristes Rubí · research project on facial recognition with AI", date: "2021 – 2023" },
      ],
      languagesTitle: "Languages",
      languages: "Catalan and Spanish (native), English (intermediate).",
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Languages", items: SKILLS_ITEMS.languages },
        { name: "Frameworks", items: SKILLS_ITEMS.frameworks },
        { name: "Data and services", items: SKILLS_ITEMS.data },
        { name: "Tools", items: SKILLS_ITEMS.tools },
      ],
    },
    contact: {
      title: "Contact",
      available: "I'm available for work.",
      text: "For projects or job offers, email me at:",
      elsewhere: "You can also find me on",
    },
    footer: "Built with Astro.",
  },
  ca: {
    meta: {
      title: "Pau Sevilla · Desenvolupador full-stack i mòbil",
      description:
        "Pau Sevilla, desenvolupador full-stack i mòbil a l'inLab FIB (UPC) i estudiant d'Enginyeria Informàtica a la FIB. Ha publicat sis apps i webs; Vademecum supera les 10.000 descàrregues a Google Play.",
    },
    nav: { projects: "Projectes", experience: "Experiència", about: "Sobre mi", contact: "Contacte" },
    skip: "Salta al contingut",
    hero: {
      kicker: "Pau Sevilla · Barcelona",
      headline: "Faig apps mòbils i webs.",
      summary:
        "Estudio quart d'Enginyeria Informàtica a la FIB i treballo a l'inLab des del desembre de 2024, en webs per a la universitat i en codi C++ de grups de recerca. A més, publico les meves pròpies apps, i Vademecum supera les 10.000 descàrregues a Google Play.",
      pitch: "Necessites una app mòbil o una web? Explica'm la teva idea.",
      cta: "Escriu-me",
      photoAlt: "Foto de Pau Sevilla",
    },
    projects: {
      title: "Projectes propis",
      intro: "Apps i webs meves que pots descarregar o visitar.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visitar la web",
    },
    experience: {
      title: "Experiència",
      org: "inLab FIB (UPC)",
      role: "Desenvolupador full-stack i de computació (col·laborador en formació)",
      date: "Barcelona · des del desembre de 2024",
      now: "Ara",
      items: [
        {
          title: "Biblioteca del LaCàN",
          stack: EXP_STACK.lacan,
          now: true,
          text: "M'encarrego de la refactorització de la biblioteca open source d'enginyeria computacional del LaCàN, que va començar en MATLAB, cap a C++ modern amb bindings de Python i tests. La interfície i el servidor els desenvolupa un altre equip.",
        },
        {
          title: "Portal HPC per al grup BIT de l'Escola de Camins",
          stack: EXP_STACK.hpc,
          text: "Per al projecte europeu E-Med vaig fer una web des de la qual el grup envia treballs Slurm al seu servidor. Em vaig encarregar del frontend, del backend i de la cua d'execució.",
        },
        {
          title: "TurnItOn",
          stack: EXP_STACK.turniton,
          text: "Vaig fer el frontend i el backend de la nova web del laboratori per encendre ordinadors a distància i connectar-s'hi. Va substituir una eina que havia quedat antiquada.",
        },
        {
          title: "De MATLAB a C++",
          stack: EXP_STACK.matlab,
          text: "Durant dos quadrimestres vaig passar a C++ un codi de MATLAB i el vaig optimitzar. Vaig canviar-ne les estructures de dades perquè consumissin menys memòria.",
        },
      ],
    },
    about: {
      title: "Sobre mi",
      text: "Vaig començar a programar amb 14 anys. Visc a Barcelona i soc monitor a l'Agrupament Escolta Albada de Rubí, on faig el meu tercer curs.",
      aiTitle: "Com faig servir la IA",
      aiText:
        "Des de fa un any programo amb agents d'IA (Claude Code i Codex). Reviso el que escriuen i no es publica res sense passar els tests. També he integrat IA en els meus productes, com l'assistent de Manipulador Hoy.",
      educationTitle: "Formació",
      education: [
        { title: "Grau en Enginyeria Informàtica", detail: "FIB, UPC · quart curs", date: "2023 – avui" },
        { title: "Batxillerat Tecnològic", detail: "Maristes Rubí · treball de recerca sobre reconeixement facial amb IA", date: "2021 – 2023" },
      ],
      languagesTitle: "Idiomes",
      languages: "Català i castellà nadius; anglès de nivell mitjà.",
    },
    skills: {
      title: "Habilitats",
      groups: [
        { name: "Llenguatges", items: SKILLS_ITEMS.languages },
        { name: "Frameworks", items: SKILLS_ITEMS.frameworks },
        { name: "Dades i serveis", items: SKILLS_ITEMS.data },
        { name: "Eines", items: SKILLS_ITEMS.tools },
      ],
    },
    contact: {
      title: "Contacte",
      available: "Estic disponible per treballar.",
      text: "Per a projectes o ofertes, escriu-me al correu:",
      elsewhere: "També em trobaràs a",
    },
    footer: "Web feta amb Astro.",
  },
};

/** Tecnologías que aparecen en algún proyecto o en la experiencia. */
export const USED_TECH: Set<string> = new Set([
  ...PROJECTS.flatMap((p) => p.stack),
  ...Object.values(EXP_STACK).flat(),
]);

export function isUsed(skill: string): boolean {
  if (USED_TECH.has(skill)) return true;
  // «React Native (Expo)» cuenta si aparece React Native o Expo
  return [...USED_TECH].some((t) => skill.includes(t) && t.length > 2 && skill.startsWith(t));
}
