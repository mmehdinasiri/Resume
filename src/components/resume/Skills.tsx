import Link from "next/link";
import type { IconType } from "react-icons";
import { FiTool } from "react-icons/fi";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGatsby,
  SiVuedotjs,
  SiStyledcomponents,
  SiMui,
  SiCypress,
  SiJest,
  SiVitest,
  SiEslint,
  SiPrettier,
  SiFastify,
  SiExpress,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiRedis,
  SiNetlify,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiWebrtc,
  SiVim,
  SiContentful,
  SiWordpress,
  SiSentry,
  SiGoogletagmanager,
  SiWebpack,
  SiRollupdotjs,
  SiEsbuild,
  SiNx,
  SiTailwindcss as SiTailwindCss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import type { SkillCategory, Skill } from "@/data/resume";

const iconMap: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  react: SiReact,
  nextjs: TbBrandNextjs,
  gatsby: SiGatsby,
  vue: SiVuedotjs,
  tailwind: SiTailwindCss,
  styledcomponents: SiStyledcomponents,
  mui: SiMui,
  cypress: SiCypress,
  jest: SiJest,
  vitest: SiVitest,
  eslint: SiEslint,
  prettier: SiPrettier,
  fastify: SiFastify,
  express: SiExpress,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  mongodb: SiMongodb,
  redis: SiRedis,
  netlify: SiNetlify,
  git: SiGit,
  github: SiGithub,
  githubactions: SiGithubactions,
  webrtc: SiWebrtc,
  vim: SiVim,
  contentful: SiContentful,
  wordpress: SiWordpress,
  sentry: SiSentry,
  gtm: SiGoogletagmanager,
  webpack: SiWebpack,
  rollup: SiRollupdotjs,
  esbuild: SiEsbuild,
  nx: SiNx,
};

function iconForSkill(skill: Skill) {
  const key = skill.icon?.toLowerCase();
  if (!key) return null;

  const Icon = iconMap[key];
  if (Icon) {
    return <Icon className="h-4 w-4" aria-hidden="true" />;
  }

  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[0.6rem] font-semibold uppercase text-emerald-200">
      {skill.name.charAt(0)}
    </span>
  );
}

type SkillsProps = {
  skills: SkillCategory[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold uppercase tracking-widest text-emerald-400">
        <FiTool className="h-5 w-5" aria-hidden="true" />
        Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.category}
            className="flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white shadow-lg shadow-emerald-900/10"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-300">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-white">
              {skill.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.url ?? "#"}
                  target={item.url ? "_blank" : undefined}
                  rel={item.url ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition-colors hover:border-orange-300 hover:bg-orange-400/10 hover:text-orange-200"
                >
                  {iconForSkill(item)}
                  {item.name}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
