import footerimg from "../header/img/logo.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.corpo}>
      <footer className={styles.footer}>
        <img src={footerimg} alt="" />
      </footer>
    </div>
  );
};

export default Footer
