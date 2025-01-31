import React from "react";

interface FancyButtonProps {
  children: React.ReactNode;
}

export const FancyButton = React.forwardRef(
  (
    props: Omit<FancyButtonProps, "ref">,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button ref={ref} className="fancy-button">
        {props.children}
      </button>
    );
  }
);
