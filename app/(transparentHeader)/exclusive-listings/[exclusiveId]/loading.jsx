import React from "react";

export default function Loading() {
  return (
    <div className="bg-white w-full z-0 text-reText">
      <div className="relative flex flex-col items-center justify-end bg-gradient-to-t from-neutral-950 to-[#1d2b0f] w-full mt-[-185px] mb-[-25px] min-h-[700px] 2xl:min-h-screen animate-pulse">
        <div className="bg-gray-200 h-full w-full"></div>
        <div
          id="mainInfo"
          className="flex flex-col pb-[70px] md:pb-[80px] place-content-center place-items-center container mx-auto w-full z-50 justify-end px-4 bg-transparent min-h-[700px]"
        >
          <div className="bg-neutral-700 h-10 w-2/3 rounded-md mb-4"></div>
          <div className="bg-neutral-700 h-6 w-1/3 rounded-md"></div>
          <div className="flex gap-4 mt-4">
            <div className="bg-neutral-600 h-10 w-24 rounded-md"></div>
            <div className="bg-neutral-600 h-10 w-24 rounded-md"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-64 w-full animate-pulse mb-10"></div>

      <main className="bg-white">
        <section className="flex container mx-auto relative bg-white gap-x-3">
          <div className="relative w-full mx-auto px-4 lg:pt-32 pt-14 animate-pulse">
            <div className="bg-gray-300 h-10 w-1/2 rounded-md mb-6"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row container mx-auto px-3 pb-32 lg:gap-x-3 items-start place-items-center">
          <div className="w-full px-3 lg:basis-10/12 mt-16 mx-auto">
            <div className="bg-gray-200 h-10 w-full rounded-md mb-6"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
          </div>
          <div className="w-full px-3 lg:basis-10/12 mt-16 mx-auto">
            <div className="bg-gray-200 h-10 w-full rounded-md mb-6"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
            <div className="bg-gray-200 h-6 w-full rounded-md mb-4"></div>
          </div>
        </section>

        <section className="flex container max-h-[450px] animate-pulse">
          <div className="bg-gray-200 h-96 w-full rounded-md"></div>
        </section>

        <section className="bg-reDark min-h-[450px] pb-[120px] animate-pulse">
          <div className="container mx-auto items-center pt-14 px-4">
            <div className="block px-2 md:px-14 pt-[80px] md:pt-[180px]">
              <div className="bg-gray-300 h-10 w-2/3 rounded-md mb-4"></div>
              <div className="bg-gray-300 h-6 w-1/3 rounded-md"></div>
              <div className="bg-gray-300 h-10 w-1/4 rounded-md"></div>
            </div>
          </div>
        </section>

        <section className="bg-reDark h-auto md:min-h-[213px] md:max-h-[420px] overflow-auto animate-pulse">
          <div className="bg-gray-200 h-64 w-full rounded-md"></div>
        </section>

        <section className="container mx-auto py-10 animate-pulse">
          <div className="bg-gray-200 h-24 w-full rounded-md"></div>
        </section>

        <section className="flex flex-col md:flex-row container mx-auto lg:gap-x-3 content-end px-3 animate-pulse">
          <div className="bg-gray-200 h-60 w-full rounded-md"></div>
        </section>
      </main>
    </div>
  );
}
