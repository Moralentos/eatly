import React from "react";
import wkndBanner from "../../assets/wknd.png";
import styles from "./price.module.scss";
import pizza from "../../assets/Pizza.svg";
import hotdog from "../../assets/Hotdog.svg";
import donat from "../../assets/Doughnut.svg";
import ice from "../../assets/Icecream.svg";
import TopDishes from "../../components/TopDishes";
import DishesCard from "../../components/DishesCard";

const Price: React.FC = () => {
  return (
    <main className={"container"}>
      <div className={styles.priceBlock}>
        <div className={styles.info}>
          <img src={wkndBanner} alt="" />
          <div className={styles.input}>
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input type="text" placeholder={"Поиск"} />
          </div>
        </div>
        <div className={styles.filter}>
          <span className={styles.filter__title}>Категория</span>
          <div className={styles.filter__icon}>
            <div className={styles.filter__icon_pizza}>
              <img src={pizza} alt="" />
              <span>Pizza</span>
            </div>
            <div className={styles.filter__icon_hotdog}>
              <img src={hotdog} alt="" />
              <span>Asian</span>
            </div>
            <div className={styles.filter__icon_donat}>
              <img src={donat} alt="" />
              <span>Donat</span>
            </div>
            <div className={styles.filter__icon_ice}>
              <img src={ice} alt="" />
              <span>Ice</span>
            </div>
          </div>
          <span className={styles.filter__title}>Сортировать по:</span>
          <div className={styles.filter__sort}>
            <span
              className={`${styles.filter__text} ${styles.filter__text_active}`}
            >
              Убыванию
            </span>
            <span className={`${styles.filter__text}`}>Возрастанию</span>
          </div>
          <button className={styles.filter__button}>Применить</button>
        </div>
      </div>
      <TopDishes></TopDishes>
      <div className={styles.list}>
        <span className={styles.list__title}>Блюда</span>
        <div className={styles.list__dishes}>
          {new Array(13).fill(0).map(() => (
            <DishesCard></DishesCard>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Price;
