import styles from "./Hero.module.css";
import heroImage from "../../assets/Hero.jpg";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <h1>
          We build <span>digital products</span> that grow businesses
        </h1>
        <p>
          A creative agency focused on design, development, and meaningful
          digital experiences.
        </p>
        <div className={styles.actions}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>Our Work</button>
        </div>
      </div>

      <div className={styles.right}>
        <img src={heroImage} alt="Agency workspace" />
      </div>
    </section>
  );
}
