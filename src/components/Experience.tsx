import { experience } from "../data/content";

export function Experience() {
  return (
    <section id="experience" className="bg-white/60 py-24 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">
          Experience
        </span>
        <h2 className="font-display mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
          Where I&rsquo;ve built things
        </h2>

        <ol className="mt-14 space-y-14 border-l border-ink-200 pl-8 dark:border-ink-800 sm:pl-10">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-accent-500 dark:border-ink-950 sm:-left-[49px]" />

              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-white">
                    {job.role}
                  </h3>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:underline dark:text-accent-300"
                  >
                    {job.company}
                  </a>
                  <span className="ml-2 text-sm text-ink-500 dark:text-ink-400">
                    · {job.location}
                  </span>
                </div>
                <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600 dark:bg-ink-800 dark:text-ink-300">
                  {job.dates}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-400 dark:bg-ink-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {job.stack && (
                <p className="mt-4 text-xs font-medium text-ink-500 dark:text-ink-400">
                  <span className="font-semibold text-ink-600 dark:text-ink-300">Stack: </span>
                  {job.stack}
                </p>
              )}

              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white p-2 dark:border-ink-800 dark:bg-ink-900"
              >
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className={`h-full w-full object-contain ${
                    job.invertLogoInLight ? "dark:invert-0 invert" : ""
                  }`}
                />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
