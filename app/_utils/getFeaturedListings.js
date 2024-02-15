export default async function getFeaturedListings() {
    try {
      const res = await fetch(`${process.env.HOMEJUNCTION_RE_LITINGS_URI}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`, // Replace with secure handling of token
        },
        cache: "no-store"
      });
  
      const data = await res.json(); // Parse JSON regardless of res.ok
  
      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || `HTTP error: ${res.status} ${res.statusText}`);
      }
  
      return data;

    } catch (error) {
      console.error("Error fetching listings:", error.message);
     
      return { error: true, message: error.message, listings: [] };
    }
  }  