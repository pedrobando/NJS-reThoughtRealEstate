import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Get the URL from the request
    const { searchParams } = new URL(request.url);

    // Create a new URLSearchParams object for the external API request
    const apiParams = new URLSearchParams();

    // Required parameter
    const market = searchParams.get("market");
    if (market) {
      apiParams.set("market", market);
    } else {
      return NextResponse.json(
        { error: "Market parameter is required" },
        { status: 400 },
      );
    }

    // Location Filters
    const locationFilters = [
      "address.city",
      "address.state",
      "address.deliveryLine",
      "address.zip",
      "address.withheld",
      "area",
      "box",
      "circle",
      "county",
      "polygon",
    ];

    locationFilters.forEach((filter) => {
      const value = searchParams.get(filter);
      if (value) {
        apiParams.set(filter, value);
      }
    });

    // Property Filters
    const propertyFilters = [
      "baths",
      "baths.full",
      "baths.half",
      "baths.total",
      "beds",
      "descriptions",
      "distressed",
      "id",
      "keyword",
      "imageCount",
      "listingType",
      "location",
      "lotsize.acres",
      "lotsize.sqft",
      "newConstruction",
      "propertyType",
      "school",
      "schools.district",
      "schools.elementary",
      "schools.high",
      "schools.middle",
      "size",
      "subdivision",
      "yearBuilt",
    ];

    propertyFilters.forEach((filter) => {
      const value = searchParams.get(filter);
      if (value) {
        apiParams.set(filter, value);
      }
    });

    // Additional Filters
    const additionalFilters = [
      "agent.email",
      "agent.id",
      "agent.licenseNumber",
      "agent.name",
      "buildingName",
      "coListingAgent.email",
      "coListingAgent.id",
      "coListingAgent.licenseNumber",
      "coListingAgent.name",
      "coListingOffice.id",
      "coListingOffice.name",
      "daysOnMarket",
      "floors",
      "listingAgent.email",
      "listingAgent.id",
      "listingAgent.licenseNumber",
      "listingAgent.name",
      "listingDate",
      "listingOffice.id",
      "listingOffice.name",
      "listPrice",
      "modifiedDate",
      "office.id",
      "office.name",
      "openHouse",
      "openHouse.type",
      "openHouse.modificationtimestamp",
      "status",
      "style",
      "priceChangeTimestamp",
    ];

    additionalFilters.forEach((filter) => {
      const value = searchParams.get(filter);
      if (value) {
        apiParams.set(filter, value);
      }
    });

    // Options
    const options = [
      "clipping",
      "details",
      "extended",
      "favorites",
      "features",
      "images",
      "limit",
      "pageNumber",
      "pageSize",
      "sortField",
      "sortOrder",
    ];

    options.forEach((option) => {
      const value = searchParams.get(option);
      if (value) {
        apiParams.set(option, value);
      }
    });

    // Construct the URL for the external API
    const apiUrl = `${process.env.HOMEJUNCTION_RE_SEARCH}?${apiParams.toString()}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
      },
      cache: "no-store",
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData },
        { status: response.status },
      );
    }

    const data = await response.json();

    // Return the response
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 },
    );
  }
}
