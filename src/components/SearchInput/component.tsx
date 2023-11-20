"use client";
import { useEffect, useState } from "react";

import { saveSearchString } from "@/store/features/searchFilms";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectSearchFilmsValue } from "@/store/features/searchFilms/selector";

import styles from "./styles.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { selectLang } from "@/store/features/userSettings/selectors";

export const SearchInput = ({ className }: { [key: string]: string }) => {
  const lang = useAppSelector(selectLang);
  const searchTextFromStore = useAppSelector(selectSearchFilmsValue);
  const [searchText, setSearchText] = useState(searchTextFromStore);
  const dispatch = useAppDispatch();

  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/") {
      setSearchText("");
      dispatch(saveSearchString(""));
    }
  }, [pathname]);

  return (
    <div className={classNames(className, styles.root)}>
      <input
        disabled={pathname !== "/"}
        className={styles.input}
        value={searchText || ""}
        onChange={(event) => {
          setSearchText(event.target.value);
          dispatch(saveSearchString(event.target.value));
        }}
        placeholder={
          lang === "en"
            ? "Search by Episode Number, Episode Title"
            : "Поиск по номеру эпизода, названию эпизода"
        }
      />
    </div>
  );
};
