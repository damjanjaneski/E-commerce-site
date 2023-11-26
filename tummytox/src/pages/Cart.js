import styles from "../styles/Cart.module.css";
import CartComponent from "../../components/CartComponent";
import { useState, useEffect } from "react";

export default function Cart({ cartProducts, setCartProducts }) {
  const [cProducts, setCarProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cart-products")
      .then((res) => res.json())
      .then((data) => setCarProducts(data));
  }, [cartProducts]);

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Your cart</h1>
      <div>
        {cProducts.length !== 0 ? (
          cProducts.map((product, x) => (
            <CartComponent
              key={x}
              item={product}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          ))
        ) : (
          <p className={styles.empty}>
            You have no products added to you cart yet!
          </p>
        )}
      </div>
    </div>
  );
}
