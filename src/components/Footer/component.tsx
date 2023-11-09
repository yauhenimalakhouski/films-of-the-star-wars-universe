import styles from "./styles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faVk,
  faSquareTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.copyright_text}>
        <span>® </span>
        <span> 2023 ALL RIGHTS RESERVED</span>
      </div>
      <div className={styles.social_icon}>
        <Link href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            beat
            style={{ color: "#454d5f" }}
          />
        </Link>
        <Link href="https://vk.com" target="_blank">
          <FontAwesomeIcon icon={faVk} beat style={{ color: "#454d5f" }} />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FontAwesomeIcon
            icon={faSquareTwitter}
            beat
            style={{ color: "#454d5f" }}
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
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
