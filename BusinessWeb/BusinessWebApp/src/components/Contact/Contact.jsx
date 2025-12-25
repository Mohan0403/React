import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Let’s Work Together</h2>
      <p>Have a project in mind? Let’s talk.</p>

      <button className={styles.cta}>Contact Us</button>
    </section>
  );
}
