import Head from "next/head";
import styles from "@/styles/Home.module.css";
import BestsellerCard from "../../components/Best-seller";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tummy Tox | Home Page</title>
      </Head>

      <h1>Best sellers</h1>
      <BestsellerCard />
      <div className={styles.imgContainer}></div>

      {/* <img src="/images/3in1.jpg" /> */}
    </>
  );
}
