import React from "react";
import { SearchBox, FilterDropdown } from "../../components";

export const AllCountries = () => {
  return (
    <div className="flex flex-1 h-full bg-transparent dark:bg-darkerBlue">
      <div className="flex flex-1 flex-row m-10 justify-between">
        <div className="">
          <SearchBox />
        </div>
        <div>
          <FilterDropdown />
        </div>
      </div>
    </div>
  );
};
