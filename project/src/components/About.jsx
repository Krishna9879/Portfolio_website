import { motion } from 'framer-motion';
import { FaCode, FaServer, FaGraduationCap, FaLaptopCode, FaBrain } from 'react-icons/fa';
import profileImage from '../assets/IMG_20250322_201248.jpg'; // Import the profile image

const About = () => {
  const education = {
    degree: "B.Tech in Computer Science Engineering",
    year: "2nd Semester",
    description: "Currently pursuing my bachelor's degree with a focus on modern software development and computer science fundamentals."
  };

  const skills = [
    {
      title: "Frontend Development",
      icon: <FaCode className="w-16 h-16 text-violet-500" />,
      description: "Proficient in creating responsive and interactive user interfaces using React, HTML5, CSS3, and modern JavaScript.",
      technologies: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-16 h-16 text-violet-500" />,
      description: "Experience in building robust server-side applications and RESTful APIs.",
      technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
    }
  ];

  const interests = [
    {
      icon: <FaLaptopCode className="text-4xl text-violet-400" />,
      title: "Web Development",
      description: "Passionate about creating modern web applications"
    },
    {
      icon: <FaBrain className="text-4xl text-violet-400" />,
      title: "Learning",
      description: "Constantly exploring new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-tertiary relative overflow-hidden">
      <div className="hexagon-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-6 cyber-mask">About Me</h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-[300px] mx-auto lg:mx-0"
          >
            <div className="aspect-square rounded-2xl overflow-hidden neon-border">
              <img
                src={profileImage}
                alt="Krishna Paridwal Profile"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="tech-line top-0"></div>
              <div className="tech-line bottom-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-6 gradient-text">
              Aspiring Full Stack Developer
            </h3>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              Currently pursuing {education.degree}, in my {education.year}. I'm passionate about web development
              and constantly learning new technologies to build better digital experiences.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="flex items-center space-x-4">
                <FaGraduationCap className="text-4xl text-violet-400" />
                <div>
                  <p className="text-white font-medium">{education.degree}</p>
                  <p className="text-secondary">{education.year}</p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <span className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center text-gray-300 group-hover:text-gray-100 transition duration-200">
                Download CV
              </span>
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center mb-6"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{skill.title}</h3>
              <p className="text-secondary text-center mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center mb-4"
              >
                {interest.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-white text-center mb-2">{interest.title}</h4>
              <p className="text-secondary text-center">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;