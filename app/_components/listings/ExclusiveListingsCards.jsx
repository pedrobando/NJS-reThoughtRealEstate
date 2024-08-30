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
          key={index}
        >
          <article
            key={index}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
          >
            <div className="absolute inset-0 -z-10 h-full w-full object-cover">
              <Image
                src={listing.images?.[0] ?? '/img/property-coming-soon.webp'}
                alt={listing.address?.deliveryLine}
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
                  {listing.priceChangeTimestamp &&
                    (() => {
                      const priceChangeDate = new Date(
                        listing.priceChangeTimestamp * 1000
                      ); // Convert Unix timestamp to Date object
                      const today = new Date();
                      const threeDaysAgo = new Date(
                        today.getTime() - 3 * 24 * 60 * 60 * 1000
                      ); // Calculate the date 3 days ago

                      if (priceChangeDate >= threeDaysAgo) {
                        return (
                          <span className="ml-1 py-1 px-2 text-xs text-white bg-reRed rounded-md">
                            {listing.listPrice < listing.previousListPrice ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-3 h-3 -mt-1 inline"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 13.5L12 21m0 0-7.5-7.5M12 21V3"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-3 h-3 -mt-1 inline"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 10.5L12 3m0 0 7.5 7.5M12 3v18"
                                />
                              </svg>
                            )}
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(
                              Math.abs(
                                listing.previousListPrice - listing.listPrice
                              )
                            )}
                          </span>
                        );
                      }

                      return null;
                    })()}
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
