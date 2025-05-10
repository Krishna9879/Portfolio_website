import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaTools } from 'react-icons/fa';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);
  const scale = useTransform(parallaxProgress, [0, 1], [1, 1.2]);

  const stats = [
    { value: 4, label: "Freelance Projects", icon: "🚀" },
    { value: 10, label: "Technologies Learned", icon: "💻" },
    { value: 6, label: "Months Experience", icon: "⏳" },
    { value: 15, label: "Class Projects", icon: "🌟" },
  ];

  const services = [
    {
      title: "Frontend Development",
      icon: <FaCode className="w-16 h-16 text-violet-500" />,
      description: "Crafting responsive and interactive user interfaces with React and Tailwind CSS."
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-16 h-16 text-violet-500" />,
      description: "Developing scalable server-side applications and APIs with Node.js and Express."
    },
  ];

  const achievements = [
    {
      icon: <FaTools className="text-4xl text-violet-400" />,
      title: "Freelance Success",
      description: "Completed 4 freelance projects with client satisfaction"
    },
    {
      icon: <FaTools className="text-4xl text-violet-400" />,
      title: "Version Control Mastery",
      description: "Proficient in Git and GitHub for project management"
    },
    {
      icon: <FaTools className="text-4xl text-violet-400" />,
      title: "Academic Projects",
      description: "Delivered 15+ class projects with modern web technologies"
    }
  ];

  const specializations = [
    {
      icon: <FaCode className="text-4xl text-violet-400" />,
      title: "Modern Web Apps",
      description: "Building dynamic web applications with React and Node.js"
    },
    {
      icon: <FaServer className="text-4xl text-violet-400" />,
      title: "API Development",
      description: "Creating robust and secure APIs for seamless data integration"
    },
    {
      icon: <FaTools className="text-4xl text-violet-400" />,
      title: "Version Control",
      description: "Managing code efficiently with Git and collaborative workflows"
    }
  ];

  return (
    <div className="overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center justify-center"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0">
          <div className="cyber-grid w-full h-full opacity-20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-violet-500 p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            Hi, I'm <span className="glitch-effect gradient-text" data-text="Krishna">Krishna</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl text-gray-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Front-End Developer',
                2000,
                'Back-End Developer',
                2000,
                'Web Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Building innovative web solutions with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a href="#contact" className="cyber-button">Let's Connect</a>
            <a href="#projects" className="cyber-button">View Work</a>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 w-full flex justify-center"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-violet-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-violet-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section with Parallax */}
      <motion.div 
        ref={targetRef}
        style={{ scale }}
        className="relative py-32 bg-gradient-to-b from-black to-tertiary"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl text-center transform hover:translate-y-[-10px] transition-transform duration-300 border border-violet-500/20 hover:border-violet-500/50">
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-5xl font-bold gradient-text">{stat.value}</div>
                    <p className="text-gray-300 mt-2 text-lg">{stat.label}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Specializations Section */}
      <div className="py-32 bg-black relative">
        <div className="absolute inset-0">
          <div className="cyber-grid w-full h-full opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center gradient-text mb-20"
          >
            Specializations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center mb-6"
                    >
                      {spec.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">{spec.title}</h3>
                    <p className="text-gray-300 text-center">{spec.description}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        bgImageAlt="Technology Background"
        strength={200}
        className="relative"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative py-32">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center gradient-text mb-20"
            >
              Achievements
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Tilt options={{ max: 25, scale: 1.05 }}>
                    <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 h-full">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex justify-center mb-6"
                      >
                        {achievement.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white text-center mb-4">{achievement.title}</h3>
                      <p className="text-gray-300 text-center">{achievement.description}</p>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Parallax>

      {/* Services Section */}
      <div className="py-32 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center gradient-text mb-20"
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex justify-center mb-6"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-center">{service.description}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-32 bg-black relative">
        <div className="absolute inset-0">
          <div className="cyber-grid w-full h-full opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center gradient-text mb-12"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12"
          >
            Ready to collaborate on your next project? Let's build something amazing together.
          </motion.p>
          <div className="flex justify-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Krishna9879"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={40} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/krishna-paridwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={40} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://x.com/KrishnaPar25992"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={40} />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;