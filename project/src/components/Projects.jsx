import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaLinkedin } from 'react-icons/fa';
import img1 from '../assets/uma_overseas.png'; 
import img2 from '../assets/omads.png';
import img3 from '../assets/globalconnect.png'; 
import img4 from '../assets/Oasis.png'; 
import img5 from '../assets/omkar_ss.png'; 

const Projects = () => {
  // Featured Projects (now using freelance projects)
  const featuredProjects = [
    {
      title: "UmaOverseas",
      description: "An international education consultancy website developed as my first live freelancing project. Built with React.js and Vite for blazing-fast performance, featuring a modern and responsive design with Tailwind CSS.",
      tags: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      image: img1,
      demo: "https://www.umaoverseasedu.com/",
      category: "freelance"
    },
    {
      title: "Om Advertisements",
      description: "An OOH (Out-of-Home) advertising company website built with React + Vite. Features GSAP animations for smooth interactions and a fixed top navbar for seamless navigation.",
      tags: ["React", "Vite", "GSAP Animations", "UX Optimization"],
      image: img2,
      demo: "https://www.omads.in",
      category: "freelance"
    }
  ];

  // Freelance Projects (all five)
  const freelanceProjects = [
    {
      title: "UmaOverseas",
      description: "Developed a dynamic international education consultancy website that increased brand visibility and user engagement. Implemented responsive design principles for optimal viewing across all devices.",
      client: "UmaOverseas",
      tags: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      image: img1,
      demo: "https://www.umaoverseasedu.com/",
      linkedinPost: "https://www.linkedin.com/posts/krishna-paridwal_webdeveloperforhire-reactjs-freelancedeveloper-activity-7306313896988925952-u5BG",
      testimonial: {
        text: "Krishna delivered our international website exactly as we envisioned. The site performs exceptionally well across all devices.",
        author: "Uma Overseas Team",
        role: "Client"
      }
    },
    {
      title: "Om Advertisements",
      description: "Created a modern OOH advertising platform with interactive elements and smooth animations. Optimized UX resulting in improved client acquisition and engagement metrics.",
      client: "Om Advertisements",
      tags: ["React", "Vite", "GSAP Animations", "UX Optimization"],
      image: img2,
      demo: "https://www.omads.in",
      linkedinPost: "https://www.linkedin.com/posts/krishna-paridwal_techstack-webdevelopment-reactjs-activity-7293694922510008323-Og5K",
      testimonial: {
        text: "The website perfectly represents our brand and has significantly improved our online presence. The animations are particularly impressive.",
        author: "Om Advertisements Team",
        role: "Client"
      }
    },
    {
      title: "Global Connect",
      description: "Built a comprehensive platform for international students with visa processing features. Integrated Mail.js for communication and implemented secure forms for data privacy.",
      client: "Global Connect",
      tags: ["React", "Vite", "Mail.js", "Form Security", "UX Optimization"],
      image: img3,
      demo: "https://www.globalconnectvisaservices.com/",
      linkedinPost: "https://www.linkedin.com/posts/krishna-paridwal_webdevelopment-frontenddevelopment-freelancingjourney-activity-7288083003220594688-dd83",
      testimonial: {
        text: "This platform has transformed how we interact with students. The seamless experience has increased our conversion rates significantly.",
        author: "Global Connect Team",
        role: "Client"
      }
    },
    {
      title: "Oasis Hotel",
      description: "Developed a responsive hotel booking website focused on user experience and modern aesthetics. Implemented performance optimizations for fast loading times and smooth interactions.",
      client: "Oasis Hotel",
      tags: ["React", "Tailwind CSS", "Performance", "UX Design"],
      image: img4,
      demo: "https://www.oasishotelwi.com/",
      linkedinPost: "https://www.linkedin.com/in/krishna-paridwal/",
      testimonial: {
        text: "Our booking conversions increased by 30% after launching the new website. The modern design perfectly captures our brand essence.",
        author: "Oasis Hotel Management",
        role: "Client"
      }
    },
    {
      title: "Omkar Research Analyst",
      description: "Full-stack financial services platform featuring React frontend, Node.js backend, and MongoDB database. Created a professional interface for showcasing financial analysis services.",
      client: "Omkar Research Analyst",
      tags: ["React", "Node.js", "MongoDB", "Full-Stack", "Express"],
      image: img5,
      demo: "https://www.omkarresearchanalyst.in/",
      linkedinPost: "https://www.linkedin.com/in/krishna-paridwal/",
      testimonial: {
        text: "The website has elevated our professional image and made complex financial data accessible to our clients.",
        author: "Omkar Research Team",
        role: "Client"
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
            Selected projects showcasing technical expertise and creative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
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
            Professional solutions delivering real-world impact for diverse clients
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
                <div className="mt-6 flex justify-center items-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>LinkedIn Post</span>
                    <FaLinkedin size={14} />
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