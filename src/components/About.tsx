import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center"
          >
            <User size={48} className="text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello, I'm
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Surendhar K
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            A passionate <span className="text-blue-400">Full Stack Developer</span> who loves creating 
            beautiful, functional, and user-friendly digital experiences.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            With a strong foundation in modern web technologies, I specialize in building 
            scalable applications and bringing creative ideas to life through clean, 
            efficient code.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { icon: Code, title: "Clean Code", desc: "Writing maintainable and scalable solutions" },
            { icon: User, title: "User Focus", desc: "Creating intuitive and accessible experiences" },
            { icon: Heart, title: "Passion", desc: "Love for learning and continuous improvement" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;