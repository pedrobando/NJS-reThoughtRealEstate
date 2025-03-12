import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const { keyword } = await params;
    const token = process.env.HOMEJUNCTION_TOKEN;
    const apiEndpoint = process.env.HOMEJUNCTION_RE_API_URI;

    // Create the JSON payload
    const json = [
      { uri: "/ws/areas/postal-cities/search", parameters: { name: keyword } },
      { uri: "/ws/areas/counties/search", parameters: { name: keyword } },
      { uri: "/ws/areas/zipcodes/search", parameters: { name: keyword } },
      { uri: "/ws/areas/states/search", parameters: { name: keyword } },
      { uri: "/ws/schools/search", parameters: { name: keyword } },
      { uri: "/ws/school-districts/search", parameters: { name: keyword } },
      {
        uri: "/ws/listings/search",
        parameters: { "address.deliveryLine": keyword, market: "MLSWIS" },
      },
    ];

    // Convert to form data format
    const formData = new URLSearchParams();
    formData.append("request", JSON.stringify(json));

    // Make the request to the external API
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: formData.toString(),
    });

    // Check if the request was successful
    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
      return NextResponse.json(
        {
          error: "Failed to fetch data from API",
          status: response.status,
        },
        { status: 500 },
      );
    }

    // Parse the response data
    const data = await response.json();

    // Return the exact API response without modification
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
      },
      { status: 500 },
    );
  }
}