import MapBoxF from "../../_components/MapBoxF";
import Link from "next/link";
import getFeaturedListings from "@/utils/getFeaturedListings";
import ExclusiveListingsCards from "../../_components/listings/ExclusiveListingsCards";
import LoadingListingCard from "../../_components/ui/LoadingUI/LoadingListingCard"
import { Suspense } from "react";
import LoadingListingsMapBox from "../../_components/ui/LoadingUI/LoadingListingsMapBox"
import { delay } from "@/utils/getFeaturedListing";

export async function generateMetadata({ params, searchParams }, parent) { 
  return {
    title: "Exclusive Listings",
    description: "Our exclusive MLS listings are meticulously curated to showcase some of the finest properties in the Racine, Milwaukee, and Waukeha Counties. ",
  };
}


export default async function ListingsList() {
  const data = await getFeaturedListings();
  const listings = data.result.listings;
  
  return (
    <>
    <Suspense fallback={<LoadingListingsMapBox/>}>
     <MapBoxF listingsResults={listings} /> 
      </Suspense>
      
      <div className="container mx-auto min-h-64 py-14 px-4">
        <h1 className="text-reGreen text-2xl font-heading font-semibold text-center text-lg">
          Real Simple. Real Skills. Real Results.
        </h1>
        <h1 className="text-reBlue text-5xl font-heading font-semibold text-center lh-10">
          Exclusive Listings
        </h1>
        <p className="text-reDark text-md py-3 text-center md:px-[20%] pb-9">
          Our exclusive MLS listings are meticulously curated to showcase some
          of the finest properties in the Racine, Milwaukee, and Waukeha
          Counties. Whether you're in search of a cozy family home, a luxurious
          estate, or a prime commercial space, our listings cover a diverse
          range of options.
        </p>
        <Suspense fallback={<LoadingListingCard number="10"/>}>
          <ExclusiveListingsCards listings={listings} />
        </Suspense>
 
        
      </div>
    </>
  );
}
