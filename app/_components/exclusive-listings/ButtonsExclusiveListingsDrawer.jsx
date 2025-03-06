"use client";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import { useState } from "react";

import ExclusiveDrawerContent from "./ExclusiveDrawerContent";

export default function ButtonsExclusiveListingsDrawer({ listing }) {
  let [open, setOpen] = useState(false);

  return (
    <Drawer className=" m-0 p-0" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Link
          className="rounded-lg text-white font-heading md:px-8 py-2 text-lg md:text-s px-3 bg-reGreen motion-safe:animate-pulse border-reGreen hover:scale-95 transition md:text-base"
          href="#"
        >
          I WANT TO SEE IT
        </Link>
      </DrawerTrigger>
      <ExclusiveDrawerContent
        listing={listing}
        afterSave={() => {
          setOpen(false);
        }}
      />
    </Drawer>
  );
}
