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
          "Vademecum es una app de medicamentos con los datos oficiales de la AEMPS. Se había quedado muy anticuada y la rehíce desde cero en Flutter. La base de datos va en el móvil, cifrada, y se sincroniza en tiempo real con Supabase. Las suscripciones las gestiona RevenueCat.",
        metric: "Más de 10.000 descargas en Google Play",
        metricNote: "4,8 estrellas en App Store (13 valoraciones)",
        imageAlt: "Pantalla de búsqueda de Vademecum",
      },
      en: {
        summary:
          "I rebuilt a badly outdated medicines reference app from scratch in Flutter, using official data from AEMPS, Spain's medicines regulator. The database lives on the device, encrypted, and syncs with Supabase in real time. Subscriptions run through RevenueCat.",
        metric: "10,000+ downloads on Google Play",
        metricNote: "Rated 4.8 on the App Store (13 ratings)",
        imageAlt: "Vademecum search screen",
      },
      ca: {
        summary:
          "Vademecum és una app de medicaments amb les dades oficials de l'AEMPS. Havia quedat molt antiquada i la vaig refer des de zero amb Flutter. La base de dades és al mòbil, xifrada, i se sincronitza en temps real amb Supabase. Les subscripcions les gestiona RevenueCat.",
        metric: "Més de 10.000 descàrregues a Google Play",
        metricNote: "4,8 estrelles a l'App Store (13 valoracions)",
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
          "Más de 3.700 medicamentos veterinarios de CIMAVet que se consultan sin conexión. Un backend descarga, valida y publica el catálogo cada día con GitHub Actions y, si falla, abre una incidencia. Reduje el tiempo de descarga de 29 a 16 minutos.",
        imageAlt: "Búsqueda de medicamentos en Vademecum Veterinario",
      },
      en: {
        summary:
          "Over 3,700 veterinary medicines from CIMAVet, the Spanish regulator's veterinary database, available offline. A backend running on GitHub Actions downloads, validates and publishes the catalogue daily, and opens an issue if anything fails. I cut the download time from 29 to 16 minutes.",
        imageAlt: "Medicine search in Vademecum Veterinario",
      },
      ca: {
        summary:
          "Més de 3.700 medicaments veterinaris de CIMAVet que es consulten sense connexió. Un backend descarrega, valida i publica el catàleg cada dia amb GitHub Actions i, si falla, obre una incidència. Vaig reduir el temps de descàrrega de 29 a 16 minuts.",
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
          "App para preparar el examen teórico del carné de coche, moto y ciclomotor. Tiene más de 1.500 preguntas de coche, más de 500 de moto y otras tantas de ciclomotor, y cada una indica su fuente oficial. Los paquetes de preguntas se montan con Python, pasan un linter en la CI y llegan a la app firmados.",
        imageAlt: "Resultado de un simulacro en Apto",
      },
      en: {
        summary:
          "Helps you prepare for the Spanish driving theory test (DGT, the national traffic authority) for car, motorbike and moped. It has over 1,500 car questions and over 500 each for motorbike and moped, and every question cites its official source. The question packs are built with Python, linted in CI and signed before they reach the app.",
        imageAlt: "Mock exam result in Apto",
      },
      ca: {
        summary:
          "App per preparar l'examen teòric del carnet de cotxe, moto i ciclomotor. Té més de 1.500 preguntes de cotxe, més de 500 de moto i altres tantes de ciclomotor, i cadascuna indica la font oficial. Els paquets de preguntes es generen amb Python, passen un linter a la CI i arriben a l'app signats.",
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
          "Visor de parcelas del SIGPAC y del Catastro sobre la ortofoto del PNOA. Buscas por polígono y parcela o por referencia catastral y mides fincas. Un workflow comprueba dos veces al día que siguen respondiendo las APIs públicas de las que depende.",
        imageAlt: "Mapa de recintos SIGPAC en Parcelario",
      },
      en: {
        summary:
          "A map viewer for Spanish land parcels from SIGPAC (the agricultural parcel register) and the Cadastre, over official PNOA aerial imagery. You search by polygon and parcel number or by cadastral reference, and measure plots. A scheduled workflow checks twice a day that the public APIs it relies on are still up.",
        imageAlt: "SIGPAC parcel map in Parcelario",
      },
      ca: {
        summary:
          "Visor de parcel·les del SIGPAC i del Cadastre sobre l'ortofoto del PNOA. Cerques per polígon i parcel·la o per referència cadastral i mesures finques. Un workflow comprova dues vegades al dia que les APIs públiques de què depèn continuen responent.",
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
          "A website and app for getting a food handler certificate in Spain. The exam is free. If you pass, you pay via Stripe and download a certificate with a QR code for verification. The certificate can be saved to Google Wallet, emails go out through Brevo and there's an assistant built on the Claude API.",
        metric: "Launched in 2026 and already making sales",
        imageAlt: "manipuladorhoy.es homepage",
      },
      ca: {
        summary:
          "Web i app per obtenir el certificat de manipulador d'aliments. L'examen és gratuït i, si aproves, pagues amb Stripe i et descarregues el certificat amb un QR per verificar-lo. Es pot desar a Google Wallet, els correus surten per Brevo i hi ha un assistent fet amb l'API de Claude.",
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
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Vercel AI SDK", "Vitest", "Playwright"],
    links: [{ kind: "web", url: "https://flipebooks.com" }],
    text: {
      es: {
        summary:
          "Una web que convierte PDF en flipbooks interactivos. La hice con otro desarrollador. Tiene planes de pago y mucha IA: traducción automática de los documentos, textos alternativos para las imágenes, metadatos SEO, informes de analíticas y un chat sobre el documento.",
        imageAlt: "Portada de flipebooks.com",
      },
      en: {
        summary:
          "A web app that turns PDFs into interactive flipbooks, built with another developer. It has paid plans and plenty of AI: automatic document translation, alt text for images, SEO metadata, analytics insights and a chat about the document.",
        imageAlt: "flipebooks.com homepage",
      },
      ca: {
        summary:
          "Una web que converteix PDF en flipbooks interactius. La vaig fer amb un altre desenvolupador. Té plans de pagament i molta IA: traducció automàtica dels documents, textos alternatius per a les imatges, metadades SEO, informes d'analítica i un xat sobre el document.",
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
      title: "Pau Sevilla · Desarrollador full stack y móvil",
      description:
        "Pau Sevilla, desarrollador full stack y móvil en el inLab FIB (UPC) y estudiante de Ingeniería Informática en la FIB. Ha publicado seis apps y webs, entre ellas Vademecum, con más de 10.000 descargas en Google Play.",
    },
    nav: { projects: "Proyectos", experience: "Experiencia", about: "Sobre mí", contact: "Contacto" },
    skip: "Saltar al contenido",
    hero: {
      kicker: "Barcelona · inLab FIB",
      headline: "Soy Pau Sevilla y desarrollo apps móviles y webs.",
      summary:
        "Estudio cuarto de Ingeniería Informática en la FIB y trabajo en el inLab desde diciembre de 2024, en webs para la universidad y en código C++ de grupos de investigación. Además, publico mis propias apps: Vademecum supera las 10.000 descargas en Google Play.",
      pitch: "¿Buscas a alguien que te haga una app o una web? Cuéntame tu idea.",
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
      role: "Desarrollador full stack y de computación científica (colaborador en formación)",
      date: "Barcelona · desde diciembre de 2024",
      now: "Ahora",
      items: [
        {
          title: "Biblioteca del LaCàN",
          stack: EXP_STACK.lacan,
          now: true,
          text: "Me encargo del refactor del código C++ y Python de la biblioteca de código abierto de ingeniería computacional del LaCàN, que se tradujo de MATLAB a C++ hace años: C++ moderno, bindings de Python y tests. La interfaz y el servidor los desarrolla otro equipo.",
        },
        {
          title: "Portal HPC para el grupo BIT de la Escola de Camins",
          stack: EXP_STACK.hpc,
          text: "Para el proyecto europeo E-Med hice una web desde la que el grupo lanza trabajos Slurm en su servidor. Me encargué del frontend, del backend y de la cola de trabajos.",
        },
        {
          title: "TurnItOn",
          stack: EXP_STACK.turniton,
          text: "Hice el frontend y el backend de la nueva web del laboratorio para controlar ordenadores a distancia: encenderlos y conectarse a ellos. Sustituyó a una herramienta que se había quedado anticuada.",
        },
        {
          title: "De MATLAB a C++",
          stack: EXP_STACK.matlab,
          text: "Durante dos cuatrimestres pasé a C++ y optimicé un algoritmo de compresión de datos escrito en MATLAB. Cambié sus estructuras de datos para que consumieran menos memoria.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      text: "Empecé a programar con 14 años. Vivo en Barcelona y este es mi tercer curso como monitor en el Agrupament Escolta Albada de Rubí.",
      aiTitle: "Cómo uso la IA",
      aiText:
        "Desde hace un año programo con agentes de IA (Claude Code y Codex). También diseño cómo trabajan: configuro agentes, subagentes, skills e instrucciones por proyecto. Reviso lo que escriben y nada se publica sin pasar los tests. También he integrado IA en mis productos, como el asistente de Manipulador Hoy.",
      educationTitle: "Formación",
      education: [
        { title: "Grado en Ingeniería Informática", detail: "FIB, UPC · cuarto curso", date: "2023 – actualidad" },
        { title: "Bachillerato tecnológico", detail: "Maristes Rubí · trabajo de investigación sobre reconocimiento facial con IA", date: "2021 – 2023" },
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
        "Pau Sevilla is a full-stack and mobile developer at inLab FIB (UPC) and an Informatics Engineering student at FIB. He has published six apps and websites, and Vademecum has over 10,000 downloads on Google Play.",
    },
    nav: { projects: "Projects", experience: "Experience", about: "About", contact: "Contact" },
    skip: "Skip to content",
    hero: {
      kicker: "Barcelona · inLab FIB",
      headline: "I'm Pau Sevilla. I build mobile apps and websites.",
      summary:
        "I'm a fourth-year Informatics Engineering student at the Barcelona School of Informatics (FIB, UPC). Since December 2024 I've been working at inLab, building web apps for the university and working on C++ code for research groups. I also ship my own apps, and Vademecum has over 10,000 downloads on Google Play.",
      pitch: "Looking for someone to build your app or website? Tell me about your idea.",
      cta: "Get in touch",
      photoAlt: "Photo of Pau Sevilla",
    },
    projects: {
      title: "Personal projects",
      intro: "Apps and sites I've built that you can download or visit.",
      appstore: "App Store",
      googleplay: "Google Play",
      web: "Visit site",
    },
    experience: {
      title: "Experience",
      org: "inLab FIB (UPC)",
      role: "Student developer · full-stack and scientific computing",
      date: "Barcelona · since December 2024",
      now: "Now",
      items: [
        {
          title: "LaCàN library",
          stack: EXP_STACK.lacan,
          now: true,
          text: "I'm responsible for refactoring the C++ and Python code of the open-source computational engineering library from LaCàN, UPC's numerical computing lab. It was ported from MATLAB to C++ years ago, and I'm bringing it up to modern C++ with Python bindings and tests. A separate team builds the interface and the server.",
        },
        {
          title: "HPC portal for the BIT group at the Barcelona School of Civil Engineering",
          stack: EXP_STACK.hpc,
          text: "For E-Med, a European research project, I built a web app the group uses to submit Slurm jobs to its server. I handled the frontend, the backend and the job queue.",
        },
        {
          title: "TurnItOn",
          stack: EXP_STACK.turniton,
          text: "I built the frontend and backend of the lab's new web app for controlling computers remotely: switching them on and connecting to them. It replaced an outdated tool.",
        },
        {
          title: "From MATLAB to C++",
          stack: EXP_STACK.matlab,
          text: "Over two semesters I ported a data compression algorithm from MATLAB to C++ and optimised it, changing its data structures so they used less memory.",
        },
      ],
    },
    about: {
      title: "About",
      text: "I started coding at 14. I live in Barcelona, and this is my third year as a Scout leader with Agrupament Escolta Albada, a Scout group in Rubí, near Barcelona.",
      aiTitle: "How I use AI",
      aiText:
        "For the past year I've been coding with AI agents (Claude Code and Codex). I also design how they work, setting up agents, subagents, skills and per-project instructions. I review what they write, and nothing ships until the tests pass. I've also built AI into my products, such as the Manipulador Hoy assistant.",
      educationTitle: "Education",
      education: [
        { title: "Bachelor's Degree in Informatics Engineering", detail: "FIB, UPC · fourth year", date: "2023 – present" },
        { title: "Baccalaureate, technology track", detail: "Maristes Rubí · research project on AI-based facial recognition", date: "2021 – 2023" },
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
      title: "Pau Sevilla · Desenvolupador full stack i mòbil",
      description:
        "Pau Sevilla, desenvolupador full stack i mòbil a l'inLab FIB (UPC) i estudiant d'Enginyeria Informàtica a la FIB. Ha publicat sis apps i webs, entre les quals Vademecum, amb més de 10.000 descàrregues a Google Play.",
    },
    nav: { projects: "Projectes", experience: "Experiència", about: "Sobre mi", contact: "Contacte" },
    skip: "Salta al contingut",
    hero: {
      kicker: "Barcelona · inLab FIB",
      headline: "Soc en Pau Sevilla i desenvolupo apps mòbils i webs.",
      summary:
        "Faig quart d'Enginyeria Informàtica a la FIB i treballo a l'inLab des del desembre de 2024, en webs per a la universitat i en codi C++ de grups de recerca. A més, publico apps pròpies: Vademecum supera les 10.000 descàrregues a Google Play.",
      pitch: "Busques algú que et faci una app o una web? Explica'm la teva idea.",
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
      role: "Desenvolupador full stack i de computació científica (col·laborador en formació)",
      date: "Barcelona · des del desembre de 2024",
      now: "Ara",
      items: [
        {
          title: "Biblioteca del LaCàN",
          stack: EXP_STACK.lacan,
          now: true,
          text: "M'encarrego de refactoritzar el codi C++ i Python de la biblioteca de codi obert d'enginyeria computacional del LaCàN, que es va traduir de MATLAB a C++ fa anys: C++ modern, bindings de Python i tests. La interfície i el servidor els desenvolupa un altre equip.",
        },
        {
          title: "Portal HPC per al grup BIT de l'Escola de Camins",
          stack: EXP_STACK.hpc,
          text: "Per al projecte europeu E-Med vaig fer una web des de la qual el grup envia treballs Slurm al seu servidor. Em vaig encarregar del frontend, del backend i de la cua de treballs.",
        },
        {
          title: "TurnItOn",
          stack: EXP_STACK.turniton,
          text: "Vaig fer el frontend i el backend de la nova web del laboratori per controlar ordinadors a distància: encendre'ls i connectar-s'hi. Va substituir una eina que havia quedat antiquada.",
        },
        {
          title: "De MATLAB a C++",
          stack: EXP_STACK.matlab,
          text: "Durant dos quadrimestres vaig passar a C++ i optimitzar un algorisme de compressió de dades escrit en MATLAB. Vaig canviar-ne les estructures de dades perquè consumissin menys memòria.",
        },
      ],
    },
    about: {
      title: "Sobre mi",
      text: "Vaig començar a programar amb 14 anys. Visc a Barcelona i aquest és el tercer curs que faig de monitor a l'Agrupament Escolta Albada de Rubí.",
      aiTitle: "Com faig servir la IA",
      aiText:
        "Des de fa un any programo amb agents d'IA (Claude Code i Codex). També dissenyo com treballen: configuro agents, subagents, skills i instruccions per projecte. Reviso el que escriuen i no publico res que no passi els tests. També he integrat IA als meus productes, com l'assistent de Manipulador Hoy.",
      educationTitle: "Formació",
      education: [
        { title: "Grau en Enginyeria Informàtica", detail: "FIB, UPC · quart curs", date: "2023 – actualitat" },
        { title: "Batxillerat tecnològic", detail: "Maristes Rubí · treball de recerca sobre reconeixement facial amb IA", date: "2021 – 2023" },
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
