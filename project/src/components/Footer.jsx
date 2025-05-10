import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Krishna Paridwal</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Krishna9879"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-paridwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/KrishnaPar25992"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-500 transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Krishna Paridwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;