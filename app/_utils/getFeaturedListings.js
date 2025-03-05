export default async function getFeaturedListings() {
  // Add a timeout to the fetch to handle slow responses
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

  try {
    const res = await fetch(`${process.env.HOMEJUNCTION_RE_LITINGS_URI}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
      },
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    const data = await res.json();

    // Check for API success
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
    }

    // Check for API-specific success flag
    if (!data.success) {
      throw new Error(
        data.error?.message || "API returned unsuccessful response"
      );
    }

    // Check for invalid data
    if (data.result?.invalid !== undefined) {
      throw new Error("Invalid data received from API");
    }

    // If we get here, the data is valid
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    // Check if it's an abort error (timeout)
    if (error.name === "AbortError") {
      throw new Error(
        "Request timeout: The listing service is taking too long to respond"
      );
    }

    // Log the error but still throw it to be caught by the error boundary
    console.error("Error fetching listings:", error.message);

    // Throw the error so it can be caught by the error boundary
    throw error;
  }
}

export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
