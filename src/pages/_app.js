import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function App({ Component, pageProps }) {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [userType, setUserType] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [lastPrice, setLastPrice] = useState(0);
  const [onOff, setOnOff] = useState({
    search: false,
    dropDown: false,
    result: [],
  });

  useEffect(() => {
    if (loggedIn !== "") {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data) => {
          const user = data.find((item) => item._id === loggedIn);
          setLikedProducts(user?.wishlist || []);
          setCartProducts(user?.cart || []);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("userType"));
      setUserType(user || "");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("loggedIn"));
      setLoggedIn(value || false);
    }
  }, []);

  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <Navbar
        onOff={onOff}
        setOnOff={setOnOff}
        setCartProducts={setCartProducts}
        setLikedProducts={setLikedProducts}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        setUserType={setUserType}
        likedProducts={likedProducts}
        cartProducts={cartProducts}
      />
      <Component
        lastPrice={lastPrice}
        setLastPrice={setLastPrice}
        userType={userType}
        setUserType={setUserType}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        formatNumber={formatNumber}
        trigger={trigger}
        setTrigger={setTrigger}
        likedProducts={likedProducts}
        setLikedProducts={setLikedProducts}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        {...pageProps}
      />
      <Newsletter />
      <Footer />
    </>
  );
}
