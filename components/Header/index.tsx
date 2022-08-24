import React from "react";
import { Toggle } from "./Toggle";

export const Header = () => {
  return (
    <div className="flex flex-1 p-5 justify-between drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] bg-white dark:bg-darkBlue">
      <h1 className="text-xl font-bold dark:text-white sm:text-2xl">
        Where in the world?
      </h1>
      <Toggle />
    </div>
  );
};
