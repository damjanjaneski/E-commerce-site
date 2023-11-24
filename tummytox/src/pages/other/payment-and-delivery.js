import styles from "../../styles/payment-and-delivery.module.css";

export default function DeliveryAndShipping() {
  return (
    <div className={styles.wraper}>
      <h1 style={{ fontWeight: "300", color: "#333" }}>PAYMENT AND DELIVERY</h1>

      <h2 className={styles.title}>Paying for products</h2>
      <p>You can pay for products with:</p>
      <ul>
        <li>Credit card (Eurocard/Mastercard, Visa, etc.)</li>
        <li>PayPal</li>
        <li>Apple Pay</li>
      </ul>
      <h2 className={styles.title}>Delivery of products</h2>
      <p>
        The products are delivered by <b>Kargo</b>.
      </p>
      <p>
        If you are not at home at the time of delivery, the courier will leave a
        note informing you where/when you can collect your parcel or arrange a
        re-delivery. Parcels are not delivered on weekends or holidays.
      </p>
      <h2 className={styles.title}>Delivery cost</h2>

      <ul>
        <li>
          For orders below €100.00 delivery costs <b>€5.00</b>
        </li>
        <li>
          For orders of <b>€100.00 or above</b>, delivery is <b>free</b>
        </li>
      </ul>
      <p>The cost of delivery is the same for all over the country.</p>
    </div>
  );
}
