export default async function getTestimonials(placeId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/getAgentTestimonials?placeId=${placeId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading testimonials:", error);
  }
}
