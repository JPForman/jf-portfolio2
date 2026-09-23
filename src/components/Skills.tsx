import { education, skills } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="bg-white/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">
          Skills
        </span>
        <h2 className="font-display mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
          Tools of the trade
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
            >
              <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600 dark:border-ink-700 dark:text-ink-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">
            Education
          </span>
          <h2 className="font-display mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
            Background
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {education.map((entry) => (
              <a
                key={entry.school}
                href={entry.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-start gap-4 rounded-2xl border border-ink-200 bg-white p-6 transition-colors hover:border-accent-300 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-accent-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-ink-50 p-2 dark:border-ink-700 dark:bg-white/5">
                  <img src={entry.logo} alt={entry.school} className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                    {entry.school}
                  </h3>
                  <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">{entry.detail}</p>
                  <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">{entry.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
