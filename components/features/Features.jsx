import Feature from './Feature';
import styles from '/styles/features.module.css';

const featuresData = [
  {
    title: 'Connecting to an international scout instantly',
    text: 'At PrOlaju, there are various subscription plans, depending on the plan you subscribe for, will determine the kind of scout you connect with. Either local or international.',
  },
  {
    title: 'Become the needed athlete',
    text: 'It is paramount that you are capable of playing the game like a professional. This increases your chances of getting picked by a scout.',
  },
  {
    title: 'Using the PrOlaju app',
    text: 'The app is currently under daily development and it is being built by our developers to be very simple to use but with a gorgeous user interface.',
  },
  {
    title: 'Success begins',
    text: 'At PrOlaju your success is also our success and we wanna help you showcase your talent on a global level.',
  },
];

const Features = () => (
  <div className={`${styles.prolaju__features} section__padding`} id="features">
    <div className={styles.prolaju__features_heading}>
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into The Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className={styles.prolaju__features_container}>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
