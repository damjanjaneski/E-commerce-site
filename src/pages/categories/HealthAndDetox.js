import styles from "../../styles/Healthanddetox.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HealthAndDetox({
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
  const router = useRouter();
  const [healthDetox, setHealthDetox] = useState([]);

  useEffect(() => {
    setActiveCategory("HealthAndDetox");
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=healthanddetox`
    )
      .then((res) => res.json())
      .then((data) => {
        setHealthDetox(data);
      });
  }, [trigger]);

  return (
    <>
      <h1 className={styles.title}>Health And Detox</h1>
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
          {healthDetox.map((item, x) => (
            <div className={styles.card} key={x}>
              <ProductCard
                formatNumber={formatNumber}
                trigger={trigger}
                setTrigger={setTrigger}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                setLikedProducts={setLikedProducts}
                likedProducts={likedProducts}
                product={item}
              />
            </div>
          ))}
        </div>
      </Grid>
    </>
  );
}
