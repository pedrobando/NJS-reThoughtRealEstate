export default async function getFeaturedListings() {
  try {
    const response = await fetch("http://localhost:3000/api/listings/featured")

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