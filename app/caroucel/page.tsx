"use client";

import OneCaroucel from "@/components/caroucel/OneCaroucel";
import ThreeCaroucel from "@/components/caroucel/ThreeCaroucel";
import TwoCaroucel from "@/components/caroucel/TwoCaroucel";

const CaroucelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/*  <OneCaroucel /> */}
      <TwoCaroucel />
      {/* <ThreeCaroucel /> */}
    </div>
  );
};

export default CaroucelPage;
