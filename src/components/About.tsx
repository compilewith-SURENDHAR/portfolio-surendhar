import React from 'react';
import { motion } from 'framer-motion';
import { User, Download } from 'lucide-react';

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

        <motion.div variants={itemVariants} className="mt-12">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // In a real application, this would link to your actual resume PDF
              const link = document.createElement('a');
              link.href = '#'; // Replace with actual resume PDF URL
              link.download = 'Surendhar_K_Resume.pdf';
              link.click();
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 mx-auto"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;