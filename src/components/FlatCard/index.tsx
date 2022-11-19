import React, {
  cloneElement,
  FC,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { FlatsData } from "../../store/store";
import { FlatData, Flats } from "../../types/common";
import styles from "./index.module.scss";

type Props = { item: FlatData };

export const FlatCard: FC<Props> = ({ item }) => {
  return (
    <div className={styles.flat_card_container} key={`${item.id}`}>
      <div className={styles.foto_container}>
        <img src={item.foto} alt="" />
      </div>
      <div className={styles.title}>
        <div className={styles.price_container}>
          <p>{item.price}.00 BYN</p>
          <span>за сутки</span>
        </div>
        <div className={styles.title_info}>
          <div className={styles.count_people}>
            <p>{item.countPeople}</p>
          </div>
          <div className={styles.count_rooms}>
            <p>{item.countFlat} комн.</p>
          </div>
          <div className={styles.count_area}>
            <p>{item.area}кв</p>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.location}>
          <h5 className={styles.adress}>{item.adress}</h5>
          <h5 className={styles.metro}>{item.metro}</h5>
          <h5 className={styles.district}>{item.district}</h5>
        </div>
        <div className={styles.description}>
          <p>{item.description}</p>
        </div>
      </div>
      <hr />
      <div className={styles.buttons}>
        <button className={styles.contacts}>Контакты</button>
        <button className={styles.detail}>Подробнее</button>
      </div>
    </div>
  );
};
