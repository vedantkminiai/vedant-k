import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Science in Computer Science',
    university: 'University of Toronto',
    location: 'Toronto, ON',
    expectedGraduation: 'June 2030',
    coursework: [
      'CSC110 (Principles of Computer Science)',
      'CSC111 (Data Structures and Algorithms)',
      'MAT223 (Linear Algebra)',
      'MAT137 (Calculus with Proofs)'
    ]
  };

  return (
    <section id="education" className="bg-neutral-900 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Education
          </h2>
          <div className="mx-auto h-px w-16 bg-neutral-600"></div>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-800">
                <GraduationCap className="h-5 w-5 text-neutral-200" />
              </div>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">{education.university}</h3>
                <p className="mt-1 text-sm text-neutral-400">{education.degree}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-2">
                <MapPin className="h-3.5 w-3.5" /> {education.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-2">
                <Calendar className="h-3.5 w-3.5" /> {education.expectedGraduation}
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-800 pt-5">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-300">
              <BookOpen className="h-4 w-4" /> Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-lg bg-neutral-900 px-3 py-2 text-xs text-neutral-400"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
