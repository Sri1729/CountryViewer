import { observer } from "mobx-react-lite";
import Image from "next/image";
import React from "react";
import { useStore } from "../../providers";
import { Details } from "./Details";

export const CountryDetail: React.FC = observer(() => {
  const store = useStore();
  const country = store?.countries?.selectedCountry;

  console.log(country, "country");
  return (
    <div className="flex flex-col w-full mt-10 sm:flex-row sm:justify-between sm:items-center">
      <Image
        width={300}
        height={300}
        src={country?.flags?.png || ""}
        alt={`flag-${country?.name?.common}`}
      />

      <div className="flex mt-2 sm:ml-5 sm:mt-0">
        <Details />
      </div>
    </div>
  );
});
