import { notFound } from "next/navigation";
import connectMongoDB from "../_libs/connectMongoDB";
import User from "../_models/User";

export default async function getAgent(id) {
  await connectMongoDB();
  try {
    const user = await User.findOne(
      { email: id },
      { name: 1, lastname: 1, placeId: 1, email: 1, listingsImg: 1, _id: 0 }
    );

    if (!user) {
      throw new Error(`No user found with id: ${id}`);
    }

    return user;
  } catch (error) {
    console.error("Error fetching agent", error);
    return { error: true, message: error.message };
  }
}
