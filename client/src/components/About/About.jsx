import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img src="/gallery10.jpg" alt="Villa Exterior" className={styles.image} />
              <div className={styles.badge}>{t("about_badge")}</div>
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <h5 className={styles.tagline}>{t("about_tagline")}</h5>
            <h2 className={styles.title}>{t("about_title")}</h2>
            
            <p className={styles.text}>
              {t("about_text1")}
            </p>
            
            <p className={styles.text}>
              {t("about_text2")}
            </p>

            <ul className={styles.list}>
              <li>{t("about_list1")}</li>
              <li>{t("about_list2")}</li>
              <li>{t("about_list3")}</li>
              <li>{t("about_list4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;