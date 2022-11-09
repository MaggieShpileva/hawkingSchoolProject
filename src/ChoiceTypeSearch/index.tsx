import React, { FC } from "react";
import styles from "./index.module.scss";
export const ChoiseTypeSearch: FC = () => {
  return (
    <div className={styles.ChoiseTypeSearch}>
      <div className={styles.main_search}></div>
      <div className={styles.sub_search}></div>
    </div>
  );
};
