import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaServer, FaMobileAlt, FaLaptopCode, FaBrain, FaTools } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

// Shared animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const AboutPreview = () => {
  const highlights = [
    { title: "Full Stack Development", description: "Building end-to-end solutions" },
    { title: "UI/UX Design", description: "Creating beautiful interfaces" },
    { title: "Cloud Architecture", description: "Scalable cloud solutions" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">About Me</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <PreviewLink to="/about" text="Discover my journey" />
      </div>
    </section>
  );
};

export const ExperiencePreview = () => {
  const experiences = [
    {
      icon: <FaCode className="text-4xl text-violet-400" />,
      title: "Professional Experience",
      description: "5+ years of industry experience"
    },
    {
      icon: <FaServer className="text-4xl text-violet-400" />,
      title: "Education",
      description: "Computer Science Graduate"
    },
    {
      icon: <FaMobileAlt className="text-4xl text-violet-400" />,
      title: "Achievements",
      description: "Multiple industry certifications"
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
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

        <PreviewLink to="/experience" text="View my full journey" />
      </div>
    </section>
  );
};

export const ProjectsPreview = () => {
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
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <PreviewLink to="/projects" text="Explore all projects" />
      </div>
    </section>
  );
};

export const SkillsPreview = () => {
  const skills = [
    {
      icon: <FaLaptopCode className="text-4xl text-violet-400" />,
      title: "Web Development",
      description: "Modern frameworks and tools"
    },
    {
      icon: <FaBrain className="text-4xl text-violet-400" />,
      title: "Problem Solving",
      description: "Analytical thinking and solutions"
    },
    {
      icon: <FaTools className="text-4xl text-violet-400" />,
      title: "Technical Skills",
      description: "Cutting-edge technologies"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto">
            My technical toolkit and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{skill.title}</h3>
              <p className="text-secondary text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <PreviewLink to="/skills" text="View all skills" />
      </div>
    </section>
  );
};

export const ContactPreview = () => {
  return (
    <section className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <PreviewLink to="/contact" text="Contact me" />
      </div>
    </section>
  );
};

// Shared Components
const PreviewLink = ({ to, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <Link
      to={to}
      className="inline-flex items-center space-x-2 bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full hover:bg-violet-500/30 transition-all duration-300 group"
    >
      <span>{text}</span>
      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
    </Link>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <Tilt options={{ max: 25, scale: 1.05 }}>
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
          <ProjectLink href={project.github} icon={<FaGithub size={24} />} />
          <ProjectLink href={project.demo} icon={<FaArrowRight size={24} />} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-secondary">{project.description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const ProjectLink = ({ href, icon }) => (
  <a
    href={href}
    className="text-white hover:text-violet-400 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);