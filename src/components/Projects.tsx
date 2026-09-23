import { ArrowUpRight } from "lucide-react";
import { projects, theoremClients } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">
        Projects
      </span>
      <h2 className="font-display mt-3 max-w-xl text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl dark:text-white">
        Selected work
      </h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-ink-900/5 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-accent-600"
          >
            <div className="flex h-44 items-center justify-center bg-ink-50 p-8 dark:bg-white/5">
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`max-h-full ${
                  project.imageFit === "cover"
                    ? "h-full w-full rounded-lg object-cover"
                    : "w-full object-contain"
                }`}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink-950 dark:text-white">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500"
                />
              </div>
              <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-5 rounded-2xl border border-ink-200 bg-white/60 px-8 py-8 text-center dark:border-ink-800 dark:bg-white/5">
        <p className="text-sm font-medium text-ink-500 dark:text-ink-400">
          Enterprise clients I built for at Theorem Agency
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {theoremClients.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-9 w-auto object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:brightness-125"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
