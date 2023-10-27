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
      className={classNames(styles.root, className, {})}
    >
      {children}
    </button>
  );
};
