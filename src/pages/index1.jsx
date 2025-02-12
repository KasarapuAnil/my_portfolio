import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Projects from "./projects";
import Contact from "./contact";
import "../App.css";

const pageVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.4 } },
};

const Index1 = () => {
  const location = useLocation();

  // Check localStorage for saved theme
  const getInitialTheme = () => {
    return localStorage.getItem("theme") || "dark"; // Default to dark mode
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
  };

  // Apply Theme to Body Class
  useEffect(() => {
    document.body.classList.remove("light", "dark"); // Remove previous theme
    document.body.classList.add(theme); // Add new theme
  }, [theme]);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Animated Page Content */}
      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index1;
