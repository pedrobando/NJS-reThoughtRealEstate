import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-reBlue">404 Error </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-reGreen sm:text-5xl">
          Property not found...
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, this is happened. Here is a couble of reasons why this might
          happens:
        </p>

        <ul
          role="list"
          className="mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
        >
          <li className="relative flex gap-x-6 py-6">
            <div className="flex-auto">
              <h3 className="text-left text-sm font-semibold leading-6 text-gray-900">
                
                Property is not exclusively offered by reThought Real Estate
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-left">
                If you bookmarked this link or followed an old link it is
                possible the property is no longer available.{" "}
              </p>
            </div>
          </li>
          <li className="relative flex gap-x-6 py-6">
            <div className="flex-auto">
              <h3 className="text-left text-sm font-semibold leading-6 text-gray-900">
                
                Property is No Longer for Sale
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-left">
                If you bookmarked this link or followed an old link it is
                possible the property is no longer available.{" "}
              </p>
            </div>
          </li>
        </ul>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="text-sm font-semibold text-white bg-reGreen border rounded-lg py-4 px-8">
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
