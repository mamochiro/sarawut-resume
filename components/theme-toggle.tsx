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
    return <div className="p-4 w-10 h-10" />; // Empty space with same dimensions
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border px-3 py-1 text-sm"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
