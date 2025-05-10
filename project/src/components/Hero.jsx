import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

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

      {/* Animated corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 via-violet-500/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"/>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/20 via-cyan-500/10 to-transparent transform translate-x-1/2 translate-y-1/2 rounded-full blur-3xl animate-pulse"/>
    </section>
  );
};

export default Hero;