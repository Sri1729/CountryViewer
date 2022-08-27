import React from "react";
import { SearchBox, FilterDropdown } from "../../components";

export const AllCountries = () => {
  return (
    <div className="flex flex-1 h-fit">
      <div className="flex flex-1 h-fit flex-row justify-between">
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
