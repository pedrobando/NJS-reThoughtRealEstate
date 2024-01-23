

const getExclusiveListing = async (mlsId) => {
    try {
      const res = await fetch(`${process.env.HOMEJUNCTION_RE_LITING_URI}${mlsId.params.exclusiveId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
        },
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics", res);
      }
   
      return await res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
      
      return { result: { listings: [] } }; // Return an empty array or handle the error gracefully
    }
  };

  
  export default async function ExclusiveListing(exclusiveId) {
    const { result } = await getExclusiveListing(exclusiveId);
    const listing = result || [];
    
    return (

        <div>Page</div>
    )

  }