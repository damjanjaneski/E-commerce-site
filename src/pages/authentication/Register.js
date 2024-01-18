import styles from "../../styles/Register.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const validateFields = () => {
    const newErrors = {};
    if (
      user.username.replaceAll(" ", "").length < 4 ||
      user.fullName.replaceAll(" ", "").length < 5 ||
      user.password.length < 3 ||
      user.repeatPassword.length < 3
    ) {
      newErrors.fields = true;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = true;
    }
    if (user.password !== user.repeatPassword) {
      newErrors.passwords = true;
    }

    setError(newErrors);

    return Object.values(newErrors).length === 0;
  };

  const register = () => {
    if (validateFields() && user.password === user.repeatPassword) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register-api`, {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          fullName: user.fullName,
          password: user.password,
          type: "user",
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Successful registration!");
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Register now!</h1>
      <input
        className={styles.input}
        value={user.username}
        name="username"
        onChange={handleChange}
        placeholder="Enter username"
      />
      <input
        className={styles.input}
        value={user.email}
        name="email"
        onChange={handleChange}
        placeholder="E-mail"
      />

      <input
        className={styles.input}
        value={user.fullName}
        name="fullName"
        onChange={handleChange}
        placeholder="Full Name"
      />

      <input
        className={styles.input}
        value={user.password}
        name="password"
        onChange={handleChange}
        placeholder="Enter password"
        type="password"
      />
      <input
        className={styles.input}
        value={user.repeatPassword}
        name="repeatPassword"
        onChange={handleChange}
        placeholder="Repeat password"
        type="password"
      />

      {error.fields ? (
        <p style={{ textAlign: "center" }} className={styles.warning}>
          Username must have at least 4 characters <br />
          Full Name must contain both first and last name <br /> Password must
          have at least 4 characters!
        </p>
      ) : (
        ""
      )}
      {error.email ? (
        <p className={styles.warning}>Wrong e-mail format!</p>
      ) : (
        ""
      )}
      {error.passwords ? (
        <p className={styles.warning}>Different passwords, please try again!</p>
      ) : (
        ""
      )}
      <button className={styles.btn} onClick={register}>
        Register
      </button>
    </div>
  );
}
