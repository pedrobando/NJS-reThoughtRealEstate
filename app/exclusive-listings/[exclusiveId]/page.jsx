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
import ButtonsExclusiveListings from "../../_components/exclusive-listings/ButtonsExclusiveListings"
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
let listing = []
  if (listing.length === 0) {
    const { result } = await getExclusiveListing(exclusiveId);
    listing = result.listings[0]
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
          ):(

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
        <div className="container w-11/12 mx-auto relative bg-white pb-10">
          <div className="relative mx-auto px-3 py-24 sm:py-32">
            <h1 className="text-4xl font-heading font-semibold tracking-tight text-reText md:text-5xl lg:text-6xl">
              About {listing.xf_list_31}
            </h1>

            <div className="flex max-w-lg justify-between items-center place-items-center">
              {listing.status === "Pending" && (
                <div className="font-heading text-lg  md:pt-2">
                  <span className="text-reText">Status: </span>
                  <span className="text-reText font-semibold">
                    {listing.status}
                  </span>
                </div>
              )}
              {listing.status === "Active" &&
                listing.xf_list_19 !== "With Offer" && (
                  <div className="font-heading text-lg  md:pt-2">
                    <span className="text-reText">Status: </span>
                    <span className="text-reGreen font-semibold ">
                      {listing.status}
                    </span>
                  </div>
                )}
              {listing.xf_list_19 === "With Offer" && (
                <div className="font-heading text-lg  md:pt-2">
                  <span className="text-reText">Status: </span>
                  <span className="text-reText font-semibold">Contingent </span>
                </div>
              )}
              <div className="font-heading text-lg pt-2">
                <span className="text-reText">Listed:</span>
                <span className="font-semibold text-reText">
                  {" "}
                  {calculateDaysFromUnix(listing.listingDate)} days ago
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-xl font-body text-neutral-500">
              {listing.description}
            </p>
            <div className="flex xl:hidden flex-col mt-16">
              <span className="pt-[40px] text-reDark font-heading text-5xl font-semibold">
                {USDollar.format(listing.listPrice)}
              </span>
              <span className=" text-reDark text-xl mt-[5px]">
                Asking Price
              </span>
            </div>

            <div className="hidden xl:absolute xl:inline-flex top-[100px] -right-[440px] md:opacity-10 overflow-hidden">
              {" "}
              <span className="text-reDark font-heading text-[150px] font-bold">
                {USDollar.format(listing.listPrice)}
              </span>
            </div>
            <div className="hidden xl:absolute xl:inline-flex md:flex-col top-[250px] right-0">
              {" "}
              <span className=" text-reDark font-heading text-[60px] font-semibold ">
                {USDollar.format(listing.listPrice)}
              </span>
              <span className=" text-reDark text-xl mt-[-15px]">
                Asking Price
              </span>
              <div className="flex mt-6 w-full">
                <button className="w-full rounded-lg text-white font-heading px-7 md:px-8 py-3 text-xl bg-reGreen border-reGreen hover:scale-105 transition">
                  SCHEDULE A SHOWING
                </button>
              </div>
            </div>
          </div>
        </div>

        <section
          className="flex container w-11/12 mx-auto relative z-10 -mt-32 px-3 pb-32 xl:gap-x-6"
          aria-labelledby="listing-information"
        >
          <div className="grow xl:grow-0 xl:basis-8/12 py-5 mt-16">
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
        <section className="overflow-visible -skew-y-3 bg-reDark min-h-[550px] py-16">
          <div className="flex container mx-auto items-center">
            <div className="basis-8/12 min-h-[300px]">kkk</div>
            <div className="basis-4/12">
              <MapBoxSingle listingCoordinates={listing.coordinates} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
