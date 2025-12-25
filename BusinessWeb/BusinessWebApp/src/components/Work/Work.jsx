import styles from "./Work.module.css";

import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";

export default function Work() {
  return (
    <section className={styles.work} id="work">
      <h2>Our Work</h2>
      <p className={styles.subtitle}>
        A selection of projects we’ve crafted for our clients.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={work1} alt="Project One" />
          <div className={styles.overlay}>
            <h3>Corporate Website</h3>
            <span>Web Design</span>
          </div>
        </div>

        <div className={styles.card}>
          <img src={work2} alt="Project Two" />
          <div className={styles.overlay}>
            <h3>SaaS Dashboard</h3>
            <span>UI / UX</span>
          </div>
        </div>

        <div className={styles.card}>
          <img src={work3} alt="Project Three" />
          <div className={styles.overlay}>
            <h3>Brand Identity</h3>
            <span>Branding</span>
          </div>
        </div>
      </div>
    </section>
  );
}
