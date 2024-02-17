import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExclusiveListingsCards = async ({ listings }) => {
   
  return (
    <div className="mx-auto mt-5 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {listings.map((listing, index) => (
        <Link
          href={`/exclusive-listings/${listing.id}`}
          className="hover:scale-110 transition-transform"
        >
          <article
            key={listing.index}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <div className="absolute inset-0 -z-10 h-full w-full object-cover">
              <Image
                src={listing.images[0]}
                alt={listing.address.deliveryLine}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div className="flex-col">
              <span className="text-xs text-gray-300 py-1 ">
                {listing.propertyType}
              </span>
              <div className=" ">
                <div className="mt-2 block truncate text-lg font-medium text-gray-200">
                  ${new Intl.NumberFormat().format(listing.listPrice)}
                  {listing.status == "Active" && (
                    <span className="ml-1 py-1 px-2 text-xs text-white bg-reGreen rounded-md">
                      {listing.status}
                    </span>
                  )}
                  {listing.status == "Pending" && (
                    <span className="ml-1 py-1 px-2 text-xs text-white bg-reRed rounded-md">
                      {listing.status}
                    </span>
                  )}
                  {listing.xf_list_19 == "With Offer" && (
                    <span className="ml-1 py-1 px-2 text-xs text-white bg-reBlue rounded-md">
                      Contingent
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 overflow-hidden text-base leading-6 text-gray-300">
              {listing.propertyType !== "Multi-family" && (
                <>
                  {listing.beds && (
                    <span className="mt-1">{listing.beds} Beds</span>
                  )}

                  {listing.baths && (
                    <span className="mt-1">
                      {listing.baths.full} / {listing.baths.half} Baths
                    </span>
                  )}

                  {listing.xf_list_25 && (
                    <span className="mt-1">
                      {listing.xf_list_25} Parking(s)
                    </span>
                  )}
                </>
              )}

              {listing.propertyType === "Multi-family" && (
                <>
                  {listing.xf_list_70 && (
                    <span className="mt-1">
                      {listing.xf_list_70} Total Units
                    </span>
                  )}
                </>
              )}

              {listing.size ? (
                <span className="mt-1">
                  {new Intl.NumberFormat().format(listing.size)} Sqft
                </span>
              ) : (
                <span className="mt-1">
                  {new Intl.NumberFormat().format(listing.lotSize.sqft)} Sqft
                </span>
              )}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <span className="absolute inset-0" />
              {listing.address.deliveryLine}
              <br />
              <span className="text-sm">
                {listing.address.city} {listing.address.state},{" "}
                {listing.address.zip}
              </span>
            </h3>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ExclusiveListingsCards;
