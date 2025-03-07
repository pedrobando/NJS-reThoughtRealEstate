import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await fetch(
      `${process.env.HOMEJUNCTION_RE_LITING_URI}${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `API request failed with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    // Check top-level success
    if (!data.success) {
      return NextResponse.json(
        { error: data.error?.message || "API returned unsuccessful response" },
        { status: 400 },
      );
    }

    // Check for nested responses with issues
    if (data.result?.responses) {
      // Check for nested errors
      const nestedErrors = data.result.responses
        .filter((response) => !response.success)
        .map((response) => response.error?.message)
        .filter(Boolean);

      if (nestedErrors.length > 0) {
        return NextResponse.json(
          {
            error: "Errors in nested responses",
            details: nestedErrors,
          },
          { status: 422 },
        );
      }

      // Check for empty listings
      const allListingsEmpty = data.result.responses.every(
        (response) =>
          Array.isArray(response.result?.listings) &&
          response.result.listings.length === 0,
      );

      if (allListingsEmpty) {
        // This is not an error, might happen if url is changed or mls id etc
        return NextResponse.json({
          success: true,
          result: { listings: [] },
          message: "No listings found for this ID",
        });
      }
    }

    // If we get here, the data seems valid
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching listing with ID ${id}:`, error.message);

    return NextResponse.json(
      { error: "Failed to fetch listing. Please try again later." },
      { status: 500 },
    );
  }
}
