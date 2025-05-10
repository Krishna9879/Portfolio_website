import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Experience from '../components/Experience';

const ExperiencePage = () => {
  return (
    <div className="pt-20">
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        bgImageAlt="Experience Background"
        strength={200}
        className="relative"
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative py-20 text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6">Professional Journey</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Explore my career path and the milestones that have shaped my professional growth
          </p>
        </motion.div>
      </Parallax>
      <Experience />
    </div>
  );
}

export default ExperiencePage;