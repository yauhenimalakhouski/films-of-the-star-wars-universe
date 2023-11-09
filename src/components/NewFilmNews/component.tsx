import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import classNames from "classnames";

export const NewFilmNews = () => {
  return (
    <div className={styles.root}>
      <div className={styles.new_film_news_container}>
        <h1 className={styles.new_film_title}>Coming soon on screens:</h1>
        <h1 className={styles.new_film_title}>
          <Link href="/" title="Mandalorian" className={styles.text_link}>
            Mandalorian season 4
          </Link>
        </h1>
        <table className="info">
        <tbody>
          <tr className="new_film_date">
            <td className={styles.td}>When will it be released:</td>
            <td className={styles.td}>December 12, 2023</td>
          </tr>
          <tr>
            <td colSpan={2} className={classNames(styles.td, styles.time_title)}>
              Until the release remains:
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={classNames(styles.td, styles.time_left, styles.timer)}>
              <span>Days:</span>
              <span className="days_left"></span>
              <span>Hours:</span>
              <span className="hours_left"></span>
              <span>Minutes:</span>
              <span className="minutes_left"></span>
              <span>Seconds:</span>
              <span className="seconds_left"></span>
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
