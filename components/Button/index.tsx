import React from "react";
import styles from "./styles.module.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "default",
  size = "medium",
  isBlock = false,
  margin,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        background:
          color === "default"
            ? "#5271ef"
            : color === "success"
            ? "green"
            : color === "danger"
            ? "red"
            : "none",
        fontSize:
          size === "medium"
            ? "16px"
            : size === "Large"
            ? "20px"
            : size === "small"
            ? "12px"
            : "16px",
        margin: margin,
        display: isBlock === true ? "block" : "flex",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
