import React from "react";
import styles from "./mainPage.module.scss";
import Header from "../../components/Header";
import foodPic from "../../assets/mainPageFoodPreview.png";

const MainPage: React.FC = () => {
  return (
    <div className={"container"}>
      <Header></Header>
      <div className={styles.preview}>
        <div className={styles.preview__info}>
          <div
            className={`${styles.preview__text} ${styles.preview__text_opacity}`}
          >
            больше 1000 пользователей
          </div>
          <div className={styles.preview__text_bold}>
            Наслаждайтесь едой со всего{" "}
            <span
              className={`${styles.preview__text_bold} ${styles.preview__text_color}`}
            >
              мира
            </span>
          </div>
          <div className={styles.preview__text}>
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
          </div>
          <div className={styles.preview__button}>
            <button className={styles.preview__button_start}>Начать</button>
            <button className={styles.preview__button_pro}>Go Pro</button>
          </div>
          <div className={styles.preview__score}>Score</div>
        </div>
        <div className={styles.preview__img}>
          <img src={foodPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
