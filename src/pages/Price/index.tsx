import React from "react";
import wkndBanner from "../../assets/wknd.png";
import styles from "./price.module.scss";
import pizza from "../../assets/Pizza.svg";
import hotdog from "../../assets/Hotdog.svg";
import donat from "../../assets/Doughnut.svg";
import ice from "../../assets/Icecream.svg";

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
          <span>Категория</span>
          <div className={styles.filter__icon}>
            <div className={styles.filter__icon_pizza}>
              <div>
                <img src={pizza} alt="" />
              </div>
            </div>
            <div className={styles.filter__icon_hotdog}>
              <div>
                <img src={hotdog} alt="" />
              </div>
            </div>
            <div className={styles.filter__icon_donat}>
              <div>
                <img src={donat} alt="" />
              </div>
            </div>
            <div className={styles.filter__icon_ice}>
              <div>
                <img src={ice} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Price;
