import React, { FC } from "react";
import { Apartments } from "../Apartments";
import { ChoiseTypeSearch } from "../ChoiceTypeSearch/index";
import { Header } from "../Header/index";
import { Search } from "../Search/index";
import { SearchFlatOnCart } from "../SearchFlatOnCart";
import styles from "./index.module.scss";

export const MainPage: FC = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
      <Search />
      <ChoiseTypeSearch />
      <Apartments />
      <SearchFlatOnCart />
    </div>
  );
};
