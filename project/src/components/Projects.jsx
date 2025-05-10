import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "personal"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and reporting.",
      tags: ["React", "D3.js", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "personal"
    }
  ];

  const freelanceProjects = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering system and table reservations.",
      client: "Fine Dining Restaurant",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demo: "https://demo.com",
      testimonial: {
        text: "Exceptional work! The website perfectly captures our restaurant's essence.",
        author: "John Smith",
        role: "Restaurant Owner"
      }
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours.",
      client: "Premium Properties",
      tags: ["Next.js", "Three.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      demo: "https://demo.com",
      testimonial: {
        text: "The virtual tour feature has revolutionized how we showcase properties.",
        author: "Sarah Johnson",
        role: "Marketing Director"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            A showcase of my technical expertise and creative problem-solving abilities.
          </p>
        </motion.div>

        {/* Personal Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black-100 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-400">
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-violet-500 bg-opacity-20 text-violet-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Freelance Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Freelance Projects</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            Client projects that demonstrate my ability to deliver professional solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {freelanceProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black-100 rounded-xl overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-violet-400">Client: {project.client}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-violet-500 bg-opacity-20 text-violet-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-start gap-2 mb-2">
                    <FaStar className="text-yellow-500 mt-1" />
                    <p className="text-gray-300 italic">"{project.testimonial.text}"</p>
                  </div>
                  <div className="text-right">
                    <p className="text-violet-400 font-semibold">{project.testimonial.author}</p>
                    <p className="text-secondary text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;