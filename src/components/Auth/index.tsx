import React from "react";
import styles from "./auth.module.scss";

interface AuthProps {
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Auth: React.FC<AuthProps> = ({ isAuth, setAuth }) => {
  if (isAuth === true) {
    return (
      <div>
        <span onClick={() => setAuth(false)}>Вы вошли</span>
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <a className={styles.auth__text} onClick={() => setAuth(true)} href="#">
        Войти
      </a>
      <a className={`${styles.auth__text_reg} ${styles.auth__text}`} href="">
        Регистрация
      </a>
    </div>
  );
};

export default Auth;
