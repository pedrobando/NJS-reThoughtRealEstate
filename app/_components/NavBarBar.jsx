"use client";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavBarBar = () => {
  const pathname = usePathname()
  return (
    <ul className="flex space-x-3 font-heading font-semibold text-md">
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
        <Link
          className={`link ${pathname === '/homes-for-sale' ? 'text-reGreen' : ''} relative flex w-full h-full active:text-reGreen`}
          href="/homes-for-sale"
        >
          Homes for Sale
        </Link>
      </li>
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
      <Link
          className={`link ${pathname === '/featured-listings' ? 'text-reGreen' : ''} relative flex w-full h-full active:text-reGreen`}
          href="/featured-listings"
        >
          Featured Listings
        </Link>
      </li>
      <li className="relative flex justify-between px-3 py-4 0 lg:px-3 hover:text-reGreen rounded-md list-none">
        <a className="relative flex w-full h-full" href="#">
          Buyers
        </a>
      </li>
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
        <a className="relative flex w-full h-full" href="#">
          Sellers
        </a>
      </li>
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
        <a className="relative flex w-full h-full" href="#">
          About Us
        </a>
      </li>
      <li className="relative flex flex-col justify-center hover:text-reGreen">
        <button
          type="button"
          className="inline-flex items-center rounded-md h-5 px-[12px] py-[18px] text-white transition-transform text-sm font-heading hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reBlue-600 outline outline-2 outline-offset-2"
        >
          <PhoneIcon className="-ml-0.5 h-5 w-5 " aria-hidden="true" />
          Call Now
        </button>
      </li>
    </ul>
  );
};

export default NavBarBar;
