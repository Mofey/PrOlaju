import styles from '/styles/possibility.module.css';

const Possibility = () => (
  <div className={`${styles.prolaju__possibility} section__padding`} id="possibility">
    <div className={styles.prolaju__possibility_image}>
      <img src="/assets/block.png" alt="possibility" />
    </div>
    <div className={styles.prolaju__possibility_content}>
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Do not have doubts. If you can think it, you can get it.<br />Here&apos;s a quote by Denzel Washington; &apos;&apos;True desire in the heart is God&apos;s proof to you, written beforehand, that it&apos;s yours already.&apos;&apos;.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
