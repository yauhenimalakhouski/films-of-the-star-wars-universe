"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import moment from "moment";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";

const releaseTime: number = +new Date(2024, 10, 12);

export const NewFilm = () => {
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
      <h1 className={styles.new_film_title}>
        {lang === "en" ? EN.mandalorian_season : RU.mandalorian_season}
      </h1>
      <div className={styles.image_wrapper}>
        <Image
          src="/Poster2.png"
          priority
          fill={true}
          alt="Poster"
          className={styles.image}
        />
      </div>
      <table className={styles.info}>
        <tbody>
          <tr className={styles.new_film_date}>
            <td>{lang === "en" ? EN.when_released : RU.when_released}</td>
            <td>{lang === "en" ? EN.release_date : RU.release_date}</td>
          </tr>
          <tr>
            <td colSpan={2} className={styles.time_title}>
              {lang === "en" ? EN.until_release : RU.until_release}
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className={classNames(styles.time_left, styles.timer)}
            >
              <span>{lang === "en" ? EN.days_left : RU.days_left}</span>
              <span className={styles.days_left}>{`${moment(time).format(
                "DDD"
              )},`}</span>
              <span>{lang === "en" ? EN.hours_left : RU.hours_left}</span>
              <span className={styles.hours_left}>{` ${moment(time).format(
                "HH"
              )}, `}</span>
              <span>{lang === "en" ? EN.minutes_left : RU.minutes_left}</span>
              <span className={styles.minutes_left}>{` ${moment(time).format(
                "mm"
              )}, `}</span>
              <span>{lang === "en" ? EN.seconds_left : RU.seconds_left}</span>
              <span className={styles.seconds_left}>{` ${moment(time).format(
                "ss"
              )}`}</span>
            </td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.original_name : RU.original_name}</td>
            <td>{lang === "en" ? EN.mandalorian : RU.mandalorian}</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.country_colon : RU.country_colon}</td>
            <td>{lang === "en" ? EN.usa : RU.usa}</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.channel : RU.channel}</td>
            <td>{lang === "en" ? EN.disney : RU.disney}</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.genre_colon : RU.genre_colon}</td>
            <td>{lang === "en" ? EN.genre_info : RU.genre_info}</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.episodes_count : RU.episodes_count}</td>
            <td>8</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.actors : RU.actors}</td>
            <td>{lang === "en" ? EN.actors_info : RU.actors_info}</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.duration : RU.duration}</td>
            <td>{lang === "en" ? EN.min : RU.min}</td>
          </tr>
          <tr>
            <td>{lang === "en" ? EN.ratings : RU.ratings}</td>
            <td>{lang === "en" ? EN.ratings_info : RU.ratings_info}</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.paragraph}>
        {lang === "en"
          ? EN.text_mandalorian_paragraph1
          : RU.text_mandalorian_paragraph1}
      </p>
      <p className={styles.paragraph}>
        {lang === "en"
          ? EN.text_mandalorian_paragraph2
          : RU.text_mandalorian_paragraph2}
      </p>
      <div className={styles.image_wrapper}>
        <Image
          src="/Poster.png"
          priority
          fill={true}
          alt="Poster"
          className={styles.image}
        />
      </div>
      <h2 className={styles.secondary_title}>
        {lang === "en" ? EN.plot : RU.plot}
      </h2>
      <p className={classNames(styles.last_paragraph, styles.paragraph)}>
        {lang === "en"
          ? EN.text_mandalorian_paragraph3
          : RU.text_mandalorian_paragraph3}
      </p>
    </div>
  );
};
