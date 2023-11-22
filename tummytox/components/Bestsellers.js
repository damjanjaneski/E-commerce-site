import ProductCard from "./Card";
import { useEffect, useState } from "react";

export default function Bestsellers({
  likedProducts,
  setLikedProducts,
  cartProducts,
  setCartProducts,
}) {
  const [bestsellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/bestsellers")
      .then((res) => res.json())
      .then((data) => setBestSellers(data));
  }, []);

  return (
    <>
      {bestsellers.map((product, x) => (
        <ProductCard
          type={"bs"}
          product={product}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          setLikedProducts={setLikedProducts}
          likedProducts={likedProducts}
          key={x}
        />
      ))}
    </>
  );
}
