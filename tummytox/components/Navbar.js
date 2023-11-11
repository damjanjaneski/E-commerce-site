import navbarStyle from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
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
        <div className={navbarStyle.subDiv}>
          <Link href="/authentication/Login" className={navbarStyle.link}>
            <span>Log In</span>
          </Link>
          <Link href="/authentication/Register" className={navbarStyle.link}>
            <span>Register</span>
          </Link>
        </div>
      </div>
    </>
  );
}
