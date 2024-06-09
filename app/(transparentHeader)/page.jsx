import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reels from "@/components/instagram/Reels";

const Homepage = () => {
  return (
    <>
      <div className="flex bg-gradient-to-t from-neutral-950 to-neutral-900 w-full mt-[-185px] pt-[105px]  min-h-screen justify-center items-center relative opacity-100">
        <div className="absolute flex-col justify-center text-center z-[50]">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading font-semibold pt-[30%] w-fit">
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
        <div className="absolute opacity-20 z-[1] object-cover h-full w-full mt-[-105px]">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source
              src="https://dashbrew.s3.us-east-2.amazonaws.com/assets/vids/client-centric-milwaukee-realtors.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col w-full bg-white text-reGrey">
        <div className="flex flex-col md:flex-row container min-h-[200px] p-6 pt-20">
          <div className="w-full lg:w-1/2 md:pr-14">
            <h3 className="font-heading font-semibold uppercase text-reGreen text-lg">
              More than just Realtors®...
            </h3>
            <h2 className="font-heading capitalize text-reDark text-4xl font-bold">
              Real People Focused <br />
              On Your Experience.
            </h2>
            <p className="py-4 text-reBody font-body leading-relaxed">
              At reThought, our process has been reElevated using the most
              optimized technology tools. With that said, it allows our agents
              to <span className="highlight">FOCUS</span> on elevating your
              experience while together we achieve
              <span className="highlight">YOUR</span> goal making sure{" "}
              <span className="highlight">YOU</span> stay informed of{" "}
              <span className="highlight">EVERYTHING</span>. No one will
              out-geek us when it comes to the Milwaukee and surrounding areas
              real estate market!
            </p>

            <ul className="pb-10 text-reBody ">
              <li className="py-6">
                <div className="flex">
                  <div className="flex size-24">
                    <img
                      className="size-20 text-reGreen"
                      src="/img/houseicons/villa.svg"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h4 className="font-heading font-semibold text-reDark text-lg">
                      Residential
                    </h4>
                    <p className="leading-relaxed text-reBody">
                      We have carefully crafted a step-by-step one-on-one
                      approach to help First Time Home Buyers/Seller, and
                      Investors.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex size-24">
                    <img
                      className="size-20"
                      src="/img/houseicons/apartment.svg"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h4 className="font-heading font-semibold text-reDark text-lg">
                      Commercial
                    </h4>
                    <p className="leading-relaxed text-reBody">
                      Our experienced agents provide in-depth market analysis,
                      strategic planning, and negotiation support wether you are
                      buying, leasing, or selling commercial properties.{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 ">
            <img src="https://luxus.wplistingthemes.com/wp-content/uploads/2022/01/Gallery.webp" />
          </div>
        </div>
        <div className="flex flex-col bg-reBlue min-h-20 py-20 ">
          <div className="flex flex-col lg:flex-row items-center container">
            <div className="p-6">
              <h3 className="text-reBlue font-heading leading-[1.2em] text-7xl font-bold text-stroke-lg  text-stroke-white text-3xl tracking-wider">
                Real Simple. <br />
                Real Skills. <br />
                Real Results.
              </h3>
            </div>
            <div className=" px-6">
              <h3 className="sr-only">Featured Properties</h3>
              <div className="flex py-8">
                <div className="w-[300px] h-[350px] border border-white rounded rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[200px] bg-white p-6 pt-20">
          <div className="flex container">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <h3 className="font-heading font-semibold uppercase text-reGreen text-lg">
                #reElevated Boutique Style
              </h3>
              <h2 className="font-heading capitalize text-reDark text-4xl font-bold">
                Personalized Approach
              </h2>
              <p className="leading-relaxed text-reBody">
                We take a personalized educated approach to every situation. It
                is designed to educate you and provide you with the confidence
                you need to make an educated decision.
              </p>
              <ul className="pb-10 py-3 text-reBody ">
                <li className="py-2">
                  <p>
                    Personalized Guidance: Tailored advice and strategies to
                    meet your unique needs and goals.
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    Step-by-Step Process: Clear explanations of each stage,
                    ensuring you're always informed and comfortable.
                  </p>
                </li>
                <li className="py-2">
                  <p>
                    Modern Tools: Utilizing the latest technology to streamline
                    the buying and selling process.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-reDark min-h-[200px] p-6 py-20">
          <div className="flex container">
            <h3></h3>
            <h2 className="font-heading capitalize text-white text-4xl font-bold">Commercial</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
