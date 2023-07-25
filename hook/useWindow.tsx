"use client";

import { useState, useEffect } from "react";

function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
}

// 창 크기가 변경되면 다시 갱신하도록 하는 함수
function useWindow() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowSize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);
  return windowSize;
}

export default useWindow;
