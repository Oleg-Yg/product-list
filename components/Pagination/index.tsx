import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "@/components/Button";
import { PaginationProps } from "@/components/Pagination/types";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const Pagination: React.FC<PaginationProps> = ({ count, href }) => {
  const { query, push } = useRouter();

  const [currentButton, setCurrentButton] = useState<number>(1);
  const [value, setValue] = useState("1");

  useEffect(() => {
    push(`${href}${value}`);
  }, [value]);

  useEffect(() => {
    setValue(`${currentButton}`);
    push(`${href}${currentButton}`);
  }, [currentButton]);

  const onClickPrev = () => {
    if (currentButton === 1) return;
    setCurrentButton(currentButton - 1);
  };

  const onClickNext = () => {
    if (currentButton === count) return;
    setCurrentButton(currentButton + 1);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value > count) {
      setValue(`${count}`);
    } else if (event.target.value < 1) {
      setValue(`1`);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button onClick={onClickPrev}>Prev</Button>
      <input
        className={styles.input}
        type={"number"}
        value={value}
        onChange={onChange}
      />
      <Button onClick={onClickNext}>Next</Button>
    </div>
  );
};

export default Pagination;
