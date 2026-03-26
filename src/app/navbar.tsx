"use client";

import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-shell">
      <nav>
        <Image src="/logo.png" alt="logo" width={50} height={32.9} />
        <ul>
          <li>What We Do</li>
          <li>Services</li>
          <li>News</li>
          <li>Connect</li>
          <li>About</li>
        </ul>
      </nav>
      <section className="dark-light">
        <Image
          src="/darkmode.png"
          width={102}
          height={32}
          alt="Dark mode toggle"
          className="darkmode"
        />
      </section>
    </header>
  );
}
