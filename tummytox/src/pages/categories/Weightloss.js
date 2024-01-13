import styles from "../../styles/Weightloss.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Weightloss({
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
  const [weightLoss, setWeightLoss] = useState([]);

  setActiveCategory("Weightloss");

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/productsList?collection=weightloss`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeightLoss(data);
      });
  }, [trigger]);

  return (
    <>
      <h1 className={styles.title}>Weight Loss</h1>
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
          {weightLoss.map((item, x) => (
            <div className={styles.card}>
              <ProductCard
                formatNumber={formatNumber}
                collection={"weightLoss"}
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
