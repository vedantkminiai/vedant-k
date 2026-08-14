import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers3,
} from 'lucide-react';
import useGlidingCarousel from '../hooks/useGlidingCarousel';
import AnimatedDetailReveal from './AnimatedDetailReveal';
import TechnologyRail from './TechnologyRail';

const projects = [
  {
    title: 'Library Management Software',
    category: 'Java application',
    image: 'https://apuedge.com/wp-content/uploads/2020/08/online-library-databases.jpg',
    description:
      'A comprehensive library-management application designed to streamline circulation, member administration, and resource tracking while demonstrating maintainable object-oriented architecture.',
    features: [
      'Structured domain models for books, members, and lending transactions',
      'Automated due-date tracking and late-return fine calculation',
      'Search and filtering for rapid book and member lookup',
      'Member registration, authentication, and profile management',
    ],
    techStack: ['Java', 'SQL', 'Object-Oriented Design'],
    repository: 'https://github.com/vedantkminiai/Library-Management-System',
  },
  {
    title: 'ColourMash',
    category: 'Accessible memory game',
    image: '/colourmash-screenshot.png',
    description:
      'A playful pattern-recognition experience designed to help people living with Alzheimer’s and dementia exercise memory and cognitive skills through approachable, interactive challenges.',
    features: [
      'Progressive color- and pattern-matching gameplay',
      'Responsive interface with immediate visual feedback',
      'Accessible, low-friction interactions for cognitive training',
      'Modular challenge structure for adding new difficulty levels',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'OpenAI API', 'TensorFlow.js'],
    repository: 'https://github.com/vedantkminiai/ColourMash',
  },
  {
    title: 'UFC Zone',
    category: 'Fighter intelligence platform',
    image: '/ufc-zone-screenshot.png',
    description:
      'A full-stack UFC fighter intelligence platform that transforms scraped athlete records into searchable profiles, performance analytics, and category leaderboards.',
    features: [
      'Searchable roster with stance and weight-class filtering',
      'Top-10 leaderboards across striking, grappling, and career metrics',
      'Python and BeautifulSoup data-collection pipeline',
      'Spring Boot REST API with complete fighter record management',
    ],
    techStack: ['React', 'Vite', 'Spring Boot', 'Java', 'PostgreSQL', 'Python', 'BeautifulSoup'],
    repository: 'https://github.com/vedantkminiai/UFC-Analytics-Platform',
  },
  {
    title: 'EmployAI',
    category: 'Full-stack career platform',
    image: '/employai-screenshot.png',
    description:
      'A production-oriented full-stack application foundation for modern career workflows, combining server-rendered React, typed routing, optimized asset delivery, and container-ready deployment.',
    features: [
      'Server-side rendering with production-ready React Router',
      'Typed data loading, mutations, and route architecture',
      'Responsive Tailwind CSS interface and optimized asset bundling',
      'Docker deployment support for major cloud platforms',
    ],
    techStack: ['React', 'React Router', 'TypeScript', 'Tailwind CSS', 'Docker'],
    repository: 'https://github.com/vedantkminiai/EmployAI',
  },
  {
    title: 'NBA Passing Networks',
    category: 'Sports network analytics',
    image:
      'https://raw.githubusercontent.com/vedantkminiai/NBA-Passing-Networks/main/screenshot.png',
    description:
      'An interactive analytics tool that models NBA offenses as weighted passing networks, revealing ball movement, central players, passing clusters, and possession complexity.',
    features: [
      'Quality-adjusted and raw pass-count network views',
      'Weighted player centrality and connected-component clustering',
      'Possession-tree depth and branching analysis',
      'Team and season selection with locally cached NBA API data',
    ],
    techStack: ['Python', 'Dash', 'Plotly', 'NetworkX', 'pandas', 'NBA API'],
    repository: 'https://github.com/vedantkminiai/NBA-Passing-Networks',
  },
  {
    title: 'MiniAI Learn',
    category: 'Gamified AI education',
    image: '/miniai-learn-screenshot.png',
    description:
      'A web-based educational game that introduces children ages 6–12 to fundamental AI concepts through short lessons, interactive challenges, quests, and guided experimentation.',
    features: [
      'Adventure-style levels, badges, quests, and AI Tokens',
      'Interactive lessons covering patterns, prompts, and logic',
      'Gemini-powered chatbot helper with a local fallback',
      'Visual progress tracking designed for young learners',
    ],
    techStack: ['React', 'TypeScript', 'Gemini API', 'HTML5', 'CSS3', 'Netlify'],
    repository: 'https://github.com/vedantkminiai/MiniAIWebApp',
    liveUrl: 'https://miniai-learn.netlify.app',
  },
];

type ProjectsProps = {
  initialIndex?: number;
};

const Projects = ({ initialIndex }: ProjectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);
  const [isDetailOpen, setIsDetailOpen] = useState(initialIndex !== undefined);
  const scrollerRef = useGlidingCarousel();
  const detailRef = useRef<HTMLElement>(null);
  const currentProject = projects[currentIndex];

  useEffect(() => {
    if (initialIndex === undefined) return;

    setCurrentIndex(initialIndex);
    setIsDetailOpen(true);
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [initialIndex]);

  const selectProject = (index: number) => {
    setCurrentIndex(index);
    setIsDetailOpen(true);
  };

  const revealSelectedProject = () => {
    setIsDetailOpen(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  const moveSelection = (direction: -1 | 1) => {
    selectProject((currentIndex + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="min-h-screen bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.28em] text-neutral-500">
              Project archive / 01—06
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Projects
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
              A continuously moving collection of software, analytics, and AI
              projects. Select any card to inspect its architecture and features.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => moveSelection(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-neutral-400 hover:text-white"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => moveSelection(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-300"
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="experience-scroll mb-10 flex gap-4 overflow-x-auto pb-5"
          role="tablist"
          aria-label="Select a project"
        >
          {[...projects, ...projects].map((project, displayIndex) => {
            const index = displayIndex % projects.length;
            const isDuplicate = displayIndex >= projects.length;

            return (
              <button
                key={`${project.title}-${isDuplicate ? 'duplicate' : 'original'}`}
                onClick={() => selectProject(index)}
                className={`group min-w-[250px] max-w-[250px] overflow-hidden rounded-2xl border text-left transition-all duration-300 sm:min-w-[290px] sm:max-w-[290px] ${
                  index === currentIndex
                    ? 'border-white bg-neutral-800'
                    : 'border-neutral-800 bg-neutral-900/80 hover:border-neutral-600 hover:bg-neutral-900'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : 0}
              >
                <div className="h-28 overflow-hidden bg-neutral-800">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="block h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between text-xs text-neutral-500">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>Project</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{project.category}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {project.techStack.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="truncate rounded-lg border border-neutral-700 bg-neutral-950/70 px-2.5 py-2 text-[10px] font-medium text-neutral-400"
                        title={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="-mt-3 mb-9 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            Continuously scrolling
          </span>
          <button
            onClick={revealSelectedProject}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-white hover:bg-white hover:text-black"
            aria-label={`View ${currentProject.title} details`}
            title="View selected project"
          >
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        {isDetailOpen && (
        <AnimatedDetailReveal revealKey={`${currentProject.title}-${currentIndex}`}>
        <article
          ref={detailRef}
          className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40"
        >
          <button
            onClick={() => moveSelection(-1)}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:border-white hover:bg-white hover:text-black sm:left-5"
            aria-label="Show previous project"
            title="Previous project"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => moveSelection(1)}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:border-white hover:bg-white hover:text-black sm:right-5"
            aria-label="Show next project"
            title="Next project"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="relative aspect-video w-full overflow-hidden bg-neutral-950 sm:aspect-[16/8] lg:aspect-[16/7]">
            <img
              key={currentProject.image}
              src={currentProject.image}
              alt={`${currentProject.title} project cover`}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-200">
                {currentProject.category}
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-14">
            <div className="max-w-4xl">
              <p className="mb-5 font-mono text-sm text-neutral-500">
                PROJECT {String(currentIndex + 1).padStart(2, '0')}
              </p>
              <h3 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {currentProject.title}
              </h3>
              <p className="mt-8 text-lg leading-8 text-neutral-400 sm:text-xl sm:leading-9">
                {currentProject.description}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={currentProject.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-300"
              >
                <Github className="mr-2 h-5 w-5" />
                View repository
              </a>
              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-neutral-600 px-6 py-3 font-semibold text-neutral-200 transition hover:border-white hover:text-white"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live demo
                </a>
              )}
            </div>

            <div className="mt-14 border-t border-neutral-800 pt-10">
              <TechnologyRail technologies={currentProject.techStack} />
            </div>
          </div>

          <div className="border-t border-neutral-800 p-7 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-neutral-400" />
              <h4 className="text-lg font-semibold">Key capabilities</h4>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {currentProject.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-4 rounded-xl bg-neutral-950/70 p-5 text-neutral-300"
                >
                  <span className="font-mono text-xs text-neutral-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
        </AnimatedDetailReveal>
        )}

        <div className="mt-14 text-center">
          <a
            href="https://github.com/vedantkminiai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-neutral-700 px-7 py-3.5 font-semibold text-neutral-300 transition hover:border-white hover:bg-white hover:text-black"
          >
            <Github className="mr-2 h-5 w-5" />
            Explore all repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
