import React from "react";
import styles from "./styles/Slider.module.css";
import { useState } from "react";

export default function Slider() {
  const [index, setIndex] = useState(1);

  const clickNext = function () {
    if (index === 4) {
      setIndex(1);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const clickPrev = function () {
    if (index === 1) {
      setIndex(4);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <div className={styles.buttons}>
          <button onClick={clickPrev}>{"<"}</button>
          <button onClick={clickNext}>{">"}</button>
        </div>
        {index === 1 ? (
          <img className={styles.img} src="/images/img-2.png" />
        ) : (
          ""
        )}
        {index === 2 ? (
          <img className={styles.img} src="/images/img-3.png" />
        ) : (
          ""
        )}
        {index === 3 ? (
          <img className={styles.img} src="/images/img-4.jpg" />
        ) : (
          ""
        )}
        {index === 4 ? (
          <img className={styles.img} src="/images/img-1.png" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
