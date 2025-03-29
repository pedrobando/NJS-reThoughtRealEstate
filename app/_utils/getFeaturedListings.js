export default async function getFeaturedListings() {
  try {
    const response = await fetch("/api/listings/featured", {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching featured listings:", error);
    return { result: { listings: [] } };
  }
}
