import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          Yara <span>Villa</span>
        </div>
        
        <ul className={styles.navLinks}>
          <li><a href="#hero">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#rooms">A Vila</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#booking" className={styles.cta}>Reservar</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
