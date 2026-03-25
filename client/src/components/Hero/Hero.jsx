import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Yara Floating Villa
        </h1>

        <p className={styles.subtitle}>
          Experience luxury on the water
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>
            Book Now
          </button>

        </div>
      </div>

    </section>
  );
}

export default Hero;