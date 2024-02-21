import { ImageResponse } from "next/og";
import getFeaturedListing from "../../../_utils/getFeaturedListing";


export const runtime = "edge";

// Image metadata
export const alt = 'reThought Real Estate Listing'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export default async function Image({params}) {

  // read route params
  const id = params.exclusiveId;

  // fetch data
  const propertyData = await getFeaturedListing(id);
  const listing = propertyData.result.listings[0];

  console.log(`Property Type: ${params}`); // Should log "Property Type: test"

  // Proceed to use `propertyType` as needed in your ImageResponse or other logic
  // Placeholder for ImageResponse usage
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2a2a2a",
        
        }}
      >
      <img  style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.1,
            minHeight: "100vh",
            zIndex: "-100",
          }} tw="absolute" src={listing.images[0]}/>
           <span tw="font-heading text-white z-10 text-lg mb-3">
          {listing.propertyType}
        </span>
        <h1 tw="text-center font-heading text-[#8bc94e] z-10 text-5xl mb-1">
          {listing.address.deliveryLine}
        </h1>
        <span tw="font-heading font-semibold  text-white z-10 text-xl lg:text-3xl">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </span>
         

        
      </div>
    )
  );
}
