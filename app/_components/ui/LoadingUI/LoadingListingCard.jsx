export default function LoadingListingCard({ number = 3 }) {
  // Add console log to debug
  console.log(
    "LoadingListingCard received number:",
    number,
    "type:",
    typeof number,
  );

  // Convert number to a numeric value if it's passed as a string
  const count =
    typeof number === "string" ? Number.parseInt(number, 10) : number;

  // Log the count after conversion
  console.log("Count after conversion:", count);

  // Create an array of the specified length to map over
  const placeholders = Array.from({ length: count }, (_, index) => index);

  // Log the length of placeholders array
  console.log("Placeholders array length:", placeholders.length);

  return (
    <div className="mt-5 grid w-full grid-cols-1 gap-8 sm:mt-10 md:grid-cols-2 lg:grid-cols-4">
      {placeholders.map((index) => (
        <div
          key={index}
          className="flex flex-col h-full w-full bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
        >
          {/* Image placeholder */}
          <div className="h-48 bg-gray-300"></div>

          {/* Content placeholders */}
          <div className="p-4 space-y-3">
            {/* Price placeholder */}
            <div className="h-7 bg-gray-300 rounded w-1/3"></div>

            {/* Address placeholder */}
            <div className="h-5 bg-gray-300 rounded w-5/6"></div>

            {/* Details placeholder */}
            <div className="flex space-x-4 pt-2">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
