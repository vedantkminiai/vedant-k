import React, { useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Users,
} from 'lucide-react';

const experiences = [
  {
    title: 'Kumon Instructor',
    company: 'Kumon Learning Center',
    location: 'Toronto, ON',
    period: 'March 2023 — Present',
    type: 'Part-time',
    icon: BookOpen,
    image: 'https://www.kumon.com/assets/images/whats-kumon/logo_img_01.gif',
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
    title: 'Co-Founder and Software Engineer',
    company: 'MiniAI',
    location: 'Toronto, ON',
    period: 'February 2024 — Present',
    type: 'Permanent Part-Time',
    icon: Code,
    image: 'https://miniai.ca/miniAIhorizontal.png',
    description:
      'Co-founded an artificial intelligence education startup. Designed a machine-learning-focused curriculum using interactive coding labs from TensorFlow.',
    achievements: [
      'Developed responsive web applications using React and Node.js',
      'Collaborated with engineers from Meta, Amazon and Microsoft',
      'Ran a summer program graduating nearly 300 students',
      'Hosted workshops at Pierre Laporte Middle School and Northview Heights Secondary School',
    ],
    skills: ['React', 'Node.js', 'JavaScript', 'SQL', 'Git', 'Agile Development'],
  },
  {
    title: 'Mathematics Researcher',
    company: 'University of Waterloo',
    location: 'Toronto, ON',
    period: 'June 2024 — September 2024',
    type: 'Education',
    icon: Award,
    image:
      'https://uwaterloo.ca/brand/sites/ca.brand/files/styles/body-500px-wide/public/uploads/images/universityofwaterloo_logo_horiz_rgb_1.jpg?itok=1aKXR4xp',
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
    image: 'https://www.diglib.org/wp-content/uploads/sites/3/2014/12/UofT_Logo.svg-copy.jpg',
    description:
      'Attended the University of Toronto for its Computer Engineering Design program, CREATE Weekends.',
    achievements: [
      'Built and programmed a mini solar panel using Python, C++ and photo sensors to rotate for optimal lighting exposure',
      'Connected with upper-year Computer Science and Computer Engineering students',
    ],
    skills: ['Python', 'C++', 'Arduino'],
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const currentExperience = experiences[currentIndex];

  const selectExperience = (index: number) => {
    setCurrentIndex(index);
    const selectedCard = scrollerRef.current?.children[index] as HTMLElement | undefined;
    selectedCard?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
              Career archive / 01—04
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
          className="experience-scroll mb-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
          role="tablist"
          aria-label="Select an experience"
        >
          {experiences.map((experience, index) => (
            <button
              key={experience.company}
              onClick={() => selectExperience(index)}
              className={`group min-w-[250px] max-w-[250px] snap-center overflow-hidden rounded-2xl border text-left transition-all duration-300 sm:min-w-[290px] sm:max-w-[290px] ${
                index === currentIndex
                  ? 'border-white bg-neutral-800'
                  : 'border-neutral-800 bg-neutral-900/80 hover:border-neutral-600 hover:bg-neutral-900'
              }`}
              role="tab"
              aria-selected={index === currentIndex}
            >
              <div className="h-24 overflow-hidden bg-white">
                <img
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
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
              </div>
            </button>
          ))}
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[310px] overflow-hidden bg-white lg:min-h-[540px]">
              <img
                key={currentExperience.image}
                src={currentExperience.image}
                alt={`${currentExperience.company} cover`}
                className="absolute inset-0 h-full w-full object-contain p-8 sm:p-12"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 pt-20">
                <p className="font-medium text-white">{currentExperience.company}</p>
                <p className="mt-1 text-sm text-neutral-300">{currentExperience.location}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                  <span className="rounded-full border border-neutral-700 px-4 py-2">
                    {currentExperience.period}
                  </span>
                  <span className="rounded-full bg-neutral-800 px-4 py-2">
                    {currentExperience.type}
                  </span>
                </div>

                <h3 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  {currentExperience.title}
                </h3>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-400">
                  {currentExperience.description}
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Technologies & capabilities
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {currentExperience.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-xl border border-neutral-700 bg-neutral-800/70 p-4 text-sm font-medium text-neutral-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
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
      </div>
    </section>
  );
};

export default Experience;
