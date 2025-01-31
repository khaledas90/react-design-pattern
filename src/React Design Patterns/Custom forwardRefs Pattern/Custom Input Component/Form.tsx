import React, { useRef, useState } from "react";
import CustomInput from "./Input";

export default function FormRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(inputRef.current?.value);
  };

  const handleReset = () => {
    inputRef.current?.focus();
    setInputValue("");
  };
  return (
    <>
      <div className="Form">
        <form action="" onSubmit={handleSubmit}>
          <CustomInput
            ref={inputRef}
            placeholder="Enter your name"
            value={inputValue}
            onChange={() => setInputValue(inputRef.current?.value || "")}
          />

          <button type="submit" className="">
            Submit
          </button>
          <button type="reset" onClick={handleReset} className="">
            reset
          </button>
        </form>
      </div>
    </>
  );
}
