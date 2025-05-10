import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const ExperiencePreview = () => {
  const experiences = [
    {
      icon: <FaBriefcase className="text-4xl text-violet-400" />,
      title: "Professional Experience",
      description: "5+ years of industry experience"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-violet-400" />,
      title: "Education",
      description: "Computer Science Graduate"
    },
    {
      icon: <FaAward className="text-4xl text-violet-400" />,
      title: "Achievements",
      description: "Multiple industry certifications"
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 text-center group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/experience"
            className="inline-flex items-center space-x-2 bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full hover:bg-violet-500/30 transition-all duration-300 group"
          >
            <span>View my full journey</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePreview;