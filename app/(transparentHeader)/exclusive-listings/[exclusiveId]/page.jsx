import MapBoxSingle from "@/components/MapBoxSingle";
import SwiperCarousel from "@/components/exclusive-listings/SwiperCarousel";
import ListingHeaderInfo from "@/components/listings/ListingsHeaderInfo";
import ButtonsExclusiveListings from "@/components/exclusive-listings/ButtonsExclusiveListings";
import ListingInformationAccordion from "@/components/listings/ListingInformationAccordion";
import SchoolInformationAccordion from "@/components/listings/SchoolInformationAccordion";
import ListingImageGallery from "@/components/exclusive-listings/ListingImageGallery";
import AgentTestimonials from "@/components/agents/AgentTestimonials";
import { calculateDaysFromUnix } from "@/utils/calculateDaysFromUnix";
import HeaderInfo from "@/components/exclusive-listings/HeaderInfo";
import Image from "next/image";
import { Suspense } from "react";
import getFeaturedListing from "@/utils/getFeaturedListing";
import { notFound } from "next/navigation";
import DescriptionMetadata from "@/components/listings/metadata/DescriptionMetadata";
import getFeaturedListingApi from "@/utils/getFeaturedListingsApi";
import ExclusiveListingContact from "@/components/exclusive-listings/ExclusiveListingContact"
import getAgent from "@/utils/getAgent"

//export const dynamic = "force-static";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.exclusiveId;

  // fetch data
  const propertyData = await getFeaturedListing(id);
  if (propertyData.success) {
    const property = propertyData.result.listings[0];

    return {
      title: `For Sale | ${property.address.deliveryLine} ${property.address.city}, ${property.address.state} ${property.address.zip}`,
      description: property.description,
      //openGraph:{
      // images: `/api/og?propertytype=${property.propertyType}&deliveryLine=${property.address.deliveryLine}&city=${property.address.city}&state=${property.address.state}&zip=${property.address.zip}&imgUrl=${property.images[0]}`
      //}
    };
  }
}

export default async function ExclusiveListing(exclusiveId) {
  //const { result } = await getFeaturedListing(exclusiveId.params.exclusiveId);
  const { result } = await getFeaturedListingApi(
    exclusiveId.params.exclusiveId
  );

  if (
    result.responses[0].result.invalid ||
    result.responses[0].result.listings[0].listingOffice.id !== "of27022"
  ) {
    notFound();
  }

  

  const listing = await result.responses[0].result.listings[0];
  const schools = await result.responses[1].result.schools;
  const agent = await getAgent(listing.listingAgent.email)
  
  const place = "ChIJb7MfaNYXBYgRgx-s57Z2YfI";

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="bg-white w-full z-0 text-reText">
      <div className="relative flex flex-col items-center justify-end bg-gradient-to-t from-neutral-950 to-[#1d2b0f] w-full mt-[-185px] mb-[-25px] min-h-[700px] 2xl:min-h-screen  -z-[120]  ">
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.1,
            minHeight: "100vh",
            zIndex: "-100",
          }}
          src={listing.images[0]}
          alt="Cover"
          fill={true}
          priority={true}
        />
        <div
          id="mainInfo"
          className="flex flex-col pb-[70px] md:pb-[80px] place-content-center place-items-center   container mx-auto w-full z-50 justify-end px-4 bg-transparent min-h-[700px]"
        >
          <HeaderInfo listing={listing} />
          <ListingHeaderInfo listing={listing} />
          <ButtonsExclusiveListings  listing={listing} />
        </div>
      </div>
      <SwiperCarousel listing={listing} />

      <main className="bg-white">
        <section className="flex container mx-auto relative bg-white gap-x-3">
          <div className="relative w-full mx-auto px-4 lg:pt-32 pt-14">
            <h2 className="text-4xl font-heading font-semibold tracking-tight text-white md:text-5xl lg:text-6xl w-fit bg-gradient-to-r from-reGreen to-lime-600 p-3 rounded-lg">
              About {listing.xf_list_31} {listing.xf_list_33}{" "}
              {listing.xf_list_34}
            </h2>

            <div className="flex container flex-col justify lg:flex-row lg:items-center lg:place-items-center pr-4 gap-x-9">
              {listing.status === "Pending" && (
                <div className="font-heading text-lg  my-3">
                  <span className="text-reText">Status: </span>
                  <span className="text-reRed font-semibold">
                    {listing.status}
                  </span>
                </div>
              )}
              {listing.status === "Active" &&
                listing.xf_list_19 !== "With Offer" && (
                  <div className="font-heading text-lg  my-3">
                    <span className="text-reText">Status: </span>
                    <span className="text-reGreen font-semibold ">
                      {listing.status}
                    </span>
                  </div>
                )}
              {listing.xf_list_19 === "With Offer" && (
                <div className="font-heading text-lg  my-3">
                  <span className="text-reText">Status: </span>
                  <span className="text-reBlue font-semibold">Contingent </span>
                </div>
              )}
              {listing.subdivision && (
                <div className="font-heading text-lg  my-3">
                  <span className="text-reText">Subdivision: </span>
                  <span className="text-reText font-semibold">
                    {listing.subdivision}
                  </span>
                </div>
              )}
              <div className="font-heading text-lg my-3">
                <span className="text-reText">Listed: </span>
                <span className="font-semibold text-reText">
                  {calculateDaysFromUnix(listing.listingDate)} days ago
                </span>
              </div>
              <div className="font-heading text-lg lg:text-4xl my-3  lg:ml-auto lg:mr-6">
                <span className="md:hidden text-reText">Offered At: </span>
                <span className=" font-semibold text-reText">
                  {USDollar.format(listing.listPrice)}
                </span>
              </div>
            </div>
            <p className="mt-6 text-xl font-body text-reBody leading-9">
              {listing.description}
            </p>
          </div>

          <div className="hidden xl:absolute xl:inline-flex top-[80px] -right-[440px] md:opacity-10 overflow-hidden">
            <span className="text-reDark font-heading text-[150px] font-bold">
              {USDollar.format(listing.listPrice)}
            </span>
          </div>
        </section>

        <section
          className="flex flex-col md:flex-row container mx-auto  px-3 pb-32 lg:gap-x-3 items-start place-items-center"
          aria-labelledby="listing-information"
        >
          <div className="w-full px-3 lg:basis-10/12 mt-16 mx-auto">
            <ListingInformationAccordion listing={listing} />
          </div>
          <div className="w-full px-3 lg:basis-10/12 mt-16 mx-auto">
            <SchoolInformationAccordion schools={schools} />
          </div>
        </section>
       
        <section className="flex container max-h-[450px]" aria-labelledby="listing-map">
          <Suspense fallback={<h1 className="text-reDark">Loading......</h1>}>
            <MapBoxSingle listingCoordinates={listing.coordinates} />
          </Suspense>
        </section>
        <section className="bg-reDark min-h-[450px] pb-[120px]" aria-labelledby="listing-location-blurb">
          <div className="flex container mx-auto items-center pt-14 px-4">
            <div className="block px-2 md:px-14 pt-[80px]  md:pt-[180px]">
              <h3 className="text-white text-3xl font-heading text-center md:text-left">
                {listing.address.deliveryLine} is a {listing.propertyType}{" "}
                property located in the city of {listing.address.city} which is
                located in {listing.county} county.
              </h3>
              <ButtonsExclusiveListings listing={listing} />
            </div>
          </div>
        </section>
        <section className="bg-reDark h-auto md:min-h-[213px] md:max-h-[420px] overflow-auto" aria-labelledby="listing-photos">
          <ListingImageGallery images={listing.images} />
        </section>
        <section aria-labelledby="agent-testimonials">
          <Suspense fallback={<h1 className="text-reDark">Loading......</h1>}>
            <AgentTestimonials listing={listing} placeId={agent.placeId || place} />
          </Suspense>
        </section>
        <section aria-labelledby="contact-form" className="flex flex-col md:flex-row container mx-auto lg:gap-x-3 content-end px-3">
          <Suspense fallback={<h1 className="text-reDark">Loading......</h1>}>
            <ExclusiveListingContact listing={listing} photoUrl={agent.listingsImg} agent={agent} />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
