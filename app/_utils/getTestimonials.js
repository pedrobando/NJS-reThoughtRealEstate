export default async function getTestimonials(placeId) {
  try {
    const res = await fetch(`/api/getAgentTestimonials?placeId=${placeId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading testimonials:", error);
  }
}
