"use client";

const images = [
  {
    id: 1,
    url: "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  },
  {
    id: 2,
    url: "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  },
  {
    id: 3,
    url: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1688516711628-ec935f149f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 6,
    url: "https://plus.unsplash.com/premium_photo-1682390303366-7463dcbec281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

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

const ThreeCaroucel = () => {
  //이미지 번호
  const [screen, setScreen] = useState(1);

  // 다음 버튼
  const nextButton = () => {
    setScreen((prev) => (prev > 1 ? 0 : prev + 1));
  };

  // 이전 버튼
  const prevButton = () => {
    setScreen((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-96">
      <div className="h-64 overflow-hidden w-96 ">
        <AnimatePresence>
          <motion.div
            className="flex justify-center "
            key={images[screen].id}
            variants={variants}
            initial="entry"
            animate="center"
            exit="exit"
          >
            <div className="relative h-64 w-96">
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

export default ThreeCaroucel;
