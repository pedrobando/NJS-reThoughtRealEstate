import { Drawer, DrawerTrigger } from "../../_components/ui/drawer";
import Link from "next/link";

import ExclusiveDrawerContent from "./ExclusiveDrawerContent";

export default function ButtonsExclusiveListingsDrawer({listing}) {
  return (
    <Drawer className=" m-0 p-0">
      <DrawerTrigger asChild>
      <Link className="rounded-lg text-white font-heading md:px-8 py-2 text-lg md:text-s px-3 bg-reGreen motion-safe:animate-pulse border-reGreen hover:scale-95 transition md:text-base" href="#">
          I WANT TO SEE IT
        </Link>
      </DrawerTrigger>
      <ExclusiveDrawerContent listing={listing} />
    </Drawer>
  );
}
