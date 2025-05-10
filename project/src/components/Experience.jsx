import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "B.Tech in Computer Science",
      company: "Rai University",
      date: "August 2024",
      description: "Pursuing a Bachelor's degree in Computer Science Engineering, with a focus on software development and computer science fundamentals.",
      icon: <FaGraduationCap />,
      type: "education"
    },
    {
      title: "Front-End Development",
      company: "Self-Learning",
      date: "November 2024",
      description: "Developed skills in front-end development, creating responsive and interactive user interfaces using React, HTML5, CSS3, and Tailwind CSS.",
      icon: <FaBriefcase />,
      type: "work"
    },
    {
      title: "Back-End Development",
      company: "Self-Learning",
      date: "January 2025",
      description: "Learned back-end development, focusing on creating RESTful APIs and managing server-side logic with Node.js, Express, and MongoDB.",
      icon: <FaBriefcase />,
      type: "work"
    },
    {
      title: "First Freelance Project",
      company: "Freelance",
      date: "January 2025",
      description: "Delivered a web development project for a client, applying front-end and back-end technologies to create a functional and user-friendly application.",
      icon: <FaBriefcase />,
      type: "work"
    },
    {
      title: "Full Stack Development",
      company: "Self-Learning",
      date: "March 2025 - Ongoing",
      description: "Mastered full-stack development by combining front-end and back-end skills, building end-to-end web applications using React, Node.js, and MongoDB.",
      icon: <FaBriefcase />,
      type: "work"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-16">My Journey</h2>
        
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: exp.type === 'work' ? '#1d1836' : '#151030',
                color: '#fff'
              }}
              contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
              date={exp.date}
              iconStyle={{ background: exp.type === 'work' ? '#804dee' : '#151030' }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-violet-400 mt-2">{exp.company}</h4>
              <p className="text-secondary mt-4">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;