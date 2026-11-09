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
  instagram: "https://www.instagram.com/pausiete7/",
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
  stack: string[];
  links: ProjectLink[];
  text: Record<Lang, { summary: string; metric?: string; imageAlt: string }>;
}

export const PROJECTS: Project[] = [
  {
    id: "vademecum",
    name: "Vademecum",
    year: "2023 – 2026",
    image: vademecumImg,
    shot: "app",
    stack: ["Flutter", "SQLite", "Supabase", "RevenueCat"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id1187696022" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.vademecum" },
    ],
    text: {
      es: {
        summary:
          "Rehíce desde cero en Flutter una app de medicamentos con los datos oficiales de la AEMPS que se había quedado muy desactualizada: base de datos local cifrada, sincronización en tiempo real con Supabase y suscripciones con RevenueCat.",
        metric: "Más de 10.000 descargas en Google Play · 4,8 en App Store",
        imageAlt: "Pantalla de búsqueda de Vademecum",
      },
      en: {
        summary:
          "I rebuilt from scratch in Flutter a medicines app based on official data from the Spanish Medicines Agency (AEMPS) that had become badly outdated: encrypted local database, real-time sync with Supabase and subscriptions with RevenueCat.",
        metric: "10,000+ downloads on Google Play · 4.8 on the App Store",
        imageAlt: "Vademecum search screen",
      },
      ca: {
        summary:
          "Vaig refer des de zero en Flutter una app de medicaments amb les dades oficials de l'AEMPS que s'havia quedat molt desactualitzada: base de dades local xifrada, sincronització en temps real amb Supabase i subscripcions amb RevenueCat.",
        metric: "Més de 10.000 descàrregues a Google Play · 4,8 a l'App Store",
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
    stack: ["Flutter", "SQLite", "Python", "RevenueCat"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id6813851821" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.apto" },
    ],
    text: {
      es: {
        summary:
          "Para preparar el teórico de coche, moto y ciclomotor: más de 1.500 preguntas de coche y más de 500 de moto y de ciclomotor, cada una con su fuente oficial. Se generan con Python, pasan un linter en CI y llegan a la app en paquetes firmados.",
        imageAlt: "Resultado de un simulacro en Apto",
      },
      en: {
        summary:
          "Prep for the Spanish driving theory test for car, motorbike and moped: over 1,500 car questions and over 500 each for motorbike and moped, every one with its official source. Questions are generated with Python, linted in CI and shipped to the app in signed packages.",
        imageAlt: "Mock exam result in Apto",
      },
      ca: {
        summary:
          "Per preparar el teòric de cotxe, moto i ciclomotor: més de 1.500 preguntes de cotxe i més de 500 de moto i de ciclomotor, cadascuna amb la seva font oficial. Es generen amb Python, passen un linter a la CI i arriben a l'app en paquets signats.",
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
    stack: ["Flutter", "MapLibre", "SQLite"],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/es/app/id6822248499" },
      { kind: "googleplay", url: "https://play.google.com/store/apps/details?id=es.impulsit.parcelassigpac" },
    ],
    text: {
      es: {
        summary:
          "Visor de parcelas SIGPAC y Catastro sobre la ortofoto del PNOA: buscas por polígono y parcela o referencia catastral y mides fincas. Un workflow comprueba dos veces al día que responden las APIs públicas de las que depende.",
        imageAlt: "Mapa de recintos SIGPAC en Parcelario",
      },
      en: {
        summary:
          "A viewer for Spanish land parcels (SIGPAC and Cadastre) over aerial imagery: search by polygon and parcel or cadastral reference and measure plots. A workflow checks twice a day that the public APIs it depends on are still responding.",
        imageAlt: "SIGPAC parcel map in Parcelario",
      },
      ca: {
        summary:
          "Visor de parcel·les SIGPAC i Cadastre sobre l'ortofoto del PNOA: cerques per polígon i parcel·la o referència cadastral i mesures finques. Un workflow comprova dues vegades al dia que responen les APIs públiques de què depèn.",
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
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Stripe"],
    links: [{ kind: "web", url: "https://manipuladorhoy.es" }],
    text: {
      es: {
        summary:
          "Web y app para sacar el certificado de manipulador de alimentos: el examen es gratis y, si apruebas, pagas con Stripe y descargas el certificado con un QR para verificarlo. Con Google Wallet, correos con Brevo y un asistente con la API de Claude.",
        metric: "Lanzado en 2026, ya con ventas",
        imageAlt: "Portada de manipuladorhoy.es",
      },
      en: {
        summary:
          "Web and mobile app to get a Spanish food handler certificate: the exam is free and, if you pass, you pay with Stripe and download a certificate with a QR code to verify it. With Google Wallet, Brevo emails and an assistant built on the Claude API.",
        metric: "Launched in 2026, already selling",
        imageAlt: "manipuladorhoy.es home page",
      },
      ca: {
        summary:
          "Web i app per treure el certificat de manipulador d'aliments: l'examen és gratuït i, si aproves, pagues amb Stripe i descarregues el certificat amb un QR per verificar-lo. Amb Google Wallet, correus amb Brevo i un assistent amb l'API de Claude.",
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
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    links: [{ kind: "web", url: "https://flipebooks.com" }],
    text: {
      es: {
        summary:
          "Con otro desarrollador hicimos una web que convierte PDFs en flipbooks interactivos, con planes de pago, chat de IA y tests con Vitest y Playwright.",
        imageAlt: "Portada de flipebooks.com",
      },
      en: {
        summary:
          "Together with another developer, we built a web app that turns PDFs into interactive flipbooks, with paid plans, an AI chat and tests with Vitest and Playwright.",
        imageAlt: "flipebooks.com home page",
      },
      ca: {
        summary:
          "Amb un altre desenvolupador vam fer una web que converteix PDFs en flipbooks interactius, amb plans de pagament, xat d'IA i tests amb Vitest i Playwright.",
        imageAlt: "Portada de flipebooks.com",
      },
    },
  },
];

interface ExperienceItem {
  title: string;
  stack: string;
  text: string;
}

interface Copy {
  meta: { title: string; description: string };
  nav: { projects: string; experience: string; about: string; contact: string };
  skip: string;
  hero: {
    badge: string;
    role: string;
    summary: string;
    ctaProjects: string;
    ctaContact: string;
    photoAlt: string;
  };
  stats: { value: string; label: string }[];
  projects: { title: string; intro: string; appstore: string; googleplay: string; web: string };
  experience: {
    title: string;
    org: string;
    role: string;
    date: string;
    place: string;
    items: ExperienceItem[];
  };
  ai: { title: string; text: string };
  about: { title: string; text: string; educationTitle: string; education: { title: string; detail: string; date: string }[]; languagesTitle: string; languages: string };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  contact: { title: string; text: string; emailLabel: string };
  footer: string;
}

const SKILLS_ITEMS = {
  languages: ["Dart", "TypeScript", "JavaScript", "Python", "C++", "PHP", "SQL", "MATLAB"],
  frameworks: ["Flutter", "Angular", "Laravel", "React", "React Native (Expo)", "Next.js", "Node.js"],
  data: ["PostgreSQL", "Supabase", "SQLite", "RevenueCat", "Stripe", "Brevo", "Google Wallet"],
  tools: ["Git", "GitHub Actions", "Codemagic", "Sentry", "Jest", "Vitest", "Playwright", "Maestro", "Slurm"],
};

export const COPY: Record<Lang, Copy> = {
  es: {
    meta: {
      title: "Pau Sevilla · Desarrollador full-stack y móvil",
      description:
        "Desarrollador full-stack y móvil en el inLab FIB (UPC) y estudiante de Ingeniería Informática en la FIB. Apps publicadas en App Store y Google Play; Vademecum supera las 10.000 descargas.",
    },
    nav: { projects: "Proyectos", experience: "Experiencia", about: "Sobre mí", contact: "Contacto" },
    skip: "Saltar al contenido",
    hero: {
      badge: "Disponible para trabajar",
      role: "Desarrollador full-stack y móvil",
      summary:
        "Estudio cuarto de Ingeniería Informática en la FIB y desde diciembre de 2024 trabajo en el inLab FIB, en webs para la universidad y en código C++ de grupos de investigación. Por mi cuenta hago y publico mis propias apps.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Escríbeme",
      photoAlt: "Foto de Pau Sevilla",
    },
    stats: [
      { value: "10.000+", label: "descargas de Vademecum en Google Play" },
      { value: "6", label: "productos publicados" },
      { value: "2024", label: "en el inLab FIB desde diciembre" },
    ],
    projects: {
      title: "Proyectos propios",
      intro: "Apps y webs que he diseñado, programado y publicado.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visitar web",
    },
    experience: {
      title: "Experiencia",
      org: "inLab FIB (UPC)",
      role: "Desarrollador full-stack y de computación · colaborador en formación",
      date: "Dic. 2024 – actualidad",
      place: "Barcelona",
      items: [
        {
          title: "TurnItOn",
          stack: "Angular · Laravel",
          text: "Hice el frontend y el backend de la nueva web del laboratorio para encender ordenadores a distancia y conectarse a ellos. Sustituye a una herramienta que se había quedado muy anticuada.",
        },
        {
          title: "Portal HPC para el grupo BIT de la Escola de Camins",
          stack: "Angular · Node.js · Slurm",
          text: "Dentro del proyecto europeo E-Med: una web desde la que el grupo envía trabajos Slurm a su servidor. Programé el frontend, el backend y la cola de ejecución.",
        },
        {
          title: "De MATLAB a C++",
          stack: "MATLAB · C++",
          text: "Durante dos cuatrimestres pasé a C++ un código de MATLAB y lo optimicé; cambié sus estructuras de datos para que consuman menos memoria.",
        },
        {
          title: "Librería del LaCàN",
          stack: "C++ · Python",
          text: "Ahora llevo el refactor de su librería open source de ingeniería computacional, que viene de MATLAB: C++ moderno, bindings de Python y tests. El frontend y el backend son de otro equipo.",
        },
      ],
    },
    ai: {
      title: "Desarrollo con IA",
      text: "Desde hace un año desarrollo con agentes de IA (Claude Code y Codex) de forma supervisada: defino qué se hace, reviso el código que generan y todo pasa tests antes de publicarse. También integro modelos de IA en producto, como el asistente de Manipulador Hoy con la API de Claude.",
    },
    about: {
      title: "Sobre mí",
      text: "Programo desde los 14 años. Vivo en Barcelona y, fuera del código, soy monitor en el Agrupament Escolta Albada de Rubí; este es mi tercer curso.",
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
      text: "Si quieres hablar de un proyecto o de una oferta, escríbeme.",
      emailLabel: "Enviar un correo",
    },
    footer: "Hecho con Astro por Pau Sevilla.",
  },
  en: {
    meta: {
      title: "Pau Sevilla · Full-stack and mobile developer",
      description:
        "Full-stack and mobile developer at inLab FIB (UPC) and Computer Engineering student at FIB. Apps published on the App Store and Google Play; Vademecum has over 10,000 downloads.",
    },
    nav: { projects: "Projects", experience: "Experience", about: "About", contact: "Contact" },
    skip: "Skip to content",
    hero: {
      badge: "Available for work",
      role: "Full-stack and mobile developer",
      summary:
        "I'm in my fourth year of Computer Engineering at FIB and, since December 2024, I've been working at inLab FIB on web apps for the university and on C++ code for research groups. On my own, I build and publish my own apps.",
      ctaProjects: "See projects",
      ctaContact: "Get in touch",
      photoAlt: "Photo of Pau Sevilla",
    },
    stats: [
      { value: "10,000+", label: "Vademecum downloads on Google Play" },
      { value: "6", label: "products published" },
      { value: "2024", label: "at inLab FIB since December" },
    ],
    projects: {
      title: "Own projects",
      intro: "Apps and websites I have designed, built and published.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visit site",
    },
    experience: {
      title: "Experience",
      org: "inLab FIB (UPC)",
      role: "Full-stack and computing developer · trainee collaborator",
      date: "Dec 2024 – present",
      place: "Barcelona",
      items: [
        {
          title: "TurnItOn",
          stack: "Angular · Laravel",
          text: "I built the frontend and backend of the lab's new web app for switching computers on remotely and connecting to them. It replaces a tool that had become badly outdated.",
        },
        {
          title: "HPC portal for the BIT group at the Barcelona School of Civil Engineering",
          stack: "Angular · Node.js · Slurm",
          text: "Part of the European E-Med project: a web app from which the group submits Slurm jobs to its server. I wrote the frontend, the backend and the execution queue.",
        },
        {
          title: "From MATLAB to C++",
          stack: "MATLAB · C++",
          text: "Over two semesters I ported MATLAB code to C++ and optimised it, changing its data structures so they use less memory.",
        },
        {
          title: "LaCàN library",
          stack: "C++ · Python",
          text: "I'm now leading the refactor of their open-source computational engineering library, which started out in MATLAB: modern C++, Python bindings and tests. Another team handles the frontend and backend.",
        },
      ],
    },
    ai: {
      title: "Building with AI",
      text: "For the past year I've been developing with AI agents (Claude Code and Codex) under supervision: I decide what gets built, review the code they generate, and everything passes tests before it ships. I also integrate AI models into products, like the Manipulador Hoy assistant built on the Claude API.",
    },
    about: {
      title: "About",
      text: "I've been coding since I was 14. I live in Barcelona and, away from code, I'm a leader at the Agrupament Escolta Albada scout group in Rubí, now in my third year.",
      educationTitle: "Education",
      education: [
        { title: "BSc in Computer Engineering", detail: "FIB, UPC · fourth year", date: "2023 – present" },
        { title: "Technology Baccalaureate", detail: "Maristes Rubí · research project on facial recognition with AI", date: "2021 – 2023" },
      ],
      languagesTitle: "Languages",
      languages: "Native Catalan and Spanish; intermediate English.",
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
      text: "If you'd like to talk about a project or a job, drop me a line.",
      emailLabel: "Send an email",
    },
    footer: "Built with Astro by Pau Sevilla.",
  },
  ca: {
    meta: {
      title: "Pau Sevilla · Desenvolupador full-stack i mòbil",
      description:
        "Desenvolupador full-stack i mòbil a l'inLab FIB (UPC) i estudiant d'Enginyeria Informàtica a la FIB. Apps publicades a l'App Store i Google Play; Vademecum supera les 10.000 descàrregues.",
    },
    nav: { projects: "Projectes", experience: "Experiència", about: "Sobre mi", contact: "Contacte" },
    skip: "Salta al contingut",
    hero: {
      badge: "Disponible per treballar",
      role: "Desenvolupador full-stack i mòbil",
      summary:
        "Estudio quart d'Enginyeria Informàtica a la FIB i des del desembre de 2024 treballo a l'inLab FIB, en webs per a la universitat i en codi C++ de grups de recerca. Pel meu compte faig i publico les meves pròpies apps.",
      ctaProjects: "Veure projectes",
      ctaContact: "Escriu-me",
      photoAlt: "Foto de Pau Sevilla",
    },
    stats: [
      { value: "10.000+", label: "descàrregues de Vademecum a Google Play" },
      { value: "6", label: "productes publicats" },
      { value: "2024", label: "a l'inLab FIB des de desembre" },
    ],
    projects: {
      title: "Projectes propis",
      intro: "Apps i webs que he dissenyat, programat i publicat.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visitar el web",
    },
    experience: {
      title: "Experiència",
      org: "inLab FIB (UPC)",
      role: "Desenvolupador full-stack i de computació · col·laborador en formació",
      date: "Des. 2024 – actualitat",
      place: "Barcelona",
      items: [
        {
          title: "TurnItOn",
          stack: "Angular · Laravel",
          text: "Vaig fer el frontend i el backend del nou web del laboratori per encendre ordinadors a distància i connectar-s'hi. Substitueix una eina que s'havia quedat molt antiquada.",
        },
        {
          title: "Portal HPC per al grup BIT de l'Escola de Camins",
          stack: "Angular · Node.js · Slurm",
          text: "Dins del projecte europeu E-Med: un web des del qual el grup envia treballs Slurm al seu servidor. Vaig programar el frontend, el backend i la cua d'execució.",
        },
        {
          title: "De MATLAB a C++",
          stack: "MATLAB · C++",
          text: "Durant dos quadrimestres vaig passar a C++ un codi de MATLAB i el vaig optimitzar; vaig canviar-ne les estructures de dades perquè consumeixin menys memòria.",
        },
        {
          title: "Llibreria del LaCàN",
          stack: "C++ · Python",
          text: "Ara porto el refactor de la seva llibreria open source d'enginyeria computacional, que ve de MATLAB: C++ modern, bindings de Python i tests. El frontend i el backend són d'un altre equip.",
        },
      ],
    },
    ai: {
      title: "Desenvolupament amb IA",
      text: "Des de fa un any desenvolupo amb agents d'IA (Claude Code i Codex) de manera supervisada: defineixo què es fa, reviso el codi que generen i tot passa tests abans de publicar-se. També integro models d'IA en producte, com l'assistent de Manipulador Hoy amb l'API de Claude.",
    },
    about: {
      title: "Sobre mi",
      text: "Programo des dels 14 anys. Visc a Barcelona i, fora del codi, soc monitor a l'Agrupament Escolta Albada de Rubí; aquest és el meu tercer curs.",
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
      text: "Si vols parlar d'un projecte o d'una oferta, escriu-me.",
      emailLabel: "Enviar un correu",
    },
    footer: "Fet amb Astro per Pau Sevilla.",
  },
};
