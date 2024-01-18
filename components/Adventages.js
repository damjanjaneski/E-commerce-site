import styles from "./styles/Adventages.module.css";

export default function Adventages() {
  return (
    <div className={styles.container}>
      <h1>Why you'll love us</h1>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <img src="/images/cruelty_free_icon.webp" />
          <h3>Cruelty-Free</h3>
        </div>
        <div className={styles.icon}>
          <img src="/images/vegan_icon.webp" />
          <h3>Vegan</h3>
        </div>
        <div className={styles.icon}>
          <img src="/images/Scientifically_tested_icon.webp" />
          <h3>Scientifically Tested</h3>
        </div>
        <div className={styles.icon}>
          <img src="/images/gmo_free_icon.webp" />
          <h3>GMO-Free</h3>
        </div>
      </div>
    </div>
  );
}
