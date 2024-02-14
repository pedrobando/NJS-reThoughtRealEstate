import React from 'react'

const HeaderInfo = ({listing}) => {
  return (
    <>
     <span className="font-heading text-white mt-[-560px] z-10 text-base mb-3">
          {listing.propertyType}
        </span>
        <h1 className="text-center font-heading text-reGreen z-10 text-3xl sm:text-4xl lg:text-5xl mb-1">
          {listing.address.deliveryLine}
        </h1>
        <span className="font-heading font-semibold  text-white z-10 text-xl lg:text-3xl">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </span>
    </>
  )
}

export default HeaderInfo