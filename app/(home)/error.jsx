"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-reBlue">Ohh snap... embarrasing :( </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          There’s been a glitch...
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          <span className="text-reRed font-heading font-semibold">Error Code</span> <br/>
          <code className="bg-reDark text-white p-2">{error.message}</code>
         
        </p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, this is not working properly. We now know about this mistake
          and are working to fix it. <br/>
          In the mean time here is what you can do:
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-reGreen px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-reGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reGreen"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try Loading Again
          </button>
          <Link href="/" className="text-sm font-semibold text-gray-900">
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
