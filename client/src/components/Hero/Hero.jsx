import styles from "./Hero.module.css";

function Hero() {
  return (
    <section 
      className={styles.hero} 
      id="hero" 
      style={{ backgroundImage: "url('/hero_bg.jpg')" }}
    >
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} fade-in`}>
          Yara Floating Villa
        </h1>
        <p className={`${styles.subtitle} fade-in`}>
          Onde o luxo encontra o mar. Seu paraíso privativo em Guriú.
        </p>
        
        <div className={styles.ctaWrapper}>
          <a href="#about" className="btn-primary">Conhecer a Vila</a>
          <a 
            href="https://wa.me/558888057600?text=Olá! Gostaria de saber mais sobre a Yara Floating Villa em Guriú." 
            target="_blank" 
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            Reservar via WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}

export default Hero;