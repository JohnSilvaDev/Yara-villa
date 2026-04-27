import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    id: 1,
    name: "Bruno",
    tenure: "9 anos no Airbnb",
    date: "janeiro de 2026",
    stay: "Ficou uma noite",
    text: "Nossa hospedagem foi maravilhosa! Para aqueles que gostam de algo diferente e contato direto com a natureza. Local paradisíaco!!!",
    avatar: "/user1.avif"
  },
  {
    id: 2,
    name: "Marcelle",
    tenure: "11 anos no Airbnb",
    date: "julho de 2025",
    stay: "Ficou uma noite",
    text: "Loved staying at Yara Floating Villa! Staff very welcoming and proactive. Very peaceful, even although we are in the middle of the ocean, you don't have the movements of the sea. We stayed at the best place for kitesurfers. I'll come back for sure to Yara. Thanks everyone!!",
    avatar: "/user2.avif"
  },
  {
    id: 3,
    name: "Julian",
    tenure: "12 anos no Airbnb",
    date: "3 semanas atrás",
    stay: "Ficou algumas noites",
    text: "Si de verdad quieres tener una experiencia inmersiva, desconectar y sentirte como en una isla desierta, este es tu lugar.\nGracias por un recuerdo único!",
    avatar: "/user3.avif"
  },
  {
    id: 4,
    name: "Rosa",
    tenure: "6 anos no Airbnb",
    date: "julho de 2025",
    stay: "Ficou uma noite",
    text: "We had a very unique stay on the floating vila in Guriu! The vila is placed between beautiful surroundings. Everyday we could view the sunset beautifully. It was a peaceful place but with lots to do. The spot is perfect if you are into kitesurf. You can launch your kite from the vila. If you are not kiting you can enjoy the beautiful surroundings. The staff was very helpful & made us delicious breakfasts. We had a boat driver at our service 24/7. So anytime we wanted to get on the main land, it was possible. I recommend visiting this place, it is one of the most unique stays I've been to so far :) Thankyou for everything Rodrigo!",
    avatar: "/user4.avif"
  }
];

function Testimonials() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <h2 className={styles.title}>O que estão falando de nós</h2>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.userHeader}>
                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{review.name}</h4>
                  <p className={styles.userTenure}>{review.tenure}</p>
                </div>
              </div>

              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={styles.starIcon} />
                  ))}
                </div>
                <span className={styles.dateInfo}>
                  {review.date} • {review.stay}
                </span>
              </div>

              <p className={styles.text}>{review.text}</p>

              <button className={styles.showMore}>Mostrar mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
