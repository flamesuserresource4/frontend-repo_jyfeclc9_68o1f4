import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 flex items-center overflow-hidden">
      {/* Background accent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-indigo-600" />
            <span className="text-neutral-600 dark:text-neutral-300">Tech • Interactive • Playful • Modern</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl leading-tight font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Developer Portfolio
            </span>
            <br /> that blends code with creativity
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
            Showcasing projects, experiments, and craft through a rich 3D hero. Built with performance-first React and a modern aesthetic.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[70vh] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Non-blocking gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
