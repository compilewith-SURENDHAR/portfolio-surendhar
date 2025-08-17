import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Code } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const navItems = [
    { id: 'home', title: 'Home' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' }
  ];

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

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-30 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors backdrop-blur-sm ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/20 border border-blue-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {item.title}
                </motion.button>
              ))}
              
              {/* Links Button */}
              <motion.button
                onClick={() => setIsLinksOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 border border-transparent backdrop-blur-sm transition-colors"
              >
                Links
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 backdrop-blur-sm rounded-md"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-black/90 backdrop-blur-md border-l border-white/10 z-40 md:hidden"
      >
        <div className="flex flex-col p-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`px-4 py-3 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? 'text-blue-400 bg-blue-400/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.title}
            </motion.button>
          ))}
          
          {/* Mobile Links Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            onClick={() => {
              setIsLinksOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="px-4 py-3 rounded-lg text-left transition-colors text-gray-300 hover:text-white hover:bg-white/5"
          >
            Links
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Links Modal */}
      {isLinksOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsLinksOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900/90 backdrop-blur-md rounded-xl p-8 max-w-md w-full border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Social Links</h2>
              <button
                onClick={() => setIsLinksOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 ${link.color} group`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <link.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{link.name}</p>
                    <p className="text-gray-400 text-sm">
                      {link.name === 'Email' ? 'Send me an email' : `Visit my ${link.name}`}
                    </p>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-white ml-auto" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;