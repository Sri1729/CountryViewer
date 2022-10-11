import React, { FC } from "react";
import { useStore } from "../../providers";
import { observer } from "mobx-react-lite";
import { CountryCard } from "./CountryCard";

export const Countries: FC = observer(() => {
  const store = useStore();
  const countriesData = store?.countries?.countriesList;
  return (
    <div className="flex flex-1 flex-row flex-wrap mt-5 justify-between">
      {countriesData.length === 0 && (
        <p className="dark:text-white">
          No Country found with the search string and selected region.
        </p>
      )}
      {countriesData.map((item, index) => (
        <div key={`country-${index}`} className="mb-16">
          <CountryCard country={item} />
        </div>
      ))}
    </div>
  );
});
