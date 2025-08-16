import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, BookOpen } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  provider: string;
  date: string;
  description: string;
  certificateUrl: string;
  skills: string[];
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive certification covering AWS cloud architecture, security, and best practices for scalable applications.",
      certificateUrl: "#",
      skills: ["AWS", "Cloud Architecture", "Security", "Scalability"]
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      provider: "Udemy",
      date: "2022",
      description: "In-depth course covering React fundamentals, hooks, context, testing, and advanced patterns for modern web development.",
      certificateUrl: "#",
      skills: ["React", "Redux", "Testing", "Hooks"]
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      provider: "freeCodeCamp",
      date: "2021",
      description: "Comprehensive program covering frontend and backend development, databases, and deployment strategies.",
      certificateUrl: "#",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Docker & Kubernetes Certification",
      provider: "Docker Inc.",
      date: "2023",
      description: "Advanced containerization and orchestration techniques for modern application deployment and scaling.",
      certificateUrl: "#",
      skills: ["Docker", "Kubernetes", "DevOps", "Container Orchestration"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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
              Courses & Certifications
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{course.provider}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{course.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  title="View Certificate"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;