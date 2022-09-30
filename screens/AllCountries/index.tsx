import React, { FC } from "react";
import { SearchBox, FilterDropdown, Countries } from "../../components";
import { Country } from "../../types";

interface AllCountriesProps {
  countries: Country[];
}

export const AllCountries: FC<AllCountriesProps> = ({ countries }) => {
  return (
    <div className="flex-col flex-1  h-fit">
      {/* Searchbox and filter */}
      <div className="flex flex-1 h-fit flex-row justify-between">
        <div>
          <SearchBox />
        </div>
        <div>
          <FilterDropdown />
        </div>
      </div>

      {/* Countries List */}
      <div className="flex flex-1">
        <Countries data={countries} />
      </div>
    </div>
  );
};
