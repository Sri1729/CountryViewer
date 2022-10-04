import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useStore } from "../../providers";

import { observer } from "mobx-react-lite";

export const FilterDropdown = observer(() => {
  const [open, setOpen] = useState(false);
  const store = useStore();
  const array = store?.countries?.regionsList;

  return (
    <div className="flex justify-start sm:justify-center">
      <div>
        <div className="dropdown relative">
          <button
            onClick={() => setOpen(!open)}
            className="
            min-w-[132px]
          dropdown-toggle
          pl-4
          pr-2
          py-2
          dark:bg-darkBlue
          font-medium
          text-xs
          rounded-md
          shadow-[0px_0px_5px_rgba(0,0,0,0.25)]
          text-gray-500
          dark:text-gray-400
          focus:shadow-lg focus:outline-none focus:ring-0 
          transition
          duration-150
          ease-in-out
          flex
          items-center
          justify-between
        "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {store?.countries?._selectedRegion
              ? store?.countries?._selectedRegion
              : "Filter by Region..."}
            <RiArrowDropDownLine size={25} />
          </button>
          <ul
            className={`
          dropdown-menu
          w-full
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          ${open ? "" : "hidden"}
          m-0
          bg-clip-padding
          border-none
          dark:bg-darkBlue
        `}
            aria-labelledby="dropdownMenuButton1"
          >
            {array.map((item) => (
              <li key={`${item}`}>
                <button
                  onClick={() => {
                    store.countries.selectedRegion = item;
                    setOpen(false);
                  }}
                  className="
                  text-left
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-500
              dark:text-gray-400
              hover:text-gray-400
              dark:hover:text-gray-500
              hover:bg-darkerBlue
              dark:hover:bg-white
            "
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
