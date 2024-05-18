import React from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <main className={`container ${styles.register}`}>
      <span className={styles.title}>Войти в аккаунт</span>
      <form>
        <div className={styles.input}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>

          <input placeholder={"Nickname"} type="text" />
        </div>
        <div className={styles.input}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input placeholder={"Nickname"} type="password" />
        </div>
        <button>Войти</button>
      </form>
      <span className={styles.create}>
        Нет аккаунта? <Link to={"/register"}>Регистрация</Link>
      </span>
    </main>
  );
};

export default Login;
