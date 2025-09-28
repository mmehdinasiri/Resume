export type SummaryProps = {
  summary: string;
};

export function Summary({ summary }: SummaryProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold uppercase tracking-widest text-emerald-400">
        Summary
      </h2>
      <p className="text-sm leading-relaxed text-white sm:text-base">
        {summary}
      </p>
    </section>
  );
}
