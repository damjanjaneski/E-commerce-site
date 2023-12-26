import styles from "../styles/WhishList.module.css";
import { useState, useEffect } from "react";
import LikedProduct from "../../components/LikedProduct";

export default function WhishList({
  setLikedProducts,
  likedProducts,
  loggedIn,
  trigger,
  setTrigger,
  setActiveCategory,
  cartProducts,
  setCartProducts,
}) {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  setActiveCategory("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/wishlist-api?userId=${loggedIn}`)
      .then((res) => res.json())
      .then((data) => {
        setWishlistProducts(data);
        setLikedProducts(data.map((item) => item._id));
      });
  }, [trigger, loggedIn]);

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Your wishlsit</h1>
      <div>
        {wishlistProducts.length !== 0 ? (
          wishlistProducts.map((product, x) => (
            <LikedProduct
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              setTrigger={setTrigger}
              trigger={trigger}
              loggedIn={loggedIn}
              key={x}
              setLikedProducts={setLikedProducts}
              likedProducts={likedProducts}
              item={product}
            />
          ))
        ) : (
          <div className={styles.empty}>
            You have no products added to your wishlist yet!
          </div>
        )}
      </div>
    </div>
  );
}
