import { useState, useEffect } from "react";
import ProductCard from "../../../components/Card";
import { Grid } from "@mui/material";
import styles from "../../styles/AllProducts.module.css";
import Pagination from "../../../components/Pagination";

export default function AllProducts({
  trigger,
  setTrigger,
  cartProducts,
  setCartProducts,
  likedProducts,
  setLikedProducts,
  setActiveCategory,
  userType,
  formatNumber,
}) {
  const [allProducts, setAllProducts] = useState([]);

  setActiveCategory("All Products");

  useEffect(() => {
    fetch("http://localhost:3000/api/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles.title}>All Products</h1>
      <Grid container>
        <div className={styles.container}>
          {userType === "admin" ? (
            <button
              onClick={() => {
                router.push("/admin/add-new");
              }}
              className={styles.addNew}
            >
              Add new
            </button>
          ) : (
            ""
          )}
          {allProducts.map((product, x) => (
            <ProductCard
              formatNumber={formatNumber}
              collection={product.category}
              trigger={trigger}
              setTrigger={setTrigger}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              setLikedProducts={setLikedProducts}
              likedProducts={likedProducts}
              key={x}
              product={product}
            />
          ))}
        </div>
      </Grid>
      <Pagination />
    </div>
  );
}
