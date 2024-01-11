import styles from "./styles/Newsletter.module.css";
import { useState } from "react";

export default function Newsletter() {
  const [subscriber, setSubscriber] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });
  const [successful, setSuccessful] = useState(false);
  const formFilling = function (e) {
    const { name, value } = e.target;

    setSubscriber({ ...subscriber, [name]: value });
  };

  const validate = function () {
    const fieldsErrors = {};

    if (
      subscriber.name.replaceAll(" ", "") === "" ||
      subscriber.name.replaceAll(" ", "").length < 4
    ) {
      fieldsErrors.name = true;
    }

    if (!/\S+@\S+\.\S+/.test(subscriber.email)) {
      fieldsErrors.email = true;
    }

    setErrors(fieldsErrors);
    return Object.values(fieldsErrors).length === 0;
  };

  const subscribe = function () {
    if (validate()) {
      fetch("http://localhost:3000/api/subscribe-api", {
        method: "POST",
        body: JSON.stringify({
          name: subscriber.name,
          email: subscriber.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((r) => {
          setSubscriber({ name: "", email: "" });
          setSuccessful(true);
          console.log(r);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className={styles.newsletter}>
      <h1>Hey, Gorgeous! </h1>
      <h3>
        Join our community to <b>GET 15% OFF</b> your first order & exclusive
        offers straight to your inbox!
      </h3>
      <div className={styles.subscribtion}>
        <input
          onChange={formFilling}
          placeholder="NAME"
          name="name"
          value={subscriber.name}
          type="text"
        />
        <input
          style={{ marginBottom: "5px" }}
          onChange={formFilling}
          placeholder="E-MAIL"
          name="email"
          value={subscriber.email}
          type="email"
        />
      </div>
      {errors.name ? (
        <p className={styles.error}>Name must have at least 4 characters!</p>
      ) : (
        ""
      )}
      {errors.email ? (
        <p className={styles.error}>Invalid email format!</p>
      ) : (
        ""
      )}
      <button onClick={subscribe}>
        SUBSCRIBE
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
        </svg>
      </button>
      {successful ? (
        <p className={styles.success}>You have just subscribed succesfuly!</p>
      ) : (
        ""
      )}
    </div>
  );
}
