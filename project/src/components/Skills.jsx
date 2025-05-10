import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 85 },
    { name: "Redux", icon: <SiRedux />, level: 85 },
    { name: "Docker", icon: <FaDocker />, level: 75 },
    { name: "AWS", icon: <FaAws />, level: 70 },
    { name: "Git", icon: <FaGitAlt />, level: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            My technical toolkit includes a wide range of modern technologies and frameworks that I use to build powerful web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black-100 rounded-xl p-6 hover:shadow-card transition-all duration-300 group"
            >
              <div className="text-4xl text-violet-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-violet-500 h-2.5 rounded-full"
                />
              </div>
              <span className="text-secondary text-sm mt-2 block">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;