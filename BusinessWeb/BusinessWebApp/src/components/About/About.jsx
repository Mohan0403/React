import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          We are a creative digital agency focused on building impactful
          products that solve real business problems.
        </p>
      </div>
    </section>
  );
}
