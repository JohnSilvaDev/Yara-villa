import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          {/* LOGO + ABOUT */}
          <div className={styles.col}>
            <h3 className={styles.logo}>Yara <span>Villa</span></h3>
            <p className={styles.about}>
              {t("footer_about")}
            </p>

            <div className={styles.socials}>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://wa.me/558888057600"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_links")}</h4>
            <ul className={styles.links}>
              <li><a href="#hero">{t("home")}</a></li>
              <li><a href="#about">{t("about")}</a></li>
              <li><a href="#rooms">{t("villa")}</a></li>
              <li><a href="#booking">{t("booking")}</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("footer_contact")}</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt /> {t("booking_location")}
              </li>

              <li>
                <FaPhone />
                <a href="tel:+558888057600">+55 88 8805-7600</a>
              </li>

              <li>
                <FaEnvelope />
                <a href="mailto:yarakitesurfing@gmail.com">
                  yarakitesurfing@gmail.com
                </a>
              </li>

              <li>
                {t("footer_airport")}
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p>© 2026 Yara Floating Villa. {t("footer_rights")}</p>
          <p className={styles.developer}>
            made by <a href="https://www.linkedin.com/in/john-silva-394953249/?locale=pt" target="_blank" rel="noopener noreferrer">@JohnSilvaDev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;