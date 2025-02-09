import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface BadModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
export default function GoodModal({
  isOpen,
  handleClose,
  children,
}: BadModalProps) {
  const mainRoot = document.getElementById("root") as HTMLElement;
  const ElementRoot = document.createElement("div") as HTMLElement;

  useEffect(() => {
    if (mainRoot) {
      mainRoot.appendChild(ElementRoot);
    }

    return () => {
      if (mainRoot) {
        mainRoot.removeChild(ElementRoot);
      }
    };
  }, [mainRoot, ElementRoot]);

  if (isOpen === false) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "aqua",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{children}</div>
      <div>
        <button onClick={handleClose}>close modal</button>
      </div>
    </div>,
    ElementRoot
  );
}
