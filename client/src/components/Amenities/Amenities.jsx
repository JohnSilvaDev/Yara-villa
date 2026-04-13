import { FaWifi, FaCoffee, FaSwimmer, FaSun, FaWind, FaUserTie, FaShip, FaSpa } from "react-icons/fa";
import styles from "./Amenities.module.css";

const amenitiesData = [
  { icon: <FaWifi />, title: "Wi-Fi Starlink", desc: "Conexão de ultra velocidade via satélite a bordo." },
  { icon: <FaSun />, title: "Energia Solar", desc: "Todo o barco é alimentado por energia limpa e renovável." },
  { icon: <FaCoffee />, title: "Café da Manhã", desc: "Delicioso café continental incluído na sua estadia." },
  { icon: <FaShip />, title: "Transfer de Barco", desc: "Transporte gratuito o dia todo para onde precisar." },
  { icon: <FaWind />, title: "Kitesurf", desc: "Lançamento da porta e aulas sob demanda para todos os níveis." },
  { icon: <FaUserTie />, title: "Chef Particular", desc: "Serviço de chef a bordo disponível sob solicitação." },
  { icon: <FaSpa />, title: "Massagista", desc: "Sessões de relaxamento a bordo sob demanda." },
  { icon: <FaSwimmer />, title: "Piscina Natural", desc: "Mergulhe nas águas cristalinas ao redor da vila." }
];

function Amenities() {
  return (
    <section 
      className={styles.section}
      style={{ backgroundImage: "url('/gallery2.jpg')" }}
    >
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Serviços Exclusivos</h2>
          <p className={styles.subtitle}>Tudo o que você precisa para uma imersão total na natureza</p>
        </div>

        <div className={styles.grid}>
          {amenitiesData.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
