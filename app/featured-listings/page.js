import { NextResponse } from "next/server";
import MapBoxF from "../_components/MapBoxF";

const getFeaturedListings = async () => {
  try {
    const res = await fetch(`${process.env.HOMEJUNCTION_RE_LITINGS_URI}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics", res);
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { result: { listings: [] } }; // Return an empty array or handle the error gracefully
  }
};

export default async function ListingsList() {
  const { result } = await getFeaturedListings();
  const listings = result.listings || [];

  return (
    <>
    <MapBoxF listingsResults={listings}/>
    <div className="container mx-auto min-h-64 py-14 px-4">
      <h1 className="text-reGreen text-2xl font-heading font-semibold text-center text-lg">Real Simple. Real Skills. Real Results.</h1>
      <h1 className="text-reBlue text-5xl font-heading font-semibold text-center lh-10">#reElevated <br/>Exclusive Listings</h1>
      <p className="text-reDark text-md py-3 text-center md:px-[20%] pb-9">Our exclusive MLS listings are meticulously curated to showcase some of the finest properties in the Racine, Milwaukee, and Waukeha Counties. Whether you're in search of a cozy family home, a luxurious estate, or a prime commercial space, our listings cover a diverse range of options.</p>
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {listings.map((file) => (
          <li key={file.id} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-reGreen focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img src={file.images[0]} alt="" className="pointer-events-none object-cover group-hover:scale-110 group-hover:opacity-75  transition-transform" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.address.deliveryAddress}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.zip}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
