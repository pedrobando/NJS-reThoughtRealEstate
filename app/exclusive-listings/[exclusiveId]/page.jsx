import { faBath, faBed, faCar, faExpand, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  console.log(listing);

  return (
    <div className=" bg-white w-full z-0">
      <div className="bg-gradient-to-t from-neutral-950 to-[#1d2b0f] w-full mt-[-185px] ">
        <div
          style={{ backgroundImage: `url(${listing.images[0]})` }}
          className="bg-cover bg-center w-full min-h-screen  opacity-10"
        ></div>
      </div>
      <div className="flex flex-col items-center container mx-auto bg-white w-full z-10 justify-center">
        <span className="font-heading text-white mt-[-370px] z-10 text-sm mb-3">
          {listing.propertyType}
        </span>
        <span className="font-heading text-reGreen z-10 text-4xl mb-1">
          {listing.address.deliveryLine}
        </span>
        <span className="font-heading font-semibold  text-white z-10 text-3xl">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </span>
        <div className="flex gap-x-12 mt-7 opacity-60 place-items-center font-body">
          <div className="flex flex-col text-white z-10 text-xl mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faBed} height="20px" />
            <span className="mt-1">{listing.beds} Beds</span>
          </div>

          <div className="flex flex-col font-text text-white z-10 text-xl mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faBath} height="20px" />
            <span className="mt-1">
              {listing.baths.full} / {listing.baths.half} Baths
            </span>
          </div>

          <div className="flex flex-col font-text text-white z-10 text-xl mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faCar} height="20px" />
            <span className="mt-1">{listing.xf_list_25} Parking(s)</span>
          </div>
          <div className="flex flex-col font-text text-white z-10 text-xl mb-1  items-center justify-center text-[1em] font-body">
            <FontAwesomeIcon icon={faExpand} height="20px" />
            <span className="mt-1">
              {new Intl.NumberFormat().format(listing.size)} Sqft
            </span>
          </div>
        </div>
      </div>
      <div className="flex container container mx-auto bg-white min-h-20 py-16">
        <div className="flex flex-col md:basis-8/12 px-4">
            <h2 className="text-reText font-heading font-semibold text-5xl pb-3">About {listing.xf_list_31}</h2>
            <p className="text-reText font-body text-md py-1">{listing.description}</p>
        </div>
        <div className="flex flex-col px-4 md:basis-4/12">
        <p className="text-black">Test</p>
        </div>
      </div>
    </div>
  );
}
