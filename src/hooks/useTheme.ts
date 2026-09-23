import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
