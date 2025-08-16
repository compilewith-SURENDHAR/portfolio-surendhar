import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/compilewith-SURENDHAR',
      icon: Github,
      color: 'hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/surendhar_',
      icon: Code,
      color: 'hover:bg-orange-600'
    },
    {
      name: 'Email',
      url: 'mailto:surendhar010104@gmail.com',
      icon: Mail,
      color: 'hover:bg-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${link.color} group`}
          title={link.name}
        >
          <link.icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
        </motion.a>
      ))}
      
      {/* Connection line */}
      <div className="w-px h-20 bg-gradient-to-b from-blue-400/50 to-transparent mx-auto"></div>
    </motion.div>
  );
};

export default SocialLinks;