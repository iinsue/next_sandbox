"use client";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: (direction: any) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
};

const NoAnimateOne = () => {
  return (
    <AnimatePresence>
      <motion.div>
        <div>Caroucel</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NoAnimateOne;
