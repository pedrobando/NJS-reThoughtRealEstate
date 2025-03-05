"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function ListingsError({ error, reset, color }) {
  return (
    <div className={`w-full py-[150px] flex flex-col items-center justify-center text-center ${color || "bg-white"}`}>
      <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
      <h3 className="text-xl font-semibold text-reBlue mb-2">
        Unable to load listings
      </h3>
      <p className="text-reDark mb-6 max-w-xl">
      Our listing service is currently unavailable. Please try again later.<br/>
       <span className="text-red-500 font-bold"> {error?.message}</span>

      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-reGreen text-white rounded-md hover:bg-reGreen/90 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 border border-reBlue text-reBlue rounded-md hover:bg-reBlue/10 transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
