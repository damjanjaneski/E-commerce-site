import Review from "./Review";
import styles from "./styles/ReviewsSection.module.css";
import { useState, useEffect } from "react";

export default function ReviewsSection({
  allReviews,
  setAllReviews,
  trigger,
  userType,
  setTrigger,
}) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reviews-api`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [trigger]);

  const previous = function () {
    if (slideIndex !== 0) {
      setSlideIndex((slideIndex) => slideIndex - 1);
    }
  };

  const next = function () {
    if (slideIndex !== allReviews.length - 3) {
      setSlideIndex((slideIndex) => slideIndex + 1);
    }
  };

  const shownReviews = allReviews.slice(slideIndex, slideIndex + 3);

  return (
    <div className={styles.container}>
      <h3>Comments And Reviews</h3>
      <div className={styles.wraper}>
        {shownReviews.map((review, x) => (
          <Review
            setSlideIndex={setSlideIndex}
            key={x}
            review={review}
            userType={userType}
            setTrigger={setTrigger}
          />
        ))}
      </div>
      <div className={styles.slide}>
        <button onClick={previous}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>

        <button onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
