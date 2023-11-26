import styles from "../styles/WhishList.module.css";
import { useState, useEffect } from "react";
import LikedProduct from "../../components/LikedProduct";

export default function WhishList({ setLikedProducts, likedProducts }) {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/WL-products")
      .then((res) => res.json())
      .then((data) => setWishlistProducts(data));
  }, [likedProducts]);

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Your wishlsit</h1>
      <div>
        {wishlistProducts.length !== 0 ? (
          wishlistProducts.map((product) => (
            <LikedProduct
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
