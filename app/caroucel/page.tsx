"use client";

import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const PHOTO_WIDTH = 192;

const variants = {
  entry: (screen: any) => ({
    x: screen ? -PHOTO_WIDTH : PHOTO_WIDTH,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (screen: any) => ({
    x: screen ? PHOTO_WIDTH : -PHOTO_WIDTH,
    opcaity: 0,
    transition: { duration: 0.5 },
  }),
};

const CaroucelPage = () => {
  const [screen, setScreen] = useState(1);
  const [visible, setVisible] = useState(false);

  const nextButton = () => {
    setVisible(false);
    setScreen((prev) => (prev > 1 ? 0 : prev + 1));
  };

  const prevButton = () => {
    setVisible(true);
    setScreen((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div className="w-48 h-32 overflow-hidden ">
        <AnimatePresence custom={visible}>
          <motion.div
            className="flex justify-center"
            custom={visible}
            key={images[screen].id}
            variants={variants}
            initial="entry"
            animate="center"
            exit="exit"
          >
            <div className="absolute">
              <Image
                alt="Img"
                src={images[screen].url}
                width={192}
                height={228}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          onClick={prevButton}
          className="absolute flex cursor-pointer left-1 bg-slate-500 w-fit hover:text-white"
        >
          <BiChevronLeftCircle size={30} />
        </div>
        <div
          onClick={nextButton}
          className="absolute flex cursor-pointer right-1 bg-slate-500 w-fit hover:text-white"
        >
          <BiChevronRightCircle size={30} />
        </div>
      </div>
    </div>
  );
};

export default CaroucelPage;
