import styles from '/styles/header.module.css';

const Header = () => (
  <div className={`${styles.prolaju__header} section__padding`} id="home">
    <div className={styles.prolaju__header_content}>
      <h1 className="gradient__text">Let&apos;s Begin Something amazing with PrOlaju</h1>
      <p>We at PrOlaju are here to serve you. Our goal for you as a sport athlete is to connect with the top rated scouts and coaches from across the best basketball leagues in the world.<br />You can type in your email address to get notified when we launch our app.</p>

      <div className={styles.prolaju__header_content__input}>
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Notified</button>
      </div>

      <div className={styles.prolaju__header_content__people}>
        <img src="/assets/people.png"/>
        <p>Hundreds of people have requested to get notified already.</p>
      </div>
    </div>

    <div className={styles.prolaju__header_image}>
      <img src="/assets/rim.png" />
    </div>
  </div>
);

export default Header;
