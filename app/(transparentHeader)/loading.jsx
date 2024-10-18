import React from "react";

function Loading() {
  return (
    <>
      <main className="flex bg-gradient-to-t from-neutral-950 to-neutral-900 w-full mt-[-185px] pt-[105px] min-h-[110vh] justify-center items-center relative opacity-100">
        <div className="absolute flex-col justify-center text-center z-[50]">
          <div className="animate-pulse">
            <h1 className="bg-neutral-800 h-10 w-48 rounded-md mb-4"></h1>
            <h2 className="bg-neutral-600 h-8 w-64 rounded-md"></h2>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-10 w-[90%] md:w-auto mx-auto">
            <span className="bg-neutral-700 h-10 w-40 rounded-md animate-pulse"></span>
            <span className="bg-neutral-700 h-10 w-40 rounded-md animate-pulse"></span>
            <span className="bg-neutral-700 h-10 w-40 rounded-md animate-pulse"></span>
          </div>
        </div>
      </main>
      <div className="flex flex-col w-full bg-white text-reGrey animate-pulse">
        <div className="flex flex-col md:flex-row container min-h-[200px] p-6 pt-20">
          <div className="w-full lg:w-1/2 md:pr-14">
            <div className="bg-gray-300 h-8 w-48 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-10 w-72 rounded-md mb-4"></div>
            <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
            <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
            <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
            <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-200 h-60 rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-reBlue min-h-20 py-20 animate-pulse">
        <div className="flex flex-col lg:flex-row items-center container">
          <div className="p-6 lg:w-1/2">
            <div className="bg-gray-300 h-10 w-64 rounded-md"></div>
          </div>
          <div className="px-3 lg:px-6 lg:w-1/2">
            <div className="bg-gray-200 h-60 w-full rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[200px] bg-white p-6 pt-20 animate-pulse">
        <div className="flex container">
          <div className="lg:w-1/2">
            <div className="bg-gray-300 h-8 w-48 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-10 w-72 rounded-md mb-4"></div>
            <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
            <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-200 h-60 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Loading;
