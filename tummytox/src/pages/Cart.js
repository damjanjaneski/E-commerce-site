import styles from "../styles/Cart.module.css";
import CartComponent from "../../components/CartComponent";
import { useState, useEffect } from "react";

export default function Cart() {
  const [cartProducts, setCarProducts] = useState([]);

  fetch("http://localhost:3000/api/");

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Your cart</h1>
      <div>{}</div>
    </div>
  );
}
