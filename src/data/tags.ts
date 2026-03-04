import DartIcon from "@icons/DartIcon.astro";
import FlutterIcon from "@icons/FlutterIcon.astro";
import SupabaseIcon from "@icons/SupabaseIcon.astro";
import SQLiteIcon from "@icons/SQLiteIcon.astro";
import AstroIcon from "@icons/AstroIcon.astro";
import HtmlIcon from "@icons/HtmlIcon.astro";
import CssIcon from "@icons/CssIcon.astro";
import TailwindIcon from "@icons/TailwindIcon.astro";
import ReactIcon from "@icons/ReactIcon.astro";
import PostgreIcon from "@icons/PostgreIcon.astro";
import JavaScriptIcon from "@icons/JavaScriptIcon.astro";
import PythonIcon from "@icons/PythonIcon.astro";
import CIcon from "@icons/CIcon.astro";
import FigmaIcon from "@icons/FigmaIcon.astro";
import VSIcon from "@icons/VSIcon.astro";
import GitIcon from "@icons/GitIcon.astro";
import GitHubIcon from "@icons/GitHubIcon.astro";
import DigitalOceanIcon from "@icons/DigitalOceanIcon.astro";
import PostManIcon from "@icons/PostManIcon.astro";
import AngularIcon from "@icons/AngularIcon.astro";
import LaravelIcon from "@icons/LaravelIcon.astro";
import TypeScriptIcon from "@icons/TypeScriptIcon.astro";
import type { ProjectTagId } from "./projects";

export interface TagDefinition {
  name: string;
  class: string;
  icon: (props: { class?: string }) => unknown;
}

/** Tags for project cards (dark background colors) */
export const PROJECT_TAGS: Record<ProjectTagId, TagDefinition> = {
  DART: { name: "Dart", class: "bg-[#0175C2] text-white", icon: DartIcon },
  FLUTTER: { name: "Flutter", class: "bg-[#02569B] text-white", icon: FlutterIcon },
  SUPABASE: { name: "Supabase", class: "bg-[#333333] text-white", icon: SupabaseIcon },
  SQLITE: { name: "SQLite", class: "bg-gray-500/80 text-white", icon: SQLiteIcon },
  ASTRO: { name: "Astro", class: "bg-[#000000] text-white", icon: AstroIcon },
  HTML: { name: "HTML", class: "bg-[#000000] text-white", icon: HtmlIcon },
  CSS: { name: "CSS", class: "bg-[#000000] text-white", icon: CssIcon },
  TAILWIND: { name: "Tailwind", class: "bg-[#000000] text-white", icon: TailwindIcon },
};

/** Tags for skills grid (vibrant colors) */
export const SKILL_TAGS = {
  DART: { name: "Dart", class: "bg-[#0175C2] text-white", icon: DartIcon },
  FLUTTER: { name: "Flutter", class: "bg-[#02569B] text-white", icon: FlutterIcon },
  SUPABASE: { name: "Supabase", class: "bg-[#333333] text-white", icon: SupabaseIcon },
  REACT: { name: "React", class: "bg-[#61DAFB] text-white", icon: ReactIcon },
  POSTGRE: { name: "PostgreSQL", class: "bg-[#336791] text-white", icon: PostgreIcon },
  JS: { name: "JavaScript", class: "bg-[#F7DF1E] text-black", icon: JavaScriptIcon },
  PYTHON: { name: "Python", class: "bg-[#3776AB] text-white", icon: PythonIcon },
  C: { name: "C++", class: "bg-[#A8B9CC] text-white", icon: CIcon },
  ASTRO: { name: "Astro", class: "bg-[#000000] text-white", icon: AstroIcon },
  HTML: { name: "HTML", class: "bg-[#E34F26] text-white", icon: HtmlIcon },
  CSS: { name: "CSS", class: "bg-[#0C73B8] text-white", icon: CssIcon },
  TAILWIND: { name: "Tailwind", class: "bg-[#38B2AC] text-white", icon: TailwindIcon },
  FIGMA: { name: "Figma", class: "bg-[#F24E1E] text-white", icon: FigmaIcon },
  VS: { name: "VSCode", class: "bg-[#007ACC] text-white", icon: VSIcon },
  GIT: { name: "Git", class: "bg-[#3E2C00] text-white", icon: GitIcon },
  GITHUB: { name: "GitHub", class: "bg-[#181717] text-white", icon: GitHubIcon },
  DIGITALOCEAN: { name: "DigitalOcean", class: "bg-[#0080FF] text-white", icon: DigitalOceanIcon },
  POSTMAN: { name: "Postman", class: "bg-[#FF6C37] text-white", icon: PostManIcon },
  SQLITE: { name: "SQLite", class: "bg-white/80 text-white", icon: SQLiteIcon },
  ANGULAR: { name: "Angular", class: "bg-[#DD0031] text-white", icon: AngularIcon },
  LARAVEL: { name: "Laravel", class: "bg-[#FF2D20] text-white", icon: LaravelIcon },
  TYPESCRIPT: { name: "TypeScript", class: "bg-[#007ACC] text-white", icon: TypeScriptIcon },
} satisfies Record<string, TagDefinition>;
