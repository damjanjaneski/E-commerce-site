import styles from "../../styles/Health-And-Detox.module.css";
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
}) {
  setActiveCategory("HealthAndDetox");

  const router = useRouter();
  const [healthDetox, setHealthDetox] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/productsList?collection=healthAndDetox")
      .then((res) => res.json())
      .then((data) => {
        setHealthDetox(data);
      });
  }, [trigger]);

  return (
    <Grid container>
      <div className={styles.container}>
        <button
          onClick={() => {
            router.push("/admin/add-new");
          }}
          className={styles.addNew}
        >
          Add new
        </button>
        {healthDetox.map((item, x) => (
          <Grid key={x} item sm={6} md={3} lg={3}>
            <div className={styles.card}>
              <ProductCard
                collection={"healthDetox"}
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
  );
}
