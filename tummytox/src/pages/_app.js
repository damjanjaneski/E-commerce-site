import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

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

  return (
    <>
      <Navbar
        activeCategory={activeCategory}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
      />
      <Component
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
    </>
  );
}
