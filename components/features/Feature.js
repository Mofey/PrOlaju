import styles from '/styles/features.module.css';

const Feature = ({ title, text }) => (
  <div className={styles.prolaju__features_container__feature}>
    <div className={styles.prolaju__features_container__feature_title}>
      <div />
      <h1>{title}</h1>
    </div>
    <div className={styles.prolaju__features_container_feature_text}>
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
