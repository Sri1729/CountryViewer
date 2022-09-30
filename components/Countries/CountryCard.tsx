import Image from "next/image";
import React, { FC } from "react";
import { Country } from "../../types";

interface countryCardProps {
  country: Country;
}
export const CountryCard: FC<countryCardProps> = ({ country }) => {
  return (
    <div className="flex-col rounded-lg h-fit w-fit shadow-[0px_0px_5px_rgba(0,0,0,0.25)]">
      {/* Flag */}
      <div
        className="rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.25)]"
        style={{ position: "relative", width: "220px", height: "150px" }}
      >
        <Image
          src={country.flags.png}
          alt={`flag-${country.name.common}`}
          layout="fill"
          style={{ width: "100%", height: "100%" }}
          className="rounded-t-lg"
        />
      </div>

      {/* Desc */}
      <div className="p-4 pb-6 shadow-2xl">
        {/* Name */}
        <h2 className="font-bold text-lg overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px] dark:text-white dark:font-semibold">
          {country.name.common}
        </h2>

        <h6 className="text-sm mt-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px] dark:text-white">
          <span className="font-semibold dark:font-medium">Population:</span>{" "}
          {country.population}
        </h6>
        <h6 className="text-sm overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px] dark:text-white">
          {" "}
          <span className="font-semibold dark:font-medium">Region:</span>{" "}
          {country.region}
        </h6>
        <h6 className="text-sm overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px] dark:text-white">
          <span className="font-semibold dark:font-medium">Capital:</span>{" "}
          {country.capital?.[0]}
        </h6>
      </div>
    </div>
  );
};
