import React, { FC } from "react";
import { Menu } from "../../types/common";
import styles from "./index.module.scss";

const cities = ["Минск", "Витебск", "Гродно", "Гомель", "Брест", "Могилев"];

const menu: Menu = [
  {
    title: "Квартиры",
    categories: [
      {
        name: "Квартиры в Минске",
        count: 3567,
      },
      {
        name: "Квартиры в Гомеле",
        count: 2032,
      },
      {
        name: "Квартиры в Гродно",
        count: 2302,
      },
      {
        name: "Квартиры в Могилеве",
        count: 312,
      },
      {
        name: "Квартиры в Бресте",
        count: 110,
      },
      {
        name: "Квартиры в Витебск",
        count: 110,
      },
    ],
  },
  {
    title: "Коттеджи и усадьбы",
    categories: [
      {
        name: "Аггроусадьбы",
        count: 312,
      },
      {
        name: "Коттеджи",
        count: 312,
      },
      {
        name: "Загородный комплекс",
        count: 312,
      },
      {
        name: "Базы отдыха",
        count: 312,
      },
      {
        name: "Еще",
        count: 0,
      },
    ],
  },
  {
    title: "Популярные направления",
    categories: [
      {
        name: "Коттеджи и усадьбы на о. Брасласких ",
        count: 0,
      },
      {
        name: "Коттеджи и усадьбы (жилье) на Нарочи",
        count: 0,
      },
      {
        name: "Коттеджи и усадьбы (жилье) у воды,на берегу, на озере",
        count: 0,
      },
    ],
  },
];

export const ChoiseTypeSearch: FC = () => {
  const renderButtons = () => {
    return cities.map((item, index) => {
      return <button key={`${item.length} - ${index}`}>{item}</button>;
    });
  };

  const renderSubmenu = () => {
    return menu.map((item, index) => {
      return (
        <div className={styles.submenu_item} key={`${item.title} - ${index}`}>
          <h4>{item.title}</h4>
          <div>
            {item.categories.map((subItem, index) => {
              return (
                <div
                  className={styles.items}
                  key={`${subItem.name.length} - ${index}`}
                >
                  <h5>{subItem.name}</h5>
                  {subItem.count != 0 && <h6>{subItem.count}</h6>}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.ChoiseTypeSearch}>
      <div className={styles.main_search}>
        <div className={styles.apartment_for_a_day}>
          <p>СНЯТЬ КВАРТИРУ</p>
          <h3>Квартиры на сутки</h3>
          <div className={styles.buttons}>{renderButtons()}</div>
        </div>
        <div className={styles.cottages_and_estates}>
          <p>СНЯТЬ КОТТЕДЖ НА ПРАЗДНИК</p>
          <h3>Коттеджи и усадьбы</h3>
          <button></button>
        </div>
        <div className={styles.baths_and_saunas}>
          <p>ПОПАРИТЬСЯ В БАНЕ С ДРУЗЬЯМИ</p>
          <h3>Бани и сауны</h3>
          <button></button>
        </div>
        <div className={styles.сar_rental}>
          <p>EСЛИ СРОЧНО НУЖНА МАШИНА</p>
          <h3>Авто на прокат</h3>
          <button className={styles.btn}></button>
        </div>
      </div>
      <div className={styles.sub_search}>{renderSubmenu()}</div>
    </div>
  );
};
