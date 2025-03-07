"use client";
import { useFormState, useFormStatus } from "react-dom";
import { fubForms } from "@/utils/actions/fubForms";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const initialState = {
  message: "",
  error: null,
};

function SubmitButton({ pending }) {
  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="rounded-md bg-reGreen hover:bg-reGreen px-3 py-2 text-sm font-semibold font-heading text-white shadow-sm hover:scale-95 transition disabled:opacity-50 disabled:pointer-events-none"
    >
      Get Appointment Confirmation
    </button>
  );
}

export default function DrawerForm({ listing, afterSave }) {
  const [state, formAction] = useFormState(fubForms, initialState);

  return (
    <form action={formAction}>
      <DrawerFormForm listing={listing} afterSave={afterSave} state={state} />
    </form>
  );
}

export function DrawerFormForm({ listing, afterSave, state }) {
  const { pending } = useFormStatus();

  return (
    <fieldset className="group" disabled={pending}>
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
              disabled={pending}
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
              className="bg-transparent px-2 block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-reGreen sm:text-sm sm:leading-6"
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
      <input
        type="hidden"
        name="street"
        value={listing?.address.deliveryLine}
      />
      <input type="hidden" name="city" value={listing?.address.city} />
      <input type="hidden" name="state" value={listing?.address.state} />
      <input type="hidden" name="code" value={listing?.address.zip} />
      <input type="hidden" name="mlsNumber" value={listing?.id} />
      <input type="hidden" name="price" value={listing?.listPrice} />
      <input type="hidden" name="type" value={listing?.listingType} />

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
          <SubmitButton pending={pending} />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm text-neutral-500">
            I agree to be contacted by reThought Real Estate LLC and reThought
            Real Estate FL, LLC via call, email and text. To opt out, you can
            reply "stop" at any time or click the unsubscribe link in the
            emails. Message and data rates may apply.
          </p>
        </div>
        {state && (
          <span className="text-reRed text-lg text-center py-3">
            {state.message}
          </span>
        )}
        {state?.message === "Done" && afterSave()}
      </DrawerFooter>
    </fieldset>
  );
}
