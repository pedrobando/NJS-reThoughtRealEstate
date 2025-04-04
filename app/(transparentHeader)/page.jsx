import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reels from "@/components/instagram/Reels";
import FeaturedListingsCarousel from "@/components/home/FeaturedListingsCarousel";
import AgentTestimonials from "@/components/agents/AgentTestimonials";
import Image from "next/image";
import getFeaturedListings from "@/utils/getFeaturedListings";
import AgentTestimonialsWrapper from "@/components/agents/AgentTestimonialsWrapper";
import { delay } from "@/utils/getFeaturedListing";
import Divider from "@/components/ui/Divider";
import LoadingListingCard from "@/components/ui/LoadingUI/LoadingListingCard";
import HeroSearchBar from "@/components/homesforsale/HeroSearchBar";
import FailedFetch from "@/components/ui/ErrorUI/FailedFetch";

export const dynamic = "force-dynamic";
async function ListingsContent() {
  try {
    const data = await getFeaturedListings();
    const listings = data?.result?.listings || [];
    if (listings.length === 0) {
      return <FailedFetch />;
    }

    return <FeaturedListingsCarousel listings={listings} />;
  } catch (error) {
    console.error("Error in ListingsContent:", error);
    return <FailedFetch error={error} />;
  }
}

const Homepage = async () => {
  return (
    <>
      <HeroSearchBar />
      <section
        className="flex flex-col w-full bg-white text-reGrey"
        aria-label="About Our Services"
      >
        <div className="flex flex-col md:flex-row container min-h-[200px] p-6 pt-20">
          <div className="w-full lg:w-1/2 md:pr-14">
            <h2 className="font-heading font-semibold uppercase text-reGreen text-lg">
              More than just Realtors®...
            </h2>
            <h3 className="font-heading capitalize text-reDark text-4xl font-bold pb-4">
              Real People Focused <br />
              On Your Experience.
            </h3>
            <p className="py-4 text-reBody font-body leading-relaxed">
              At reThought, our process has been reElevated using the most
              optimized technology tools. With that said, it allows our agents
              to <span className="highlight">FOCUS</span> on elevating your
              experience while together we achieve{" "}
              <span className="highlight">YOUR</span> goal making sure{" "}
              <span className="highlight">YOU</span> stay informed of{" "}
              <span className="highlight">EVERYTHING</span>. No one will
              out-geek us when it comes to the{" "}
              <span className="highlight">Southeastern Wisconsin</span> and{" "}
              <span className="highlight">Central Florida </span> real estate
              market!
            </p>

            <ul className="pb-10 text-reBody">
              <li className="py-6">
                <div className="flex">
                  <div className="flex size-24">
                    <Image
                      className="size-20 text-reGreen"
                      src="/img/houseicons/villa.svg"
                      alt="Villa"
                      width={20}
                      height={20}
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
                    <Image
                      className="size-20"
                      src="/img/houseicons/apartment.svg"
                      alt="Apartment"
                      width={20}
                      height={20}
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
          <div className="w-full lg:w-1/2">
            <Image
              src="/img/milwaukee-first-time-home-buyer-closing.webp"
              width={744}
              height={609}
              alt="Milwaukee First Time Home Buyer - Closing on their new home!"
              priority={true}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="fill-reBlue h-10"
          aria-hidden="true"
        >
          <path d="M0.00,49.99 C150.00,150.00 166.48,78.46 500.00,49.99 L500.00,150.00 L-32.16,178.13 Z"></path>
        </svg>
      </section>

      <section
        className="flex flex-col bg-reBlue min-h-20 p-6 py-20"
        aria-label="Featured Listings"
      >
        <div className="flex flex-col items-center container">
          <h2 className="text-reBlue font-heading leading-[1.2em] text-7xl font-bold text-stroke-lg text-stroke-white text-3xl tracking-wider py-6">
            Milwaukee Featured Listings
          </h2>
          <h3 className="sr-only">Featured Properties</h3>
          <Suspense fallback={<LoadingListingCard number={3} />}>
            <ListingsContent />
          </Suspense>
        </div>
      </section>

      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "40px" }}
        className="bg-white fill-reBlue"
      >
        <path d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"></path>
      </svg>

      <section
        className="flex min-h-[200px] bg-white p-6 pt-20"
        aria-label="Our Approach"
      >
        <div className="flex flex-col lg:flex-row items-center container">
          <div className="p-6 w-full lg:w-1/2">
            <h2 className="text-neutral-200 font-heading leading-[1.2em] text-7xl font-bold tracking-wider">
              Real Simple. <br />
              Real Skills. <br />
              Real Results.®
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-heading font-semibold uppercase text-reGreen text-lg">
              #reElevated Boutique Style
            </h3>
            <h4 className="font-heading capitalize text-reDark text-4xl font-bold pb-4">
              Personalized Approach
            </h4>
            <p className="leading-relaxed text-reBody">
              We take a personalized educated approach to every situation. It is
              designed to educate you and provide you with the confidence you
              need to make an educated decision.
            </p>
            <ul className="py-6 text-reBody p-4">
              <li className="py-2">
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-reGreen font-semibold font-heading text-lg hover:scale-95 transition"
                  >
                    First Time Home Buyer
                  </Link>
                  <p>
                    reThought Agents prepared to offer a comprehensive
                    consultation where they go over our propietary Step-By-Step
                    First Time Home Buyer guide, Zero to 45.
                  </p>
                </div>
              </li>
              <li className="py-2">
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-reGreen font-semibold font-heading text-lg hover:scale-95 transition"
                  >
                    Home Sellers
                  </Link>
                  <p>
                    reThought Agents are prepared to bring you the ANWERS to the
                    most important questions regarding selling your home.
                  </p>
                </div>
              </li>
              <li className="py-2">
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-reGreen font-semibold font-heading text-lg hover:scale-95 transition"
                  >
                    Upgrades/Downgrades
                  </Link>
                  <p>
                    Need more space? Or maybe you're downsizing? reThought Real
                    Estate is your trusted advisor guiding you through life's
                    big moves.
                  </p>
                </div>
              </li>
              <li className="py-2">
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-reGreen font-semibold font-heading text-lg hover:scale-95 transition"
                  >
                    Investors
                  </Link>
                  <p>
                    Rental portfolio? Flip? Equity game? reThought agents know
                    the strategies for each and can help you make sound
                    decisions based on sales data and your invidial goals as an
                    investor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white py-0 mt-[-100px]"
        viewBox="0 0 1440 320"
        aria-hidden="true"
      >
        <path
          fill="#222625"
          fillOpacity="1"
          d="M0,64L0,288L288,288L288,192L576,192L576,224L864,224L864,256L1152,256L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
        ></path>
      </svg>
      <section
        className="bg-reDark min-h-[200px] p-6 py-20 m-[-5px]"
        aria-label="Commercial Real Estate"
      >
        <div className="flex flex-col lg:flex-row container">
          <div className="w-2/2 lg:w-1/2">
            <h3 className="font-heading text-lg font-semibold text-neutral-300">
              Multi Family - Bilingual
            </h3>
            <h2 className="font-heading capitalize bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-4xl font-bold bg-clip-text text-transparent pb-4">
              Commercial Real Estate
            </h2>
            <div className="flex">
              <div className="w-full">
                <p className="text-reBody text-neutral-400 pb-4">
                  At reThought Real Estate, we believe commercial real estate is
                  about fostering business growth and community development in
                  Southeaster Wisconsin and Central Florida. Our team combines
                  innovative technology with deep market knowledge to offer
                  strategic guidance tailored to your specific business needs.
                </p>
                <p className="text-reBody text-neutral-400 pb-8">
                  Our approach begins with understanding your goals, allowing us
                  to create personalized strategies for buying, selling,
                  leasing, or managing properties. We handle all aspects of
                  commercial real estate transactions, ensuring a seamless and
                  efficient process.
                </p>
                <nav className="flex flex-col lg:flex-row gap-4">
                  <Link
                    className="flex w-max border rounded-lg text-white text-center font-heading px-6 md:px-5 py-2 text-lg hover:scale-95 transition mx-auto"
                    href="#"
                  >
                    Connect with an Agent
                  </Link>
                  <Link
                    className="flex w-max border rounded-lg text-white text-center font-heading px-6 md:px-5 py-2 text-lg hover:scale-95 transition mx-auto"
                    href="#"
                  >
                    Explore our Commercial Listings
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="w-2/2 lg:w-1/2">
            <Image
              src="/img/rethought-for-sale.png"
              alt="For Sale Sign"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-30 w-max bg-white"
        viewBox="0 0 1440 320"
        aria-hidden="true"
      >
        <path
          fill="#222625"
          fillOpacity="1"
          d="M0,64L0,288L288,288L288,192L576,192L576,224L864,224L864,256L1152,256L1152,96L1440,96L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"
        ></path>
      </svg>

      <section
        className="flex flex-col lg:flex-row bg-white"
        aria-label="Service Locations"
      >
        <div className="container flex flex-col lg:flex-row gap-6 py-20 p-6">
          <article className="w-full lg:w-1/2">
            <h2 className="font-heading font-bold text-reGrey text-[5em] leading-none">
              <span className="text-[24px] font-semibold m-0 p-0">
                Southeastern
              </span>
              <br />
              Wisconsin
            </h2>
            <Divider width="90px" color="reGreen" />
            <p className="py-5 text-reGrey-300 font-body leading-relaxed text-lg">
              Milwaukee is a vibrant city perfect for families, offering a mix
              of cultural experiences and kid-friendly attractions. From
              exploring the Milwaukee Public Museum and Discovery World to
              visiting the city's famous parks and zoos, there's always
              something for families to enjoy. The city is also known for its
              thriving real estate market, presenting great investment
              opportunities in both residential and commercial properties.
              Milwaukee's iconic Fiserv Forum and rich cultural festivals make
              it an exciting place to live and invest, offering a strong sense
              of community alongside modern amenities.
            </p>
          </article>
          <article className="w-full lg:w-1/2">
            <h2 className="font-heading font-bold text-reGrey text-[5em] leading-none">
              <span className="text-[24px] font-semibold m-0 p-0">Central</span>
              <br />
              Florida
            </h2>
            <Divider width="90px" color="reGreen" />
            <p className="py-5 text-reGrey-300 font-body leading-relaxed text-lg">
              Central Florida is a family-friendly destination known for its
              world-famous theme parks like Walt Disney World, Universal
              Studios, and SeaWorld, making it a paradise for kids and parents
              alike. Beyond the attractions, the region offers a welcoming
              environment with top-rated schools, family-oriented communities,
              and endless entertainment options. Central Florida is also a prime
              spot for real estate investment, with growing opportunities in
              vacation rentals and residential properties near the parks. With
              year-round sunshine, family activities, and strong investment
              potential, Central Florida is an ideal place to live, play, and
              invest.
            </p>
          </article>
        </div>
      </section>

      <section aria-label="Agent Testimonials">
        <Suspense fallback={<LoadingListingCard number={3} />}>
          <AgentTestimonialsWrapper placeId="ChIJb7MfaNYXBYgRgx-s57Z2YfI" />
        </Suspense>
      </section>
    </>
  );
};

export default Homepage;
