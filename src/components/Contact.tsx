import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-16 text-center dark:bg-white/5 sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/30 blur-3xl"
        />
        <span className="relative text-xs font-semibold uppercase tracking-widest text-accent-300">
          Contact
        </span>
        <h2 className="font-display relative mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&rsquo;s build something together
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-balance text-ink-300">
          Open to new roles and interesting projects. The fastest way to reach me is email.
        </p>

        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-white"
          >
            <GithubIcon size={16} />
            GitHub
            <ArrowUpRight size={13} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-white"
          >
            <LinkedinIcon size={16} />
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
