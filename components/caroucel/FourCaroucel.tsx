"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const images = [
  "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
  "https://images.unsplash.com/photo-1658901097742-98954bfd9b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
  "https://images.unsplash.com/photo-1658901097917-f3e4f3cb5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  "https://images.unsplash.com/photo-1658901097893-cfe9605ca208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  "https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

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
  exit: (direction: any) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    };
  },
};

const FourCaroucel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 다음 버튼
  const nextButton = () => {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  // 이전 버튼
  const prevButton = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="flex">
      <div className="m-auto w-screen aspect-video relative overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="absolute top-0 left-0 flex w-full h-full object-cover object-center"
            custom={direction}
            key={images[index]}
          >
            <motion.img src={images[index]} alt="caroucel" className="w-1/3" />
            <motion.img
              src={
                index + 1 > images.length - 1 ? images[0] : images[index + 1]
              }
              alt=""
              className="w-1/3"
            />
            <motion.img
              src={
                index + 2 > images.length - 1 ? images[1] : images[index + 2]
              }
              alt=""
              className="w-1/3"
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevButton}
          className="absolute top-1/2 left-4 -translate-y-1/2 hover:text-white"
        >
          <BiChevronLeftCircle size={30} />
        </button>
        <button
          onClick={nextButton}
          className="absolute top-1/2 right-4 -translate-y-1/2 hover:text-white"
        >
          <BiChevronRightCircle size={30} />
        </button>
      </div>
    </div>
  );
};
export default FourCaroucel;
