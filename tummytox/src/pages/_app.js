import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [likedProducts, setLikedProducts] = useState(false);
  const [loggedIn, setLoggedIn] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const liked = JSON.parse(localStorage.getItem("likedProducts"));
      setLikedProducts(liked || []);
    }
  }, []);

  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Component
        likedProducts={likedProducts}
        setLikedProducts={setLikedProducts}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        {...pageProps}
      />
    </>
  );
}
