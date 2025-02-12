import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Define inline styles
  const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stacks the items vertically
    gap: '15px', // Adds space between the rows
    alignItems: 'center', // Aligns the text to the left
  };

  const paragraphStyle = {
    margin: '0', // Removes default margin
    fontSize: '16px', // Makes text readable
  };

  const strongStyle = {
    marginRight: '10px', // Adds some space between label and the link
  };

  const linkStyle = {
    color: '#0A66C2', // LinkedIn blue color
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const linkHoverStyle = {
    textDecoration: 'underline', // Underlines on hover
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact</h1>

      {/* Contact Information */}
      <div style={contactContainerStyle}>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Email:</strong>
          <span>
            <a
              href="mailto:kasarapuanil55@gmail.com"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              kasarapuanil55@gmail.com
            </a>
          </span>
        </p>

        <p style={paragraphStyle}>
          <strong style={strongStyle}>LinkedIn:</strong>
          <span>
            <a
              href="https://www.linkedin.com/in/anil-kasarapu369"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              Anil Kasarapu's LinkedIn
            </a>
          </span>
        </p>

        <p style={paragraphStyle}>
          <strong style={strongStyle}>Mobile:</strong>
          <span>
            <a
              href="tel:+6303263144"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.textDecoration = linkHoverStyle.textDecoration)}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              +63 032 631 44
            </a>
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
