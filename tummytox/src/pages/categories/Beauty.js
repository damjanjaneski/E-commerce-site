import styles from "../../styles/Beauty.module.css";
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
  formatNumber,
  userType,
}) {
  const router = useRouter();
  const [beauty, setBeauty] = useState([]);

  setActiveCategory("Beauty");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=beauty`)
      .then((res) => res.json())
      .then((data) => {
        setBeauty(data);
      });
  }, [trigger]);

  return (
    <>
      <h1 className={styles.title}>Beauty</h1>
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
          {beauty.map((item, x) => (
            <div className={styles.card}>
              <ProductCard
                formatNumber={formatNumber}
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
