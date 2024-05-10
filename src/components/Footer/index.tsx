import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/Logo.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={"container"}>
        <div className={styles.logo}>
          <div className={styles.logo__img}>
            <img src={logo} alt="" />
          </div>
          <span className={styles.logo__text}>eatly</span>
        </div>
        <div className={styles.copyright}>
          <span>© 2024 EATLY All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
