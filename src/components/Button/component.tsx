import classNames from "classnames";
import styles from "./styles.module.css";
import React from "react";

type AppProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
  switchType?: string;
  className?: { [key: string]: string };
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
      })}
    >
      {children}
    </button>
  );
};
