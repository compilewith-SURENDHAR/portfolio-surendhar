import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ElementType;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "React", level: 95, category: "Frontend", icon: Code },
    { name: "TypeScript", level: 90, category: "Language", icon: Code },
    { name: "Node.js", level: 88, category: "Backend", icon: Server },
    { name: "PostgreSQL", level: 85, category: "Database", icon: Database },
    { name: "AWS", level: 80, category: "Cloud", icon: Globe },
    { name: "Docker", level: 82, category: "DevOps", icon: Server },
    { name: "MongoDB", level: 85, category: "Database", icon: Database },
    { name: "Next.js", level: 88, category: "Frontend", icon: Code },
    { name: "Python", level: 75, category: "Language", icon: Code },
    { name: "GraphQL", level: 78, category: "API", icon: Globe },
    { name: "React Native", level: 70, category: "Mobile", icon: Smartphone },
    { name: "Figma", level: 85, category: "Design", icon: Palette }
  ];

  const categories = ["Frontend", "Backend", "Database", "Language", "Cloud", "DevOps", "Mobile", "Design", "API"];

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
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
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <skill.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.category}</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    variants={progressVariants}
                    custom={skill.level}
                    className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Technology Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full border border-white/10"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;