"use client";

import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// 이미지 더미 데이터
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

// 캐러셀 이동시 움직이는 너비 상수
const PHOTO_WIDTH = 400;

// 캐러셀 애니메이션 설정
const variants = {
  entry: (screen: any) => ({
    x: screen ? -PHOTO_WIDTH : PHOTO_WIDTH,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
  exit: (screen: any) => ({
    x: screen ? PHOTO_WIDTH : -PHOTO_WIDTH,
    opcaity: 0,
    transition: { duration: 0.3 },
  }),
};

// 메인 함수
const OneCaroucel = () => {
  //이미지 번호
  const [screen, setScreen] = useState(1);

  // 다음 버튼
  const nextButton = () => {
    setScreen((prev) => (prev > 1 ? 0 : prev + 1));
  };

  console.log(screen);
  // 이전 버튼
  const prevButton = () => {
    setScreen((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex items-center justify-center w-96 h-auto">
      <div className="h-64 w-96 overflow-hidden ">
        <AnimatePresence>
          <motion.div
            className=" flex justify-center"
            key={images[screen].id}
            variants={variants}
            initial="entry"
            animate="center"
            exit="exit"
          >
            <div className="h-64 w-96 relative">
              <Image
                src={images[screen].url}
                alt="Picture of the author"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
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
  );
};

export default OneCaroucel;
