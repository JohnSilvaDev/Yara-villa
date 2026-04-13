import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    id: 1,
    name: "Bruno",
    tenure: "Hóspede Verificado",
    date: "janeiro de 2026",
    stay: "Ficou uma noite",
    text: "Nossa hospedagem foi maravilhosa! Para aqueles que gostam de algo diferente e contato direto com a natureza. Local paradisíaco!!!",
    avatar: "/user1.jpg"
  },
  {
    id: 2,
    name: "Marcelle",
    tenure: "Viajante",
    date: "julho de 2025",
    stay: "Ficou uma noite",
    text: "Adorei ficar na Yara Floating Villa! Funcionários muito acolhedores e proativos. Muito tranquilo, mesmo estando no meio do oceano, você não tem os movimentos do mar...",
    avatar: "/user2.jpg"
  },
  {
    id: 3,
    name: "Julian",
    tenure: "Hóspede Verificado",
    date: "1 semana atrás",
    stay: "Ficou algumas noites",
    text: "Se você realmente quer ter uma experiência imersiva, se desconectar e se sentir como se estivesse em uma ilha deserta, este é o lugar ideal para você....",
    avatar: "/user3.jpg"
  },
  {
    id: 4,
    name: "Rosa",
    tenure: "Viajante",
    date: "julho de 2025",
    stay: "Ficou uma noite",
    text: "Tivemos uma estadia muito única na vila flutuante em Guriú! A vila está localizada entre belos arredores. Todos os dias podíamos ver o pôr do sol lindamente. Era um lugar tranquilo...",
    avatar: "/user4.jpg"
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
