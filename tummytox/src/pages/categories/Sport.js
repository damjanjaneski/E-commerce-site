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
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=sport`
    )
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
          ))}
        </div>
      </Grid>
    </>
  );
}
