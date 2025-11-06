import { Mail, MapPin, User } from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              I build fast, accessible web apps with a focus on delightful details. My toolkit spans React, TypeScript, FastAPI, and 3D interactions with Spline. I love crafting experiences where engineering and design meet.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/5 backdrop-blur">
                <User className="h-4 w-4 text-indigo-600" />
                <p className="mt-2 font-medium">Frontend-first Engineer</p>
                <p className="text-neutral-600 dark:text-neutral-400">React • UI Systems</p>
              </div>
              <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/5 backdrop-blur">
                <MapPin className="h-4 w-4 text-indigo-600" />
                <p className="mt-2 font-medium">Remote • Worldwide</p>
                <p className="text-neutral-600 dark:text-neutral-400">Available for freelance</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10">
            <h3 className="font-semibold">Tech Stack</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>React • Vite • Tailwind</li>
              <li>TypeScript • Zustand</li>
              <li>FastAPI • MongoDB</li>
              <li>Spline • Three.js</li>
            </ul>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Clean code, reusable components, and thoughtful motion are my go‑tos.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Let’s build something great</h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">Open to collaborations, freelance gigs, and cool ideas.</p>
              </div>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors">
                <Mail className="h-4 w-4" /> Email me
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
