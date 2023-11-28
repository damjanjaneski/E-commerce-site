import ProductCard from "./Card";
import { useEffect, useState } from "react";

export default function Bestsellers({
  trigger,
  setTrigger,
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
  }, [trigger]);

  return (
    <>
      {bestsellers.map((product, x) => (
        <ProductCard
          collection={"bestsellers"}
          trigger={trigger}
          setTrigger={setTrigger}
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
