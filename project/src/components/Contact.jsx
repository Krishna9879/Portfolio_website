import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-violet-500 text-2xl" />,
      title: "Email",
      content: "krishna.paridwal.cg@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-violet-500 text-2xl" />,
      title: "LinkedIn",
      content: (
        <a
          href="https://www.linkedin.com/in/krishna-paridwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-violet-400 transition-colors duration-300"
        >
          linkedin.com/in/krishna-paridwal
        </a>
      )
    },
    {
      icon: <FaMapMarkerAlt className="text-violet-500 text-2xl" />,
      title: "Location",
      content: "Ahmedabad, Gujarat, India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black-100 rounded-xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
              <div className="text-secondary">{info.content}</div>
            </motion.div>
          ))}
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-black-200 text-white rounded-lg px-6 py-4 outline-none border border-violet-500 focus:border-violet-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-black-200 text-white rounded-lg px-6 py-4 outline-none border border-violet-500 focus:border-violet-600"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full bg-black-200 text-white rounded-lg px-6 py-4 mb-6 outline-none border border-violet-500 focus:border-violet-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="w-full bg-black-200 text-white rounded-lg px-6 py-4 mb-6 outline-none border border-violet-500 focus:border-violet-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-violet-600 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;