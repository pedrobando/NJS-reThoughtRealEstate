export async function GET(request, { params }) {
  const { id } = await params;

  if (!id) {
    return Response.json(
      { error: true, message: "Missing listing ID" },
      { status: 400 }
    );
  }

  try {
    // Create the request array according to the format
    const requestArray = [
      {
        uri: "/ws/listings/get",
        parameters: {
          market: "MLSWIS",
          id: id,
          extended: "true",
          images: "true",
          details: "true",
          features: "true",
        },
      },
      {
        uri: "/ws/schools/search",
        parameters: {
          sortField: "level",
          sortOrder: "asc",
          details: "true",
          limit: "15",
          circle:
            "{$.listings[0].coordinates.latitude},{$.listings[0].coordinates.longitude},2",
        },
      },
    ];

    // Convert the request array to a JSON string
    const requestJson = JSON.stringify(requestArray);

    // Create the form data with the request parameter
    // Format: request=[{"uri":...}...]
    const formData = new URLSearchParams();
    formData.append("request", requestJson);

    // Make a POST request with application/x-www-form-urlencoded content type
    const response = await fetch(
      `${process.env.HOMEJUNCTION_RE_API_URI}/ws/api/call`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
        },
        body: formData.toString(),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.error?.message ||
          `HTTP error: ${response.status} ${response.statusText}`
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error fetching listings:", error.message);
    return Response.json(
      { error: true, message: error.message, listings: [] },
      { status: 500 }
    );
  }
}
