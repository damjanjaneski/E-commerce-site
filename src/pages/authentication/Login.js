import styles from "../../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import bcrypt from "bcryptjs";

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
  const { data: session } = useSession();

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
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`)
        .then((res) => res.json())
        .then(async (data) => {
          const compareArr = await Promise.all(
            data.map(async (u) => {
              if (user.password && u.password) {
                const result = await bcrypt.compare(user.password, u.password);
                return result && user.username === u.username;
              } else {
                return false;
              }
            })
          );

          const index = compareArr.indexOf(true);
          const loggedIn = index !== -1 ? data[index] : undefined;

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
            localStorage.setItem("loggedIn", JSON.stringify(loggedIn._id));
            localStorage.setItem("userType", JSON.stringify(loggedIn.type));
            router.push("/");
            console.log("SUCCESSFUL LOG IN");
          }
        });
    }
  };

  const logInWithGoogle = async () => {
    try {
      await signIn("google");
      if (session) {
        const users = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users`
        ).then((res) => res.json());
        const existingUser = users.find((u) => u.email === session.user.email);

        if (!existingUser) {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register-api`, {
            method: "POST",
            body: JSON.stringify({
              email: session.user.email,
              name: session.user.name.split(" ")[0],
              fullName: session.user.name,
              type: "user",
            }),

            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log("Successful registration!");
        }
        const updatedUsers = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users`
        ).then((res) => res.json());
        const loggedIn = updatedUsers.find(
          (u) => u.email === session.user.email
        );
        setLoggedIn(loggedIn._id);
        setLikedProducts(loggedIn.wishlist.map((item) => item._id));
        setUserType(loggedIn.type);
        setCartProducts(loggedIn.cart.map((item) => item._id));
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn._id));
        localStorage.setItem("userType", JSON.stringify(loggedIn.type));
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
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
      <button onClick={() => logInWithGoogle()} className={styles.googleBtn}>
        Log in with Google
      </button>
    </div>
  );
}
