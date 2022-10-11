import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../providers";

export const Details: React.FC = observer(() => {
  const store = useStore();
  const country = store?.countries?.selectedCountry;

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="text-2xl font-bold dark:text-white">
        {country?.name?.common}
      </h2>

      <div className="flex flex-col mt-4 font-normal sm:flex-row ">
        <div>
          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Native Name : </span>
              {Object.values(country?.name?.nativeName || {})?.[0]?.official}
            </>
          </h6>

          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Population : </span>
              {country?.population}
            </>
          </h6>

          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Region : </span>
              {country?.region}
            </>
          </h6>

          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Sub Region : </span>
              {country?.subregion}
            </>
          </h6>

          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Capital : </span>
              {country?.capital?.map((item, index) =>
                index !== country?.capital.length - 1 ? `${item}, ` : `${item}`
              )}
            </>
          </h6>
        </div>

        <div className="mt-5 sm:ml-10 md:ml-20 sm:mt-0">
          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Top Level Domain : </span>
              {country?.tld.map((item, index) =>
                index !== country?.tld.length - 1 ? `${item}, ` : `${item}`
              )}
            </>
          </h6>

          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Currencies : </span>
              {Object.values(country?.currencies || {}).map((item, index) =>
                Object.values(country?.currencies || {}).length - 1 != index
                  ? `${item.name}, `
                  : `${item.name}`
              )}
            </>
          </h6>

          <h6 className="text-sm mt-2 overflow-hidden dark:text-white">
            <>
              <span className="font-medium">Languages : </span>
              {Object.values(country?.languages || {}).map((item, index) =>
                Object.values(country?.languages || {}).length - 1 !== index
                  ? `${item}, `
                  : `${item}`
              )}
            </>
          </h6>
        </div>
      </div>

      <div className="flex flex-col text-sm mt-6 font-normal overflow-hidden sm:flex-row sm:items-center dark:text-white">
        <h6>
          <span className="font-medium">Border Countries : </span>
        </h6>
        <div className="flex flex-row flex-wrap p-1">
          {country?.borders?.length === 0 ||
            (!country?.borders && <p className="dark:text-white">N.A.</p>)}
          {country?.borders?.map((item) => (
            <button
              onClick={() => {
                store?.countries?.onBorderCountryPress(item);
              }}
              className="text-sm px-3 py-[1px] my-1 mr-4 rounded-md shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white dark:bg-darkBlue"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
