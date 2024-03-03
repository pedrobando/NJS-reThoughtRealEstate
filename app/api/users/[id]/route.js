import connectMongoDB from "../../../_libs/connectMongoDB";
import User from "../../../_models/User";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;

  

  await connectMongoDB();
  try {
    const { listingsImg: listingsImg, placeId: placeId } = await request.json();
    console.log(listingsImg, placeId);
    const updated = await User.findOneAndUpdate(
      { email: id },
      {
        $set: { placeId: "Pedro" },
      },
      { upsert: true, new: true }
    );

    return NextResponse.json(
      { message: "User updated", updated },
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
  const user = await User.findOne({ email: id });
  return NextResponse.json({ user }, { status: 200 });
}
