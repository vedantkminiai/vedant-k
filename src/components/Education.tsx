import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Code, Users, Trophy } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Science in Computer Science',
    university: 'University of Toronto',
    location: 'Toronto, ON',
    period: '2022 - Present',
    status: 'In Progress',
    gpa: '3.8+',
    expectedGraduation: '2026',
    description: 'Pursuing a comprehensive Computer Science education with focus on software engineering, algorithms, data structures, and modern development practices.',
    coursework: [
      'Data Structures and Algorithms',
      'Software Engineering',
      'Database Systems',
      'Computer Systems Programming',
      'Discrete Mathematics',
      'Object-Oriented Programming',
      'Web Development',
      'Machine Learning Fundamentals'
    ],
    achievements: [
      'Dean\'s List status with 3.8+ GPA',
      'Active member of Computer Science Student Association',
      'Completed advanced coursework in algorithms and software design',
      'Led multiple team projects in software engineering',
      'Participated in coding competitions and hackathons',
      'Maintained consistent academic excellence across all semesters'
    ],
    skills: [
      'Java', 'Python', 'C++', 'JavaScript', 'React', 'Node.js',
      'Data Structures', 'Algorithms', 'Software Design', 'Database Design',
      'Web Development', 'Machine Learning', 'Git', 'Agile Development'
    ],
    activities: [
      {
        name: 'Computer Science Student Association',
        role: 'Active Member',
        description: 'Participate in workshops, networking events, and peer mentoring programs'
      },
      {
        name: 'Coding Competitions',
        role: 'Participant',
        description: 'Regular participation in programming contests and hackathons'
      },
      {
        name: 'Study Groups',
        role: 'Organizer',
        description: 'Lead study sessions for challenging courses like algorithms and data structures'
      }
    ]
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey in Computer Science at the University of Toronto, 
            building a strong foundation in software engineering and technology.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            
            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex items-center mb-6 lg:mb-0">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mr-6">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold text-xl mb-2">
                      {education.university}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{education.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium text-center">
                    {education.status}
                  </span>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{education.gpa}</div>
                      <div className="text-sm text-gray-600">GPA</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{education.expectedGraduation}</div>
                      <div className="text-sm text-gray-600">Expected Graduation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                {education.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Trophy className="h-6 w-6 mr-3 text-purple-600" />
                    Academic Achievements
                  </h4>
                  <ul className="space-y-3">
                    {education.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                        <Award className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="mb-10">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Code className="h-6 w-6 mr-3 text-blue-600" />
                  Technical Skills Acquired
                </h4>
                <div className="flex flex-wrap gap-3">
                  {education.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-purple-600" />
                  Extracurricular Activities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {education.activities.map((activity, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h5 className="font-bold text-gray-900 mb-2">{activity.name}</h5>
                      <p className="text-blue-600 font-medium text-sm mb-3">{activity.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Continuous Learning Journey
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              My education at the University of Toronto has provided me with a solid foundation in computer science 
              principles and practical skills. I'm always eager to apply classroom knowledge to real-world projects 
              and continue learning through hands-on experience.
            </p>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;