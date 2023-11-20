import navbarStyle from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ loggedIn, setLoggedIn, activeCategory }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const logOut = function () {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify(false));
    router.push("/authentication/Login");
  };

  useEffect(() => {}, [activeCategory]);

  const paragraphs = [
    "100% premium quiality",
    "Free delivery for orders over €100",
    "Delivery 1-3 business days",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.slide}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className={navbarStyle.nav}>
        <div className={navbarStyle.subDiv}>
          <span>Experiences</span>
          <span>Blog</span>
        </div>
        <div>
          <img src="https://aptekibruno.mk/wp-content/uploads/2023/08/0x0-1.png" />
        </div>
        {loggedIn ? (
          <div className={navbarStyle.subDiv}>
            <button onClick={logOut} className={navbarStyle.btn}>
              <span>Log Out</span>
            </button>
          </div>
        ) : (
          <div className={navbarStyle.subDiv}>
            <Link href="/authentication/Login" className={navbarStyle.link}>
              <span>Log In</span>
            </Link>
            <Link href="/authentication/Register" className={navbarStyle.link}>
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.directions}>
        <Link href="/categories/Health-and-detox">
          <span>Health and detox</span>
        </Link>
        <Link href="/categories/Weightloss">
          <span>Weight loss</span>
        </Link>
        <Link href="/categories/Sport">
          <span>Sport</span>
        </Link>
        <Link href="/categories/Beauty">
          <span>Beauty</span>
        </Link>
        <Link href="/categories/Accessories">
          <span
            style={{
              backgroundColor:
                activeCategory === "Accessories" ? "rgb(44, 95, 189)" : "",
            }}
          >
            Accessories
          </span>
        </Link>
      </div>
    </>
  );
}
