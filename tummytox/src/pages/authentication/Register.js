import styles from "../../styles/Register.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({ fields: false, passwords: false });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const validateFields = () => {
    const newErrors = {};
    if (
      user.username === "" ||
      user.email === "" ||
      user.password === "" ||
      user.repeatPassword === ""
    ) {
      newErrors.fields = true;
    }
    if (user.password !== user.repeatPassword) {
      newErrors.passwords = true;
    }

    setError(newErrors);

    return error.fields && error.passwords;
  };

  const register = () => {
    validateFields();

    if (
      (user.username !== "" ||
        user.email !== "" ||
        user.password !== "" ||
        user.repeatPassword !== "") &&
      user.password === user.repeatPassword
    ) {
      fetch("http://localhost:3000/api/register-api", {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          email: user.email,
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
        <p className={styles.warning}>ALL FIELDS ARE REQUIRED</p>
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
