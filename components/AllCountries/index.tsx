import React from "react";
import { SearchBox } from "../SearchBox";

export const AllCountries = () => {
  return (
    <div className="flex flex-1 h-full bg-transparent dark:bg-darkBlue">
      <div className="m-10">
        <SearchBox />
      </div>
    </div>
  );
};
