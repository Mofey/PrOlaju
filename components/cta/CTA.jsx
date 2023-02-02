import styles from '/styles/cta.module.css';

const CTA = () => (
  <div className={styles.prolaju__cta}>
    <div className={styles.prolaju__cta_content}>
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className={styles.prolaju__cta_btn}>
      <a href="#home"><button type="button" id="home">Get Started</button></a>
    </div>
  </div>
);

export default CTA;