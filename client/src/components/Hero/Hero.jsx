import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      className={styles.hero} 
      id="hero" 
      style={{ backgroundImage: "url('/gemini.JPG')" }}
    >
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} fade-in`}>
          {t("hero_title")}
        </h1>
        <p className={`${styles.subtitle} fade-in`}>
          {t("hero_subtitle")}
        </p>
        
        <div className={styles.ctaWrapper}>
          <a href="#about" className="btn-primary">{t("hero_cta")}</a>
          <a 
            href={`https://wa.me/558888057600?text=${encodeURIComponent(t("hero_whatsapp_msg"))}`}
            target="_blank" 
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            {t("hero_whatsapp")}
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>{t("hero_scroll")}</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}

export default Hero;