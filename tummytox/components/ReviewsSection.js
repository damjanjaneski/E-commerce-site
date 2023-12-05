import Review from "./Review";
import styles from "./styles/ReviewsSection.module.css";
import { useState, useEffect } from "react";

export default function ReviewsSection() {
  const [allReviews, setAllReviews] = useState([]);

  useState(() => {
    fetch(`http://localhost:3000/api/reviews-api`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Comments And Reviews</h1>
      <div className={styles.wraper}>
        {allReviews.map((review, x) => (
          <div className={styles.review}>
            <Review
              key={x}
              name={review.name}
              imgSrc={review.img}
              product={review.product}
              rating={review.rating}
              text={review.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
