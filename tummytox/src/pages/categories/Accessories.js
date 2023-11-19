import styles from "./Accessories.module.css";
import ProductCard from "../../../components/Card";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Accessories({ likedProducts, setLikedProducts }) {
  const router = useRouter();
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/acc-api")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);

  // const deleteCard = function (id) {
  //   fetch("http://localhost:3000/api/delete-api?collection=accessories", {
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       id: id,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setModal("none");
  // };

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
          <Grid item sm={6} md={3} lg={3}>
            <div className={styles.card}>
              <button
                onClick={() => editCard(accessory._id)}
                className={styles.edit}
              >
                Edit
              </button>
              {/* <button
                onClick={() => closeModal(accessory._id)}
                className={styles.delete}
              >
                X
              </button> */}
              <ProductCard
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
