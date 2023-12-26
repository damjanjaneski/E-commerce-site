import styles from "../components/styles/LikedProduct.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LikedProduct({
  setLikedProducts,
  item,
  loggedIn,
  setTrigger,
  setCartProducts,
  cartProducts,
}) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const removeFromWishlist = function (id) {
    fetch(
      `http://localhost:3000/api/users?userId=${loggedIn}&id=${id}&request=delete&target=wishlist`,
      {
        method: "PUT",
      }
    );

    const updatedLikedProducts = JSON.parse(
      localStorage.getItem("likedProducts")
    ).filter((product) => product !== id);

    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
    setLikedProducts(updatedLikedProducts);
    setTrigger((trigger) => !trigger);
  };

  const goTo = function (id) {
    router.push(`/products/${id}`);
  };

  const inCart = Boolean(cartProducts.some((id) => id === item._id));

  const addToCart = function (id) {
    setCartProducts([...cartProducts, id]);
    fetch(
      `http://localhost:3000/api/users?userId=${loggedIn}&request=post&target=cart`,
      {
        method: "PUT",
        body: JSON.stringify({
          _id: id,
          name: item.name,
          category: item.category,
          price: item.price,
          actionPrice: item.actionPrice,
          description: item.description,
          img: item.img,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className={styles.wraper}>
      <div>
        <img src={item.img} />
      </div>
      <div>
        <h3 className={styles.title}>{item.name}</h3>
        <h4 className={styles.price}>{item.actionPrice}.00 MKD</h4>
        <button onClick={() => goTo(item._id)} className={styles.viewBtn}>
          View product details
        </button>
      </div>

      <button
        className={styles.btn}
        onClick={() => removeFromWishlist(item._id)}
      >
        X
      </button>
      {!inCart ? (
        <button
          onClick={() => {
            addToCart(item._id);
          }}
          className={styles.addToCart}
        >
          Add to cart
          <svg
            style={{ fill: "white", background: "Inherit" }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </button>
      ) : (
        <p className={styles.added}>This product is already in your cart.</p>
      )}
    </div>
  );
}
