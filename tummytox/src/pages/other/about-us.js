import { width } from "@mui/system";
import styles from "../../styles/about-us.module.css";

export default function AboutUs({ setActiveCategory }) {
  setActiveCategory("");

  return (
    <>
      <h1 className={styles.title}>About Us</h1>
      <img
        width={"100%"}
        src=" https://www.sensi2live.com/media/wysiwyg/UK_about-us_HL_1920x610_2.webp"
      />
      <div style={{ textAlign: "center" }}>
        <h2 className={styles.subTitle}>
          Unleash your inner goddess with TummyTox – the brand made by and for
          amazing women like you!
        </h2>
        <p className={styles.regular}>
          TummyTox is more than just a brand; it's empowering sisterhood where
          self-love, a healthy lifestyle and goal achievement reign supreme.
        </p>
        <p className={styles.regular}>
          If you’re struggling at the moment and looking for a change, you came
          to the right place!
        </p>
      </div>
      <div className={styles.imgDesc}>
        <div>
          <p className={styles.regular}>
            At TummyTox, we prioritize three core values that make us unique:
          </p>
          <ul>
            <li>
              Self-Love & Self-Care: Nourishing your body, mind, and soul. We
              believe in the power of self-care as an act of self-love.
            </li>
            <li>
              A unique approach to offering solutions: Recognizing every woman's
              uniqueness, our supplements are designed to address specific
              concerns, helping you achieve your goals and optimize your
              well-being in a personalized way.
            </li>
            <li>
              Science meets nature: With our products, you get the best of both
              worlds - the advantage of the latest scientific discoveries and
              the benefits of natural ingredients.
            </li>
          </ul>
        </div>
        <img src="https://www.sensi2live.com/media/wysiwyg/about-us-top-picture_1131x555.webp" />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 className={styles.title}>
          Ready for a transformative change? Welcome to TummyTox, where healthy
          lifestyle choices happen, one empowering step at a time.
        </h2>
      </div>
      <div className={styles.imgDescTwo}>
        <img src="https://www.sensi2live.com/media/wysiwyg/about-us-bottom-picture_1131x555.webp" />
        <div>
          <p className={styles.regular}>
            Join over 800K women already transforming their lives with
            TummyTox's range of top-notch weight-loss, health, and detox
            essentials, as well as our exclusive beauty line.{" "}
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{ backgroundColor: "white", paddingTop: "20px" }}
          className={styles.regular}
        >
          Discover your inner beauty and embrace the empowering TummyTox
          lifestyle today!
        </p>
        <img
          style={{ backgroundColor: "white" }}
          src="https://www.sensi2live.com/media/wysiwyg/Tummytox-handwriting_248x156.webp"
        />
      </div>
    </>
  );
}
