export default async function getFeaturedListings() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const response = await fetch(`${baseUrl}/api/listings/featured`)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to fetch featured listings")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching featured listings:", error)
    throw error
  }
}