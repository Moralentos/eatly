import styles from "./header.module.scss";
import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import Auth from "../Auth";

const Header: React.FC = (): React.ReactNode => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const navBtn: string[] = ["Меню", "Блог", "Цены", "Контакты"];
  return (
    <>
      <header>
        <div className={styles.logo}>
          <img className={styles.logo__img} src={logo} alt="logo" />
          <span className={styles.logo__text}>eatly</span>
        </div>
        <ul className={styles.nav}>
          {navBtn.map((e: string) => (
            <li className={styles.nav__text}>
              <a href="">{e}</a>
            </li>
          ))}
        </ul>
        <Auth isAuth={isAuth} setAuth={setAuth}></Auth>
      </header>
    </>
  );
};

export default Header;
