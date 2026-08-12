import { Code, Layers, Server } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: Code,
    tools: [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'C',
      'C++',
      'C#',
      'R',
      'HTML/CSS',
      'SQL',
      'Bash',
      'DAX',
    ],
  },
  {
    title: 'Technologies',
    icon: Layers,
    tools: [
      'React',
      'Node.js',
      'Next.js',
      'Express.js',
      'Tailwind',
      'Flask',
      'TensorFlow',
      'OpenCV',
      'PowerBI',
      'Excel',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    tools: [
      'Git',
      'AWS',
      'GCP',
      'Azure',
      'MCP Servers',
      'Docker',
      'Kubernetes',
      'Redis',
      'Supabase',
      'MongoDB',
    ],
  },
];

const About = () => (
  <section id="about" className="relative z-10 bg-neutral-900 py-12 text-white sm:py-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
          Technical toolkit
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Languages, tools & platforms
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-950/65 p-5 sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900">
                <group.icon className="h-4 w-4 text-neutral-300" />
              </span>
              <h3 className="text-base font-semibold text-neutral-100">
                {group.title}
              </h3>
              <span className="ml-auto font-mono text-[10px] text-neutral-600">
                {String(group.tools.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-wrap gap-2" aria-label={group.title}>
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs font-medium text-neutral-400 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-neutral-800 hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
