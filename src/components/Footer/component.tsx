"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faVk,
  faSquareTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useAppSelector } from "@/store/reduxHooks/reduxHooks";
import { selectLang } from "@/store/features/userSettings/selectors";
import { EN } from "@/consts/dictionaries/en";
import { RU } from "@/consts/dictionaries/ru";


export const Footer = () => {
  const lang = useAppSelector(selectLang);
  return (
    <footer className={styles.root}>
      <div className={styles.copyright_text}>
        <span>® </span>
        <span> {lang === "en" ? EN.copyright : RU.copyright}</span>
      </div>
      <div className={styles.social_icon}>
        <Link href="https://www.facebook.com" target="_blank" className={styles.link}>
          <FontAwesomeIcon
            icon={faFacebook}
            beat
            style={{ color: "#454d5f" }}
          />
        </Link>
        <Link href="https://vk.com" target="_blank" className={styles.link}>
          <FontAwesomeIcon icon={faVk} beat style={{ color: "#454d5f" }} />
        </Link>
        <Link href="https://twitter.com" target="_blank" className={styles.link}>
          <FontAwesomeIcon
            icon={faSquareTwitter}
            beat
            style={{ color: "#454d5f" }}
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" className={styles.link}>
          <FontAwesomeIcon
            icon={faSquareInstagram}
            beat
            style={{ color: "#454d5f" }}
          />
        </Link>
      </div>
    </footer>
  );
};
