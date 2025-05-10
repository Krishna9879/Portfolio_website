import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ContactPreview = () => {
  return (
    <section className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors duration-300"
          >
            <span>Contact me</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;