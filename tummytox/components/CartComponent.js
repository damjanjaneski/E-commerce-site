import styles from "./styles/CartComponent.module.css";
import { useState } from "react";

export default function CartComponent({ item }) {
  const [qty, setQty] = useState(1);

  const increase = function () {
    setQty((prev) => prev + 1);
  };

  const decrease = function () {
    qty > 1 ? setQty((prev) => prev - 1) : "";
  };

  const remove = function (id) {
    fetch(`http://localhost:3000/api/cart-api?request=delete`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={styles.wraper}>
      <img src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png" />
      <div className={styles.rightDiv}>
        <h2 className={styles.title}>{item.name}</h2>
        <div>
          <h3>Qty:</h3>
          <div className={styles.changeQty}>
            <button className={styles.down} onClick={decrease}>
              {" "}
              -
            </button>
            <div>{qty}</div>
            <button className={styles.up} onClick={increase}>
              +
            </button>
          </div>
        </div>
      </div>
      <p className={styles.price}>100.00 MKD</p>
      <button className={styles.remove} onClick={() => remove(item._id)}>
        {" "}
        X{" "}
      </button>
    </div>
  );
}
