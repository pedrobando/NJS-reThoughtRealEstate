import { Drawer, DrawerTrigger } from "../../_components/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "../../_components/ui/card";
import ExclusiveDrawerContent from "./ExclusiveDrawerContent";


export default function ExclusiveListingsDrawer({
  date,
  dayOfWeek,
  dayOfMonth,
  month,
  listing
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
      <ExclusiveDrawerContent dayOfWeek={dayOfWeek} dayOfMonth={dayOfMonth} listing={listing} month={month} />
    </Drawer>
  );
}
