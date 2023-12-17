import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Slider from "../../components/Slider";
import Bestsellers from "../../components/Bestsellers";
import Adventages from "../../components/Adventages";
import ReviewsSection from "../../components/ReviewsSection";
import WriteReview from "../../components/WriteReview";
import { useState } from "react";

export default function Home({
  trigger,
  setTrigger,
  setActiveCategory,
  likedProducts,
  setLikedProducts,
  cartProducts,
  setCartProducts,
  loggedIn,
  formatNumber,
}) {
  setActiveCategory("");

  const [allReviews, setAllReviews] = useState([]);

  return (
    <>
      <Head>
        <title>Tummy Tox | Home Page</title>
      </Head>

      <div className={styles.bestsellerContainer}>
        <Slider />
      </div>

      <h1 className={styles.title}>Check out our bestsellers for this year!</h1>
      <div className={styles.bsContainer}>
        <Bestsellers
          formatNumber={formatNumber}
          trigger={trigger}
          setTrigger={setTrigger}
          className={styles.gridItem}
          likedProducts={likedProducts}
          setLikedProducts={setLikedProducts}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </div>
      <div className={styles.imgContainer}></div>

      <img src="/images/3in1.jpg" />
      <ReviewsSection
        allReviews={allReviews}
        setAllReviews={setAllReviews}
        trigger={trigger}
      />
      {loggedIn ? (
        <WriteReview
          loggedIn={loggedIn}
          allReviews={allReviews}
          setAllReviews={setAllReviews}
          setTrigger={setTrigger}
        />
      ) : null}
      <Adventages />
    </>
  );
}
