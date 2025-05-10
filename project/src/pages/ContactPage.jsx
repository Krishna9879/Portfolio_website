import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import Contact from '../components/Contact';

const ContactPage = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pt-20 relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#b537f2",
            },
            links: {
              color: "#00f7ff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="text-center py-20 bg-black/50">
          <h1 className="text-6xl font-bold text-white mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        <Contact />
      </motion.div>
    </div>
  );
}

export default ContactPage;