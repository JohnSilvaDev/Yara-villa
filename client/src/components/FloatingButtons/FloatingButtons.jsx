import styles from "./FloatingButtons.module.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className={styles.container}>
      <a
        href="https://wa.me/558888057600"
        target="_blank"
        rel="noreferrer"
        className={styles.button}
      >
        <FaWhatsapp size={22} />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className={styles.button}
      >
        <FaInstagram size={22} />
      </a>
    </div>
  );
}

export default FloatingButtons;