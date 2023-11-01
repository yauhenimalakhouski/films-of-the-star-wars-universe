"use client";

import React from "react";
import { useEffect } from "react";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("theme", theme);
    }
  }, []);

  return <>{children}</>;
};
