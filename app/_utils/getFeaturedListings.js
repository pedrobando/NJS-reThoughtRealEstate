export default async function getFeaturedListings() {

    try {
      const res = await fetch(`${process.env.HOMEJUNCTION_RE_LITINGS_URI}`, {
        method: "GET",
        next:{
          revalidate: 60 * 60 * 24
        },
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`, 
        },
      });
  
      const data = await res.json(); 
  
      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || `HTTP error: ${res.status} ${res.statusText}`);
      }

      if (data.success) {
        if (data.result.invalid !== undefined) {
          throw new Error(data.error?.message || `HTTP error: ${res.status} ${res.statusText}`);
        }
        // await delay(8000); 
        return data;
      }
     

    } catch (error) {
      console.error("Error fetching listings:", error.message);
     
      return { error: true, message: error.message, listings: [] };
    }
  }  


  export async function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
