import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>Agency.</a>

      {/* Hamburger */}
      <div
        className={`${styles.menuBtn} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`${styles.links} ${open ? styles.show : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
        <li><a href="#work" onClick={() => setOpen(false)}>Work</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}
