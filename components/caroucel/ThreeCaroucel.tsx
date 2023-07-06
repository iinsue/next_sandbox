"use client";

import { motion, AnimatePresence } from "framer-motion";

const variants = {};

const ThreeCaroucel = () => {
  return (
    <div className="bg-slate-500 w-96 h-64">
      <div>ThreeCaroucel</div>
      <AnimatePresence>
        <motion.div></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ThreeCaroucel;
