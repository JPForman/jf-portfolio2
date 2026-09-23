import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-noise pointer-events-none absolute inset-0 text-ink-300/40 dark:text-ink-700/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent-300/30 blur-3xl dark:bg-accent-700/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-amber-glow/20 blur-3xl dark:bg-amber-glow/10"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-32 md:pt-24">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-600 dark:border-ink-700 dark:bg-white/5 dark:text-ink-300">
            Available for new opportunities
          </p>
          <h1 className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl dark:text-white">
            Joshua Forman
          </h1>
          <p className="mt-3 text-xl font-medium text-accent-600 dark:text-accent-300">
            Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ink-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-ink-950"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-600 dark:text-ink-100 dark:hover:border-accent-400 dark:hover:text-accent-300"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-300"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-300"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-500 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in [animation-delay:150ms] [animation-fill-mode:backwards] md:mx-0 md:justify-self-end">
          <div className="absolute inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-300 to-amber-glow opacity-40 blur-2xl dark:opacity-20" />
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-ink-900/10 dark:border-white/10 dark:bg-ink-900">
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
