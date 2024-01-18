"use client";

import Image from "next/image";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";

const TransparentNavBar = () => {
  return (
    <header className="flex w-full items-center h-[130px] max-h-[130px] px-[3%] py-[10px] md:px-[10%]">
      <div className="flex flex-col justify-center w-8/12 md:w-2/12">
        <img
          src="/img/rethought-real-estate-light-logo.svg"
          className="w-full md:max-h-[50]"
          alt="reThought Real Estate Logo"
        />
      </div>
      <div className="flex w-10/12 justify-end items-center text-white">
        <Bars3Icon className="bg-reGreen size-[60px] p-[10px]" />
      </div>
    </header>
  );
};

export default TransparentNavBar;
