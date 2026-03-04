export const en = {
  // Layout
  "layout.title": "Pau Sevilla's Portfolio - Web Developer & Programmer with 4 years of experience",
  "layout.description": "Web Developer & Programmer with 4 years of experience in web and mobile application development",

  // Nav
  "nav.about": "About me",
  "nav.experience": "Work Experience",
  "nav.education": "Education",
  "nav.projects": "Projects",
  "nav.skills": "Skills",

  // Hero
  "hero.badge": "Available for work",
  "hero.greeting": "Hey! I'm Pau Sevilla",
  "hero.bio": `I'm a Computer Engineering student at FIB (UPC Barcelona). Passionate about <span class="font-bold text-blue-500">technology and software development</span>, I'm always looking for new ways to learn and grow in the world of computing. I live in Barcelona, Spain and enjoy facing new challenges, aiming to transform ideas into innovative solutions. <span class="font-bold text-blue-500">Welcome to my personal space!</span>`,
  "hero.photoAlt": "Pau Sevilla, developer",

  // About
  "about.p1": `I'm Pau Sevilla, a <strong>Computer Engineering student at FIB - UPC</strong>, in Barcelona. Since I was 14, programming has been my passion and I've dedicated a large part of my time to learning and perfecting my skills in this field.`,
  "about.p2": `I consider myself a curious and challenge-oriented person. I've worked with <strong>various languages and technologies</strong>, including projects related to <strong>artificial intelligence</strong>, always looking for new ways to apply my knowledge and improve my capabilities.`,
  "about.p3": `I live in Barcelona, a city that drives my curiosity for <strong>innovation and technology</strong>. My goal is to keep growing professionally and contribute to projects that generate a positive impact on society.`,
  "about.photoAlt": "Pau Sevilla, developer",

  // Section titles
  "section.about": "About me",
  "section.experience": "Work Experience",
  "section.education": "Education",
  "section.projects": "Projects",
  "section.skills": "Skills",

  // Experience
  "experience.0.date": "December 2024 - Present",
  "experience.0.title": "Full-stack Web Developer & Computing - InLab FIB",
  "experience.0.description": "InLab FIB is the innovation and research laboratory of the Faculty of Computer Science of Barcelona (UPC), where multidisciplinary R&D&I projects are developed in the ICT field. I have participated in very diverse projects: from full-stack development to computing initiatives. I collaborate in a team with agile methodologies, implementing backend and frontend in projects that transfer knowledge and innovation to the industry.",
  "experience.visitCompany": "Visit company",
  "experience.companyLogoAlt": "Company logo",

  // Education
  "education.0.date": "September 2023 - Present",
  "education.0.title": "Computer Engineering Degree (FIB - UPC)",
  "education.0.description": "Computer Engineering student at the Faculty of Computer Science of Barcelona (FIB) of the Polytechnic University of Catalonia (UPC).",
  "education.1.date": "September 2021 - June 2023",
  "education.1.title": "2nd BTX - Technological (Maristes Rubí)",
  "education.1.description": "Technological Baccalaureate student at Maristas School in Rubí. Specialized in technology and programming.",
  "education.2.date": "September 2017 - June 2021",
  "education.2.title": "ESO (Maristes Rubí)",
  "education.2.description": "Compulsory Secondary Education student at Maristas School in Rubí.",

  // Projects
  "projects.viewMore": "View more",
  "projects.screenshotAlt": "Screenshot of project",

  // Project Detail
  "projectDetail.backToList": "Back to project list",
  "projectDetail.descriptionOf": "Description of",
  "projectDetail.technologies": "Technologies used",
  "projectDetail.screenshotAlt": "screenshot",

  // Skills
  "skills.frontend": "FRONTEND",
  "skills.backend": "BACKEND",
  "skills.languages": "PROGRAMMING LANGUAGES",
  "skills.tools": "TOOLS",

  // Footer
  "footer.rights": "All rights reserved",
  "footer.contact": "Contact",

  // Projects data
  "project.vademecum.title": "Vademecum 2024",
  "project.vademecum.titleLong": "Vademecum 2024 - Medical Reference",
  "project.vademecum.date": "October 2023",
  "project.vademecum.description": "Vademecum 2024 is a comprehensive and up-to-date application that offers detailed information about medicines and medical treatments. It is designed for both healthcare professionals and the general public who want to know more about the proper use of drugs. The app includes technical data sheets, therapeutic indications, contraindications, side effects and recommended doses, as well as interactions with other medications and special warnings. It also features an advanced search engine that facilitates quick location of specific information, and is constantly updated to ensure users have accurate and up-to-date data on more than 20,000 medicines available on the market. Ideal for doctors, pharmacists, health science students and anyone interested in responsible medication use.",
  "project.vademecum.descriptionShort": "Vademecum 2024 is a medical reference app that provides up-to-date information on medicines, including indications, dosages and side effects, aimed at healthcare professionals and users interested in learning more about pharmacological treatments.",
  "project.pickupwatch.title": "PickUpWatch",
  "project.pickupwatch.titleLong": "PickUpWatch - School Security System",
  "project.pickupwatch.date": "September 2023",
  "project.pickupwatch.description": "PickUpWatch is an intelligent security system that uses facial recognition to identify authorized parents or guardians when picking up children at school. When a registered person approaches the school, the system detects their face and sends an automatic notification to the responsible teacher, confirming that it is someone authorized to take the child. This ensures that only previously verified people can pick up students, significantly improving security during school dismissals. Additionally, the system optimizes the pick-up process, avoiding confusion and possible errors, and offering an advanced technological solution that provides peace of mind for both parents and teaching staff.",
  "project.pickupwatch.descriptionShort": "PickUpWatch is an intelligent security system that uses facial recognition to detect parents' arrival at school and notify teachers. This ensures that only authorized people can pick up children, improving security during school dismissals.",
  "project.portfolio.title": "Portfolio",
  "project.portfolio.description": "A personal website showcasing my experience, projects and skills as a developer. Built with Astro and Tailwind.",
} as const;

export type TranslationKey = keyof typeof en;
