import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tummy Tox | Home Page</title>
      </Head>

      <div className={styles.directions}>
        <Link href="/categories/Health-and-detox">
          <span>Health and detox</span>
        </Link>
        <Link href="/categories/Weightloss">
          <span>Weight loss</span>
        </Link>
        <Link href="/categories/Sport">
          <span>Sport</span>
        </Link>
        <Link href="/categories/Beauty">
          <span>Beauty</span>
        </Link>
        <Link href="/categories/Accessories">
          <span>Accessories</span>
        </Link>
      </div>
      <h1>Welcome!</h1>
      <div className={styles.imgContainer}></div>

      {/* <img src="/images/3in1.jpg" /> */}
    </>
  );
}
