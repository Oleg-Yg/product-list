import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  color?: "default" | "success" | "danger";
  size?: "small" | "medium" | "Large";
  isBlock?: boolean;
  onClick: () => void;
  margin?: string;
}
