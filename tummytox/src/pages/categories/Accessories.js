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
  formatNumber,
  userType,
}) {
  const router = useRouter();
  const [accessories, setAccessories] = useState([]);

  setActiveCategory("Accessories");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=accessories`)
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
      });
  }, [trigger]);

  return (
    <>
      <h1 className={styles.title}>Accessories</h1>
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
            <Grid key={x} item>
              <div className={styles.card}>
                <ProductCard
                  formatNumber={formatNumber}
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
    </>
  );
}
