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
      <DrawerContent className="bg-reDark !border-0 !ring-0 !outline-0 !ring-offset-0 min-h-[55%]">
        <div className="mx-auto w-full max-w-3xl p-4">
          <DrawerHeader>
            <DrawerTitle className="text-gray-300">
              We will reach out asap for confirmation...
            </DrawerTitle>
            <DrawerDescription className="text-gray-400">
              Make sure you use the best phone number and email to contact you..
              We will call yu and email you to confirm your availability for:{" "}
              {date ? (
                date
              ) : (
                <span className="font-semibold">{`${dayOfWeek} ${month} ${dayOfMonth} `}</span>
              )}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0"></div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="text-reRed font-heading font-semibold"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
