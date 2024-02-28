import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../_components/ui/carousel"
import { Card, CardContent } from "../../_components/ui/card"

const ExclusiveListingContact = async ({listing}) => {
  return (
    <div className='flex px-6 justify-end'>
    <img src="https://rethought-realestate.com/wp-content/uploads/2021/05/Rudy-New-2-e1620845912437.png" className='hidden lg:inline-flex max-h-[550px]'/>
   
    <div className='flex-col px-6 content-end'>
    
    <h2 className='font-heading text-4xl md:text-6xl font-bold bg-gradient-to-r from-reGreen to-lime-600  text-transparent bg-clip-text inline-block py-3'>Ready to go see it?</h2>
    <p className='py-5 md:py-8 text-gray-500 text-lg '>Let's a closer look at {listing.address.deliveryLine} together. Let me know what works best for you. </p>

    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/3">
            <div className="p-1 text-center text-reGreen">
              Mon
              <Card className="border border-reGreen">
                <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
                  <span className="text-4xl font-heading font-semibold text-gray-500">2{index + 1}</span><br/>
                  <span className="text-xl font-semibold text-reGreen">FEB</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <p className="mx-auto py-3 text-center text-gray-500">Choose Your Date -- It's Free, Cancel Anytime</p>
    <div className="flex flex-col md:flex-row mx-auto justify-center max-w-xs gap-x-8  gap-y-8 my-3">
      <a className="border border-reGreen rounded-md py-3 px-4 hover:scale-95 transition text-center" href="#">Get Directions</a>
      <a className="border border-reGreen rounded-md py-3 px-4 hover:scale-95 transition text-center" href="tel:414-810-8450">Call Rudy</a>
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