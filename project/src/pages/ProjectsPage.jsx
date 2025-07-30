import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Projects from '../components/Projects';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/omkar_ss.png'; 
import img2 from '../assets/omads.png';
import img3 from '../assets/globalconnect.png'; 
import img4 from '../assets/Oasis.png'; 

const ProjectsPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const featuredProjects = [
    {
      title: "Omkar Research Analyst",
      description: "Full-stack financial platform",
      image: img1,
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Om Advertisements",
      description: "OOH advertising platform",
      image: img2,
      technologies: ["React", "Vite", "GSAP Animations"]
    },
    {
      title: "Global Connect",
      description: "Visa processing platform",
      image: img3,
      technologies: ["React", "Vite", "Mail.js"]
    },
    {
      title: "Oasis Hotel",
      description: "Hotel booking website",
      image: img4,
      technologies: ["React", "Tailwind CSS", "UX Design"]
    },
  ];

  return (
    <div className="pt-20">
      <motion.div
        style={{ opacity, scale }}
        className="bg-black py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="cyber-grid w-full h-full opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-center mb-12 gradient-text"
          >
            Featured Work
          </motion.h1>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12"
          >
            {featuredProjects.map((project, index) => (
              <SwiperSlide key={index} className="w-[300px] sm:w-[500px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;