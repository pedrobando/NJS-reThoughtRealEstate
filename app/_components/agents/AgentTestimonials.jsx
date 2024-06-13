"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

async function getAgentTestimonials(placeId) {
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?key=AIzaSyCAaXwGj3Q6M3B5YKz5EAMjgnJ6jneUsEc&fields=id,displayName,rating,userRatingCount,reviews`,
      {
        method: "GET",
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }

    return await res.json();
  } catch (error) {
    console.error("Error loading topics: ", error);
  }
}

export default function AgentTestimonials({ listing, placeId }) {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonial, setTestimonial] = useState();

  async function fetchTestimonials(placeId) {
    try {
      const data = await getAgentTestimonials(placeId);
      setTestimonials(data.reviews);
      setTestimonial(data);
    } catch (error) {
      console.error("Error loading testimonials: ", error);
    }
  }

  useEffect(() => {
    fetchTestimonials(placeId);
  }, [placeId]);
  return (
    <>
      {testimonials && testimonial && (
        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl z-0"
            aria-hidden="true"
          >
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-reGreen to-reBlue"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end z-0"
            aria-hidden="true"
          >
            <div
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-reBlue to-reGreen xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="container mx-auto max-w-8/12 px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h4 className="text-lg font-semibold leading-8 tracking-tight text-reGreen">
                {placeId === "ChIJb7MfaNYXBYgRgx-s57Z2YfI"
                  ? "reThought Real Estate"
                  : listing.listingAgent.name}
                's Latest Reviews
              </h4>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join the neighborhood of happy clients!
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full py-14"
            >
              <CarouselContent className="rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/1 lg:basis-1/3"
                  >
                    <div className="divide-y divide-white overflow-hidden rounded-lg bg-white shadow">
                      <div className="px-4 pt-6 sm:px-6">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex-shrink-0 sm:mb-0 sm:mr-4">
                            <Image
                              src={testimonial.authorAttribution.photoUri}
                              alt={testimonial.authorAttribution.displayName}
                              width={48}
                              height={48}
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">
                              {testimonial.authorAttribution.displayName}
                            </h4>
                            <p> {testimonial.relativePublishTimeDescription}</p>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-1 sm:p-6 h-[100px] overflow-auto">
                        {testimonial.originalText &&
                          testimonial.originalText.text && (
                            <p className="p-0 m-0">
                              {testimonial.originalText.text}
                            </p>
                          )}
                      </div>
                      <div className="px-4 my-3 sm:px-6 max-h-14 float-right">
                        <Image
                          src="https://cdn.mos.cms.futurecdn.net/rjqJEKv6P9Yjy9d3KMGvp8-320-80.jpg"
                          alt="Google Review"
                          width={100}
                          height={56}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <h4 className="text-lg font-semibold leading-8 tracking-tight text-reGreen text-center">
            {placeId === "ChIJb7MfaNYXBYgRgx-s57Z2YfI"
                  ? "reThought Real Estate"
                  : listing.listingAgent.name}
                's Latest Reviews has {testimonial.userRatingCount}{" "}
              verified reviews on Google with an average of {testimonial.rating}{" "}
              stars.
            </h4>
          </div>
        </div>
      )}
    </>
  );
}
