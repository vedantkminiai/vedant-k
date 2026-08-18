import { useState } from 'react';
import { ArrowRight, Briefcase, ChevronDown, Folder } from 'lucide-react';

type Screen = 'experiences' | 'projects';

type HomeHighlightsProps = {
  onNavigate: (screen: Screen) => void;
  onSelect: (screen: Screen, index: number) => void;
};

const highlights: Record<Screen, Array<{ title: string; meta: string; description: string; targetIndex: number }>> = {
  experiences: [
    {
      targetIndex: 0,
      title: 'Data Engineering Intern',
      meta: 'S&C Electric · 2026',
      description:
        'Built Azure and Airflow ETL workflows for 20+ years of switchgear data, modeled 3M+ sales records in Power BI, and delivered a React comparison tool saving $75,000+ annually.',
    },
    {
      targetIndex: 1,
      title: 'Software Engineering Intern',
      meta: 'Atelier · 2026',
      description:
        'Built an LLM-powered product analytics pipeline and LangChain feature-generation engine for a Telora-backed startup with $60,000 in funding.',
    },
    {
      targetIndex: 2,
      title: 'Software Engineering Intern',
      meta: 'Coding Campus · 2025',
      description:
        'Deployed an AI-powered Waterloo coding contest preparation app with React, Supabase, Judge0, OpenAI, AWS ECS, and Vercel for 200+ students.',
    },
    {
      targetIndex: 4,
      title: 'Co-Founder',
      meta: 'MiniAI · 2024—Present',
      description:
        'Leading an AI education startup that has reached over 1,000 students through products, curriculum, and workshops.',
    },
    {
      targetIndex: 5,
      title: 'Student Researcher',
      meta: 'University of Waterloo · 2024',
      description:
        'Studied advanced mathematics, algorithms, proof writing, and computational problem solving through CEMC.',
    },
  ],
  projects: [
    {
      targetIndex: 2,
      title: 'UFC Zone',
      meta: 'Fighter intelligence platform',
      description:
        'A full-stack searchable UFC roster with performance analytics, leaderboards, web-scraped data, and a Spring API.',
    },
    {
      targetIndex: 3,
      title: 'EmployAI',
      meta: 'AI career platform',
      description:
        'A responsive resume-analysis experience that provides ATS scoring and targeted feedback for job applications.',
    },
    {
      targetIndex: 5,
      title: 'MiniAI Learn',
      meta: 'Gamified AI education',
      description:
        'An interactive learning platform that teaches children foundational AI concepts through lessons, quests, and challenges.',
    },
    {
      targetIndex: 1,
      title: 'ColourMash',
      meta: 'Accessible memory game',
      description:
        'A playful pattern-recognition game designed to support memory practice for people living with Alzheimer’s and dementia.',
    },
  ],
};

const tabDetails = {
  experiences: { label: 'Experiences', icon: Briefcase },
  projects: { label: 'Projects', icon: Folder },
};

const HomeHighlights = ({ onNavigate, onSelect }: HomeHighlightsProps) => {
  const [activeTab, setActiveTab] = useState<Screen>('experiences');
  const activeDetails = tabDetails[activeTab];

  return (
    <section className="bg-neutral-950 py-14 text-white sm:py-16" aria-labelledby="portfolio-overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
            Selected work
          </p>
          <h2 id="portfolio-overview" className="text-3xl font-bold tracking-tight sm:text-4xl">
            A quick look at what I build
          </h2>
        </div>

        <div className="mb-5 flex w-full rounded-2xl border border-neutral-800 bg-neutral-900/70 p-1.5" role="tablist" aria-label="Work overview">
          {(Object.keys(tabDetails) as Screen[]).map((tab) => {
            const details = tabDetails[tab];
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? 'bg-white text-black shadow-lg shadow-black/20'
                    : 'text-neutral-500 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <details.icon className="h-4 w-4" />
                {details.label}
              </button>
            );
          })}
        </div>

        <div key={activeTab} className="screen-transition space-y-3">
          {highlights[activeTab].map((highlight, index) => (
            <article
              key={highlight.title}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 transition duration-300 hover:border-neutral-600 hover:bg-neutral-900 focus-within:border-neutral-500"
            >
              <button
                type="button"
                onClick={() => onSelect(activeTab, highlight.targetIndex)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-7"
                aria-label={`Open ${highlight.title} details`}
              >
                <span className="font-mono text-[10px] text-neutral-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-6">
                  <span className="block text-sm font-semibold text-neutral-100 sm:text-base">
                    {highlight.title}
                  </span>
                  <span className="mt-1 block text-xs text-neutral-500 sm:mt-0">
                    {highlight.meta}
                  </span>
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                <div className="overflow-hidden">
                  <p className="border-t border-neutral-800 px-7 py-4 text-sm leading-6 text-neutral-400 sm:pl-14">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => onNavigate(activeTab)}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-300"
        >
          Explore {activeDetails.label.toLowerCase()} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default HomeHighlights;
