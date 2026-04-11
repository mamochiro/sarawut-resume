"use client";

export function PrintButton() {
  return (
    <div className="mt-8 flex gap-4 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-md bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Print / Save as PDF
      </button>
      <a
        href="/"
        className="rounded-md border border-zinc-300 px-6 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        Back to Portfolio
      </a>
    </div>
  );
}
