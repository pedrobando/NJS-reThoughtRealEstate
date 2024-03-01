import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../_components/ui/carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "../../_components/ui/card"
import { Button } from "../../_components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../_components/ui/drawer"
import Link from "next/link";

const ExclusiveListingContact = async ({listing}) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth = currentDate.getDate();
  const month = currentDate.toLocaleString('en-US', { month: 'short' });

  const tomorrow1 = new Date(currentDate);
  tomorrow1.setDate(currentDate.getDate()+1);
  const dayOfWeek1 = tomorrow1.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth1 = tomorrow1.getDate();
  const month1 = tomorrow1.toLocaleString('en-US', { month: 'short' });
 
  const tomorrow2 = new Date(currentDate);
  tomorrow2.setDate(currentDate.getDate()+2);
  const dayOfWeek2 = tomorrow2.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth2 = tomorrow2.getDate();
  const month2 = tomorrow2.toLocaleString('en-US', { month: 'short' });

  const tomorrow3 = new Date(currentDate);
  tomorrow3.setDate(currentDate.getDate()+3);
  const dayOfWeek3 = tomorrow3.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth3 = tomorrow3.getDate();
  const month3 = tomorrow3.toLocaleString('en-US', { month: 'short' });

  const tomorrow4 = new Date(currentDate);
  tomorrow4.setDate(currentDate.getDate()+4);
  const dayOfWeek4 = tomorrow4.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth4 = tomorrow4.getDate();
  const month4 = tomorrow4.toLocaleString('en-US', { month: 'short' });

  const tomorrow5 = new Date(currentDate);
  tomorrow5.setDate(currentDate.getDate()+5);
  const dayOfWeek5 = tomorrow5.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth5 = tomorrow5.getDate();
  const month5 = tomorrow5.toLocaleString('en-US', { month: 'short' });

  const tomorrow6 = new Date(currentDate);
  tomorrow6.setDate(currentDate.getDate()+6);
  const dayOfWeek6 = tomorrow6.toLocaleString('en-US', { weekday:'short' });
  const dayOfMonth6 = tomorrow6.getDate();
  const month6 = tomorrow6.toLocaleString('en-US', { month: 'short' });

console.log(`Today is ${dayOfWeek}, ${month} ${dayOfMonth}`);

  return (
    <div className='flex px-6 justify-end'>
    <img src="https://rethought-realestate.com/wp-content/uploads/2021/05/Rudy-New-2-e1620845912437.png" className='hidden lg:inline-flex max-h-[550px]'/>
   
    <div className='flex-col px-6 content-end'>
    
    <h2 className='font-heading text-4xl md:text-6xl font-bold bg-gradient-to-r from-reGreen to-lime-600  text-transparent bg-clip-text inline-block py-3'>Ready to go see it?</h2>
    <p className='py-5 md:py-8 text-gray-500 text-lg '>Let's a closer look at {listing.address.deliveryLine} together. Let me know what works best for you. </p>
<Drawer>
    <Carousel className="w-full max-w-sm mx-auto ">
      <CarouselContent className="-ml-1  place-items-end">
       
      <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
      <DrawerTrigger asChild>
            <div className="p-1 text-center text-reGreen">
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <FontAwesomeIcon icon={faCalendarDays} className="text-gray-500 max-h-[40px] pb-1 mx-auto"/>
                  <span className="text-xl font-semibold text-reGreen uppercase">ASAP</span>
                </CardContent>
              </Card>
            </div>
            </DrawerTrigger>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
          <Link href="/" >
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month}</span>
                </CardContent>
              </Card>
            </div>
            </Link>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek1}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth1}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek2}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth2}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month2}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek3}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth3}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month3}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek4}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth4}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month4}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek5}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth5}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month5}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 basis-1/3 hover:scale-95 transition text-center">
            <div className="p-1 text-center text-reGreen">
              <span className="uppercase">{dayOfWeek6}</span>
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">{dayOfMonth6}</span><br/>
                  <span className="text-xl font-semibold text-reGreen uppercase">{month6}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
     
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <DrawerContent className="bg-reDark !border-0 !ring-0 !outline-0 !ring-offset-0 min-h-[55%]">
        <div className="mx-auto w-full max-w-3xl p-4">
          <DrawerHeader>
            <DrawerTitle className="text-gray-300">We will reach out asap for confirmation...</DrawerTitle>
            <DrawerDescription className="text-gray-400">Make sure you use the best phone number and email to contact you..</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            
          
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="text-reRed font-heading font-semibold">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    <p className="mx-auto py-3 text-center text-gray-500">Choose Your Date -- It's Free, Cancel Anytime</p>
    <div className="flex flex-col md:flex-row mx-auto justify-center max-w-xs gap-x-8  gap-y-8 my-3">
      <a className="font-semibold font-heading text-gray-400 border border-reGreen rounded-md py-3 px-4 hover:scale-95 transition text-center" href={`https://www.google.com/maps/dir/?api=1&destination=${listing.coordinates.latitude},${listing.coordinates.longitude}`} target="_blank" rel="noopener noreferrer">Get Directions</a>
      <a className="font-semibold font-heading text-gray-400 border border-reGreen rounded-md py-3 px-4 hover:scale-95 transition text-center" href="tel:414-810-8450">Call Rudy</a>
    </div>

    {/* <div className=' lg:max-w-[60%] space-y-3'>
    <label htmlFor="fullname" className="sr-only">
        Full Name
      </label>
      <input
        type="text"
        name="fullname"
        id="fullname"
        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Full name"
      />
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="you@example.com"
      />
      <label htmlFor="phone" className="sr-only">
        Phone
      </label>
      <input
        type="phone"
        name="phone-number"
        id="phone-number"
        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder=" (414)000-0000"
      />
    </div> */}

    <img src="https://rethought-realestate.com/wp-content/uploads/2021/05/Rudy-New-2-e1620845912437.png" className='lg:hidden max-h-[400px] pt-3'/>
    </div>
   
    </div>
  )
}

export default ExclusiveListingContact