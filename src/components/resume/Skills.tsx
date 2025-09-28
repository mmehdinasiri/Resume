import Link from "next/link";
import type { SkillCategory } from "@/data/resume";

type SkillsProps = {
  skills: SkillCategory[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold uppercase tracking-widest text-emerald-400">
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
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white transition-colors hover:border-orange-300 hover:bg-orange-400/10 hover:text-orange-200"
                >
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
