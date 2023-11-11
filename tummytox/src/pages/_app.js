"use client";

import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Component setLoggedIn={setLoggedIn} {...pageProps} />
    </>
  );
}
