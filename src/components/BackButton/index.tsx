import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export const BackButton: React.FC = () => {
  return (
    <Link href={"/"}>
      <button className="flex flex-row items-center px-4 py-1 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.25)] bg-white dark:bg-darkBlue">
        <IoMdArrowBack className="text-black dark:text-white" />
        <p className="pl-2 font-light text-black dark:text-white">Back</p>
      </button>
    </Link>
  );
};
