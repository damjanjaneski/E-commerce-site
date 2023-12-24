import styles from "../../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login({
  setLoggedIn,
  setLikedProducts,
  setCartProducts,
  setUserType,
  setActiveCategory,
}) {
  const router = useRouter();

  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    message: false,
  });

  setActiveCategory("");

  const handleChange = function (e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = function () {
    const newErrors = {};

    if (user.username === "") {
      newErrors.username = true;
    }
    if (user.password === "") {
      newErrors.password = true;
    }

    setErrors(newErrors);

    return Object.values(newErrors).length === 0;
  };

  const login = function () {
    if (validate()) {
      fetch("http://localhost:3000/api/users")
        .then((res) => res.json())
        .then((data) => {
          const loggedIn = data.find(
            (u) => u.username === user.username && u.password === user.password
          );

          if (
            loggedIn === undefined &&
            (user.username !== "") & (user.password !== "")
          ) {
            setErrors({ username: false, password: false, message: true });
          } else if (loggedIn !== undefined) {
            setErrors({ username: false, password: false, message: false });
            setLoggedIn(loggedIn._id);
            setLikedProducts(loggedIn.wishlist.map((item) => item._id));
            setUserType(loggedIn.type);
            setCartProducts(loggedIn.cart.map((item) => item._id));
            localStorage.setItem(
              "likedProducts",
              JSON.stringify(loggedIn.wishlist.map((item) => item._id))
            );
            localStorage.setItem(
              "cartProducts",
              JSON.stringify(loggedIn.cart.map((item) => item._id))
            );
            localStorage.setItem("loggedIn", JSON.stringify(loggedIn._id));
            localStorage.setItem("userType", JSON.stringify(loggedIn.type));
            router.push("/");
            console.log("SUCCESSFUL LOG IN");
          }
        });
    }
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Please log in</h1>
      <input
        className={styles.input}
        label="Username"
        value={user.username}
        name="username"
        onChange={handleChange}
        placeholder="Enter username"
      />
      {errors.username ? (
        <p className={styles.warning}>USERNAME IS REQUIRED</p>
      ) : (
        ""
      )}
      <input
        className={styles.input}
        type="password"
        placeholder="Enter password"
        label="Password"
        value={user.password}
        name="password"
        onChange={handleChange}
      />
      {errors.password ? (
        <p className={styles.warning}> PASSWORD IS REQUIRED </p>
      ) : (
        ""
      )}
      {errors.message ? (
        <p className={styles.warning}>CREDENTIALS INVALID! PLEASE TRY AGAIN!</p>
      ) : (
        ""
      )}

      <button className={styles.btn} onClick={login}>
        Log in
      </button>
    </div>
  );
}
