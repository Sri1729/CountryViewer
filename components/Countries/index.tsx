import React, { FC } from "react";
import { Country } from "../../types";
import { CountryCard } from "./CountryCard";

interface CountriesProps {
  data: Country[];
}

export const Countries: FC<CountriesProps> = ({ data }) => {
  return (
    <div className="flex flex-1 flex-row flex-wrap mt-5 justify-between">
      {data.map((item, index) => (
        <div key={`country-${index}`} className="mb-16">
          <CountryCard country={item} />
        </div>
      ))}
    </div>
  );
};
