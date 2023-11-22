import { Fragment } from "react";
import { FilmsSortBar } from "../FilmsSortBar/component";
import { Button } from "../Button/component";
import styles from "./stylesContainer.module.css";
import stylesComponent from "./stylesComponent.module.css";
import classNames from "classnames";
import { SkeletonMovie } from "../Movie/loading";

type CompProps = {
  filmsViewType: string;
};

const skeletonArray = [1, 2, 3, 4, 5, 6, 7];

export const FilmsLoading = ({ filmsViewType }: CompProps) => {
  return (
    <Fragment>
      <div className={styles.root}>
        <FilmsSortBar />
        <div className={styles.view_control}>
          <Button
            switchType={filmsViewType === "table" ? "selected_table" : ""}
            type={`btn_table_view`}
          />
          <Button
            switchType={filmsViewType === "tile" ? "selected_tile" : ""}
            type={`btn_tile_view`}
          />
        </div>
      </div>
      <div
        className={classNames(stylesComponent.root, {
          [stylesComponent.table]: filmsViewType === "table",
          [stylesComponent.tile]: filmsViewType === "tile",
        })}
      >
        {skeletonArray.map((item, index) => (
          <SkeletonMovie filmsViewType={filmsViewType} key={index} />
        ))}
      </div>
    </Fragment>
  );
};
