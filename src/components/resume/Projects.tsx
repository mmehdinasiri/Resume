import Link from "next/link";
import { FiExternalLink, FiLayers } from "react-icons/fi";

import type { Project } from "@/data/resume";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold uppercase tracking-widest text-emerald-400">
        <FiLayers className="h-5 w-5" aria-hidden="true" />
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.name}
            className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white shadow-lg shadow-emerald-900/10 sm:text-base"
          >
            <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold text-orange-300 sm:text-lg">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-emerald-200/80 sm:text-sm">
                {project.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white transition-colors hover:border-orange-300 hover:bg-orange-400/10 hover:text-orange-200"
                  >
                    <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </header>
            <p className="text-sm text-white/80 sm:text-base">
              {project.description}
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-white sm:text-base">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
