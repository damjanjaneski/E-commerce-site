import styles from "../styles/WhishList.module.css";
import { useState, useEffect } from "react";
import LikedProduct from "../../components/LikedProduct";

export default function WhishList() {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/WL-products")
      .then((res) => res.json())
      .then((data) => setWishlistProducts(data));
  }, []);

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Your wishlsit</h1>
      <div>
        {wishlistProducts.map((product) => (
          <LikedProduct item={product} />
        ))}
      </div>
    </div>
  );
}
