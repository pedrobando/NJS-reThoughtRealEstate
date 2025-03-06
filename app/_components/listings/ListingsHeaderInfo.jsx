import FontAwesomeIconWrapper from "@/components/wrappers/FontAwesomeIcon";
import {
  faBath,
  faBed,
  faCar,
  faExpand,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const ListingsHeaderInfo = ({ listing }) => {
  return (
    <div className="flex gap-x-8 md:gap-x-12 mt-9 opacity-60 place-items-center font-body">
      {listing.propertyType !== "Multi-family" && (
        <>
          {listing.beds && (
            <div className="exclusive-listings-hero beds">
              <FontAwesomeIconWrapper icon={faBed} height="20px" />
              <span className="mt-1">{listing.beds} Beds</span>
            </div>
          )}

          {listing.baths && (
            <div className="exclusive-listings-hero baths">
              <FontAwesomeIconWrapper icon={faBath} height="20px" />
              <span className="mt-1">
                {listing.baths.full} / {listing.baths.half} Baths
              </span>
            </div>
          )}

          {listing.xf_list_25 !== undefined && listing.xf_list_25 !== 0 && (
            <div className="exclusive-listings-hero parking">
              <FontAwesomeIconWrapper icon={faCar} height="20px" />
              <span className="mt-1">{listing.xf_list_25} Parking(s)</span>
            </div>
          )}
        </>
      )}

      {listing.propertyType === "Multi-family" && (
        <>
          {listing.xf_list_70 && (
            <div className="exclusive-listings-hero totalunits">
              <FontAwesomeIconWrapper icon={faHouse} height="20px" />
              <span className="mt-1">{listing.xf_list_70} Total Units</span>
            </div>
          )}
        </>
      )}

      {listing.size ? (
        <div className="exclusive-listings-hero size">
          <FontAwesomeIconWrapper icon={faExpand} height="20px" />
          <span className="mt-1">
            {new Intl.NumberFormat().format(listing.size)} Sqft
          </span>
        </div>
      ) : (
        <div className="exclusive-listings-hero lotSize">
          <FontAwesomeIconWrapper icon={faExpand} height="20px" />
          <span className="mt-1">
            {new Intl.NumberFormat().format(listing.lotSize.sqft)} Sqft
          </span>
        </div>
      )}
    </div>
  );
};

export default ListingsHeaderInfo;
