import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100 sm:text-left">
          Sarawut
        </span>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm sm:justify-end">
          <a
            href="#about"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            About
          </a>
          <a
            href="#stack"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Stack
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
