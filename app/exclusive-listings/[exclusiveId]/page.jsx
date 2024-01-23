const getExclusiveListing = async (mlsId) => {
  try {
    const res = await fetch(
      `${process.env.HOMEJUNCTION_RE_LITING_URI}${mlsId.params.exclusiveId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HOMEJUNCTION_TOKEN}`,
        },
        cache: "no-store",
      }
    );

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
  const listing = result.listings[0] || [];
  console.log(listing);

  return (
    <div className=" bg-white w-full z-0">
    <div className="bg-gradient-to-t from-neutral-950 to-green-950 w-full mt-[-185px] ">
      <div
        style={{ backgroundImage: `url(${listing.images[0]})` }}
        className="bg-cover bg-center w-full min-h-screen  opacity-10"
      >
      </div>
    </div>
     <div className="flex flex-col container mx-auto min-h-64 py-14 px-3 bg-white w-full z-10">
     <span className="font-heading font-semibold text-white mt-[-150px] z-10 text-3xl mb-1">{listing.address.deliveryLine}</span>
     <span className="font-heading  text-white z-10 text-2xl">{listing.address.city}, {listing.address.state} {listing.address.zip}</span>
     </div>
     </div>
  );
}
