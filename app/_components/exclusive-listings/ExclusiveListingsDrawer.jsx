import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../_components/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "../../_components/ui/card";
import { Button } from "../../_components/ui/button";

export default function ExclusiveListingsDrawer({
  children,
  listing,
  date,
  dayOfWeek,
  dayOfMonth,
  month,
}) {
  return (
    <Drawer className=" m-0 p-0">
      <DrawerTrigger asChild>
        <div className="p-1 text-center text-reGreen">
          {dayOfWeek && <span className="uppercase">{dayOfWeek}</span>}
          <Card className="border border-reGreen">
            <CardContent className="flex-col aspect-square items-center justify-center p-6 ">
              {date ? (
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray-500 max-h-[40px] pb-1 mx-auto"
                />
              ) : (
                <>
                  <span className="text-4xl font-heading font-semibold text-gray-500">
                    {dayOfMonth}
                  </span>
                  <br />
                </>
              )}

              <span className="text-xl font-semibold text-reGreen uppercase">
                {date ? date : dayOfWeek}
              </span>
            </CardContent>
          </Card>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-reDark !shadow-none !border-0 !ring-0 !outline-0 !ring-offset-0 min-h-[65%] focus:ring-0 focus:shadow-none focus:border-0 focus:outline-0">
        <div className="mx-auto w-full max-w-3xl p-4">
          <DrawerHeader>
            <DrawerTitle className="text-gray-300">
              We will reach out asap for confirmation...
            </DrawerTitle>
            <DrawerDescription className="text-gray-400">
              Make sure you use the best phone number and email to contact you..
              We will call and email you check if you have any questions and to
              confirm your availability for:{" "}
              {date ? (
                date
              ) : (
                <span className="font-semibold text-lg">{`${dayOfWeek} ${month} ${dayOfMonth} `}</span>
              )}
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit="">
            <fieldset disabled="" className="group">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-4 group-disabled:opacity-50">
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
            <div className="mt-6 flex items-center justify-end gap-x-6">
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
    </Drawer>
  );
}
