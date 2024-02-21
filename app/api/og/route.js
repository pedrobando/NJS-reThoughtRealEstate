import { ImageResponse } from "next/og";


export const runtime = "edge";

export async function GET(request) {

  const url = new URL(request.url);

  const searchParams = url.searchParams;

  const listing = {
    propertyType: searchParams.get("propertytype"),
    address: {
      deliveryLine: searchParams.get("deliveryLine"),
      city: searchParams.get("city"),
      state: searchParams.get("state"),
      zip: searchParams.get("zip"),
    },
    beds: searchParams.get("beds"),
    bath: {
      full: searchParams.get("fullBath"),
      half: searchParams.get("halfBath"),
    },
    xf_list_25: searchParams.get("parking"),
    xf_list_70: searchParams.get("totalUnits"),
    size: searchParams.get("size"),
    lotSize: {
      sqft: searchParams.get("lotSize"),
    },
    images:[searchParams.get("imgUrl")]
  };

  console.log(`Property Type: ${listing.propertyType}`); // Should log "Property Type: test"

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
          position:"relative"
        
        }}
      >
    

           <span  style={{color: "white", zIndex: "100",}} class="font-heading text-white z-10 text-base mb-3">
          {listing.propertyType}
        </span>
        <h1 className="text-center font-heading text-reGreen z-10 text-3xl sm:text-4xl lg:text-5xl mb-1">
          {listing.address.deliveryLine}
        </h1>
        <span className="font-heading font-semibold  text-white z-10 text-xl lg:text-3xl">
          {listing.address.city}, {listing.address.state} {listing.address.zip}
        </span>
        
        <img  style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.1,
            poition:"absolute",
            minHeight: "100vh",
            zIndex: "-100",
          }} src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"/>
        
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
