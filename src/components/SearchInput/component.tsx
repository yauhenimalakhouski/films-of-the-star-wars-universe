"use client";
import { useState } from "react";

import { saveSearchString } from "@/store/features/searchFilms";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectSearchFilmsValue } from "@/store/features/searchFilms/selector";

import styles from "./styles.module.css";
import classNames from "classnames";

export const SearchInput = ({ className }: { [key: string]: string }) => {
  const searchTextFromStore = useAppSelector(selectSearchFilmsValue);
  const [searchText, setSearchText] = useState(searchTextFromStore);
  const dispatch = useAppDispatch();

  return (
    <div className={classNames(className, styles.root)}>
      <input
        className={styles.input}
        value={searchText || ""}
        onChange={(event) => {
          setSearchText(event.target.value);
          dispatch(saveSearchString(event.target.value));
        }}
        placeholder="Search by Episode Number, Episode Title"
      />
    </div>
  );
};
