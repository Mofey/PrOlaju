import styles from '/styles/footer.module.css';

const Footer = () => (
  <div className={`${styles.prolaju__footer} section__padding`}>
    <div className={styles.prolaju__footer_heading}>
      <h1 className="gradient__text">Do you want to step into the future before others?</h1>
    </div>

    <div className={styles.prolaju__footer_btn}>
      <a href="#home"><p>Request Early Access</p></a>
    </div>

    <div className={styles.prolaju__footer_links}>
      <div className={styles.prolaju__footer_links_logo}>
        <p>PrOlaju</p>
        <p>All Rights Reserved</p>
      </div>
      <div className={styles.prolaju__footer_links_div}>
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className={styles.prolaju__footer_links_div}>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className={styles.prolaju__footer_links_div}>
        <h4>Get in touch</h4>
        <p>08037326512</p>
        <p>08071973021</p>
        <p>mohfey@gmail.com</p>
      </div>
    </div>

    <div className={styles.prolaju__footer_copyright}>
      <p>&copy;2023 PrOlaju. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
