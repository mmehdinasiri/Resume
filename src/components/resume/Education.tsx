import { FiBookOpen, FiCalendar } from "react-icons/fi";

import type { Education as EducationType } from "@/data/resume";

type EducationProps = {
  education: EducationType[];
};

export function Education({ education }: EducationProps) {
  return (
    <section className="space-y-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold uppercase tracking-widest text-emerald-400">
        <FiBookOpen className="h-5 w-5" aria-hidden="true" />
        Education
      </h2>
      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={`${item.institution}-${item.year}`}
            className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white shadow-lg shadow-emerald-900/10 sm:text-base"
          >
            <h3 className="text-base font-semibold text-orange-300 sm:text-lg">
              {item.institution}
            </h3>
            <p className="text-sm text-white/80">{item.degree}</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200/80">
              <FiCalendar className="h-4 w-4" aria-hidden="true" />
              {item.year}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
