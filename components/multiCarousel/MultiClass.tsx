"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import useWindow from "@/hook/useWindow";

const offset = 5;

// 이미지 더미 데이터
const images = [
  {
    id: 1,
    imgPath:
      "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    imgPath:
      "https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    imgPath:
      "https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
  },
  {
    id: 4,
    imgPath:
      "https://images.unsplash.com/photo-1658901097742-98954bfd9b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
  },
  {
    id: 5,
    imgPath:
      "https://images.unsplash.com/photo-1658901097917-f3e4f3cb5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  },
  {
    id: 6,
    imgPath:
      "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  },
  {
    id: 7,
    imgPath:
      "https://images.unsplash.com/photo-1658901097893-cfe9605ca208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  },
  {
    id: 8,
    imgPath:
      "https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 9,
    imgPath:
      "https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    imgPath:
      "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    imgPath:
      "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 12,
    imgPath:
      "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 13,
    imgPath:
      "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const variants = {
  initial: (props: any) => {
    return {
      x: props.direction > 0 ? props.width : -props.width,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opcaity: { duration: 0.2 },
    },
  },
  exit: (props: any) => {
    return {
      x: props.direction > 0 ? -props.width : props.width,
      opcaity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const MultiClass = () => {
  const width = useWindow();
  const widthRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const increaseIndex = () => {
    setDirection(1);
    if (leaving) return;
    toggleLeaving();

    const totalImages = images.length - 1;
    const maxIndex = Math.floor(totalImages / offset) - 1;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const decreaseIndex = () => {
    setDirection(-1);
    if (leaving) return;
    toggleLeaving();

    const totalImages = images.length - 1;
    const maxIndex = Math.floor(totalImages / offset) - 1;
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-[1000px] h-[250px] bg-slate-400 overflow-x-hidden">
      <div onClick={increaseIndex} className="bg-slate-400">
        Right
      </div>
      <div onClick={decreaseIndex} className="bg-slate-400">
        Left
      </div>
      <div className="relative w-full">
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            custom={{ direction, width }}
            key={index}
            className="grid grid-cols-5 w-full gap-[5px] absolute"
            ref={widthRef}
          >
            {images
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((image) => (
                <motion.div
                  initial="normal"
                  className="bg-cover h-[200px] first:origin-top-left last:origin-top-right"
                  style={{
                    backgroundImage: `url(${image.imgPath})`,
                    backgroundPosition: "center center",
                  }}
                  key={image.id}
                  layoutId={image.id + ""}
                ></motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiClass;
