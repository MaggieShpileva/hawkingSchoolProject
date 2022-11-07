import React, { FC } from "react";
import { Header } from "../Header";
import styles from "./index.module.scss";

export const MainPage: FC = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
    </div>
  );
};
