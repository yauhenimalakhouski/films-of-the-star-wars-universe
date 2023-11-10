"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import classNames from "classnames";
import moment from "moment";
import { useState } from "react";

const releaseTime: number = +new Date(2023, 11, 12);


export const NewFilmNews = () => {
  const [time, setTime] = useState<number>(0);

  let intervalId = setInterval(() => {
    setTime(releaseTime - Date.now())
  });
  if (time < 0) {
    clearInterval(intervalId);
  }
  
  return (
    <div className={styles.root}>
      <div className={styles.new_film_news_container}>
        <h1 className={styles.new_film_title}>Coming soon on screens:</h1>
        <h1 className={styles.new_film_title}>
          <Link href="/" title="Mandalorian" className={styles.text_link}>
            Mandalorian season 4
          </Link>
        </h1>
        <table className={styles.info}>
          <tbody>
            <tr className={styles.new_film_date}>
              <td className={styles.td}>When will it be released:</td>
              <td className={styles.td}>December 12, 2023</td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className={classNames(styles.td, styles.time_title)}
              >
                Until the release remains:
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
                <span>Days:</span>
                <span className="days_left">{`${moment(time).format(
                  "DDD"
                )},`}</span>
                <span>Hours:</span>
                <span className="hours_left">{` ${moment(time).format(
                  "HH"
                )}, `}</span>
                <span>Minutes:</span>
                <span className="minutes_left">{` ${moment(time).format(
                  "mm"
                )}, `}</span>
                <span>Seconds:</span>
                <span className="seconds_left">{` ${moment(time).format(
                  "ss"
                )}`}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <Link href="/" title="Mandalorian" className={styles.banner_container}>
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
