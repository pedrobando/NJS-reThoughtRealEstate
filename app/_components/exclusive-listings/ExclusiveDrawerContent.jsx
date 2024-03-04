import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "../ui/drawer";
  import { Button } from "../ui/button";
  
  export default function ExclusiveDrawerContent({
    children,
    listing,
    date,
    dayOfWeek,
    dayOfMonth,
    month,
  }) {
    return (
        <DrawerContent className="bg-gradient-to-t from-reDark to-black !shadow-none !border-0 !ring-0 !outline-0 !ring-offset-0 min-h-[65%] focus:ring-0 focus:shadow-none focus:border-0 focus:outline-0">
          <div className="mx-auto w-full max-w-3xl p-4">
            <DrawerHeader>
              <DrawerTitle className="tfont-heading text-xl md:text-4xl font-bold bg-gradient-to-r from-reGreen to-lime-200  text-transparent bg-clip-text">
                We will reach out asap for confirmation...
              </DrawerTitle>
              <DrawerDescription className="text-gray-400">
                Make sure you use the best phone number and email to contact you..
                We will call and email you check if you have any questions and to
                confirm your availability for:{" "}
                {date ? (
                  date
                ) : (
                  <span className="font-semibold text-lg">
                  {dayOfWeek && month && dayOfMonth ? `${dayOfWeek} ${month} ${dayOfMonth}` : "ASAP"}
                </span>
                )}
              </DrawerDescription>
            </DrawerHeader>
            <form onSubmit="">
              <fieldset disabled="" className="group">
                <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-6 p-4 group-disabled:opacity-50">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-200 "
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="bg-transparent block w-full rounded-md border-0 py-1.5 px-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reGreen sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
  
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="bg-transparent px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reGreen sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="bg-transparent px-2  block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reGreen sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
  
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className=" bg-transparent px-2  block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reGreen sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <DrawerFooter>
              <div className="mt-2 flex items-center justify-end gap-x-6">
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="text-reRed hover:text-reRed font-heading font-semibold hover:scale-95 transition"
                  >
                    Cancel
                  </Button>
                </DrawerClose>
                <Button
                  type="submit"
                  className="rounded-md bg-reGreen hover:bg-reGreen px-3 py-2 text-sm font-semibold font-heading text-white shadow-sm hover:scale-95 transition"
                >
                  Get Appoitment Confirmation
                </Button>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
    );
  }
  