// app/exclusive-listings/loading.jsx

import React from "react";

export default function Loading() {
  return (
    <>
      <div className="animate-pulse bg-gray-200 h-80 w-full mb-6"></div>

      <div className="container mx-auto min-h-64 py-14 px-4">
        <h1 className="text-reGreen text-2xl font-heading font-semibold text-center text-lg bg-gray-200 animate-pulse h-10 w-48 mx-auto rounded-md"></h1>
        <h1 className="text-reBlue text-5xl font-heading font-semibold text-center lh-10 bg-gray-200 animate-pulse h-12 w-64 mx-auto rounded-md my-6"></h1>
        <p className="text-reDark text-md py-3 text-center md:px-[20%] pb-9 bg-gray-200 animate-pulse h-6 w-full mx-auto rounded-md"></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="animate-pulse p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <div className="bg-gray-300 h-48 w-full mb-4 rounded-md"></div>
                <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded-md"></div>
                <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded-md"></div>
                <div className="bg-gray-300 h-4 w-full mb-2 rounded-md"></div>
                <div className="bg-gray-300 h-4 w-3/4 rounded-md"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
