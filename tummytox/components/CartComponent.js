import styles from "./styles/CartComponent.module.css";

export default function CartComponent({ item }) {
  return (
    <div className={styles.wraper}>
      <img src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png" />
      <div className={styles.rightDiv}>
        <h2 className={styles.title}>{item.name}</h2>
        <div>
          <h3>Qty:</h3>
          <div className={styles.changeQty}>
            <button className={styles.down}> -</button>
            <div>5</div>
            <button className={styles.up}>+</button>
          </div>
        </div>
      </div>
      <p className={styles.price}>100evra</p>
    </div>
  );
}
