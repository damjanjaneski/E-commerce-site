import getAllProducts from "@/functions/getAllProducts";
import styles from "./[id].module.css";
import getProduct from "@/functions/getProduct";

export default function Product({
  product,
  formatNumber,
  loggedIn,
  likedProducts,
  setLikedProducts,
  cartProducts,
  setCartProducts,
  setActiveCategory,
}) {
  setActiveCategory("");

  const isInCart = Boolean(cartProducts.some((id) => id === product._id));
  const isLiked = Boolean(likedProducts.some((id) => id === product._id));

  const addToWishlist = function (id) {
    setLikedProducts([...likedProducts, id]);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${loggedIn}&request=post&target=wishlist`,
      {
        method: "PUT",
        body: JSON.stringify({
          _id: id,
          name: product.name,
          category: product.category,
          price: product.price,
          actionPrice: product.actionPrice,
          description: product.description,
          img: product.img,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const removeFromWishlist = function (id) {
    setLikedProducts(likedProducts.filter((id) => id !== product._id));
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${loggedIn}&id=${id}&request=delete&target=wishlist`,
      {
        method: "PUT",
      }
    );
  };
  const addToCart = function (id) {
    setCartProducts([...cartProducts, id]);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${loggedIn}&request=post&target=cart`,
      {
        method: "PUT",
        body: JSON.stringify({
          _id: id,
          name: product.name,
          category: product.category,
          price: product.price,
          actionPrice: product.actionPrice,
          description: product.description,
          img: product.img,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const removeFromCart = function (id) {
    setCartProducts(cartProducts.filter((id) => id !== product._id));
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users?userId=${loggedIn}&id=${id}&request=delete&target=cart`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
        }),
      }
    );
  };

  if (product)
    return (
      <div className={styles.container}>
        <div className={styles.wraper}>
          <div>
            <img src={product.img} alt="product" />
          </div>
          <div className={styles.text}>
            <h1>{product.name}</h1>
            <hr />
            <div className={styles.prices}>
              <h3>{formatNumber(product.actionPrice)}.00 MKD</h3>
              <h3 style={{ textDecoration: "line-through" }}>
                {formatNumber(product.price)}.00 MKD
              </h3>
            </div>
            <p
              style={{ borderBottom: "1px solid #333", paddingBottom: "20px" }}
            >
              {product.description[0]}
            </p>
            <ul>
              {product.description[1].map((li, x) => {
                return (
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    {product.description[1][x]}
                  </li>
                );
              })}
            </ul>
            {product.description[2] ? <p>{product.description[2]}</p> : null}
            <p>
              TummyTox has over <b>800,000</b> satisfied users all over Europe!
            </p>
            {loggedIn ? (
              isInCart ? (
                <button
                  onClick={() => removeFromCart(product._id)}
                  className={styles.removeFromCart}
                >
                  Remove from cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product._id)}
                  className={styles.addToCard}
                >
                  Add to cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </button>
              )
            ) : null}
            {loggedIn ? (
              isLiked ? (
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className={styles.removeFromCart}
                >
                  Remove from wishlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => addToWishlist(product._id)}
                  className={styles.addToCard}
                >
                  Add to wishlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </button>
              )
            ) : null}
          </div>
        </div>
      </div>
    );
  else return <div>Product not found</div>;
}

export async function getStaticPaths() {
  const products = await getAllProducts()
    .then((res) => res)
    .catch((err) => console.log(err));

  const paths = products
    .filter((product) => !!product)
    .map((product) => {
      return {
        params: {
          id: String(product._id),
        },
      };
    });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.id)
    .then((res) => {
      return {
        ...res,
        _id: String(res._id),
      };
    })
    .catch((err) => console.log(err));

  return {
    props: {
      product,
    },
  };
}
