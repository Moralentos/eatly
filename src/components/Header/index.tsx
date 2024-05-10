import styles from "./header.module.scss";
import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import Auth from "../Auth";
import { Link } from "react-router-dom";

const Header: React.FC = (): React.ReactNode => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const navBtn: string[][] = [
    ["Меню", "/"],
    ["Блог", "blog"],
    ["Цены", "price"],
    ["Контакты", "contacts"],
  ];
  return (
    <>
      <header className={`container`}>
        <div className={styles.logo}>
          <img className={styles.logo__img} src={logo} alt="logo" />
          <span className={styles.logo__text}>eatly</span>
        </div>
        <ul className={styles.nav}>
          {navBtn.map((e: string[]) => (
            <li className={styles.nav__text}>
              <Link to={e[1]}>{e[0]}</Link>
            </li>
          ))}
        </ul>
        <Auth isAuth={isAuth} setAuth={setAuth}></Auth>
      </header>
    </>
  );
};

export default Header;
