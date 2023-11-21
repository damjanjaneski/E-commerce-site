import React from "react";
import styles from "./Best-seller.module.css";
import { useState } from "react";

export default function BestsellerCard() {
  const [index, setIndex] = useState(1);

  const clickNext = function () {
    setIndex((prev) => (prev + 1) % 5);
    console.log(index);
  };

  const clickPrev = function () {};

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={clickPrev}>{"<"}</button>
        <button onClick={clickNext}>{">"}</button>
      </div>
      <div className={styles.wraper}>
        {index === 1 ? (
          <img className={styles.img} src="/images/img-1.png" />
        ) : (
          ""
        )}
        {index === 2 ? (
          <img className={styles.img} src="/images/img-2.png" />
        ) : (
          ""
        )}
        {index === 3 ? (
          <img className={styles.img} src="/images/img-3.png" />
        ) : (
          ""
        )}
        {index === 4 ? (
          <img className={styles.img} src="/images/img-4.png" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
