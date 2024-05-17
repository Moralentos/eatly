import React from "react";
import styles from "./favorites.module.scss";
import DishesCard from "../../components/DishesCard";

const Favorites: React.FC = () => {
  return (
    <main className={"container"}>
      <span className={styles.title}>Любимые блюда</span>
      <div className={styles.dishes}>
        {new Array(13).fill(0).map(() => (
          <DishesCard></DishesCard>
        ))}
      </div>
    </main>
  );
};

export default Favorites;
