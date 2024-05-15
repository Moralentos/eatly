import React from "react";
import styles from "./blog.module.scss";
import ava from "../../assets/ava.jpg";

const Blog: React.FC = () => {
  return (
    <main className={"container"}>
      <div className={styles.banner}>
        <span>Отзывы наших клиентов</span>
      </div>
      <div className={styles.typezone}>
        <textarea
          rows={5}
          placeholder={"Оставьте свой отзыв..."}
          className={styles.typezone__text}
        ></textarea>
        <div>
          <button>Отправить</button>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.card}>
          <span className={styles.card__text}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
          </span>
          <div className={styles.card__info}>
            <div className={styles.author}>
              <img src={ava} alt="" />
              <div className={styles.author__text}>
                <span>Автор</span>
                <span>Perperzon</span>
              </div>
            </div>
            <span className={styles.date}>15 DEC, 2022</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
