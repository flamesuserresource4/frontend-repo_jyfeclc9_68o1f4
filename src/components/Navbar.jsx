import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            dev.portfolio
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
