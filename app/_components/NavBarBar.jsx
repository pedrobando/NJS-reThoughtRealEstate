import { CalendarIcon, PhoneIcon } from "@heroicons/react/20/solid";

const NavBarBar = () => {
  return (
    <ul className="flex space-x-4 font-heading font-semibold text-lg">
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
        <a className="relative flex w-full h-full" href="/homes-for-sale">
          Homes for Sale
        </a>
      </li>
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
        <a className="relative flex w-full h-full" href="#">
          Featured Listings
        </a>
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
      <li className="relative flex justify-between px-3 py-4  lg:px-3 hover:text-reGreen rounded-md list-none">
        <a className="relative flex w-full h-full" href="#">
          Contact
        </a>
      </li>
      <li className="relative flex justify-between hover:text-reGreen rounded-md list-none">
      <button
                          type="button"
                          className="inline-flex items-center  gap-x-2 rounded-md px-3.5 py-3.5 text-white transition-transform text-lg font-heading hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reBlue-600 outline outline-2 outline-offset-2"
                        >
                          <PhoneIcon
                            className="-ml-0.5 h-5 w-5 "
                            aria-hidden="true"
                          />
                          Call Now
                        </button>
      </li>
    </ul>
  );
};

export default NavBarBar;
