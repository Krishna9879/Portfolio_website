import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

const ProjectsPreview = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time AI-powered chat system",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.github} className="text-white hover:text-violet-400 transition-colors duration-300">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.demo} className="text-white hover:text-violet-400 transition-colors duration-300">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-secondary">{project.description}</p>
                </div>
              </motion.div>
            </Tilt>
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
            to="/projects"
            className="inline-flex items-center space-x-2 bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full hover:bg-violet-500/30 transition-all duration-300 group"
          >
            <span>Explore all projects</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;