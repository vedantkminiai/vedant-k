import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const cubeFaces = ['front', 'back', 'right', 'left', 'top', 'bottom'];

const Hero = () => {
  const highlights = [
    {
      label: 'Computer Science Specialist @ University of Toronto St. George',
      education: {
        graduation: 'Expected June 2030',
        minor: 'Statistics Minor',
        coursework: [
          'CSC110 — Foundations of Computer Science 1',
          'CSC111 — Foundations of Computer Science 2',
          'MAT223 — Linear Algebra 1',
          'MAT137 — Calculus with Proofs',
          'STA130 — Statistical Reasoning and Data Science',
        ],
      },
    },
    {
      label: 'Data Engineering Intern @ S&C Electric Company',
      description:
        'Built Azure and Airflow ETL workflows for 20+ years of switchgear data, modeled 3M+ sales records in Power BI, and delivered a React comparison tool saving $75,000+ annually.',
    },
    {
      label: 'Co-Founder @ MiniAI',
      description:
        'Leading product engineering and operations for an AI education startup that has reached more than 1,000 students internationally.',
    },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://ca.linkedin.com/in/vedant-kansara-381330221',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/vedantkminiai',
      icon: Github,
    },
  ];

  return (
    <section
      id="hero"
      className="relative z-30 flex min-h-screen items-center overflow-visible bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-24 text-white sm:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-profile-card relative overflow-visible rounded-[2rem] border border-neutral-800 bg-neutral-950/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="hero-card-cubes" aria-hidden="true">
            {['hero-card-cube--top', 'hero-card-cube--middle', 'hero-card-cube--bottom'].map(
              (position, cubeIndex) => (
                <div className={`hero-card-cube ${position}`} key={position}>
                  <div className="cube-decoration__body">
                    {cubeFaces.map((face) => (
                      <div
                        className={`cube-decoration__face cube-decoration__face--${face}`}
                        key={`${cubeIndex}-${face}`}
                      >
                        {Array.from({ length: 9 }).map((_, tileIndex) => (
                          <span key={tileIndex} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[390px] lg:mx-0">
            <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-700 bg-neutral-900 shadow-2xl shadow-black/60">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
            <img
                src="/vedant-home-portrait.png"
              alt="Vedant Kansara"
                className="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
            />
              <div className="absolute inset-x-5 bottom-5 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-md">
                <span className="text-sm font-semibold">Toronto, Canada</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2.5" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group/social relative flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-400 transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon className="h-[18px] w-[18px]" />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-black opacity-0 shadow-lg transition group-hover/social:opacity-100 group-focus-visible/social:opacity-100">
                    {link.label}
                  </span>
                </a>
              ))}
              <div className="group/mail relative z-30">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-400 transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black focus-visible:-translate-y-1 focus-visible:border-white focus-visible:bg-white focus-visible:text-black"
                  aria-label="Show email addresses"
                  aria-haspopup="true"
                >
                  <Mail className="h-[18px] w-[18px]" />
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(19rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-hover/mail:pointer-events-auto group-hover/mail:translate-y-0 group-hover/mail:opacity-100 group-focus-within/mail:pointer-events-auto group-focus-within/mail:translate-y-0 group-focus-within/mail:opacity-100">
                  <div className="rounded-2xl border border-neutral-700 bg-neutral-950 p-4 text-left shadow-2xl shadow-black/60">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                      Email
                    </p>
                    <div className="space-y-3 text-xs leading-5">
                      <p>
                        <span className="block font-semibold text-neutral-300">Personal</span>
                        <a
                          href="mailto:vedantkansara224@gmail.com"
                          className="break-all text-neutral-500 transition hover:text-white"
                        >
                          vedantkansara224@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="block font-semibold text-neutral-300">Work</span>
                        <a
                          href="mailto:vedant.kansara@mail.utoronto.ca"
                          className="break-all text-neutral-500 transition hover:text-white"
                        >
                          vedant.kansara@mail.utoronto.ca
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-neutral-500">
              Software · Data · AI
            </p>
            <h1 className="hero-name-load mb-5 text-5xl font-bold sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Vedant Kansara
            </span>
          </h1>
            <div className="mx-auto max-w-2xl text-left lg:mx-0">
              <p className="mb-5 text-base leading-7 text-neutral-500 sm:text-lg">
                I’m passionate about educational technology, data engineering and analytics, and machine learning. Outside of building software, I enjoy weightlifting, playing basketball, and solving speedcubes. Currently:
              </p>

            <ul className="space-y-1 border-l border-neutral-700 pl-5">
              {highlights.map((highlight) => (
                <li
                  key={highlight.label}
                  className="group/highlight relative text-sm font-medium leading-5 text-neutral-400 transition hover:text-white focus-within:text-white sm:text-base"
                >
                  <div
                    className="flex items-start gap-3 py-2.5"
                    tabIndex={0}
                    aria-label={`${highlight.label}. Hover or focus for details.`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500 transition group-hover/highlight:bg-white group-focus-within/highlight:bg-white" />
                    <span className="flex-1">{highlight.label}</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-300 group-hover/highlight:rotate-180 group-hover/highlight:text-neutral-300 group-focus-within/highlight:rotate-180 group-focus-within/highlight:text-neutral-300" />
                  </div>

                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover/highlight:grid-rows-[1fr] group-hover/highlight:opacity-100 group-focus-within/highlight:grid-rows-[1fr] group-focus-within/highlight:opacity-100">
                      <div className="overflow-hidden">
                        <div className="mb-2 border-l border-neutral-700 py-2 pl-4 text-sm">
                          {highlight.education ? (
                            <>
                          <div className="flex flex-wrap gap-2 text-[11px] text-neutral-400">
                            <span className="rounded-full border border-neutral-800 px-3 py-1.5">
                              {highlight.education.graduation}
                            </span>
                            <span className="rounded-full border border-neutral-800 px-3 py-1.5">
                              {highlight.education.minor}
                            </span>
                          </div>
                          <div className="mt-4 border-t border-neutral-800 pt-3">
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                              Relevant coursework
                            </p>
                            <ul className="space-y-1 text-[11px] leading-5 text-neutral-500">
                              {highlight.education.coursework.map((course) => (
                                <li key={course}>{course}</li>
                              ))}
                            </ul>
                          </div>
                            </>
                          ) : (
                            <p className="leading-6 text-neutral-500">
                              {highlight.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-16 h-16 bg-neutral-400 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-neutral-600 rounded-full opacity-10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
