import styles from "./styles/WriteReview.module.css";
import { useState } from "react";

export default function WriteReview() {
  const [review, setReview] = useState({ product: "", text: "", rating: "1" });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const share = function () {
    console.log(review);
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
            maxLength={400}
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
      <button onClick={share}>Share Review</button>
    </div>
  );
}
