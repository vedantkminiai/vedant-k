import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Users,
} from 'lucide-react';
import useGlidingCarousel from '../hooks/useGlidingCarousel';
import AnimatedDetailReveal from './AnimatedDetailReveal';
import TechnologyRail from './TechnologyRail';

const experiences = [
  {
    title: 'Data Engineering Intern',
    company: 'S&C Electric Company',
    location: 'Toronto, ON',
    period: 'May 2026 — August 2026',
    type: 'Internship',
    icon: Code,
    image: 'https://powerandtelecom.ca/wp-content/uploads/2024/03/Sccanada_pt_836.jpg',
    imageFit: 'cover',
    coverImage: 'https://www.sandc.com/globalassets/sac-electric/content-callouts/tripsaver/logo2.png',
    coverImageFit: 'contain',
    description:
      'Completed a four-month Data Engineering internship at S&C Electric, building ETL pipelines to process more than 20 years of Metal-Enclosed Switchgear and Vista component data. Developed Python, Azure, and Apache Airflow workflows; transformed REST API data into Azure SQL dimension tables; created Power BI and Excel data models; and delivered a React comparison tool for switchgear cost analysis.',
    achievements: [
      'Built a Python, Azure, and Airflow ETL pipeline to process 20+ years of Metal-Enclosed Switchgear and Vista component data for the Power BI Sales Dashboard, reducing ingestion time by 33%',
      'Scraped unstructured REST API data with requests, pandas, and pyodbc; transformed it into dimension tables and loaded it into Azure SQL, cutting manual engineering work by 40%',
      'Designed a React switchgear comparison tool to analyze price differences, saving the company more than $75,000 annually',
      'Built Apache Airflow DAGs to orchestrate and parallelize ETL workflows, increasing data throughput by 28%',
      'Built Power BI and Excel data models with DAX measures to highlight trends across more than 3 million historical sales records',
    ],
    skills: [
      'Python',
      'Azure',
      'Apache Airflow',
      'SQL',
      'PowerBI',
      'pandas',
      'React',
      'Excel',
      'REST APIs',
      'pyodbc',
      'DAX',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Atelier',
    location: 'Toronto, ON',
    period: 'January 2026 — April 2026',
    type: 'Internship',
    icon: Code,
    image: '/atelier-logo.png',
    imageFit: 'cover',
    coverImage: '/atelier-logo.png',
    coverImageFit: 'contain',
    description:
      'Interned at an AI-driven product analytics startup backed by Telora with $60,000 in funding. Designed an end-to-end analytics pipeline that ingests website data from any provider into an LLM and returns automated UI/UX recommendations and product improvements.',
    achievements: [
      'Designed an end-to-end analytics pipeline that ingests provider-agnostic website data into an LLM and returns automated UI/UX recommendations',
      'Developed an AI-driven feature-generation engine with LangChain to analyze website structure and identify product improvements',
      'Automated deployments with Docker and Azure DevOps CI/CD pipelines, increasing release frequency by 20%',
    ],
    skills: ['AWS', 'Node.js', 'Redis', 'LangChain', 'Docker', 'Azure', 'Azure DevOps'],
    liveUrl: 'https://atelier-blue-three.vercel.app/',
    linkedinUrl: 'https://www.linkedin.com/company/tryatelier/',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Coding Campus',
    location: 'Toronto, ON',
    period: 'May 2025 — August 2025',
    type: 'Internship',
    icon: Code,
    image:
      'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/970/527/datas/original.jpeg',
    imageFit: 'cover',
    description:
      'Deployed a full-stack, AI-powered Waterloo coding contest preparation platform built with React and Supabase across AWS ECS and Vercel. Established Docker and GitHub Actions CI/CD workflows to maintain 99.9% uptime and help more than 200 students prepare for competitive programming contests.',
    achievements: [
      'Deployed the application through AWS ECS and Vercel with Docker and GitHub Actions CI/CD, sustaining 99.9% uptime for 200+ students',
      'Engineered 3+ Supabase Edge Functions integrating Judge0 and OpenAI APIs with React Monaco Editor to run Java, Python, and C++ submissions in-browser and generate AI feedback',
      'Created a Python analytics pipeline with Selenium and Beautiful Soup to scrape 5+ years of contest data into Supabase PostgreSQL, improving AI training accuracy by 45%',
    ],
    skills: [
      'React',
      'Supabase',
      'Supabase Edge Functions',
      'AWS ECS',
      'Vercel',
      'GitHub Actions',
      'Docker',
      'Judge0',
      'OpenAI API',
      'Monaco Editor',
      'Java',
      'Python',
      'C++',
      'Selenium',
      'BeautifulSoup',
      'PostgreSQL',
    ],
    repository: 'https://github.com/vedantkminiai/Coding-Campus-App',
    liveUrl: 'https://coding-campus-app.vercel.app/',
  },
  {
    title: 'Mathematics Instructor',
    company: 'Kumon Learning Center',
    location: 'Toronto, ON',
    period: 'March 2023 — April 2026',
    type: 'Part-time',
    icon: BookOpen,
    image: 'https://www.kumon.ie/storage/uploads/iVgrv7ZioMNPsFh3as6cHlIrWbYuzduFL82B8YrO.jpg',
    imageFit: 'cover',
    logoImage: '/kumon-card-logo.png',
    logoWide: true,
    description:
      'Mathematics and English tutor for students ranging from elementary to high school level content. Implementing machine learning software to optimize student progression through the curriculum.',
    achievements: [
      'Tutored 50+ students across various grade levels in mathematics and English',
      'Developed ML algorithms to personalize learning paths for individual students',
      'Improved student performance metrics by 35% through data-driven teaching methods',
      'Created automated progress tracking system using Python and data analytics',
    ],
    skills: ['Python', 'Teaching', 'Mathematics', 'Education Technology', 'Student Assessment'],
  },
  {
    title: 'Co-Founder',
    company: 'MiniAI',
    location: 'Toronto, ON',
    period: 'February 2024 — Present',
    type: 'Permanent Part-Time',
    icon: Code,
    image: 'https://miniai.ca/miniAIhorizontal.png',
    description:
      'Co-founded and lead operations for an artificial intelligence education startup expanding access to practical AI learning in underprivileged communities. Direct product engineering, curriculum development, technical partnerships, and student-program delivery across an international learning community.',
    achievements: [
      'Led a team of 5+ contributors to build a machine-learning curriculum and manage student programs',
      'Formed partnerships with engineers from Meta, Microsoft, and Amazon to deliver virtual AI workshops',
      'Engineered the company website with React, TypeScript, and Vite; deployed through AWS ECS and Vercel using Docker and GitHub Actions CI/CD pipelines to maintain 99.9% uptime',
      'Reached 1,000+ students internationally, with more than 300 earning a Foundations of AI credential',
    ],
    skills: ['React', 'TypeScript', 'Vite', 'AWS ECS', 'Vercel', 'Docker', 'GitHub Actions'],
    liveUrl: 'https://miniai.ca/',
    linkedinUrl: 'https://www.linkedin.com/company/mini-ai/?viewAsMember=true',
  },
  {
    title: 'Student Researcher',
    company: 'University of Waterloo',
    location: 'Toronto, ON',
    period: 'June 2024 — September 2024',
    type: 'Education',
    icon: Award,
    image:
      'https://uwaterloo.ca/brand/sites/ca.brand/files/styles/body-500px-wide/public/uploads/images/universityofwaterloo_logo_horiz_rgb_1.jpg?itok=1aKXR4xp',
    thumbnailFit: 'cover',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg',
    coverImageFit: 'contain',
    description:
      'Researched complex mathematics and computer science problem-solving techniques through the Summer Problem Solving Course offered by the Centre for Education, Mathematics and Computing. Wrote proofs and solved problems daily throughout the summer.',
    achievements: [
      'Achieved Top 25% Distinction in the 2024 Senior Canadian Mathematics Contest (37/60)',
      'Achieved Top 25% Distinction in the 2025 Canadian Computing Competition (43/75)',
      'Received a Certificate of Achievement upon completing the course',
    ],
    skills: ['Critical Thinking', 'Python', 'Proofs', 'Algorithms'],
  },
  {
    title: 'CREATE Student Researcher',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    period: 'May 2024 — June 2024',
    type: 'Researcher',
    icon: Users,
    image: 'https://spacesandexperiences.utoronto.ca/wp-content/uploads/2024/04/brand-UofT.jpg',
    thumbnailFit: 'cover',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg',
    coverImageFit: 'contain',
    description:
      'Attended the University of Toronto for its Computer Engineering Design program, CREATE Weekends.',
    achievements: [
      'Built and programmed a mini solar panel using Python, C++ and photo sensors to rotate for optimal lighting exposure',
      'Connected with upper-year Computer Science and Computer Engineering students',
    ],
    skills: ['Python', 'C++', 'Arduino'],
  },
];

type ExperienceProps = {
  initialIndex?: number;
};

const Experience = ({ initialIndex }: ExperienceProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);
  const [isDetailOpen, setIsDetailOpen] = useState(initialIndex !== undefined);
  const scrollerRef = useGlidingCarousel();
  const detailRef = useRef<HTMLElement>(null);
  const currentExperience = experiences[currentIndex];
  const currentLogoImage =
    'logoImage' in currentExperience
      ? currentExperience.logoImage
      : currentExperience.coverImage ?? currentExperience.image;
  const hasWideLogo =
    'logoWide' in currentExperience && currentExperience.logoWide;

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

  const selectExperience = (index: number) => {
    setCurrentIndex(index);
    setIsDetailOpen(true);
  };

  const revealSelectedExperience = () => {
    setIsDetailOpen(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  const moveSelection = (direction: -1 | 1) => {
    const nextIndex =
      (currentIndex + direction + experiences.length) % experiences.length;
    selectExperience(nextIndex);
  };

  return (
    <section id="experience" className="min-h-screen bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.28em] text-neutral-500">
              Career archive / 01—07
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Experience
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Scroll through the roles, then select a card to explore the work,
              impact, and technologies behind it.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => moveSelection(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-neutral-400 hover:text-white"
              aria-label="Previous experience"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => moveSelection(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-300"
              aria-label="Next experience"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="experience-scroll mb-10 flex gap-4 overflow-x-auto pb-5"
          role="tablist"
          aria-label="Select an experience"
        >
          {[...experiences, ...experiences].map((experience, displayIndex) => {
            const index = displayIndex % experiences.length;
            const isDuplicate = displayIndex >= experiences.length;

            return (
            <button
              key={`${experience.company}-${isDuplicate ? 'duplicate' : 'original'}`}
              onClick={() => selectExperience(index)}
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
              <div className={`h-24 overflow-hidden ${
                (experience.thumbnailFit ?? experience.imageFit) === 'cover'
                  ? 'bg-transparent'
                  : 'bg-neutral-800'
              }`}>
                <img
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  className={`block h-full w-full transition duration-500 ${
                    (experience.thumbnailFit ?? experience.imageFit) === 'cover'
                      ? 'object-cover object-center p-0 group-hover:scale-105'
                      : `object-contain group-hover:scale-105 ${
                          experience.thumbnailPadding === 'wide' ? 'p-4' : 'p-3'
                        }`
                  }`}
                />
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between text-xs text-neutral-500">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{experience.type}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-white">
                  {experience.title}
                </h3>
                <p className="text-sm text-neutral-400">{experience.company}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-neutral-500">
                  {experience.period}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {experience.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="truncate rounded-lg border border-neutral-700 bg-neutral-950/70 px-2.5 py-2 text-[10px] font-medium text-neutral-400"
                      title={skill}
                    >
                      {skill}
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
            onClick={revealSelectedExperience}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-white hover:bg-white hover:text-black"
            aria-label={`View ${currentExperience.title} details`}
            title="View selected experience"
          >
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        {isDetailOpen && (
        <AnimatedDetailReveal revealKey={`${currentExperience.company}-${currentIndex}`}>
        <article
          ref={detailRef}
          className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40"
        >
          <button
            onClick={() => moveSelection(-1)}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:border-white hover:bg-white hover:text-black sm:left-5"
            aria-label="Show previous experience"
            title="Previous experience"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => moveSelection(1)}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:border-white hover:bg-white hover:text-black sm:right-5"
            aria-label="Show next experience"
            title="Next experience"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[310px] overflow-hidden bg-neutral-800 lg:min-h-[540px]">
              <img
                key={currentExperience.coverImage ?? currentExperience.image}
                src={currentExperience.coverImage ?? currentExperience.image}
                alt={`${currentExperience.company} cover`}
                className={`absolute inset-0 h-full w-full ${
                  (currentExperience.coverImageFit ?? currentExperience.imageFit) === 'cover'
                    ? 'scale-[1.03] object-cover p-0'
                    : 'object-contain p-8 sm:p-12'
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 pt-20">
                <p className="font-medium text-white">{currentExperience.company}</p>
                <p className="mt-1 text-sm text-neutral-300">{currentExperience.location}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                    <span className="rounded-full border border-neutral-700 px-4 py-2">
                      {currentExperience.period}
                    </span>
                    <span className="rounded-full bg-neutral-800 px-4 py-2">
                      {currentExperience.type}
                    </span>
                  </div>
                  <div
                    className={`flex h-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-950 p-2 shadow-xl shadow-black/25 sm:h-20 sm:p-3 ${
                      hasWideLogo ? 'w-28 sm:w-36' : 'w-16 sm:w-20'
                    }`}
                  >
                    <img
                      src={currentLogoImage}
                      alt={`${currentExperience.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  {currentExperience.title}
                </h3>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-400">
                  {currentExperience.description}
                </p>
                {('repository' in currentExperience ||
                  'liveUrl' in currentExperience ||
                  'linkedinUrl' in currentExperience) && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {'repository' in currentExperience && currentExperience.repository && (
                      <a
                        href={currentExperience.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View repository
                      </a>
                    )}
                    {'liveUrl' in currentExperience && currentExperience.liveUrl && (
                      <a
                        href={currentExperience.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-neutral-600 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-white hover:text-white"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit live app
                      </a>
                    )}
                    {'linkedinUrl' in currentExperience && currentExperience.linkedinUrl && (
                      <a
                        href={currentExperience.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-neutral-600 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-white hover:bg-white hover:text-black"
                      >
                        <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-10">
                <TechnologyRail
                  technologies={currentExperience.skills}
                  label="Technologies & capabilities"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 p-7 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-neutral-400" />
              <h4 className="text-lg font-semibold">Selected impact</h4>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {currentExperience.achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="flex gap-4 rounded-xl bg-neutral-950/70 p-5 text-neutral-300"
                >
                  <span className="font-mono text-xs text-neutral-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
        </AnimatedDetailReveal>
        )}
      </div>
    </section>
  );
};

export default Experience;
