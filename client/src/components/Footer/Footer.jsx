import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.logo}>Yara <span>Villa</span></h3>
            <p className={styles.about}>
              Experiência de luxo sustentável sobre as águas. 
              Sua casa flutuante no paraíso.
            </p>
            <div className={styles.socials}>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Links Úteis</h4>
            <ul className={styles.links}>
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#rooms">Acomodações</a></li>
              <li><a href="#booking">Reservar</a></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contato</h4>
            <ul className={styles.contactList}>
              <li><FaMapMarkerAlt /> Praia de Guriú, Camocim - CE</li>
              <li><FaPhone /> +55 88 8805-7600</li>
              <li><FaEnvelope /> reservas@yaravilla.com.br</li>
              <li>32km do Aeroporto de Jericoacoara</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2026 Yara Floating Villa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;