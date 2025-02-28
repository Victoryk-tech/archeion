"use client";
import { motion } from "framer-motion";

const StarLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="gold"
        className="drop-shadow-lg"
      >
        <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
      </motion.svg>
    </div>
  );
};

export default StarLoader;
