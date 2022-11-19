import React, { FC } from "react";
import { Tariffs } from "../../store/store";
import { Tariff } from "../../types/common";
import styles from "./index.module.scss";

export const SearchFlatOnCart: FC = () => {
  const info_cart = (cart_info: Tariff) => {
    return (
      <div className={styles.info_cart}>
        <div className={styles.info_cart_title}>
          <img src={cart_info.img} alt="" />
          <h4>{cart_info.title}</h4>
        </div>
        <p className={styles.info_cart_p}>{cart_info.text}</p>
        <button>{cart_info.btn_text}</button>
      </div>
    );
  };
  const info_cart_gold = (cart_info: Tariff) => {
    return (
      <div className={styles.info_cart_gold}>
        <h4>{cart_info.title}</h4>

        <p className={styles.info_cart_gold_p}>{cart_info.text}</p>
        <p className={styles.info_cart_gold_p}>{cart_info.sur_text}</p>
        <button>{cart_info.btn_text}</button>
      </div>
    );
  };
  return (
    <div className={styles.main_div}>
      <div className={styles.title}>
        <h2>Поиск квартир на карте</h2>
        <p>
          Ищите квартиры на сутки в центре города, возле парка или в живописном
          районе
        </p>
        <button>Открыть карту</button>
      </div>
      <div className={styles.carts}>
        {info_cart(Tariffs[0])}
        {info_cart(Tariffs[1])}
        {info_cart_gold(Tariffs[2])}
      </div>
    </div>
  );
};
