import connectMongoDB from "../../../_libs/connectMongoDB";
import User from "../../../_models/User";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;

  

  await connectMongoDB();
  try {
    const { listingsImg: listingsImg, placeId: placeId } = await request.json();
   
    const updated = await User.findOneAndUpdate(
      { email: id },
      {
        $set: { placeId, listingsImg },
      },
      { upsert: true, new: true }
    );

    return NextResponse.json(
      { success: "User updated", updated },
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

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ email: id }, { name: 1, lastname:1, placeId:1, email: 1, listingsImg: 1, _id: 0 });
  return NextResponse.json({success : "true", user}, { status: 200 });
}
