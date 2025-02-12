import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>About Me</h1>
      <p>I'm a passionate Full Stack Developer specializing in React.js and Java.</p>
    </motion.div>
  );
};

export default About;
