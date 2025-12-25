
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>
      <p className={styles.subtitle}>
        We help brands grow through design and technology.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>UI/UX Design</h3>
          <p>Human-centered design that delivers real results.</p>
        </div>
        <div className={styles.card}>
          <h3>Web Development</h3>
          <p>High-performance websites built with modern tech.</p>
        </div>
        <div className={styles.card}>
          <h3>Brand Identity</h3>
          <p>Strong visuals that communicate your brand story.</p>
        </div>
      </div>
    </section>
  );
}
