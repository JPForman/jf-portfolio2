import { profile } from "../data/content";

const stats = [
  { label: "Years building production software", value: "6+" },
  { label: "Industries: education, gov't, startups", value: "3" },
  { label: "Degrees — Math Ed & Philosophy", value: "2" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 md:grid-cols-[0.4fr_0.6fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">
            About
          </span>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
            Hello, my name is Joshua Forman.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-ink-700 dark:text-ink-300">
            {profile.summary}
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink-200 bg-white/60 p-5 dark:border-ink-800 dark:bg-white/5"
              >
                <dt className="font-display text-3xl font-semibold text-ink-950 dark:text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-ink-500 dark:text-ink-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
