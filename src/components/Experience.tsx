import React, { useState } from 'react';
import { Calendar, MapPin, Award, Users, Code, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      title: 'Kumon Instructor/Software Engineer',
      company: 'Kumon Learning Center',
      location: 'Toronto, ON',
      period: '2023 - Present',
      type: 'Part-time',
      icon: BookOpen,
      image: 'https://www.kumon.com/assets/images/whats-kumon/logo_img_01.gif',
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
      title: 'Co-Founder and Software Engineer',
      company: 'MiniAI',
      location: 'Toronto, ON',
      period: 'Febuary 2024 - Present',
      type: 'Permanent Part-Time',
      icon: Code,
      image: 'https://miniai.ca/miniAIhorizontal.png',
      description: 'Co-founded an artifical intelligence education startup. Designed a machine learning focused curriculum using interactive coding labs from TensorFlow. ',
      achievements: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with engineers from Meta, Amazon and Microsoft',
        'Ran a summer program graduating nearly 300 students',
        'Hosted various workshops at Pierre Laporte Middle School and Northview Heights Secondary School'
      ],
      skills: ['React', 'Node.js', 'JavaScript', 'SQL', 'Git', 'Agile Development']
    },
    {
      title: 'Mathematics Researcher',
      company: 'University of Waterloo',
      location: 'Toronto, ON',
      period: 'June 2024 - September 2024',
      type: 'Education',
      icon: Award,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Researched complex mathematics and computer science problem-solving techniques through the Summer Problem Solving Course offered by the Centre for Education, Mathematics and Computing. Wrote proofs and solved problems daily in the summer.',
      achievements: [
        'Achieved Top 25% Distinction in the 2024 Senior Canadian Mathematics Contest (37/60)',
        'Achieved Top 25% Distinction in the 2025 Canadian Computing Competition (43/75)',
        'Recieved Certificate of Achievement upon completing the course.',
      ],
      skills: ['Critical Thinking', 'Python', 'Proofs', 'Algorithms']
    },
    {
      title: 'Volunteer Developer',
      company: 'Local Non-Profit Organization',
      location: 'Toronto, ON',
      period: '2022 - 2023',
      type: 'Volunteer',
      icon: Users,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
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

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToExperience = (index: number) => {
    setCurrentIndex(index);
  };

  const currentExperience = experiences[currentIndex];

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
            Navigate through my professional and educational experiences.
          </p>
        </div>

        {/* Experience Counter */}
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-gray-500">
            {currentIndex + 1} of {experiences.length}
          </span>
        </div>

        {/* Main Experience Card */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-500 to-rose-500"></div>
            
            {/* Experience Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={currentExperience.image}
                alt={`${currentExperience.company} workplace`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Company name overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <h4 className="text-white text-xl sm:text-2xl font-bold mb-1">
                  {currentExperience.company}
                </h4>
                <p className="text-red-200 font-medium">
                  {currentExperience.location} • {currentExperience.period}
                </p>
              </div>
            </div>
            
            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl mr-6">
                    <currentExperience.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {currentExperience.title}
                    </h3>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTypeColor(currentExperience.type)} self-start`}>
                  {currentExperience.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {currentExperience.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {currentExperience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExperience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevExperience}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110"
            aria-label="Previous experience"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextExperience}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110"
            aria-label="Next experience"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToExperience(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>

        {/* Experience Timeline Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Experience Timeline</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => goToExperience(index)}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-red-100 text-red-700 shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <exp.icon className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium text-sm">{exp.company}</div>
                  <div className="text-xs opacity-75">{exp.period}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
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