import React, { FC } from "react";
import styles from "./index.module.scss";
export const Search: FC = () => {
  return (
    <div className={styles.Search}>
      <div className={styles.bg}>
        <h1>
          Sdaem.by - у нас живут
          <span> ваши объявления</span>
        </h1>
        <div className={styles.search_menu}>
          <div className={styles.tabs}>
            <div className={styles.tab}>
              <p>Квартиры на сутки</p>
            </div>
            <div className={styles.tab}>
              <p>Коттеджи и усадьбы</p>
            </div>
            <div className={styles.tab}>
              <p>Бани и сауны</p>
            </div>
            <div className={styles.tab}>
              <p>Авто напрокат</p>
            </div>
          </div>

          <div className={styles.settings}>
            <div className={styles.choice_div}>
              <p>Город</p>
              <select className={styles.dropdawn_list}>
                <option>Город 1</option>
                <option>Город 2</option>
                <option>Город 3</option>
                <option>Город 4</option>
                <option>Город 5</option>
                <option>Город 6</option>
              </select>
            </div>
            <div className={styles.choice_div}>
              <p>Комнаты</p>
              <select className={styles.dropdawn_list}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className={styles.price_div}>
              <p>Цена за сутки (BYN)</p>
              <div className={styles.inputs}>
                <input type="text" placeholder="От" />
                <span> - </span>
                <input type="text" placeholder="До" />
              </div>
            </div>
            <div className={styles.setting_choice_options}>
              <p className={styles.options}>Больше опций </p>
            </div>
            <div className={styles.setting_choice_map}>
              <p className={styles.on_map_p}>На карте </p>
            </div>
            <button>Показать</button>
          </div>
        </div>
      </div>
    </div>
  );
};
