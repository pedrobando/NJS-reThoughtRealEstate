import MapBoxF from "../../_components/MapBoxF";
import Link from "next/link";
import getFeaturedListings from "../../_utils/getFeaturedListings"



export default async function ListingsList() {
  const data = await getFeaturedListings();
  const listings = data.result.listings
  
  return (
    <>
      <MapBoxF listingsResults={listings} />
      <div className="container mx-auto min-h-64 py-14 px-4">
        <h1 className="text-reGreen text-2xl font-heading font-semibold text-center text-lg">
          Real Simple. Real Skills. Real Results.
        </h1>
        <h1 className="text-reBlue text-5xl font-heading font-semibold text-center lh-10">
          #reElevated <br />
          Exclusive Listings
        </h1>
        <p className="text-reDark text-md py-3 text-center md:px-[20%] pb-9">
          Our exclusive MLS listings are meticulously curated to showcase some
          of the finest properties in the Racine, Milwaukee, and Waukeha
          Counties. Whether you're in search of a cozy family home, a luxurious
          estate, or a prime commercial space, our listings cover a diverse
          range of options.
        </p>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {listings.map((file) => (
            <li
              key={file.id}
              className="cursor-pointer group rounded-lg flex flex-col justify-between border-2 border-solid  border-slate-100 overflow-hidden hover:scale-110 transition-transform"
            >
              <Link
                href={`/exclusive-listings/${file.id}`}
              >
                <div className="group aspect-h-8 aspect-w-10 block w-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-reGreen focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={file.images[0]}
                    alt=""
                    className="pointer-events-none object-cover "
                  />
                </div>
                <span className="text-xs text-reText py-1 px-2 ">
                  {file.propertyType}
                </span>
                <div className=" px-2 ">
                  <p className="mt-2 block truncate text-lg font-medium text-reText">
                    ${new Intl.NumberFormat().format(file.listPrice)}
                    {file.status == "Active" && (
                      <span className="ml-1 py-1 px-2 text-xs text-white bg-reGreen rounded-md">
                        {file.status}
                      </span>
                    )}
                    {file.status == "Pending" && (
                      <span className="ml-1 py-1 px-2 text-xs text-white bg-reRed rounded-md">
                        {file.status}
                      </span>
                    )}
                    {file.xf_list_19 == "With Offer" && (
                      <span className="ml-1 py-1 px-2 text-xs text-white bg-reBlue rounded-md">
                        Contingent
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex gap-2.5 text-reText px-2 text-sm pt-1 font-heading pb-3">
                  {file.beds && (
                    <div className="flex items-center">
                      <span>{file.beds}</span>
                      <span className="pl-1">Beds</span>
                    </div>
                  )}
                  {file.xf_list_66 && file.xf_list_57 && (
                    <div className="flex items-center">
                      <span>{file.xf_list_64 + file.xf_list_68}</span>
                      <span className="pl-1">Beds</span>
                    </div>
                  )}
                  {file.xf_list_64 && file.xf_list_68 && (
                    <div className="flex items-center">
                      <span>{file.xf_list_64 + file.xf_list_68}</span>
                      <span className="pl-1">Baths</span>
                    </div>
                  )}
                  {file.baths && file.baths.full && (
                    <div className="flex items-center">
                      <span>
                        {file.baths.full} / {file.baths.half}
                      </span>
                      <span className="pl-1">Baths</span>
                    </div>
                  )}
                  {file.size !== undefined ? (
                    <div className="flex items-center">
                      <span>{new Intl.NumberFormat().format(file.size)}</span>
                      <span className="pl-1">Sqft</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>
                        {new Intl.NumberFormat().format(file.lotSize.sqft)}{" "}
                        {file.address.deliveryAddress}
                      </span>
                      <span className="pl-1">Sqft Lot</span>
                    </div>
                  )}
                </div>
                <div className=" pb-3 px-2">
                  <p className="spointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                    {file.address.deliveryLine}
                  </p>
                  <p className="pointer-events-none block text-sm font-medium text-gray-500">
                    {file.address.city}, {file.address.state} {file.address.zip}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
