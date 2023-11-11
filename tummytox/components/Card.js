import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
  const [modal, setModal] = useState("none");

  const showModal = function () {
    setModal("block");
  };

  const reject = function () {
    setModal("none");
  };

  useEffect(() => {}, [modal]);

  const deleteCard = function (id) {
    fetch("http://localhost:3000/api/delete-api?collection=accessories", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setModal("none");
  };
  return (
    <div sx={{ width: " 425px", position: "relative" }}>
      <button onClick={() => showModal(product._id)} className={styles.delete}>
        X
      </button>
      <Card
        sx={{
          width: 320,
          maxWidth: "100%",
          boxShadow: "lg",
          border: "2px solid white",
        }}
      >
        <CardOverflow>
          <img
            src={product.img}
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardOverflow>
        <CardContent sx={{ background: "white" }}>
          <Typography sx={{ background: "white" }} level="body-xs">
            {product.category}
          </Typography>
          <Link fontWeight="md" color="neutral">
            {product.name}
          </Link>

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl", background: "white" }}
            endDecorator={
              <p className={styles.oldPrice}>{product.price}.00 Mkd</p>
            }
          >
            {product.actionPrice}.00 Mkd
          </Typography>
        </CardContent>
        <CardOverflow>
          <button className={styles.addToCart}>Add to cart</button>
        </CardOverflow>
      </Card>
      <div style={{ display: modal }} className={styles.modal}>
        <h2>
          Are you sure you want to delete the product with name:
          {product.name}
        </h2>
        <button
          onClick={() => {
            deleteCard(product._id);
          }}
        >
          YES
        </button>
        <button onClick={reject}>no</button>
      </div>
    </div>
  );
}
