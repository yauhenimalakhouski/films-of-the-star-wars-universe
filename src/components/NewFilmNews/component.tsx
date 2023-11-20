"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import classNames from "classnames";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";

const releaseTime: number = +new Date(2024, 10, 12);

export const NewFilmNews = () => {
  const lang = useAppSelector(selectLang);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(releaseTime - Date.now());
    });
    if (time < 0) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <div className={styles.root}>
      <div className={styles.new_film_news_container}>
        <h1 className={styles.new_film_title}>
          {lang === "en" ? EN.coming_soon : RU.coming_soon}
        </h1>
        <h1 className={styles.new_film_title}>
          <Link
            href="/new-film-info"
            title="Mandalorian"
            className={styles.text_link}
          >
            {lang === "en" ? EN.mandalorian_season : RU.mandalorian_season}
          </Link>
        </h1>
        <table className={styles.info}>
          <tbody>
            <tr className={styles.new_film_date}>
              <td className={styles.td}>
                {lang === "en" ? EN.when_released : RU.when_released}
              </td>
              <td className={styles.td}>
                {lang === "en" ? EN.release_date : RU.release_date}
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className={classNames(styles.td, styles.time_title)}
              >
                {lang === "en" ? EN.until_release : RU.until_release}
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className={classNames(
                  styles.td,
                  styles.time_left,
                  styles.timer
                )}
              >
                <span>{lang === "en" ? EN.days_left : RU.days_left}</span>
                <span className="days_left">{`${moment(time).format(
                  "DDD"
                )},`}</span>
                <span>{lang === "en" ? EN.hours_left : RU.hours_left}</span>
                <span className="hours_left">{` ${moment(time).format(
                  "HH"
                )}, `}</span>
                <span>{lang === "en" ? EN.minutes_left : RU.minutes_left}</span>
                <span className="minutes_left">{` ${moment(time).format(
                  "mm"
                )}, `}</span>
                <span>{lang === "en" ? EN.seconds_left : RU.seconds_left}</span>
                <span className="seconds_left">{` ${moment(time).format(
                  "ss"
                )}`}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          href="/new-film-info"
          title="Mandalorian"
          className={styles.banner_container}
        >
          <Image
            src="/Poster2.png"
            priority
            fill={true}
            alt="Banner"
            className={styles.banner}
          />
        </Link>
      </div>
    </div>
  );
};
