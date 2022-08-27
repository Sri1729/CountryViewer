import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBox = () => {
  return (
    <div className="flex flex-row p-2 items-center rounded-md shadow-[0px_0px_5px_rgba(0,0,0,0.25)] dark:bg-darkBlue">
      <label htmlFor="search-box" className="px-4">
        <AiOutlineSearch
          size={20}
          className="text-gray-500 dark:text-gray-300"
        />
      </label>

      <input
        className="min-w-[300px] dark:text-gray-300 dark:placeholder:text-gray-400 bg-transparent focus:outline-none"
        id="search-box"
        placeholder="Search for a country..."
      />
    </div>
  );
};
