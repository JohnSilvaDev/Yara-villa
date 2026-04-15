import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Navbar.module.css";

const LANGUAGES = [
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "de", flag: "🇩🇪", label: "DE" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    if (lng !== lang) {
      i18n.changeLanguage(lng);
      navigate(`/${lng}`);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          Yara <span>Villa</span>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#hero">{t("home")}</a></li>
          <li><a href="#about">{t("about")}</a></li>
          <li><a href="#rooms">{t("villa")}</a></li>
          <li><a href="#gallery">{t("gallery")}</a></li>
          <li><a href="#booking" className={styles.cta}>{t("booking")}</a></li>
        </ul>

        {/* 🌍 Language Switcher */}
        <div className={styles.langSwitcher}>
          {LANGUAGES.map(({ code, flag, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className={`${styles.langBtn} ${lang === code ? styles.activeLang : ""}`}
              title={label}
              aria-label={`Switch to ${label}`}
            >
              <span className={styles.langFlag}>{flag}</span>
              <span className={styles.langCode}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;