import styles from "./contact-us.module.css";

export default function ContactUs() {
  return (
    <div className={styles.wraper}>
      <h1 style={{ color: "#333" }}>CONTACT US</h1>
      <h2 className={styles.title}>We are here for you!</h2>
      <p>
        If you need any advice, help or extra information, just click on the
        chat icon below and our friendly chatbot will give you the answers
        you're looking for quickly and efficiently!
      </p>

      <h2 className={styles.title}>HEADQUARTERS in SLovenia</h2>
      <h3 className={styles.titleTwo}>Sensilab d.o.o.</h3>
      <p>Vision Healthcare group</p>
      <p>Verovškova ulica 55a, Ljubljana, Slovenija</p>
      <p>Tax Code: XXXXXXXX</p>
      <p>VAT ID: XXXXXXXXXX</p>

      <h2 className={styles.title}>Contact for Macedonia</h2>
      <h3 className={styles.titleTwo}>JI Health Group d.o.o.</h3>
      <p>Janeski-Isirov Health Group</p>
      <p>Street Jurij Gagarin 27a, Skopje, Macedonia</p>
      <p>Tax Code: XXXXXXXXX</p>
      <p>VAT ID: XXXXXXXXXX</p>
    </div>
  );
}
