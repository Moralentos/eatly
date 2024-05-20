import React, { useState } from "react";
import styles from "./cart.module.scss";
import food from "../../assets/food.png";

const Cart: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const toggle = (): void => {
    setIsEmpty(!isEmpty);
  };

  if (isEmpty) {
    return (
      <main className={`container ${styles.content}`}>
        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles.info}>
              <img src={food} alt="" />
              <div className={styles.card__text}>
                <span className={styles.card__text_title}>Chiken hell</span>
                <span className={styles.card__text_price}>$19.99</span>
              </div>
            </div>
            <div className={styles.count}>
              <div className={styles.btn}>
                <button className={styles.btn__minus}>-</button>
                <span className={styles.btn__number}>03</span>
                <button
                  className={`${styles.btn__plus} ${styles.btn__plus_black}`}
                >
                  +
                </button>
              </div>
              <span className={styles.btn__price}>$13.95</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <img src={food} alt="" />
              <div className={styles.card__text}>
                <span className={styles.card__text_title}>Chiken hell</span>
                <span className={styles.card__text_price}>$19.99</span>
              </div>
            </div>
            <div className={styles.count}>
              <div className={styles.btn}>
                <button className={styles.btn__minus}>-</button>
                <span className={styles.btn__number}>03</span>
                <button
                  className={`${styles.btn__plus} ${styles.btn__plus_black}`}
                >
                  +
                </button>
              </div>
              <span className={styles.btn__price}>$13.95</span>
            </div>
          </div>
          <div className={styles.coupon}>
            <div className={styles.coupon__text}>
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
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>

              <span className={styles.coupon__active}>HWEG&#@$</span>
            </div>
            <button className={styles.coupon__btn}>Применить</button>
          </div>
          <div className={styles.order}>
            <div className={styles.order__info}>
              <span>Сумма</span>
              <span>$12.92</span>
            </div>
            <div className={styles.order__info}>
              <span>Скидка</span>
              <span>$12.92</span>
            </div>
            <div className={styles.order_total}>
              <span>Итого</span>
              <span>$12.92</span>
            </div>
            <button>Сделать заказ</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={`container ${styles.content}`}>
      <span onClick={() => toggle()} className={styles.empty}>
        Корзина пустая
      </span>
    </main>
  );
};

export default Cart;
