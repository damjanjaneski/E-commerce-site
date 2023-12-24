import styles from "../../styles/Sport.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Sport({
  trigger,
  setTrigger,
  likedProducts,
  setLikedProducts,
  setActiveCategory,
  cartProducts,
  setCartProducts,
  formatNumber,
  userType,
}) {
  setActiveCategory("Sport");

  const router = useRouter();
  const [sport, setSport] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/productsList?collection=sport")
      .then((res) => res.json())
      .then((data) => {
        setSport(data);
      });
  }, [trigger]);

  return (
    <>
      <h1 className={styles.title}>Sport</h1>
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
          {sport.map((item, x) => (
            <Grid key={x} item sm={6} md={3} lg={3}>
              <div className={styles.card}>
                <ProductCard
                  formatNumber={formatNumber}
                  collection={"sport"}
                  trigger={trigger}
                  setTrigger={setTrigger}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  setLikedProducts={setLikedProducts}
                  likedProducts={likedProducts}
                  key={x}
                  product={item}
                />
              </div>
            </Grid>
          ))}
        </div>
      </Grid>
    </>
  );
}
