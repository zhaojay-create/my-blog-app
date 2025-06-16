"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { FC, useContext } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
