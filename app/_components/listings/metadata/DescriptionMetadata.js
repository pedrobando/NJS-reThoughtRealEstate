import React from 'react'

function DescriptionMetadata(listing, type) {
  if(type === "Single Family"){
    
    return `This ${listing.beds}-bedroom  ${listing.baths.full}|${listing.baths.half}-bathroom ${listing.propertyType} sits in the city of ${listing.address.city} in ${listing.county} county. The interior size of the home is ${listing.size} square feet, and the parcel is approximately ${listing.lotSize.acres} acres. The current asking price is ${listing.listPrice}.`;
  }
}

export default DescriptionMetadata