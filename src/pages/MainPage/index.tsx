import React from "react";
import styles from "./mainPage.module.scss";
import Header from "../../components/Header";
import foodPic from "../../assets/mainPageFoodPreview.png";
import TopDishes from "../../components/TopDishes";

const MainPage: React.FC = () => {
  return (
    <>
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
              disclaimer for more details and get paychecks up to two days
              early.
            </div>
            <div className={styles.preview__button}>
              <button className={styles.preview__button_start}>Начать</button>
              <button className={styles.preview__button_pro}>Go Pro</button>
            </div>
            <div className={styles.preview__score}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgba(0, 182, 122, 1)"
                  viewBox="0 0 24 24"
                  className={`${styles.preview__score_logo}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <span>Trustpilot</span>
              </div>
              <div>
                {new Array(5).fill(0).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgba(245, 158, 11, 1)"
                    viewBox="0 0 24 24"
                    className={`${styles.preview__score_rate}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ))}
                <span>4900+</span>
              </div>
            </div>
          </div>
          <div className={styles.preview__img}>
            <img src={foodPic} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.info_line}>
        <div className={styles.info_line__block}>
          <span className={styles.info_line__title}>10K+</span>
          <span className={styles.info_line__text}>Satisfied Costumers</span>
          <span className={styles.info_line__text}>
            All Great Over The World
          </span>
        </div>
        <div className={styles.info_line__void}></div>
        <div className={styles.info_line__block}>
          <span className={styles.info_line__title}>10K+</span>
          <span className={styles.info_line__text}>Satisfied Costumers</span>
          <span className={styles.info_line__text}>
            All Great Over The World
          </span>
        </div>
        <div className={styles.info_line__void}></div>
        <div className={styles.info_line__block}>
          <span className={styles.info_line__title}>10K+</span>
          <span className={styles.info_line__text}>Satisfied Costumers</span>
          <span className={styles.info_line__text}>
            All Great Over The World
          </span>
        </div>
      </div>
      <div className="container">
        <TopDishes></TopDishes>
      </div>
    </>
  );
};

export default MainPage;
