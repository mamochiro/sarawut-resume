export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <p>
        © {new Date().getFullYear()} Sarawut Nawawisitkul. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
