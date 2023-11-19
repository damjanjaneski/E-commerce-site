import navbarStyle from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar({ loggedIn, setLoggedIn }) {
  const router = useRouter();

  const logOut = function () {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", JSON.stringify(false));
    router.push("/authentication/Login");
  };

  return (
    <>
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
    </>
  );
}
