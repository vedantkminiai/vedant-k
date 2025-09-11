import React from 'react';
import { Calendar, MapPin, Award, Users, Code, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Kumon Instructor/Software Engineer',
      company: 'Kumon Learning Center',
      location: 'Toronto, ON',
      period: '2023 - Present',
      type: 'Part-time',
      icon: BookOpen,
      description: 'Mathematics and English tutor for students ranging from elementary to high school level content. Implementing machine learning software to optimize student progression through the curriculum.',
      achievements: [
        'Tutored 50+ students across various grade levels in mathematics and English',
        'Developed ML algorithms to personalize learning paths for individual students',
        'Improved student performance metrics by 35% through data-driven teaching methods',
        'Created automated progress tracking system using Python and data analytics'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analytics', 'Education Technology', 'Student Assessment']
    },
    {
      title: 'Software Development Intern',
      company: 'Tech Solutions Inc.',
      location: 'Toronto, ON',
      period: '2023 - 2023',
      type: 'Internship',
      icon: Code,
      description: 'Contributed to full-stack web development projects and gained hands-on experience with modern development practices and agile methodologies.',
      achievements: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with senior developers on code reviews and best practices',
        'Implemented RESTful APIs and database integration',
        'Participated in daily standups and sprint planning sessions'
      ],
      skills: ['React', 'Node.js', 'JavaScript', 'SQL', 'Git', 'Agile Development']
    },
    {
      title: 'Computer Science Student',
      company: 'University of Toronto',
      location: 'Toronto, ON',
      period: '2022 - Present',
      type: 'Education',
      icon: Award,
      description: 'Pursuing Bachelor of Science in Computer Science with focus on software engineering, algorithms, and data structures.',
      achievements: [
        'Maintained Dean\'s List status with 3.8+ GPA',
        'Completed advanced coursework in algorithms, data structures, and software design',
        'Led team projects in software engineering and database systems',
        'Active member of Computer Science Student Association'
      ],
      skills: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Software Design']
    },
    {
      title: 'Volunteer Developer',
      company: 'Local Non-Profit Organization',
      location: 'Toronto, ON',
      period: '2022 - 2023',
      type: 'Volunteer',
      icon: Users,
      description: 'Volunteered to develop and maintain web applications for local community organizations, helping them digitize their operations.',
      achievements: [
        'Built donation tracking system that increased online donations by 40%',
        'Created volunteer management portal for efficient coordination',
        'Provided technical training to staff members',
        'Maintained and updated existing web infrastructure'
      ],
      skills: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Community Outreach']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Part-time':
        return 'bg-green-100 text-green-800';
      case 'Internship':
        return 'bg-blue-100 text-blue-800';
      case 'Education':
        return 'bg-purple-100 text-purple-800';
      case 'Volunteer':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey through various roles has shaped my skills and passion for technology. 
            Here's a timeline of my professional and educational experiences.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-red-500 to-rose-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-500 to-rose-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-20 md:pl-0' : 'md:pl-8 pl-20 md:pl-0'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl mr-4">
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-red-600 font-semibold">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                        {experience.type}
                      </span>
                    </div>

                    {/* Location and Period */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ready for New Challenges
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              I'm actively seeking internship and entry-level opportunities where I can apply my skills, 
              learn from experienced professionals, and contribute to meaningful projects.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;