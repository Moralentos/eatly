import styles from "./header.module.scss";
import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import Auth from "../Auth";
import { Link } from "react-router-dom";

type TNavBtn =
  | ["Главная", "/"]
  | ["Отзывы", "blog"]
  | ["Цены", "price"]
  | ["Избранное", "favorites"];

const Header: React.FC = () => {
  const [isAuth, setAuth] = useState<boolean>(true);
  const navBtn: Array<TNavBtn> = [
    ["Главная", "/"],
    ["Отзывы", "blog"],
    ["Цены", "price"],
    ["Избранное", "favorites"],
  ];

  return (
    <>
      <header className={`container`}>
        <div className={styles.logo}>
          <img className={styles.logo__img} src={logo} alt="logo" />
          <span className={styles.logo__text}>eatly</span>
        </div>
        <ul className={styles.nav}>
          {navBtn.map((elem: string[]) => (
            <li className={styles.nav__text}>
              <Link to={elem[1]}>{elem[0]}</Link>
            </li>
          ))}
        </ul>
        <Auth isAuth={isAuth} setAuth={setAuth}></Auth>
      </header>
    </>
  );
};

export default Header;
