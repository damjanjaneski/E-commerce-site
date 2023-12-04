import styles from "../../styles/Accessories.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Accessories({
  trigger,
  setTrigger,
  likedProducts,
  setLikedProducts,
  setActiveCategory,
  cartProducts,
  setCartProducts,
}) {
  const router = useRouter();
  const [accessories, setAccessories] = useState([]);

  setActiveCategory("Accessories");

  useEffect(() => {
    fetch("http://localhost:3000/api/productsList?collection=accessories")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
      });
  }, [trigger]);

  const userType = JSON.parse(localStorage.getItem("userType"));

  return (
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
        {accessories.map((accessory, x) => (
          <Grid key={x} item sm={6} md={3} lg={3}>
            <div className={styles.card}>
              <ProductCard
                collection={"accessories"}
                trigger={trigger}
                setTrigger={setTrigger}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                setLikedProducts={setLikedProducts}
                likedProducts={likedProducts}
                key={x}
                product={accessory}
              />
            </div>
          </Grid>
        ))}
      </div>
    </Grid>
  );
}
