import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaTools } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const matrixChars = matrix.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-8xl md:text-9xl font-black mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 animate-gradient">
              KRISHNA
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 rounded-lg blur opacity-20 animate-pulse" />
          </h1>

          <div className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
            <TypeAnimation
              sequence={[
                'FULL STACK DEVELOPER',
                2000,
                'UI/UX DESIGNER',
                2000,
                'CLOUD ARCHITECT',
                2000,
                'TECH INNOVATOR',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="tracking-wider"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Creating next-generation digital experiences through innovative solutions and cutting-edge technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <a
                href="#projects"
                className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center"
              >
                <span className="text-gray-300 group-hover:text-gray-100 transition duration-200">
                  View Projects
                </span>
              </a>
            </button>

            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <a
                href="#contact"
                className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center"
              >
                <span className="text-gray-300 group-hover:text-gray-100 transition duration-200">
                  Contact Me
                </span>
              </a>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-1 h-1 bg-gray-400 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 via-violet-500/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"/>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/20 via-cyan-500/10 to-transparent transform translate-x-1/2 translate-y-1/2 rounded-full blur-3xl animate-pulse"/>
    </section>
  );
};

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
      <Hero />

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