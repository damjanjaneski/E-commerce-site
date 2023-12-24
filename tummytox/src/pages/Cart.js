import styles from "../styles/Cart.module.css";
import CartComponent from "../../components/CartComponent";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Cart({
  cartProducts,
  setCartProducts,
  loggedIn,
  setTrigger,
  trigger,
  formatNumber,
  totalAmount,
  setTotalAmount,
  setActiveCategory,
}) {
  const [cProducts, setCProducts] = useState([]);

  const router = useRouter("/CheckOut");

  setActiveCategory("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart-api?userId=${loggedIn}`)
      .then((res) => res.json())
      .then((data) => {
        setCProducts(data);
        setCartProducts(data.map((item) => item._id));
        // if (totalAmount === 0) {
        setTotalAmount(calculateInitialPrice(data));
        // }
      });
  }, [trigger, loggedIn]);

  const calculateInitialPrice = (products) => {
    return products.reduce(
      (acc, product) => acc + Number(product.actionPrice),
      0
    );
  };

  const updateTotalAmount = function (price) {
    setTotalAmount((totalAmount) => totalAmount + Number(price));
  };

  const checkOut = function () {
    router.push("/CheckOut");
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Your cart</h1>
      <div>
        {cProducts.length !== 0 ? (
          cProducts.map((product, x) => {
            return (
              <CartComponent
                formatNumber={formatNumber}
                updateTotalAmount={updateTotalAmount}
                setTrigger={setTrigger}
                loggedIn={loggedIn}
                key={x}
                item={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            );
          })
        ) : (
          <p className={styles.empty}>
            You have no products added to you cart yet!
          </p>
        )}
      </div>
      <div className={styles.amountWraper}>
        <div className={styles.payAmount}>
          <p>TOTAL:</p>

          <p>MKD {formatNumber(totalAmount)}.00</p>
        </div>
        <button onClick={checkOut}>Check out</button>
      </div>
    </div>
  );
}
