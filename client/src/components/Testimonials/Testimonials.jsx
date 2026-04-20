import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: "Bruno",
      tenureKey: "testimonials_verified",
      dateKey: "review1_date",
      stayKey: "testimonials_stayed_one",
      textKey: "review1_text",
      avatar: "/user1.jpg"
    },
    {
      id: 2,
      name: "Marcelle",
      tenureKey: "testimonials_traveler",
      dateKey: "review2_date",
      stayKey: "testimonials_stayed_one",
      textKey: "review2_text",
      avatar: "/user2.jpg"
    },
    {
      id: 3,
      name: "Julian",
      tenureKey: "testimonials_verified",
      dateKey: "review3_date",
      stayKey: "testimonials_stayed_few",
      textKey: "review3_text",
      avatar: "/user3.jpg"
    },
    {
      id: 4,
      name: "Rosa",
      tenureKey: "testimonials_traveler",
      dateKey: "review4_date",
      stayKey: "testimonials_stayed_one",
      textKey: "review4_text",
      avatar: "/user4.jpg"
    }
  ];

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <h2 className={styles.title}>{t("testimonials_title")}</h2>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.userHeader}>
                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{review.name}</h4>
                  <p className={styles.userTenure}>{t(review.tenureKey)}</p>
                </div>
              </div>

              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={styles.starIcon} />
                  ))}
                </div>
                <span className={styles.dateInfo}>
                  {t(review.dateKey)} • {t(review.stayKey)}
                </span>
              </div>

              <p className={styles.text}>{t(review.textKey)}</p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
