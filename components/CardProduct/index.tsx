import React from "react";
import { CardProductProps } from "@/components/CardProduct/types";
import styles from "@/components/CardProduct/styles.module.scss";

const CardProduct: React.FC<CardProductProps> = ({
  id,
  title,
  src,
  brand,
  badge,
}) => {
  return (
    <div className={styles.cardProduct}>
      <img className={styles.img} src={src} />
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <span className={styles.title}>{title}</span>
          <span className={styles.badge}>{badge}</span>
        </div>
        <span className={styles.brand}>{brand}</span>
      </div>
    </div>
  );
};

export default CardProduct;
