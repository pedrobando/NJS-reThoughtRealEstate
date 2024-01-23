"use client";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CalendarIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function NavBarSlide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="relative rounded-md bg-reGreen hover:text-reBlue transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-reGreen-300"
        onClick={() => setOpen(true)}
      >
        <span className="absolute -inset-2.5" />
        <span className="sr-only">Open Menu</span>
        <Bars3Icon className="text-white size-[60px] p-[8px] " />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-950 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-t from-reBlue-700 to-reBlue py-6 shadow-xl">
                      <div className="px-[5%] sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex h-7 items-center justify-end">
                            <button
                              type="button"
                              className="relative rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-reBlue-500 focus:ring-offset-2 opacity-70"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-[10%] md:px-[10%]">
                        <button
                          type="button"
                          className="w-full inline-flex items-center place-content-center gap-x-2 rounded-md bg-white px-3.5 py-3.5 text-reBlue transition-transform text-lg font-heading hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reBlue-600"
                        >
                          <CalendarIcon
                            className="-ml-0.5 h-5 w-5"
                            aria-hidden="true"
                          />
                          Schedule Consultation
                        </button>
                        <ul role="list" className="mt-[30px] text-lg font-heading font-semibold">
                            <li className="relative flex justify-between px-3 py-4 hover:bg-reBlue-50 lg:px-3 hover:text-reBlue rounded-md"><a className="relative flex w-full h-full" href="/homes-for-sale">Homes for Sale</a></li>
                            <li className="relative flex justify-between px-3 py-4 hover:bg-reBlue-50 lg:px-3 hover:text-reBlue rounded-md"><a className="relative flex w-full h-full" href="#">Featured Listings</a></li>
                            <li className="relative flex justify-between px-3 py-4 hover:bg-reBlue-50 lg:px-3 hover:text-reBlue rounded-md"><a className="relative flex w-full h-full" href="#">Buyers</a></li>
                            <li className="relative flex justify-between px-3 py-4 hover:bg-reBlue-50 lg:px-3 hover:text-reBlue rounded-md"><a className="relative flex w-full h-full" href="#">Sellers</a></li>
                            <li className="relative flex justify-between px-3 py-4 hover:bg-reBlue-50 lg:px-3 hover:text-reBlue rounded-md"><a className="relative flex w-full h-full" href="#">About Us</a></li>
                            <li className="relative flex justify-between px-3 py-4 hover:bg-reBlue-50 lg:px-3 hover:text-reBlue rounded-md"><a className="relative flex w-full h-full" href="#">Contact</a></li>
                        </ul>
                      </div>
                      <div className="flex justify-between mt-6 px-[10%] md:px-[10%]">
                          Facebook,Instagram

                          <button
                          type="button"
                          className="inline-flex items-center place-content-center gap-x-2 rounded-md px-3.5 py-3.5 text-white transition-transform text-lg font-heading hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reBlue-600 outline outline-2 outline-offset-2"
                        >
                          <PhoneIcon
                            className="-ml-0.5 h-5 w-5 "
                            aria-hidden="true"
                          />
                          Call Now
                        </button>
                        </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
