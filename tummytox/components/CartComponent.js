import styles from "./styles/CartComponent.module.css";
import { useState } from "react";

export default function CartComponent({
  item,
  setCartProducts,
  loggedIn,
  setTrigger,
}) {
  const [qty, setQty] = useState(1);

  const increase = function () {
    setQty((prev) => prev + 1);
  };

  const decrease = function () {
    qty > 1 ? setQty((prev) => prev - 1) : "";
  };

  const remove = function (id) {
    fetch(
      `http://localhost:3000/api/users?userId=${loggedIn}&target=cart&request=delete`,
      {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    const updatedCartProducts = JSON.parse(
      localStorage.getItem("cartProducts")
    ).filter((p) => p !== id);

    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

    setCartProducts(updatedCartProducts);
    setTrigger((trigger) => !trigger);
  };

  return (
    <div className={styles.wraper}>
      <img src={item.img} />
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
      <p className={styles.price}>{item.actionPrice}.00 MKD</p>
      <button className={styles.remove} onClick={() => remove(item._id)}>
        {" "}
        X{" "}
      </button>
    </div>
  );
}
