import React, { FC } from "react";
import { SearchBox, FilterDropdown, Countries } from "../../components";

export const AllCountries: FC = () => {
  return (
    <div className="flex-col flex-1 h-fit">
      {/* Searchbox and filter */}
      <div className="flex flex-1 h-fit flex-col sm:flex-row justify-between">
        <div>
          <SearchBox />
        </div>
        <div className="mt-5 sm:mt-0">
          <FilterDropdown />
        </div>
      </div>

      {/* Countries List */}
      <div className="flex flex-1">
        <Countries />
      </div>
    </div>
  );
};
