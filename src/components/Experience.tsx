import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Junior Engineer",
      company: "MulticoreWare Inc.",
      location: "chennai, India",
      period: "Jan 2025 - Present",
      description: [
        "A flask based Application that automates the device driver intgeration; bash scripting for automation and device driver development ",
        "docker for multi-container Approach of the Application"
      ],
      technologies: ["C", "Python", "Docker", "Linux", "Device Drivers", "Flask", "git"]
    },
    {
      id: 2,
      title: "Intern",
      company: " Infinite Computer Solutions",
      location: "Chennai, India",
      period: "june 2024 - june 2024",
      description: [
        "a user-friendly desktop application that allows users to interact with and query databases and documents",
        " Leverage Generative AI to enable intelligent querying, data extraction, and analysis from MySQL/MongoDB databases and PDF documents"
      ],
      technologies: ["GenAI", "MongoDB", "SQL", "API"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline dot */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="absolute -left-20 top-6 w-4 h-4 bg-blue-400 rounded-full hidden md:block border-4 border-gray-900"
              />

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Briefcase size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="text-gray-300 mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-2 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;