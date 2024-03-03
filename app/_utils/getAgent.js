import { notFound } from "next/navigation";

export default async function getAgent(id) {

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "GET",
        next:{revalidate: 0}
      });
  
      const user = await res.json(); 
      
      if (!res.ok || !user.success) {
        throw new Error(user.error?.message || `HTTP error: ${res.status} ${res.statusText}`);
      }

      if (user.success) {
           return user;
        }
        // await delay(8000); 
       // return data;
      
     

    } catch (error) {
      console.error("Error fetching agent", error.message);
     
      return { error: true, message: error.message };
    }
  }  


