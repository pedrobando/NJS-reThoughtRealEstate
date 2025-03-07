import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const { id } = await params

  try {
    // Make the API request
    const response = await fetch(
      `${process.env.HOMEJUNCTION_RE_API_URI}[{"uri":"/ws/listings/get", "parameters":{"market":"MLSWIS", "id":${id}, "extended":"true","images":"true","details":"true","features":"true"}},{"uri": "/ws/schools/search","parameters": {"sortField":"level", "sortOrder":"asc","details":"true","limit":"15", "circle": "{$.listings[0].coordinates.latitude},{$.listings[0].coordinates.longitude},2"}}]`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
        },
        cache: "no-store",
      },
    )

    if (!response.ok || response.error) {
      return NextResponse.json({ error: `API request failed with status: ${response.status}` }, { status: 404 })
    }

    const data = await response.json()

    // Check top-level success
    if (!data.success) {
      return NextResponse.json({ error: data.error?.message || "API returned unsuccessful response" }, { status: 404 })
    }

    // Check for empty listings
    if (!data.result?.responses || data.result.responses.length === 0) {
      return NextResponse.json({ error: "No listing found with the provided ID" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error(`Error fetching listing with ID ${id}:`, error.message)

    return NextResponse.json({ error: "Failed to fetch listing. Please try again later." }, { status: 500 })
  }
}

