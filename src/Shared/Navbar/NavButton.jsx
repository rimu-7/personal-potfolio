import React from "react";
import { motion } from "framer-motion";

const NavButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="focus:outline-none sm:hidden"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Line */}
        <motion.path
          d="M4 6h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ y: 0, opacity: 1 }}
          animate={isOpen ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        {/* Middle Line */}
        <motion.path
          d="M4 12h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 1 }}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        {/* Bottom Line */}
        <motion.path
          d="M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ y: 0, opacity: 1 }}
          animate={isOpen ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
};

export default NavButton;