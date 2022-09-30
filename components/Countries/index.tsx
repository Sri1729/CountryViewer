import React, { FC } from "react";
import { useStore } from "../../providers";

import { CountryCard } from "./CountryCard";

export const Countries: FC = () => {
  const store = useStore();
  const countriesData = store?.countries?.countries;
  return (
    <div className="flex flex-1 flex-row flex-wrap mt-5 justify-between">
      {countriesData.map((item, index) => (
        <div key={`country-${index}`} className="mb-16">
          <CountryCard country={item} />
        </div>
      ))}
    </div>
  );
};
