import { useTranslation } from "react-i18next";
import { FaWifi, FaCoffee, FaSwimmer, FaSun, FaWind, FaUserTie, FaShip, FaSpa } from "react-icons/fa";
import styles from "./Amenities.module.css";

function Amenities() {
  const { t } = useTranslation();

  const amenitiesData = [
    { icon: <FaWifi />, titleKey: "amenity1_title", descKey: "amenity1_desc" },
    { icon: <FaSun />, titleKey: "amenity2_title", descKey: "amenity2_desc" },
    { icon: <FaCoffee />, titleKey: "amenity3_title", descKey: "amenity3_desc" },
    { icon: <FaShip />, titleKey: "amenity4_title", descKey: "amenity4_desc" },
    { icon: <FaWind />, titleKey: "amenity5_title", descKey: "amenity5_desc" },
    { icon: <FaUserTie />, titleKey: "amenity6_title", descKey: "amenity6_desc" },
    { icon: <FaSpa />, titleKey: "amenity7_title", descKey: "amenity7_desc" },
    { icon: <FaSwimmer />, titleKey: "amenity8_title", descKey: "amenity8_desc" }
  ];

  return (
    <section 
      className={styles.section}
      style={{ backgroundImage: "url('/gallery2.jpg')" }}
    >
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("amenities_title")}</h2>
          <p className={styles.subtitle}>{t("amenities_subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {amenitiesData.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.itemTitle}>{t(item.titleKey)}</h3>
              <p className={styles.itemDesc}>{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
