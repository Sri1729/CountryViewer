import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { SearchBox, FilterDropdown, Countries } from "../../components";
import { useStore } from "../../providers";

export const AllCountries: FC = observer(() => {
  const store = useStore();
  const region = store?.countries?.selectedRegion;

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

      <div>
        <h2 className="mt-5 mb-5 text-base font-medium dark:text-white">
          Searching Region :{" "}
          <span className="text-lg font-bold">
            {region ? region : "All Regions"}
          </span>
        </h2>
      </div>

      {/* Countries List */}
      <div className="flex flex-1">
        <Countries />
      </div>
    </div>
  );
});
