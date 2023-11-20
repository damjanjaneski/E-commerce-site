import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tummy Tox | Home Page</title>
      </Head>

      <h1>Welcome!</h1>
      <div className={styles.imgContainer}></div>

      {/* <img src="/images/3in1.jpg" /> */}
    </>
  );
}
