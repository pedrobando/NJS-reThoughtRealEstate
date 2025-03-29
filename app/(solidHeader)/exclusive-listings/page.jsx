import getFeaturedListings from "@/app/_utils/getFeaturedListings";
import ExclusiveListingsCards from "../../_components/listings/ExclusiveListingsCards";
import LoadingListingCard from "../../_components/ui/LoadingUI/LoadingListingCard";
import { Suspense } from "react";
import FailedFetch from "@/components/ui/ErrorUI/FailedFetch";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Exclusive Listings",
    description:
      "Our exclusive MLS listings are meticulously curated to showcase some of the finest properties in the Racine, Milwaukee, and Waukeha Counties. ",
  };
}

export const dynamic = "force-dynamic";

async function ExclusiveListings() {
  try {
    const data = await getFeaturedListings();
    const listings = data?.result?.listings || [];
    if (listings.length === 0) {
      return <FailedFetch />;
    }
    return <ExclusiveListingsCards listings={data.result.listings} />;
  } catch (error) {
    console.error("Error in ListingsContent:", error);
    return (
      <div className="p-4 text-center">
        Unable to load listings. Please try again later.
      </div>
    );
  }
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
          Counties in Southeastern Wisconsin and Osceola, Orange, and Polk
          County in Central Florida. Whether you're in search of a cozy family
          home, a luxurious estate, or a prime commercial space, our listings
          cover a diverse range of options.
        </p>
        <Suspense fallback={<LoadingListingCard number={6} />}>
          <ExclusiveListings />
        </Suspense>
      </section>
    </>
  );
}
