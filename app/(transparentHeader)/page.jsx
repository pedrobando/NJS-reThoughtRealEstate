import React from "react";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex bg-gradient-to-t from-neutral-950 to-neutral-900 w-full mt-[-185px] pt-[105px]  min-h-screen justify-center items-center relative opacity-100">
      <div className="absolute flex-col justify-center text-center z-[50]">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-heading font-semibold">
          Client-Centric REALTORS®
        </h1>
        <h2 className="text-2xl z-10 font-bold font-heading font-thin mt-2 text-reGreen">
          Real Simple. Real Skills. Real Results.
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-10 w-[90%] md:w-auto mx-auto">
      
            <Link
              className="border rounded-lg text-white text-center font-heading px-2 md:px-5 py-2 text-lg  hover:scale-95 transition "
              href="/exclusive-listings"
            >
              Homes for Sale
            </Link>
         
            <Link
              className="border rounded-lg text-white text-center font-heading px-2 md:px-5 py-2 text-lg hover:scale-95 transition "
              href="/exclusive-listings"
            >
              Find my Home Value
            </Link>
         
            <Link
              className="border border-reGreen-500 rounded-lg text-white text-center font-heading px-2 md:px-5 py-2 text-lg hover:scale-95 transition bg-reGreen"
              href="/exclusive-listings"
            >
              Ayuda en Español
            </Link>
        
        </div>
      </div>

      <div className="absolute opacity-20 z-[1] object-cover h-full w-full">
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source
            src="https://dashbrew.s3.us-east-2.amazonaws.com/assets/vids/client-centric-milwaukee-realtors.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Homepage;
