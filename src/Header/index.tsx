import React, { FC } from "react";
import styles from "./index.module.scss";
export const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.top_line}>
        <div className={styles.menu_left}>
          <p>Главная</p>
          <p>Новости</p>
          <p>Размещение и тарифы </p>
          <p className={styles.p_with_icon}>Объявления на карте</p>
          <p>Контакты</p>
        </div>
        <div className={styles.menu_rigth}>
          <p className={styles.p_with_icon}>Закладки</p>
          <a href="">Вход и регистрация</a>
        </div>
      </div>
      <div className={styles.bottom_line}></div>
    </div>
  );
};
