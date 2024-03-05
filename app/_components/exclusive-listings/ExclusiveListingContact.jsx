import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../_components/ui/carousel";
import Image from "next/image";
import ExclusiveListingsDrawer from "./ExclusiveListingsDrawer";

const ExclusiveListingContact = async ({ listing, photoUrl, agent }) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth = currentDate.getDate();
  const month = currentDate.toLocaleString("en-US", { month: "short" });

  const tomorrow1 = new Date(currentDate);
  tomorrow1.setDate(currentDate.getDate() + 1);
  const dayOfWeek1 = tomorrow1.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth1 = tomorrow1.getDate();
  const month1 = tomorrow1.toLocaleString("en-US", { month: "short" });

  const tomorrow2 = new Date(currentDate);
  tomorrow2.setDate(currentDate.getDate() + 2);
  const dayOfWeek2 = tomorrow2.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth2 = tomorrow2.getDate();
  const month2 = tomorrow2.toLocaleString("en-US", { month: "short" });

  const tomorrow3 = new Date(currentDate);
  tomorrow3.setDate(currentDate.getDate() + 3);
  const dayOfWeek3 = tomorrow3.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth3 = tomorrow3.getDate();
  const month3 = tomorrow3.toLocaleString("en-US", { month: "short" });

  const tomorrow4 = new Date(currentDate);
  tomorrow4.setDate(currentDate.getDate() + 4);
  const dayOfWeek4 = tomorrow4.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth4 = tomorrow4.getDate();
  const month4 = tomorrow4.toLocaleString("en-US", { month: "short" });

  const tomorrow5 = new Date(currentDate);
  tomorrow5.setDate(currentDate.getDate() + 5);
  const dayOfWeek5 = tomorrow5.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth5 = tomorrow5.getDate();
  const month5 = tomorrow5.toLocaleString("en-US", { month: "short" });

  const tomorrow6 = new Date(currentDate);
  tomorrow6.setDate(currentDate.getDate() + 6);
  const dayOfWeek6 = tomorrow6.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth6 = tomorrow6.getDate();
  const month6 = tomorrow6.toLocaleString("en-US", { month: "short" });

  return (
    <div className="flex container md:px-6 justify-center z-50">
       {photoUrl && (
        <div className="hidden lg:inline-flex max-h-[550px] items-end">
        <Image 
        style={{
         width:"auto",
         height:"auto",
         maxHeight:"550px",
         objectFit: "contain"
        }}
        width={625}
        height={783}
        src={photoUrl}
        alt={listing.listingAgent.name}
        sizes="(max-width: 550px) 100vw, (max-width: 500px) 50vw, 33vw"
         />
      </div>)}
     
      <div className="flex flex-col md:px-6 content-end py-8">
        <h2 className="text-center  font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-reGreen to-lime-600  text-transparent bg-clip-text py-2">
          Ready to go see it?
        </h2>
        <p className="text-left px-6 py-5 md:py-8 text-gray-500 text-basis ">
          Let's a closer look at {listing.address.deliveryLine} together. Let me
          know what works best for you.{" "}
        </p>

        <Carousel className="w-full px-6 max-w-sm mx-auto ">
          <CarouselContent className="-ml-1  place-items-end">
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer listing={listing} date={"ASAP"} />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek}
                dayOfMonth={dayOfMonth}
                month={month}
              />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek1}
                dayOfMonth={dayOfMonth1}
                month={month1}
              />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek2}
                dayOfMonth={dayOfMonth2}
                month={month2}
              />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek3}
                dayOfMonth={dayOfMonth3}
                month={month3}
              />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek4}
                dayOfMonth={dayOfMonth4}
                month={month4}
              />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek5}
                dayOfMonth={dayOfMonth5}
                month={month5}
              />
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
              <ExclusiveListingsDrawer
                listing={listing}
                dayOfWeek={dayOfWeek6}
                dayOfMonth={dayOfMonth6}
                month={month6}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p className="mx-auto py-3 text-center text-gray-500">
          Choose Your Date -- It's Free, Cancel Anytime
        </p>
        <div className="flex flex-col md:flex-row mx-auto justify-center max-w-xs gap-x-8  gap-y-8 my-3">
          <a
            className="font-semibold font-heading text-gray-400 border border-reGreen rounded-md py-3 px-4 hover:scale-95 transition text-center"
            href={`https://www.google.com/maps/dir/?api=1&destination=${listing.coordinates.latitude},${listing.coordinates.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
          <a
            className="font-semibold font-heading text-gray-400 border border-reGreen rounded-md py-3 px-4 hover:scale-95 transition text-center"
            href={`tel:${listing.listingAgent.phone}`}
          >
            Call {agent.nickname || agent.name}
          </a>
        </div>
        {photoUrl && (
          <div className="lg:hidden max-h-[400px] pt-3 mx-auto -mb-8" >
          <Image 
        style={{
         width:"auto",
         height:"auto",
         maxHeight:"550px",
         objectFit: "contain"
        }}
        width={233}
        height={388}
        src={photoUrl}
        alt={listing.listingAgent.name}
        sizes="(max-width: 550px) 100vw, (max-width: 500px) 50vw, 33vw"
         />
          </div>

        )}
          
        
      </div>
    </div>
  );
};

export default ExclusiveListingContact;
