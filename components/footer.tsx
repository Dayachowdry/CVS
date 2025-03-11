import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-lg font-bold text-neutral-900 dark:text-neutral-50"
            >
              Dayananda Thaloori
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Cybersecurity & Information Security Management Professional
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/daya-nanda-56a9519b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Dayachowdry@gmail.com"
              className="text-neutral-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-6 pt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            &copy; {currentYear} Dayananda Thaloori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
