import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import styles from "./styles/Card.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductCard({
  trigger,
  setTrigger,
  product,
  likedProducts,
  setLikedProducts,
  cartProducts,
  setCartProducts,
  formatNumber,
}) {
  const [modal, setModal] = useState("none");
  const [userMessage, setUserMessage] = useState("none");
  const router = useRouter();

  const showModal = function () {
    setModal("block");
  };

  const reject = function () {
    setModal("none");
  };

  useEffect(() => {}, [modal]);

  const deleteCard = async function (id) {
    await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/api/delete-api?collection=${product.category
        .toLowerCase()
        .replaceAll(" ", "")}&request=delete`,
      {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => setTrigger(!trigger));

    setModal("none");
  };

  const editCard = function (id) {
    router.push(`/admin/${id}?category=${product.category}`);
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
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${userId}&id=${id}&request=delete&target=wishlist`,
        {
          method: "PUT",
        }
      );
    } else {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${userId}&request=post&target=wishlist`,
        {
          method: "PUT",
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
        }
      );
    }
  };

  const addToBag = function (id) {
    const added = cartProducts.some((p) => p === id);

    if (added) {
      const updatedCartProducts = cartProducts.filter((p) => p !== id);
      setCartProducts(updatedCartProducts);
    } else {
      const updatedCartProducts = [...cartProducts, id];
      setCartProducts(updatedCartProducts);
    }

    if (added) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${userId}&request=delete&target=cart`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: id,
          }),
        }
      );
    } else {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${userId}&request=post&target=cart`,
        {
          method: "PUT",
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
        }
      );
    }
  };

  const warning = function () {
    setUserMessage("block");
  };

  const goToProduct = function (id) {
    router.push(`/products/${id}`);
  };

  const userType = JSON.parse(localStorage.getItem("userType"));
  const isLiked = likedProducts.some((p) => p === product._id);
  const added = cartProducts.some((p) => p === product._id);
  const userId = JSON.parse(localStorage.getItem("loggedIn"));

  return (
    <div style={{ width: " 375px", position: "relative" }}>
      {userType === "admin" ? (
        <button onClick={() => editCard(product._id)} className={styles.edit}>
          Edit
        </button>
      ) : (
        ""
      )}

      {userType === "admin" ? (
        <button
          onClick={() => showModal(product._id)}
          className={styles.delete}
        >
          X
        </button>
      ) : (
        ""
      )}

      <Card
        sx={{
          width: 320,
          height: 511,
          maxWidth: "100%",
          boxShadow: "lg",
          border: "2px solid white",
          marginBottom: "55px",
          fontFamily: "neueHass, Arial, Helvetica, Verdana, serif",
        }}
      >
        <CardOverflow>
          <img
            className={styles.img}
            src={product.img}
            loading="lazy"
            alt="tummytox-product"
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
              <span className={styles.oldPrice}>
                {formatNumber(product.price)}.00 MKD
              </span>
            }
          >
            {formatNumber(product.actionPrice)}.00 MKD
          </Typography>
        </CardContent>
        {userId ? (
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
        ) : (
          <>
            <div className={styles.likeAndBuy}>
              <button onClick={warning}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </button>
              <button onClick={warning}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </button>
            </div>
            <div
              className={styles.errorMessage}
              style={{ display: userMessage }}
            >
              You must be logged in to buy products or add them to your
              wishlist!
            </div>
          </>
        )}
        <CardOverflow>
          <button
            className={styles.addToCart}
            onClick={() => goToProduct(product._id)}
          >
            View details
          </button>
        </CardOverflow>
      </Card>
      <div style={{ display: modal }} className={styles.modal}>
        <div className={styles.window}>
          <h2>
            Are you sure you want to delete the product with name:{" "}
            {product.name}?
          </h2>
          <button
            style={{ background: "darkgreen" }}
            onClick={() => {
              deleteCard(product._id);
            }}
          >
            Yes
          </button>
          <button style={{ background: "darkred" }} onClick={reject}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
