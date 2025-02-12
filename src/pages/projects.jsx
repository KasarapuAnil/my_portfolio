import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Projects</h1>
      <ul style={{listStyleType:'none' ,paddingLeft:0}}>
        <li style={{marginBottom:'5px'}}>🚀 Project 1 - React Dashboard</li>
        <li style={{marginBottom:'5px'}}>📊 Project 2 - Node.js API</li>
        <li style={{marginBottom:'5px'}}>🤖 Project 3 - AI Chatbot</li>
      </ul>
    </motion.div>
  );
};

export default Projects;
