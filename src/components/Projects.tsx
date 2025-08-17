import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Mood Assessment and Evaluation of Virtual meetings",
      description: "Application providing live feedback of participant's attentiveness",
      fullDescription: " Uses facial emotion recognition and gaze detection to assess participants' emotional state and attentiveness for  for virtual meeting optimization",
      technologies: ["Deep Learning", "TensorFlow", "Python", "OpenCV", "Pandas"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      demoUrl: "#",
      githubUrl: "https://github.com/kvsghub/Emotion_Analysis"
    },
    {
      id: 2,
      title: "Fitform- Exercise Analysis and Correction",
      description: "Application that provides real-Time feedback on the Correctness of the exercise done",
      fullDescription: " Utilizes computer vision and ML models to assess posture correctness by analyzing real-time webcam video , trained on a custom-labeled dataset, and provides instant feedback.",
      technologies: ["Machine Learning", "TensorFlow/Keras", "Python", "OpenCV", "Mediapipe", "Pandas/Numpy"],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Ren_Algorithm : PyPy",
      description: "A PyPi(Python Package Index) that implements popular machine Learning Algorithm",
      fullDescription: "A collection of machine learning algorithms implemented in Python. This package includes implementations for various supervised learning models such as XGBoost, Decision Trees, Random Forest, K-Nearest Neighbors (KNN), and Linear SVM, Linear regression, Logistics Regression . Each algorithm is organized in its own module for easy use and experimentation.",
      technologies: ["Machine Learning Algorithms", "Regression", "Classification", "Python"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      demoUrl: "#",
      githubUrl: "https://github.com/compilewith-SURENDHAR/pypi-ren_algorithm"
    },
    {
      id: 4,
      title: "React-Native Apps",
      description: "Simple Calculator and Quiz and Weather forecast Apps using React-Native",
      fullDescription: "Simple Mobile applications developed using React-Native such as Calculator, Quiz app, Weather Forecast App",
      technologies: ["React-Native", "Expo", "API", "JS"],
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      demoUrl: "#",
      githubUrl: "https://github.com/compilewith-SURENDHAR/WeatherForecast"
    },
    {
      id: 5,
      title: "ETL in Azure Platform",
      description: "Created a ETL pipeline using Azure data Engineering tools",
      fullDescription: "simple Data Engineering project where I leverage powerful technologies like Azure Data Factory, Azure Data Lake Gen 2, Databricks, Azure Synapse Analytics, and Apache Spark; that includes data Ingestion, storage, transformation and serving of data.",
      technologies: ["Azure", "Azure datafactory", "Azure Data Lake", "pyspark", "Data Bricks", "synapse", "PowerBI"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      demoUrl: "#",
      githubUrl: "https://github.com/compilewith-SURENDHAR/azure-DE-Project-learning"
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
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 cursor-pointer group hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <img 
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 text-sm font-medium">Click to view</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900/90 backdrop-blur-md rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;