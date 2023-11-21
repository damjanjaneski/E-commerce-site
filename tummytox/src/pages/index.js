import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Bestsellers from "../../components/Bestsellers";

export default function Home({ section }) {
  return (
    <>
      <Head>
        <title>Tummy Tox | Home Page</title>
      </Head>

      <h1>Best sellers</h1>
      <div className={styles.bestsellerContainer}>
        <Bestsellers />
        <div className={styles.imgContainer}></div>
      </div>

      <div ref={section}>aaaaaaaaaa</div>

      {/* <img src="/images/3in1.jpg" /> */}
    </>
  );
}
