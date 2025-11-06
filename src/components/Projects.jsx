const projects = [
  {
    title: "Realtime Dev Chat",
    description: "WebSocket powered chat for dev teams with slash commands and code blocks.",
    tags: ["React", "FastAPI", "WebSocket"],
  },
  {
    title: "Open Source Starter",
    description: "Template that ships CI, linting, testing and release automation out of the box.",
    tags: ["Node", "Vitest", "GitHub Actions"],
  },
  {
    title: "3D Playground",
    description: "A gallery of interactive Spline scenes wired to custom UI controls.",
    tags: ["Spline", "Three.js", "UX"],
  },
];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-[11px] text-neutral-700 dark:text-neutral-300">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
          <a href="#contact" className="text-sm text-indigo-600 hover:text-indigo-700">See availability →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 backdrop-blur hover:shadow-sm transition-shadow">
              <div className="h-36 rounded-md bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 mb-4" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
