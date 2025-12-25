import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Let’s Work Together</h2>
      <p>Have a project in mind? Let’s talk.</p>

      <div className={styles.details}>
        <div className={styles.item}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>xxx@yourcompany.com</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Phone</span>
          <span className={styles.value}>+91 xxxxxxxxxx</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Location</span>
          <span className={styles.value}>Chennai, India</span>
        </div>
      </div>

      <button className={styles.cta}>Contact Us</button>
    </section>
  );
}
