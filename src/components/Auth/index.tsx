import React from "react";
import styles from "./auth.module.scss";
import ava from "../../assets/ava.jpg";
import { Link } from "react-router-dom";

interface AuthProps {
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Auth: React.FC<AuthProps> = ({ isAuth, setAuth }) => {
  if (isAuth === true) {
    return (
      <div className={styles.person}>
        <img src={ava} alt="" />
        <span className={styles.person__nick}>nickname</span>
        <Link to={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>

        <svg
          onClick={() => setAuth(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <a className={styles.auth__text} onClick={() => setAuth(true)} href="#">
        Войти
      </a>
      <Link
        className={`${styles.auth__text_reg} ${styles.auth__text}`}
        to={"/register"}
      >
        Регистрация
      </Link>
    </div>
  );
};

export default Auth;
