
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // First, convert the request to JSON
    //const data = await request.json();
 // Then, destructure your data as needed
 const data = await request.json();

// Assuming 'emails' and 'phones' are arrays with objects that have a 'value' property
//const firstEmail = emails?.[0]?.value;
//const firstPhone = phones?.[0]?.value;

// Access the 'property' object details


// Now, use the destructured values as needed
// Example: Log the first email and phone
   
    console.log(data);

    return NextResponse.json(
      { success: "User updated"},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}