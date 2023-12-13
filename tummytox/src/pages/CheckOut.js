import styles from "../styles/CheckOut.module.css";
import { useState } from "react";

export default function CheckOut({ totalAmount, formatNumber }) {
  const [paymentInfo, setPaymentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    method: "With card",
    cardHolder: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    ccv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = function (e) {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const validateFields = function () {
    const newErrors = {};
    const values = Object.values(paymentInfo).map((value) => Boolean(value));

    if (values.includes(false)) {
      newErrors.fields = true;
    }
    if (!/\S+@\S+\.\S+/.test(paymentInfo.email)) {
      newErrors.email = true;
    }
    if (paymentInfo.cardNumber.length !== 16) {
      newErrors.cardNumber = true;
    }
    if (paymentInfo.expMonth.length !== 2) {
      newErrors.expMonth = true;
    }
    if (paymentInfo.expYear.length !== 4) {
      newErrors.expYear = true;
    }
    if (paymentInfo.ccv.length !== 3) {
      newErrors.expYear = true;
    }

    setErrors(newErrors);

    return Object.values(newErrors).includes(true);
  };

  const placeOrder = function () {
    if (!validateFields()) {
      console.log("Order palaced successfuly");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.wraper}>
            <div className={styles.column}>
              <h2>Customer information</h2>
              <div className={styles.format}>
                <div className={styles.pair}>
                  <label>FIRST NAME:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={paymentInfo.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.pair}>
                  <label>LAST NAME:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={paymentInfo.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.pair}>
                  <label>E-MAIL:</label>
                  <input
                    type="text"
                    name="email"
                    value={paymentInfo.email}
                    placeholder="email@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <h2>Shipping details</h2>
              <div className={styles.format}>
                <div className={styles.pair}>
                  <label>FULL NAME:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={paymentInfo.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.pair}>
                  <label>ADDRESS:</label>
                  <input
                    type="text"
                    name="address"
                    value={paymentInfo.address}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.pair}>
                  <label>CITY:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="city"
                    value={paymentInfo.city}
                  />
                </div>
                <div className={styles.pair}>
                  <label>POSTAL CODE:</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={paymentInfo.postalCode}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.pair}>
                  <label>PAYING METHOD:</label>
                  <select
                    type="text"
                    name="method"
                    value={paymentInfo.method}
                    className={styles.select}
                    onChange={handleChange}
                  >
                    <option value="With card">With card</option>
                    <option value="Paying at delivery">
                      Paying at delivery
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <h2>Payment information</h2>
              <div className={styles.format}>
                <div
                  className={`${styles.pair} ${
                    paymentInfo.method === "Paying at delivery"
                      ? styles.disabled
                      : ""
                  }`}
                >
                  <label>CARD HOLDER:</label>
                  <input
                    disabled={paymentInfo.method === "Paying at delivery"}
                    type="text"
                    name="cardHolder"
                    value={paymentInfo.cardHolder}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`${styles.pair} ${
                    paymentInfo.method === "Paying at delivery"
                      ? styles.disabled
                      : ""
                  }`}
                >
                  <label>CARD NUMBER:</label>
                  <input
                    disabled={paymentInfo.method === "Paying at delivery"}
                    type="text"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    placeholder="ex. 1234 5678 1234 5678"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`${styles.pair} ${
                    paymentInfo.method === "Paying at delivery"
                      ? styles.disabled
                      : ""
                  }`}
                >
                  <label>EXPIRY MONTH:</label>
                  <input
                    disabled={paymentInfo.method === "Paying at delivery"}
                    type="text"
                    name="expMonth"
                    value={paymentInfo.expMonth}
                    placeholder="MM"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`${styles.pair} ${
                    paymentInfo.method === "Paying at delivery"
                      ? styles.disabled
                      : ""
                  }`}
                >
                  <label>EXPIRY YEAR:</label>
                  <input
                    disabled={paymentInfo.method === "Paying at delivery"}
                    type="text"
                    name="expYear"
                    value={paymentInfo.expYear}
                    placeholder="YYYY"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`${styles.pair} ${
                    paymentInfo.method === "Paying at delivery"
                      ? styles.disabled
                      : ""
                  }`}
                >
                  <label>CCV:</label>
                  <input
                    disabled={paymentInfo.method === "Paying at delivery"}
                    type="text"
                    name="ccv"
                    value={paymentInfo.ccv}
                    placeholder="_ _ _"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.total}>
            <p>Total Bill:</p>
            <p>MKD {formatNumber(totalAmount)}.00</p>
          </div>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      </div>
      {errors.fields ? <p>All fields are required!</p> : ""}
      {errors.email ? <p>Wrong e-mail format!</p> : ""}
      {errors.cardNumber ? <p>Card Number must contain 16 digits!</p> : ""}
      {errors.expMonth ? <p>Expiry Month must contain 2 digits!</p> : ""}
      {errors.expYear ? <p>Expiry Year must contain 4 digits!</p> : ""}
      {errors.ccv ? <p>CCV must contain 3 digits!</p> : ""}
    </>
  );
}
