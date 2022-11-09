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
      <div className={styles.bottom_line_width}>
        <div className={styles.bottom_line}>
          <h1 className={styles.logo}>
            sdaem
            <span>.by</span>
          </h1>

          <div className={styles.menu}>
            <p className={styles.p_with_icon}>Квартиры на сутки</p>
            <p>Коттеджи и усадьбы</p>
            <p>Бани и Сауны</p>
            <p>Авто напрокат</p>
          </div>
          <button>+ &nbsp;Разместить объявление</button>
        </div>{" "}
      </div>
    </div>
  );
};
