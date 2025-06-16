"use client";

import Image from "next/image";
import { FC, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle: FC = ({}) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="relative flex bg-black justify-between items-center cursor-pointer rounded-[50px] w-[40px] h-[20px]"
      onClick={toggleTheme}
    >
      <Image src="/sun.png" alt="sun" width={24} height={24} />
      <div className="w-[15px] h-[15px] bg-white rounded-[50%] absolute left-0"></div>
      <Image src="/moon.png" alt="moon" width={24} height={24} />
    </div>
  );
};

export default ThemeToggle;
