import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import skeletonStyles from "./skeletonStyles.module.css";
import classNames from "classnames";

type CompProps = {
  filmsViewType: string;
};

export const SkeletonMovie = ({ filmsViewType }: CompProps) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.table]: filmsViewType === "table",
      })}
    >
      <Link href={`/`} className={classNames(styles.film_link)}>
        <Image
          className={classNames(styles.cover, skeletonStyles.skeleton)}
          fill={true}
          src={`/`}
          alt="film"
          priority
        />
      </Link>
      <div className={styles.description}>
        <div className={styles.short_description}>
          <div className={skeletonStyles.wrapper}>
            <Link href={`/`} className={styles.text_link}>
              <div
                className={classNames(styles.episode_number, skeletonStyles.loading)}
              >
                <div
                  className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)}
                />
              </div>
              <div className={classNames(styles.episode_title, skeletonStyles.loading)}>
                <div
                  className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)}
                />
              </div>
            </Link>
            <div className={classNames(styles.release_date, skeletonStyles.loading)}>
              <div
                className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)}
              />
            </div>
            <div className={classNames(styles.film_producer, skeletonStyles.loading)}>
              <div
                className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)}
              />
            </div>
          </div>
          <Button type={`btn_favorite`} className={skeletonStyles.skeleton}></Button>
        </div>
        <div className={classNames(styles.film_text, skeletonStyles.loading)}>
          <div className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)} />
          <div className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)} />
          <div className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)} />
          <div className={classNames(skeletonStyles.skeleton_text, skeletonStyles.skeleton)} />
        </div>
      </div>
    </div>
  );
};
