import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('EmailJS Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('EmailJS Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('EmailJS Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you for your message! I'll respond within 24 hours.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send message:', error.status, error.text);
      toast.error("Message failed to send. Please try again or contact me directly.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-violet-500 text-2xl" />,
      title: "Email",
      content: (
        <a
          href="mailto:krishna.paridwal.cg@gmail.com"
          className="text-secondary hover:text-violet-400 transition-colors duration-300"
        >
          krishna.paridwal.cg@gmail.com
        </a>
      )
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
      <ToastContainer />
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
            Have a project in mind or want to discuss opportunities? Send me a message and I'll respond promptly.
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
              className="bg-black-100 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
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
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full bg-black-200 text-white rounded-lg px-6 py-4 outline-none border border-violet-500 focus:border-violet-600 focus:ring-2 focus:ring-violet-500/50 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full bg-black-200 text-white rounded-lg px-6 py-4 outline-none border border-violet-500 focus:border-violet-600 focus:ring-2 focus:ring-violet-500/50 transition-all"
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-black-200 text-white rounded-lg px-6 py-4 outline-none border border-violet-500 focus:border-violet-600 focus:ring-2 focus:ring-violet-500/50 transition-all"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              className="w-full bg-black-200 text-white rounded-lg px-6 py-4 outline-none border border-violet-500 focus:border-violet-600 focus:ring-2 focus:ring-violet-500/50 transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-500 to-violet-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-violet-600 hover:to-violet-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;