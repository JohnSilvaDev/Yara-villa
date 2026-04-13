import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img src="/gallery1.jpg" alt="Villa Exterior" className={styles.image} />
              <div className={styles.badge}>Desde 2020</div>
            </div>
          </div>
          
          <div className={styles.contentCol}>
            <h5 className={styles.tagline}>A Origem do Sonho</h5>
            <h2 className={styles.title}>Luxo Flutuante e Paraíso dos Kitesurfistas</h2>
            
            <p className={styles.text}>
              A Yara Floating Villa é a única vila flutuante situada nas águas calmas de Guriú, cercada por dunas de areia e natureza intocada. 
              Aqui, o luxo encontra o mar de forma sustentável, sendo totalmente movida a energia solar.
            </p>
            
            <p className={styles.text}>
              Imagine lançar seu kitesurf diretamente da porta da sua conta em alguns dos melhores ventos do mundo. 
              Com Wi-Fi Starlink de alta velocidade a bordo, você permanece conectado enquanto vive uma experiência especial e isolada.
            </p>

            <ul className={styles.list}>
              <li>Localizada em Guriú, a poucos passos da praia</li>
              <li>Sustentabilidade: 100% Energia Solar</li>
              <li>Conectividade: Wi-Fi Starlink a Bordo</li>
              <li>Facilidades: Café da Manhã e Transfer Inclusos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;