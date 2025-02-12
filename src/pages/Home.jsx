import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-container">
      <img src="/mypic.jpeg"alt="Anil Kasarapu" className="profile-pic" />
      <div className="text-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Full Stack Developer!</p>
      </div>
    </div>
    </motion.div>
  );
};

export default Home;
