// Enroll.js
import React from "react";
import { motion } from "framer-motion";

const Enroll = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalOverlayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1050,
  };

  const modalDialogStyle = {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "500px",
    padding: "20px",
  };

  const modalHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const modalBodyStyle = {
    marginTop: "10px",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const selectStyle = {
    ...inputStyle,
  };

  const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={modalOverlayStyle}>
      <motion.div
        style={modalDialogStyle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div style={modalHeaderStyle}>
          <h5>Enroll Now</h5>
          <button onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <div style={modalBodyStyle}>
          <form>
            <motion.div
              style={formGroupStyle}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <input
                type="text"
                style={inputStyle}
                id="name"
                placeholder="Enter your name"
                required
              />
            </motion.div>
            <motion.div
              style={formGroupStyle}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <input
                type="email"
                style={inputStyle}
                id="email"
                placeholder="Enter your email"
                required
              />
            </motion.div>
            <motion.div
              style={formGroupStyle}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <input
                type="tel"
                style={inputStyle}
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </motion.div>
            <motion.div
              style={formGroupStyle}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <select style={selectStyle} id="course" required>
                <option value="">Choose a course...</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="MTech">MTech</option>
                <option value="BCA">BCA</option>
              </select>
            </motion.div>
            <motion.div
              style={formGroupStyle}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <select style={selectStyle} id="university" required>
                <option value="">Choose a university...</option>
                <option value="University A">University A</option>
                <option value="University B">University B</option>
                <option value="University C">University C</option>
              </select>
            </motion.div>
            <motion.div
              style={formGroupStyle}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <select style={selectStyle} id="program" required>
                <option value="">Choose a program...</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Online">Online</option>
              </select>
            </motion.div>
            <motion.button
              type="submit"
              style={submitButtonStyle}
              whileHover={{ backgroundColor: "#0056b3" }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Enroll;
