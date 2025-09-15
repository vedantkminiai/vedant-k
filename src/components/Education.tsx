import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Science in Computer Science',
    university: 'University of Toronto',
    location: 'Toronto, ON',
    expectedGraduation: '2026',
    coursework: [
      'CSC110 (Principles of Computer Science)',
      'CSC110 (Data Structures and Algorithms)',
      'MAT223 (Linear Algebra)',
      'MAT137 (Calculus with Proofs)',
    ]
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-600 to-rose-600"></div>
            
            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
                <div className="flex items-center mb-6 sm:mb-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl mr-6">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-red-600 font-semibold text-lg mb-2">
                      {education.university}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-red-500" />
                    <span className="font-medium">{education.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-red-500" />
                    <span className="font-medium">Expected Graduation: {education.expectedGraduation}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-red-600" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="flex items-center p-4 bg-red-50 rounded-lg">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium">{course}</span>
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