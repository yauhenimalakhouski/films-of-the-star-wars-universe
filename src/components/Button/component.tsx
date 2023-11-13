import classNames from "classnames";
import styles from "./styles.module.css";
import React from "react";

type AppProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
  switchType?: string;
  className?: { [key: string]: string};
};

export const Button = ({
  children,
  onClick,
  disabled,
  type,
  switchType,
  className,
}: AppProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className, {
        [styles.btn_theme]: type === "btn_theme",
        [styles.btn_favorites]: type === "btn_favorites",
        [styles.btn_table_view]: type === "btn_table_view",
        [styles.btn_tile_view]: type === "btn_tile_view",
        [styles.selected_table]: switchType === "selected_table",
        [styles.selected_tile]: switchType === "selected_tile",
        [styles.btn_favorite]: type === "btn_favorite",
        [styles.btn_favorite_active]: switchType === "active",
      })}
    >
      {children}
    </button>
  );
};
