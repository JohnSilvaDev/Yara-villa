import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About the Villa</h2>

        <p className={styles.text}>
          Yara Floating Villa offers a unique luxury experience on the water.
          Enjoy breathtaking views, comfort, and an unforgettable stay in a
          peaceful and exclusive environment.
        </p>
      </div>
    </section>
  );
}

export default About;