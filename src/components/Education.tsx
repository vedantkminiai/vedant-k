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
    <section id="education" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-px bg-neutral-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="border border-neutral-800 bg-neutral-900 rounded-3xl shadow-xl shadow-black/30 overflow-hidden">
            <div className="h-px bg-neutral-500"></div>
            
            {/* Hero Image Section */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src="https://www.diglib.org/wp-content/uploads/sites/3/2014/12/UofT_Logo.svg-copy.jpg"
                alt="University of Toronto Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mr-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                      {education.university}
                    </h3>
                    <p className="text-neutral-300 font-semibold text-lg">
                      {education.degree}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 sm:p-12">
              {/* Key Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center p-4 bg-neutral-800 rounded-xl">
                  <MapPin className="h-6 w-6 mr-3 text-neutral-300" />
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Location</p>
                    <p className="text-lg font-semibold text-white">{education.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-neutral-800 rounded-xl">
                  <Calendar className="h-6 w-6 mr-3 text-neutral-300" />
                  <div>
                    <p className="text-sm text-neutral-500 font-medium">Expected Graduation</p>
                    <p className="text-lg font-semibold text-white">{education.expectedGraduation}</p>
                  </div>
                </div>
              </div>

              {/* Coursework Section */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <BookOpen className="h-7 w-7 mr-3 text-neutral-300" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="group p-4 border border-neutral-700 bg-neutral-800 rounded-xl hover:border-neutral-500 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-white transition-colors"></span>
                        <span className="text-neutral-300 font-medium leading-relaxed">{course}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
