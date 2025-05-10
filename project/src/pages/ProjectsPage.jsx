import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Projects from '../components/Projects';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectsPage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Next-gen shopping experience",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Vue.js", "Firebase", "D3.js"]
    },
    {
      title: "AI Chat Application",
      description: "Intelligent conversation system",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Python", "TensorFlow", "WebSocket"]
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