import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-8 dark:border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink-500 dark:text-ink-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
