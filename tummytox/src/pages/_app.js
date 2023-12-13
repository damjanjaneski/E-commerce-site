import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function App({ Component, pageProps }) {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const liked = JSON.parse(localStorage.getItem("likedProducts"));
      setLikedProducts(liked || []);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = JSON.parse(localStorage.getItem("loggedIn"));
      setLoggedIn(value || false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
      setCartProducts(cart);
    }
  }, []);

  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Navbar
        setCartProducts={setCartProducts}
        setLikedProducts={setLikedProducts}
        activeCategory={activeCategory}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
      />
      <Component
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
