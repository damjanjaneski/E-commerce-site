import styles from "../../styles/Accessories.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Beauty({
  trigger,
  setTrigger,
  likedProducts,
  setLikedProducts,
  setActiveCategory,
  cartProducts,
  setCartProducts,
}) {
  const router = useRouter();
  const [beauty, setBeauty] = useState([]);

  setActiveCategory("Beauty");

  useEffect(() => {
    fetch("http://localhost:3000/api/productsList?collection=beauty")
      .then((res) => res.json())
      .then((data) => {
        setBeauty(data);
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
        {beauty.map((item, x) => (
          <Grid key={x} item sm={6} md={3} lg={3}>
            <div className={styles.card}>
              <ProductCard
                collection={"beauty"}
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
