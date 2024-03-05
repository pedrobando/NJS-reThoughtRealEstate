import Link from "next/link";
import React from "react";
import ButtonsExclusiveListingsDrawer from "./ButtonsExclusiveListingsDrawer"

const ButtonsExclusiveListings = ({listing}) => {
  return (
    <div className="flex mx-auto flex-col md:flex-row  items-center md:items-start justify-center pt-[40px] text-white gap-x-6 gap-y-6">
     
        <Link
          className="border rounded-lg text-white text-center font-heading px-2 md:px-5 py-2 text-lg md:text-s hover:scale-95 transition md:text-base"
          href="/exclusive-listings"
        >
          MORE EXCLUSIVE LISTINGS
        </Link>
   
        <ButtonsExclusiveListingsDrawer  listing={listing}/>
    
    </div>
  );
};

export default ButtonsExclusiveListings;
