import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "C", "Bash Scripting", "HTML & CSS"]
    },
    {
      category: "Tools and Technologies", 
      skills: ["Git", "GitHub", "Flask", "Docker", "Linux", "REST API"]
    },
    {
      category: "Data Technologies",
      skills: ["SQL", "Spark", "PySpark", "Databricks", "Airflow", "ETL Pipelines", "MySQL", "MongoDB"]
    }
  ];

  const mainSkills = ["Programming", "Data Pipelines and Data Modeling", "Machine Learning", "Automation Scripting"];

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
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
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
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I'm proficient in
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main Skills */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Core Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {mainSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-colors text-lg font-semibold"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Detailed Skills Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-colors text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;