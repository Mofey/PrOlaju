import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from '/styles/navbar.module.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.prolaju__navbar}>
      <div className={styles.prolaju__navbar_links}>
        <div className={styles.prolaju__navbar_links_logo}>
          <p>PrOlaju</p>
        </div>
        <div className={styles.prolaju__navbar_links_container}>
          <p><a href="#home">Home</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#possibility">Motivation</a></p>
        </div>
      </div>
      <div className={styles.prolaju__navbar_menu}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className={`${styles.prolaju__navbar_menu_container} scale-up-center`}>
          <div className={styles.prolaju__navbar_menu_container_links}>
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#possibility">Motivation</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
