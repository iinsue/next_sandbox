"use client";

import OneCaroucel from "@/components/caroucel/OneCaroucel";
import ThreeCaroucel from "@/components/caroucel/ThreeCaroucel";

const CaroucelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <OneCaroucel />
      <ThreeCaroucel />
    </div>
  );
};

export default CaroucelPage;
