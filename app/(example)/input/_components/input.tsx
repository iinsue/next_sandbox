"use client";

import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputComponent = forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    return <input type="text" ref={ref} {...props} />;
  }
);

InputComponent.displayName = "Input";

export { InputComponent };
