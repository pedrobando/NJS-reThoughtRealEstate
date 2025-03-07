// Remove the direct import of notFound
// import { notFound } from "next/navigation"

export default async function getFeaturedListingApi(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  try {
    const response = await fetch(`${baseUrl}/api/listings/call/${id}`)
    console.log("responseeeeeeeeeee", response)
    // Instead of calling notFound() directly, return a status object
    if (response.status === 404 || response.error) {
      return { notFound: true }
    }

    if (!response.ok) {
      const errorData = await response.json()
      console.error("API Error:", errorData.error || "Failed to fetch listing details")
      return { notFound: true }
    }

    const data = await response.json()

    if (!data || !data.result || !data.result.responses || data.result.responses?.length === 0) {
      console.error("No listing data found for ID:", id)
      return { notFound: true }
    }

    return data
  } catch (error) {
    console.error("Error fetching listing:", error)
    return { notFound: true }
  }
}

