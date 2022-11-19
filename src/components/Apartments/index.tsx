//@ts-nocheck
import React, { cloneElement, FC, useEffect, useState } from "react";
import { useRef } from "react";
import { FlatsData } from "../../store/store";
import { FlatCard } from "../FlatCard";
import styles from "./index.module.scss";
import Slider from "react-slick";

export const Apartments: FC = () => {
  const [offset, setOffset] = useState(0);

  const renderFlats = () => {
    return FlatsData.map((item) => {
      return (
        <div style={{ transform: `translate(${offset}px)` }} key={item.id}>
          <FlatCard item={item} key={item.id} />
        </div>
      );
    });
  };

  const ClickRigth = () => {
    setClick(click + 1);
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset - 420;
      return newOffset;
    });
  };
  const ClickLeft = () => {
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset + 420;
      return Math.min(newOffset, 0);
    });
  };

  return (
    <div className={styles.apartments}>
      <div className={styles.title}>
        <p className={styles.subtitle}>КВАРТИРЫ НА СУТКИ</p>
        <h1>Аренда квартир в Минске</h1>
        <div className={styles.location}>
          <div className={styles.dropdawn_list_metro}>
            <select className={styles.dropdawn_list_metro_select}>
              <option>Метро</option>
              <option>Город 2</option>
              <option>Город 3</option>
              <option>Город 4</option>
              <option>Город 5</option>
              <option>Город 6</option>
            </select>
          </div>

          <select className={styles.dropdawn_list_district}>
            <option>Район</option>
            <option>Город 2</option>
            <option>Город 3</option>
            <option>Город 4</option>
            <option>Город 5</option>
            <option>Город 6</option>
          </select>
        </div>
      </div>
      <div className={styles.flats}>{renderFlats()}</div>
      <div className={styles.buttons}>
        <button className={styles.left} onClick={() => ClickLeft()}></button>
        <button className={styles.rigth} onClick={() => ClickRigth()}></button>
      </div>
      <div className={styles.offer}>
        <div className={styles.count_offer}>
          <h1>341</h1>
          <p>Предложений по Минску</p>
        </div>
        <button>Посмотреть все</button>
      </div>
    </div>
  );
};
