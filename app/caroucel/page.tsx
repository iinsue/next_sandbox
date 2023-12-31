"use client";

import FourCaroucel from "@/components/caroucel/FourCaroucel";
import OneCaroucel from "@/components/caroucel/OneCaroucel";
import ThreeCaroucel from "@/components/caroucel/ThreeCaroucel";
import TwoCaroucel from "@/components/caroucel/TwoCaroucel";
import MasterClass from "@/components/multiCarousel/MasterClass";
import MultiClass from "@/components/multiCarousel/MultiClass";

const CaroucelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/*  <OneCaroucel /> */}
      {/* <TwoCaroucel /> */}
      {/* <ThreeCaroucel /> */}
      {/* <FourCaroucel /> */}
      {/* <MasterClass /> */}
      <MultiClass />
    </div>
  );
};

export default CaroucelPage;
