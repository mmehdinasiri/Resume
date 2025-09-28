export type SummaryProps = {
  summary: string;
};

import { FiInfo } from "react-icons/fi";

export function Summary({ summary }: SummaryProps) {
  return (
    <section className="space-y-3">
      <h2 className="flex items-center gap-2 text-lg font-semibold uppercase tracking-widest text-emerald-400">
        <FiInfo className="h-5 w-5" aria-hidden="true" />
        Summary
      </h2>
      <p className="text-sm leading-relaxed text-white sm:text-base">
        {summary}
      </p>
    </section>
  );
}
