import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, Users, Target } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would link to your actual resume PDF
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume PDF URL
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // In a real application, this would open the resume in a new tab
    window.open('#', '_blank'); // Replace with actual resume PDF URL
  };

  const highlights = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led development teams and mentored junior developers"
    },
    {
      icon: Target,
      title: "Project Success",
      description: "Delivered 20+ successful projects on time and budget"
    }
  ];

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Download my resume or view it online
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <div className="aspect-[8.5/11] bg-white/10 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center mb-6">
              <div className="text-center">
                <FileText size={64} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg font-medium">Resume Preview</p>
                <p className="text-gray-500 text-sm">PDF Document</p>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                onClick={handlePreview}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                Preview
              </motion.button>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Resume Highlights</h2>
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/20"
            >
              <h3 className="text-lg font-semibold text-white mb-3">What's Included</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Complete work experience and project history
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Technical skills and certifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Education and professional development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Contact information and references
                </li>
              </ul>
            </motion.div>

            {/* Download Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
            >
              <p className="text-gray-400 text-sm">
                Last updated: <span className="text-white">December 2024</span>
              </p>
              <p className="text-gray-400 text-sm">
                File size: <span className="text-white">245 KB</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;