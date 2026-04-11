"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Or your custom theme hook

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by returning null or a skeleton
  // until the client-side code has run
  if (!mounted) {
    return (
      <div className="h-9 w-20 rounded-md border border-zinc-300 dark:border-zinc-700" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md border border-zinc-300 px-4 py-2 text-sm transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
