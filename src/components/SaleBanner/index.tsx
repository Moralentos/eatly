import React from "react";
import styles from "./saleBanner.module.scss";
import food from "../../assets/bannerFood.png";

const SaleBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.info}>
        <span className={styles.info__text}>Скидка 15%</span>
        <div className={styles.info__input}>
          <input
            placeholder={"Введите ваш email   "}
            type="text"
            name=""
            id=""
          />
          <div>
            <button>Подписаться</button>
          </div>
        </div>
      </div>
      <img className={styles.banner__img} src={food} alt="" />
    </div>
  );
};

export default SaleBanner;
