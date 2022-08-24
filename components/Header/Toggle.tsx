import React from "react";
import { useDarkSide } from "../../hooks";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

export const Toggle = () => {
  const [theme, setTheme] = useDarkSide();

  return (
    <button
      className="flex flex-row items-center space-x-2"
      onClick={() => {
        setTheme(theme);
      }}
    >
      {theme === "light" ? <BsFillMoonFill color="white" /> : <BsMoon />}
      <p className=" text-sm font-medium dark:text-white sm:text-base">
        Dark Mode
      </p>
    </button>
  );
};
