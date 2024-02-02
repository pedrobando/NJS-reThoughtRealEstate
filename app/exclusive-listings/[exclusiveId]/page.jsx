import {
  faArrowDownLong,
  faBath,
  faBed,
  faCar,
  faCircleInfo,
  faExpand,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../_components/ui/collapsible";
import MapBoxSingle from "../../_components/MapBoxSingle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import SwiperCarousel from "../../_components/exclusive-listings/SwiperCarousel";
import ButtonsExclusiveListings from "../../_components/exclusive-listings/ButtonsExclusiveListings";
const getExclusiveListing = async (mlsId) => {
  try {
    const res = await fetch(
      `${process.env.HOMEJUNCTION_RE_LITING_URI}${mlsId.params.exclusiveId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topics", res);
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);

    return { result: { listings: [] } }; // Return an empty array or handle the error gracefully
  }
};

export default async function ExclusiveListing(exclusiveId) {
  let listing = [];
  if (listing.length === 0) {
    const { result } = await getExclusiveListing(exclusiveId);
    listing = result.listings[0];
  }

  const calculateDaysFromUnix = (unixTimestamp) => {
    const listingDate = new Date(unixTimestamp * 1000); // Convert UNIX timestamp to JavaScript Date object
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - listingDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert time difference from milliseconds to days
    return differenceInDays;
  };
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="bg-white w-full z-0 text-reText">
      <div className="bg-gradient-to-t from-neutral-950 to-[#1d2b0f] w-full mt-[-185px] ">
        <div
          style={{ backgroundImage: `url(${listing.images[0]})` }}
          className="bg-cover bg-center w-full min-h-screen  opacity-10 object-cover"
        ></div>
      </div>
      <div className="flex flex-col items-center container mx-auto bg-white w-full z-10 justify-center px-4">
        <span className="font-heading text-white mt-[-560px] z-10 text-sm mb-3">
          {listing.propertyType}
        </span>
        <span className="font-heading text-reGreen z-10 text-2xl lg:text-4xl mb-1">
          {listing.address.deliveryLine}
        </span>
        <span className="font-heading font-semibold  text-white z-10 text-xl lg:text-3xl">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </span>
        <div className="flex gap-x-8 md:gap-x-12 mt-9 opacity-60 place-items-center font-body">
          {listing.beds && (
            <div className="exclusive-listings-hero">
              <FontAwesomeIcon icon={faBed} height="20px" />
              <span className="mt-1">{listing.beds} Beds</span>
            </div>
          )}

          {listing.baths && (
            <div className="exclusive-listings-hero">
              <FontAwesomeIcon icon={faBath} height="20px" />
              <span className="mt-1">
                {listing.baths.full} / {listing.baths.half} Baths
              </span>
            </div>
          )}

          {listing.xf_list_25 && (
            <div className="exclusive-listings-hero">
              <FontAwesomeIcon icon={faCar} height="20px" />
              <span className="mt-1">{listing.xf_list_25} Parking(s)</span>
            </div>
          )}
          {listing.size ? (
            <div className="exclusive-listings-hero">
              <FontAwesomeIcon icon={faExpand} height="20px" />
              <span className="mt-1">
                {new Intl.NumberFormat().format(listing.size)} Sqft
              </span>
            </div>
          ) : (
            <div className="exclusive-listings-hero">
              <FontAwesomeIcon icon={faExpand} height="20px" />
              <span className="mt-1">
                {new Intl.NumberFormat().format(listing.lotSize.sqft)} Sqft
              </span>
            </div>
          )}
        </div>

        <ButtonsExclusiveListings />
      </div>
      <SwiperCarousel images={listing.images} />
      <main className="bg-white">
        <section className="flex container mx-auto relative bg-white gap-x-3">
          <div className="relative basis-12/12 mx-auto px-4 lg:pt-32 pt-14">
            <h1 className="text-4xl font-heading font-semibold tracking-tight text-white md:text-5xl lg:text-6xl w-fit bg-gradient-to-r from-reGreen to-lime-600 p-3 rounded-lg">
              About {listing.xf_list_31}
            </h1>

            <div className="flex container flex-col justify lg:flex-row lg:items-center lg:place-items-center pr-4 gap-x-9">
              {listing.status === "Pending" && (
                <div className="font-heading text-lg  my-3">
                  <span className="text-reText">Status: </span>
                  <span className="text-reText font-semibold">
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
                  <span className="text-reText font-semibold">Contingent </span>
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
              <div className="font-heading text-4xl my-3  ml-auto mr-6">
                <span className="font-semibold text-reText">
                  {USDollar.format(listing.listPrice)}
                </span>
              </div>
            </div>
            <p className="mt-6 text-xl font-body text-neutral-500">
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
          className="flex container mx-auto  px-3 pb-32 lg:gap-x-3 items-center place-items-center"
          aria-labelledby="listing-information"
        >
          <div className="lg:basis-10/12 mt-16 mx-auto">
            <h3
              className="text-3xl font-heading text-reText font-semibold pb-6"
              id="listing-information"
            >
              Listing Information
            </h3>
            <div className="info-content-wrap">
              {listing.id && (
                <h6 className="info-content">
                  <span className="data-label ">MLS Number</span>
                  <span className="data-value ">{listing.id}</span>
                </h6>
              )}
              {listing.status && (
                <h6 className="info-content">
                  <span className="data-label">Status</span>
                  <span className="data-value ">
                    {listing.status} {listing.xf_list_19}
                  </span>
                </h6>
              )}
              {listing.listingType && (
                <h6 className="info-content">
                  <span className="data-label ">Listing Type</span>
                  <span className="data-value">{listing.listingType}</span>
                </h6>
              )}
            </div>
            <Collapsible>
              <CollapsibleContent className="transition ease-in-out delay-150">
                {(listing.propertyType || listing.style || listing.size) && (
                  <>
                    {" "}
                    <h3
                      className="text-2xl font-heading font-semibold text-reText py-6"
                      id="listing-information"
                    >
                      Dwelling Info
                    </h3>
                    <div className="info-content-wrap">
                      {listing.propertyType && (
                        <h6 className="info-content">
                          <span className="data-label ">Property Type</span>
                          <span className="data-value ">
                            {listing.propertyType}
                          </span>
                        </h6>
                      )}
                      {listing.style && (
                        <h6 className="info-content ">
                          <span className="data-label ">Style</span>
                          <span className="data-value">{listing.style}</span>
                        </h6>
                      )}
                      {listing.size && (
                        <h6 className="info-content ">
                          <span className="data-label ">Square Feet</span>
                          <span className="data-value">
                            {listing.size} SqFt
                          </span>
                        </h6>
                      )}
                      {listing.lotSize.acres && (
                        <h6 className="info-content ">
                          <span className="data-label ">Lot Size</span>
                          <span className="data-value">
                            {listing.lotSize.acres} acres
                          </span>
                        </h6>
                      )}
                      {listing.yearBuilt && (
                        <h6 className="info-content ">
                          <span className="data-label ">Year Built</span>
                          <span className="data-value">
                            {listing.yearBuilt}
                          </span>
                        </h6>
                      )}
                    </div>
                  </>
                )}
                {(listing.xf_list_75 ||
                  listing.xf_list_74 ||
                  listing.xf_list_76) && (
                  <>
                    {" "}
                    <h3
                      className="text-2xl font-heading font-semibold text-reText py-6"
                      id="listing-information"
                    >
                      Taxes and Zoning
                    </h3>
                    <div className="info-content-wrap">
                      {listing.xf_list_75 && (
                        <h6 className="info-content ">
                          <span className="data-label ">Tax Amount</span>
                          <span className="data-value">
                            {" "}
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(listing.xf_list_75)}
                          </span>
                        </h6>
                      )}
                      {listing.xf_list_76 && (
                        <h6 className="info-content ">
                          <span className="data-label ">Tax Year</span>
                          <span className="data-value">
                            {listing.xf_list_76}
                          </span>
                        </h6>
                      )}
                      {listing.xf_list_74 && (
                        <h6 className="info-content ">
                          <span className="data-label ">Zoning</span>
                          <span className="data-value">
                            {listing.xf_list_74}
                          </span>
                        </h6>
                      )}
                    </div>
                  </>
                )}
              </CollapsibleContent>
              <CollapsibleTrigger className=" border-2 border-reDark px-3 py-3 font-semibold rounded-lg text-sm text-reDark font-heading w-full lg:max-w-[210px] mt-16 hover:bg-reDark hover:text-white hover:scale-105 transition-transform">
                SEE MORE/LESS DETAILS
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </section>
        <section className="flex container max-h-[450px]">
          <MapBoxSingle listingCoordinates={listing.coordinates} />
        </section>
        <section className="bg-reDark min-h-[450px] pb-[80px]">
          <div className="flex container mx-auto items-center pt-14">
            <div className="block px-2 md:px-14 pt-[180px]">
              <h5 className="text-white text-3xl font-heading">
                {listing.address.deliveryLine} is a {listing.propertyType}{" "}
                property located in the city of {listing.address.city} which is
                located in {listing.county} county.
              </h5>
              <div className="flex container justify-center gap-x-9 pt-12">
                <div className="mb-4">
                  <a
                    className="text-white border border-white rounded-lg p-3 hover:scale-105 transition-transform"
                    href="/"
                  >
                    GET PRE APPROVED
                  </a>
                </div>
                <div>
                  <a
                    className="text-white border border-reGreen bg-reGreen rounded-lg p-3 hover:scale-105 transition-transform animate-pulse"
                    href="#"
                  >
                    I WANT TO SEE THIS PROPERTY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex container py-6 px-3 bg-exterior-house bg-no-repeat bg-right">
          <div className="grow py-6 pt-12">
            <h3 className="text-3xl font-heading text-reText font-semibold pb-6">
              Exterior Features
            </h3>
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
}
