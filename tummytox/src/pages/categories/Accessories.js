import styles from "./Accessories.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Accessories({
  likedProducts,
  setLikedProducts,
  activeCategory,
  setActiveCategory,
  cartProducts,
  setCartProducts,
}) {
  const router = useRouter();
  const [accessories, setAccessories] = useState([]);

  setActiveCategory("Accessories");

  useEffect(() => {
    fetch("http://localhost:3000/api/acc-api")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);

  const editCard = function (id) {
    router.push(`/admin/${id}`);
  };

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
        {accessories.map((accessory, x) => (
          <Grid key={x} item sm={6} md={3} lg={3}>
            <div className={styles.card}>
              <button
                onClick={() => editCard(accessory._id)}
                className={styles.edit}
              >
                Edit
              </button>

              <ProductCard
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
