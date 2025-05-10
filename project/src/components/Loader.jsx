import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Animated circles */}
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-neon-blue rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-transparent border-t-neon-purple rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border-4 border-transparent border-t-violet-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Text animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-2xl font-bold gradient-text">LOADING</span>
        </motion.div>

        {/* Glitch effect overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0, 0.1, 0, 0.1, 0],
            x: [-2, 0, 2, 0, -2],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-full h-full bg-neon-blue opacity-10"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;