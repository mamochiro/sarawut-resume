"use client";

export function PrintButton() {
  return (
    <div className="mt-8 flex gap-4 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-md bg-zinc-900 px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Print / Save as PDF
      </button>
      <a
        href="/"
        className="rounded-md border border-zinc-300 px-6 py-2 text-sm font-medium hover:bg-zinc-100"
      >
        Back to Portfolio
      </a>
    </div>
  );
}
