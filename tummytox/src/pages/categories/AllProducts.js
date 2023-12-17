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
  const [activePage, setActivePage] = useState(1);

  setActiveCategory("All Products");

  useEffect(() => {
    fetch("http://localhost:3000/api/allProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const onPageChange = (num) => {
    setActivePage(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let newArray = [
    allProducts.slice(0, 6),
    allProducts.slice(6, 12),
    allProducts.slice(12, 18),
    allProducts.slice(18, 24),
    allProducts.slice(24, 30),
    allProducts.slice(30, allProducts.length),
  ];

  console.log(newArray);
  console.log(allProducts.length);

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
          {newArray[activePage - 1].map((product, x) => (
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
      <Pagination activePage={activePage} onPageChange={onPageChange} />
      <div className={styles.productsShown}>
        {activePage === 1 ? <p>1-6 of 31 products</p> : undefined}
        {activePage === 2 ? <p>7-12 of 31 products</p> : undefined}
        {activePage === 3 ? <p>13-18 of 31 products</p> : undefined}
        {activePage === 4 ? <p>19-24 of 31 products</p> : undefined}
        {activePage === 5 ? <p>25-30 of 31 products</p> : undefined}
        {activePage === 6 ? <p>31 of 31 products</p> : undefined}
      </div>
    </div>
  );
}
