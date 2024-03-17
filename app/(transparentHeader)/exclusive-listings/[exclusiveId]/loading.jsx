import React from "react";

function Loading() {
  return (
    <div className="bg-white w-full z-0 text-reText pb-6">
      <div className="relative bg-gradient-to-t from-neutral-950 to-[#1d2b0f] w-full mt-[-185px] min-h-screen animate-pulse  "></div>
      <div className="flex flex-col items-center container mx-auto bg-white w-full z-10 justify-center px-4">
        <span className="w-[10%] h-3 mt-[-560px] z-10 mb-3 animate-pulse bg-neutral-700 opacity-10 rounded-md">
        </span>
        <span className="w-[30%] h-14  z-10 mb-3 animate-pulse bg-neutral-700 opacity-10 rounded-md">
        </span>
        <span className="w-[28%] h-12  z-10 mb-3 animate-pulse bg-neutral-700 opacity-10 rounded-md">
        </span>

        <div className="flex gap-x-8 md:gap-x-12 mt-2 opacity-60 place-items-center font-body">
          <div className="p-10 bg-neutral-700 rounded-md"></div>
          <div className="p-10 bg-neutral-700 rounded-md"></div>
          <div className="p-10 bg-neutral-700 rounded-md"></div>
        </div>

        <div className="flex mx-auto z-10 items-center justify-end pt-[40px] gap-x-6 gap-y-6">
          <div className="pt-10 px-20 bg-neutral-700 rounded-md"></div>
          <div className="pt-10 px-20 bg-neutral-700 rounded-md"></div>
        </div>
      </div>
      <div className="container mx-auto mt-[-80px] rounded-lg px-3 block h-[320px] overflow-hidden animate-pulse bg-neutral-700"></div>
      <div className="container flex gap-x-3 gap-y-2 mt-3">
       
        <div className="w-full sm:w-6/12 bg-neutral-400 h-[400px] rounded-md animate-pulse"></div>
        <div className="w-full sm:w-6/12 bg-neutral-400 h-[400px] rounded-md animate-pulse"></div>
      </div>
    </div>
  );
}

export default Loading;
