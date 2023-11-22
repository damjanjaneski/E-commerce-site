import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Slider from "../../components/Slider";

export default function Home({ setActiveCategory }) {
  setActiveCategory("");
  return (
    <>
      <Head>
        <title>Tummy Tox | Home Page</title>
      </Head>

      <div className={styles.bestsellerContainer}>
        <Slider />
      </div>

      <h1 className={styles.title}>Check out our bestsellers for this year!</h1>

      <div className={styles.imgContainer}></div>

      <img src="/images/3in1.jpg" />
    </>
  );
}
