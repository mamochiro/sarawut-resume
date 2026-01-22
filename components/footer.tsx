"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) return null;

  return (
    <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <p>© {year} Sarawut Nawawisitkul. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}
