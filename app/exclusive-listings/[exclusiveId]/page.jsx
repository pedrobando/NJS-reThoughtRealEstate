import {
  faArrowDownLong,
  faBath,
  faBed,
  faCar,
  faCircleInfo,
  faExpand,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import SwiperCarousel from "../../_components/exclusive-listings/SwiperCarousel";

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

    return await res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);

    return { result: { listings: [] } }; // Return an empty array or handle the error gracefully
  }
};

export default async function ExclusiveListing(exclusiveId) {
  const { result } = await getExclusiveListing(exclusiveId);
  const listing = result.listings[0] || [];
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
  const supportLinks = [
    {
      name: "Sales",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: PhoneIcon,
    },
    {
      name: "Technical Support",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: LifebuoyIcon,
    },
    {
      name: "Media Inquiries",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: NewspaperIcon,
    },
  ];
  return (
    <div className=" bg-white w-full z-0">
      <div className="bg-gradient-to-t from-neutral-950 to-[#1d2b0f] w-full mt-[-185px] ">
        <div
          style={{ backgroundImage: `url(${listing.images[0]})` }}
          className="bg-cover bg-center w-full min-h-screen  opacity-10 object-cover"
        ></div>
      </div>
      <div className="flex flex-col items-center container mx-auto bg-white w-full z-10 justify-center">
        <span className="font-heading text-white mt-[-560px] z-10 text-sm mb-3">
          {listing.propertyType}
        </span>
        <span className="font-heading text-reGreen z-10 text-4xl mb-1">
          {listing.address.deliveryLine}
        </span>
        <span className="font-heading font-semibold  text-white z-10 text-3xl">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </span>
        <div className="flex gap-x-8 md:gap-x-12 mt-9 opacity-60 place-items-center font-body">
          <div className="flex flex-col text-white z-10 text-md md:text-xl transform mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faBed} height="20px" />
            <span className="mt-1">{listing.beds} Beds</span>
          </div>

          <div className="flex flex-col font-text text-white z-10 text-md md:text-xl transform mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faBath} height="20px" />
            <span className="mt-1">
              {listing.baths.full} / {listing.baths.half} Baths
            </span>
          </div>

          <div className="flex flex-col font-text text-white z-10 text-md md:text-xl transform mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faCar} height="20px" />
            <span className="mt-1">{listing.xf_list_25} Parking(s)</span>
          </div>
          <div className="flex flex-col font-text text-white z-10 text-md md:text-xl transform mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faExpand} height="20px" />
            <span className="mt-1">
              {new Intl.NumberFormat().format(listing.size)} Sqft
            </span>
          </div>
        </div>
        <div className="flex mx-auto z-10 items-center justify-end pt-[40px] text-white gap-x-6 gap-y-6">
          <div className="flex">
            <button className="border rounded-lg text-white font-heading px-5 py-2 text-sm hover:scale-95 transition">
              MORE EXCLUSIVE LISTINGS
            </button>
          </div>
          <div className="flex">
            <button className="rounded-lg text-white font-heading px-7 md:px-8 py-2 text-sm bg-reGreen motion-safe:animate-pulse border-reGreen hover:scale-105 transition">
              SCHEDULE A SHOWING
            </button>
          </div>
        </div>
      </div>
      <SwiperCarousel images={listing.images} />

      <div className="bg-white">
        {/* Header */}
        <div className="relative bg-white pb-32">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-white mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <h1 className="text-4xl font-heading font-semibold tracking-tight text-reText md:text-5xl lg:text-6xl">
              About {listing.xf_list_31}
            </h1>

            <div className="flex container max-w-lg justify-between items-center place-items-center">
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
            <div className="flex xl:hidden flex-col">
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
              <span className=" text-reDark font-heading text-[60px] font-semibold">
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

        {/* Overlapping cards */}
        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-reBlue p-5 shadow-lg">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  <a
                    href={link.href}
                    className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                  >
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
