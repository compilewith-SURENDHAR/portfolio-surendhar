import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ExternalLink, X } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

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

  return (
    <>
      {/* Links Button */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <motion.button
          onClick={() => setIsLinksOpen(true)}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-400/50"
        >
          <div className="flex items-center gap-2">
            <ExternalLink size={18} className="text-gray-300" />
            <span className="text-gray-300 font-medium">Links</span>
          </div>
        </motion.button>
        
        {/* Connection line */}
        <div className="w-px h-20 bg-gradient-to-b from-blue-400/50 to-transparent mx-auto mt-4"></div>
      </motion.div>

      {/* Links Modal */}
      <AnimatePresence>
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
      </AnimatePresence>
    </>
  );
};

export default SocialLinks;