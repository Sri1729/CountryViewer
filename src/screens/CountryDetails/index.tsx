import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { BackButton, CountryDetail } from "../../components";
import { useStore } from "../../providers";

export const Country: FC = observer(() => {
  const store = useStore();
  const selectedCountry = store?.countries?.selectedCountry;
  if (!selectedCountry) {
    return (
      <div>
        <div className="flex flex-row items-center">
          <div>
            <BackButton />
          </div>
          <span className="p-5 dark:text-white">
            No Country Selected. Please navigate back and come again.
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-1 flex-col">
      <div>
        <BackButton />
      </div>
      <div className="flex w-full">
        <CountryDetail />
      </div>
    </div>
  );
});
