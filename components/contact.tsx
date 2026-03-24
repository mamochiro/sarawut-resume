import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Open to senior backend roles. Based in Bangkok, Thailand (GMT+7).
          Available for remote or hybrid.
        </p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
          Best reached via email. I typically respond within 24 hours.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:sarawut.nawawisitkul@gmail.com"
            className="flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <HiMail className="h-5 w-5" />
            Email
          </a>

          <a
            href="tel:+66918363922"
            className="flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <HiPhone className="h-5 w-5" />
            +66 91-836-3922
          </a>

          <a
            href="https://github.com/mamochiro"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <SiGithub className="h-5 w-5" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sarawut-nawawisitkul-4431aa181"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <SiLinkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
