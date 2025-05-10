import { motion, useScroll, useTransform } from 'framer-motion';
import { Tilt } from 'react-tilt';
import CountUp from 'react-countup';
import { FaCode, FaServer, FaDatabase, FaCloud, FaMobile, FaTools } from 'react-icons/fa';
import Skills from '../components/Skills';

const SkillsPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const skillCategories = [
    {
      icon: <FaCode className="text-5xl text-violet-400" />,
      title: "Frontend Development",
      skills: ["React", "Vue", "Angular", "Next.js"]
    },
    {
      icon: <FaServer className="text-5xl text-violet-400" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "Go"]
    },
    {
      icon: <FaDatabase className="text-5xl text-violet-400" />,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
    },
    {
      icon: <FaCloud className="text-5xl text-violet-400" />,
      title: "Cloud Services",
      skills: ["AWS", "Azure", "GCP", "Heroku"]
    },
    {
      icon: <FaMobile className="text-5xl text-violet-400" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: <FaTools className="text-5xl text-violet-400" />,
      title: "Tools & Others",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  return (
    <div className="pt-20">
      <motion.div
        style={{ scale }}
        className="bg-gradient-to-b from-violet-900 to-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-center mb-16 gradient-text"
          >
            Technical Expertise
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 group">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center mb-6"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                          className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Skills />
    </div>
  );
};

export default SkillsPage;