"use client"
import {
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer";
  import DrawerForm from "../forms/fub/DrawerForm"
  
  export default function ExclusiveDrawerContent({
    dayOfWeek,
    dayOfMonth,
    month,
    date,
    listing,
    afterSave
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
            <DrawerForm listing={listing} afterSave={afterSave}  />

          </div>
        </DrawerContent>
    );
  }
  