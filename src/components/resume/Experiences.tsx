import type { Experience } from "@/data/resume";

type ExperiencesProps = {
  experiences: Experience[];
};

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold uppercase tracking-widest text-emerald-400">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.start}`}
            className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-900/10"
          >
            <header className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-orange-300 sm:text-lg">
                  {experience.company}
                  <span className="ml-2 text-sm font-normal text-emerald-200/80">
                    {experience.location}
                  </span>
                </h3>
                <p className="text-sm text-white/80">{experience.role}</p>
              </div>
              <span className="text-sm font-medium text-emerald-200/80">
                {experience.start} – {experience.end}
              </span>
            </header>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-white sm:text-base">
              {experience.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
