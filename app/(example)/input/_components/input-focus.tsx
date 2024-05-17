"use client";

import { useRef } from "react";
import { InputComponent } from "./input";

export const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current === null) return;
    inputRef.current.focus();
  };

  return (
    <>
      <InputComponent ref={inputRef} />
      <button onClick={handleFocus}>포커스</button>
    </>
  );
};
