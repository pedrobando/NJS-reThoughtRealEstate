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
import ListingInformationAccordion from "../../_components/listings/ListingInformationAccordion"
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
          className="flex container mx-auto  px-3 pb-32 lg:gap-x-3 items-center place-items-center"
          aria-labelledby="listing-information"
        >
          <div className="w-full px-3 lg:basis-10/12 mt-16 mx-auto">
            <ListingInformationAccordion listing={listing}/>
          </div>
          <div className="w-full px-3 lg:basis-10/12 mt-16 mx-auto">
            <ListingInformationAccordion listing={listing}/>
          </div>
        </section>
        <section className="flex container max-h-[450px]">
          <MapBoxSingle listingCoordinates={listing.coordinates} />
        </section>
        <section className="bg-reDark min-h-[450px] pb-[80px]">
          <div className="flex container mx-auto items-center pt-14 px-4">
            <div className="block px-2 md:px-14 pt-[80px]  md:pt-[180px]">
              <h5 className="text-white text-3xl font-heading">
                {listing.address.deliveryLine} is a {listing.propertyType}{" "}
                property located in the city of {listing.address.city} which is
                located in {listing.county} county.
              </h5>
              <div className="flex container flex-col md:flex-row gap-y-9 items-center md:items-start justify-center md:gap-x-9 pt-12">
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
       
      </main>
    </div>
  );
}
