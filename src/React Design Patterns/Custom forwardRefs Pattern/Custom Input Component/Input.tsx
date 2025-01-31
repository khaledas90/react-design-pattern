import React, { ForwardedRef, forwardRef } from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CustomInput = forwardRef(
  (props: Omit<InputProps, "ref">, ref: ForwardedRef<HTMLInputElement>) => {
    
    return <input ref={ref} {...props} />;
  }
);

export default CustomInput;
