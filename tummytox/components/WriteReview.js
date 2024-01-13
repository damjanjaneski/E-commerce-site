import styles from "./styles/WriteReview.module.css";
import { useState } from "react";

export default function WriteReview({
  loggedIn,
  setTrigger,
  allReviews,
  setAllReviews,
}) {
  const [review, setReview] = useState({ product: "", text: "", rating: "1" });
  const [error, setError] = useState(false);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const validate = function () {
    if (review.product === "" || review.text === "") {
      setError(true);
      return false;
    } else {
      return true;
    }
  };
  const share = function () {
    if (validate()) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reviews-api?product=${review.product}&text=${review.text}&rating=${review.rating}&userId=${loggedIn}`,
        {
          method: "POST",
        }
      )
        .then(() => {
          setAllReviews([...allReviews, review]);
          setReview({ product: "", text: "", rating: "1" });
        })
        .then(() => setTrigger((trigger) => !trigger));
      setError(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Share your experience</h1>
      <div className={styles.wraper}>
        <div className={styles.product}>
          <label>Product name:</label>
          <input
            onChange={handleChange}
            value={review.product}
            placeholder="Product"
            type="text"
            name="product"
          />
        </div>
        <div className={styles.reviewDiv}>
          <label>Review:</label>
          <textarea
            onChange={handleChange}
            value={review.text}
            name="text"
            maxLength={340}
            cols={55}
            rows={4}
            placeholder="Type in your review..."
          />
        </div>
        <div className={styles.score}>
          <label>Overall rating:</label>
          <select name="rating" onChange={handleChange} value={review.rating}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
      <p
        className={styles.errorMessage}
        style={error ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        All fields are required!
      </p>
      <button onClick={share}>Share Review</button>
    </div>
  );
}
