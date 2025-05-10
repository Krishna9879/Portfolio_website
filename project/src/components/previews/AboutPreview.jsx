import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

const AboutPreview = () => {
  const highlights = [
    { title: "Full Stack Development", description: "Building end-to-end solutions" },
    { title: "UI/UX Design", description: "Creating beautiful interfaces" },
    { title: "Cloud Architecture", description: "Scalable cloud solutions" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 gradient-text">About Me</h2>
          <p className="text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate developer dedicated to crafting exceptional digital experiences through innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
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
            to="/about"
            className="inline-flex items-center space-x-2 bg-violet-500/20 text-violet-400 px-6 py-3 rounded-full hover:bg-violet-500/30 transition-all duration-300 group"
          >
            <span>Discover my journey</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;