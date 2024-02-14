async function getFeaturedListings() {
  
        try {
          const res = await fetch(`${process.env.HOMEJUNCTION_RE_LITINGS_URI}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ process.env.HOMEJUNCTION_TOKEN }`,
            },
            cache: "no-store",
          });
      
          if (!res.ok) {
            throw new Error(`Failed to fetch listings: ${res.statusText}`);
          }
      
          return await res.json();
        } catch (error) {
          console.error("Error loading listings: ", error.message);
          return { result: { listings: [] } }; // Return an empty object with an empty listings array
        }

      
}

export default getFeaturedListings