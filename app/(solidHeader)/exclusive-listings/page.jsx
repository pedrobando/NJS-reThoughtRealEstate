import MapBoxF from "../../_components/MapBoxF";
import Link from "next/link";
import getFeaturedListings from "@/app/_utils/getFeaturedListings";
import ExclusiveListingsCards from "../../_components/listings/ExclusiveListingsCards";
import LoadingListingCard from "../../_components/ui/LoadingUI/LoadingListingCard";
import { Suspense } from "react";
import LoadingListingsMapBox from "../../_components/ui/LoadingUI/LoadingListingsMapBox";
import { delay } from "@/utils/getFeaturedListing";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Exclusive Listings",
    description:
      "Our exclusive MLS listings are meticulously curated to showcase some of the finest properties in the Racine, Milwaukee, and Waukeha Counties. ",
  };
}

async function ListingsContent() {
  const data = await getFeaturedListings();
  
  if (!data || !data.result || !data.result.listings) {
    throw new Error("Failed to fetch listings data");
  }
  
  return <ExclusiveListingsCards listings={data.result.listings} />;
}

export default function ListingsList() {
  return (
    <>
      <section className="container mx-auto min-h-64 py-14 px-4">
        <h1 className="text-reGreen text-2xl font-heading font-semibold text-lg pt-12">
          Homes for Sale
        </h1>
        <h2 className="text-reBlue text-5xl font-heading font-semibold lh-10">
          Exclusive Listings
        </h2>
        <p className="text-reDark text-md py-6 pb-12 w-[80%]">
          Our exclusive MLS listings are meticulously curated to showcase some
          of the finest properties in the Racine, Milwaukee, and Waukeha
          Counties in Southeastern Wisconsin and Osceola, Orange, and Polk County in Central Florida. Whether you're in search of a cozy family home, a luxurious
          estate, or a prime commercial space, our listings cover a diverse
          range of options.
        </p>
        <Suspense fallback={<LoadingListingCard number="10"/>}>
          <ListingsContent />
        </Suspense>
      </section>
    </>
  );
}