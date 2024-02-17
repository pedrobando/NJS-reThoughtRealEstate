export default function LoadingListingCard({ number }) {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {Array(10)
        .fill(0)
        .map((listing, index) => (
          <div
            key={index}
            className="relative isolate flex flex-col md:inline-flex justify-end overflow-hidden rounded-2xl bg-gray-400 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 animate-pulse"
          >
            <div className="flex-col">
              <span className="mb-2 block bg-gray-500 py-1 w-[25%] h-2 animate-pulse rounded-md"></span>
              <span className="mt-2 block bg-gray-500  w-[40%] h-3 rounded-md  animate-pulse"></span>
              <span className="mt-1  block bg-gray-500 rounded-md h-6 w-[60%] animate-pulse"></span>
              <span className="mt-3 block text-lg font-semibold leading-6 bg-gray-500 h-6 w-[70%] animate-pulse rounded-md"></span>
            </div>
          </div>
        ))}
    </div>
  );
}
