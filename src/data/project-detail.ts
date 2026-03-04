import type { ProjectData, ProjectLinkType } from "./projects";
import { PROJECT_TAGS, type TagDefinition } from "./tags";
import GitHubIcon from "@icons/GitHubIcon.astro";
import AppStoreIcon from "@icons/AppStoreIcon.astro";
import GooglePlayIcon from "@icons/GooglePlayIcon.astro";
import type { Lang } from "@/i18n/config";

export { getProjectsWithDetail } from "./projects";

type IconComponent = (props: { class?: string }) => unknown;

const LINK_ICONS: Record<ProjectLinkType, IconComponent> = {
  appstore: AppStoreIcon,
  googleplay: GooglePlayIcon,
  github: GitHubIcon,
};

export interface ProjectDetailData {
  slug: string;
  title: string;
  title_l: string;
  date: string;
  description: string;
  imgs: string[];
  tags: TagDefinition[];
  links: { titleSection: string; link: string; icon: IconComponent }[];
}

export function buildProjectForDetail(
  raw: ProjectData,
  lang: Lang,
): ProjectDetailData {
  const text = raw.text[lang];
  const tags = raw.tagIds.map((id) => PROJECT_TAGS[id]);
  const links =
    raw.links?.map((l) => ({
      titleSection: l.titleSection,
      link: l.url,
      icon: LINK_ICONS[l.type],
    })) ?? [];
  return {
    slug: raw.slug,
    title: text.title,
    title_l: text.titleLong ?? text.title,
    date: text.date ?? "",
    description: text.description,
    imgs: raw.imgs ?? [],
    tags,
    links,
  };
}
