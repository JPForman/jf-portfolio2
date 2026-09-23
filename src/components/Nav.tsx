import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "../data/content";

type NavProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export function Nav({ theme, toggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-50/85 dark:bg-ink-950/85 backdrop-blur-md border-b border-ink-200/70 dark:border-ink-800/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-300 dark:hover:text-accent-300"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-accent-300 hover:text-accent-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent-500 dark:hover:text-accent-300"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 dark:border-ink-700 dark:text-ink-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-200 bg-ink-50 px-6 py-4 md:hidden dark:border-ink-800 dark:bg-ink-950">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
