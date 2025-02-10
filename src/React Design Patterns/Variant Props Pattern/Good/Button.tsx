import { useState } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  title: string;
}

export default function Button({ variant = "primary", title }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  const variantStyles: Record<
    string,
    { backgroundColor: string; color: string }
  > = {
    primary: isHovered
      ? { backgroundColor: "#000", color: "#fff" }
      : { backgroundColor: "blue", color: "white" },
    secondary: isHovered
      ? { backgroundColor: "#000", color: "#fff" }
      : { backgroundColor: "#fff", color: "#000" },
    danger: isHovered
      ? { backgroundColor: "#fff", color: "#f00" }
      : { backgroundColor: "#f00", color: "#fff" },
    warning: isHovered
      ? { backgroundColor: "#000", color: "#fff" }
      : { backgroundColor: "yellow", color: "#000" },
    success: isHovered
      ? { backgroundColor: "#fff", color: "#000" }
      : { backgroundColor: "green", color: "#fff" },
  };

  return (
    <button
      style={{ ...baseStyle, ...variantStyles[variant] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  );
}
