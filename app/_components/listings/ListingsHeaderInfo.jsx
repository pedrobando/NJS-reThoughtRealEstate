import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faBath,
  faBed,
  faCar,
  faCircleInfo,
  faExpand,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const ListingsHeaderInfo = ({ listing }) => {
  return (
    <div className="flex gap-x-8 md:gap-x-12 mt-9 opacity-60 place-items-center font-body">
      {listing.listingType !== "Multifamily" && (
        <>
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
        </>
      )}
      ;
      {listing.listingType === "Multifamily" && (
        <>
          {listing.xf_list_70 && (
            <div className="exclusive-listings-hero">
              <FontAwesomeIcon icon={faHouse} height="20px" />
              <span className="mt-1">{listing.xf_list_70} Total Units</span>
            </div>
          )}
        </>
      )}
      ;
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
  );
};

export default ListingsHeaderInfo;
