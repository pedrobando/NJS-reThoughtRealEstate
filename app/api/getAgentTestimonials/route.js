import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get('placeId');

  if (!placeId) {
    return NextResponse.json({ message: "placeId is required" }, { status: 400 });
  }

  try {
    const apiResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCAaXwGj3Q6M3B5YKz5EAMjgnJ6jneUsEc&fields=place_id,rating,name,user_ratings_total,reviews&reviews_sort=newest`
    );

    if (!apiResponse.ok) {
      return NextResponse.json({ message: "Failed to fetch reviews" }, { status: 500 });
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching reviews" }, { status: 500 });
  }
}