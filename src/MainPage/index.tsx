import React, { FC } from "react";
import { ChoiseTypeSearch } from "../ChoiceTypeSearch";
import { Header } from "../Header";
import { Search } from "../Search";
import styles from "./index.module.scss";

export const MainPage: FC = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
      <Search />
      <ChoiseTypeSearch />
    </div>
  );
};
