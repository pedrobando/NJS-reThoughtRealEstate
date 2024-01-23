"use client";
import NavBarSlide from "./NavBarSlide";

const TransparentNavBar = () => {
  return (
    <header className="flex container mx-auto px-3 w-full items-center h-[130px] max-h-[130px] bg-none z-10">
      <div className="flex flex-col justify-center w-8/12 md:w-2/12">
        <img
          src="/img/rethought-real-estate-light-logo.svg"
          className="w-full md:w-[100%] hover:scale-105 transition-transform"
          alt="reThought Real Estate Logo"
        />
      </div>
      <div className="flex w-10/12 justify-end items-center text-white">
        <NavBarSlide />
      </div>
    </header>
  );
};

export default TransparentNavBar;
