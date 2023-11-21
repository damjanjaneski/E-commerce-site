import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";

export default function ProductCard({
  product,
  likedProducts,
  setLikedProducts,
  cartProducts,
  setCartProducts,
}) {
  const [modal, setModal] = useState("none");

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

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

  const addToWishList = function (id) {
    const isLiked = likedProducts.some((p) => p === id);

    if (isLiked) {
      const updatedLikedProducts = likedProducts.filter((p) => p !== id);
      setLikedProducts(updatedLikedProducts);
    } else {
      const updatedLikedProducts = [...likedProducts, id];
      setLikedProducts(updatedLikedProducts);
    }

    if (isLiked) {
      fetch(`http://localhost:3000/api/wishlist-api?id=${id}&request=delete`, {
        method: "DELETE",
      });
    } else {
      fetch(`http://localhost:3000/api/wishlist-api?id=${id}&request=post`, {
        method: "POST",
        body: JSON.stringify({
          _id: id,
          name: product.name,
          category: product.category,
          price: product.price,
          actionPrice: product.actionPrice,
          description: product.description,
          img: product.img,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  const addToBag = function (id) {
    console.log(123);
    const added = cartProducts.some((p) => p === id);

    if (added) {
      const updatedCartProducts = cartProducts.filter((p) => p !== id);
      setCartProducts(updatedCartProducts);
    } else {
      const updatedCartProducts = [...cartProducts, id];
      setCartProducts(updatedCartProducts);
    }

    if (added) {
      fetch(`http://localhost:3000/api/cart-api?id=${id}&request=delete`, {
        method: "DELETE",
      });
    } else {
      fetch(`http://localhost:3000/api/cart-api?id=${id}&request=post`, {
        method: "POST",
        body: JSON.stringify({
          _id: id,
          name: product.name,
          category: product.category,
          price: product.price,
          actionPrice: product.actionPrice,
          description: product.description,
          img: product.img,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  const isLiked = likedProducts.some((p) => p === product._id);
  const added = cartProducts.some((p) => p === product._id);

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
        <div className={styles.likeAndBuy}>
          <button onClick={() => addToWishList(product._id)}>
            <svg
              className={isLiked ? styles.liked : ""}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </button>
          <button onClick={() => addToBag(product._id)}>
            <svg
              className={added ? styles.liked : ""}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </button>
        </div>
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
