import Link from "next/link";
import React from "react";

const ButtonsExclusiveListings = () => {
  return (
    <div className="flex mx-auto z-10 items-center justify-end pt-[40px] text-white gap-x-6 gap-y-6">
      <div className="flex">
        <a
          className="border rounded-lg text-white text-center font-heading px-2 md:px-5 py-2 text-xs hover:scale-95 transition md:text-base"
          href="/exclusive-listings"
        >
          MORE EXCLUSIVE LISTINGS
        </a>
      </div>
      <div className="flex">
        <button className="rounded-lg text-white font-heading md:px-8 py-2 text-xs px-3 bg-reGreen motion-safe:animate-pulse border-reGreen hover:scale-105 transition md:text-base">
          I WANT TO SEE IT
        </button>
      </div>
    </div>
  );
};

export default ButtonsExclusiveListings;
