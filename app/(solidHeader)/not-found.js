import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-blue-600">
          🔍 Lost on Your Home Search Quest?
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          You’ve wandered off the map, but no worries — every great story has a
          plot twist!
        </p>
        <p className="mt-2 text-gray-600">
          📍 Return to the{" "}
          <Link
            href="/"
            className="text-blue-500 hover:underline font-semibold"
          >
            homepage
          </Link>{" "}
          to get back on track.
        </p>
        <p className="mt-2 text-gray-600">
          💬 Need a guide to navigate?{" "}
          <Link
            href="/contact"
            className="text-blue-500 hover:underline font-semibold"
          >
            Reach out to our expert team
          </Link>{" "}
          — we’re here to lead you to your happily ever after.
        </p>
        <div className="mt-6">
          <img
            src="/images/404-treasure-map.png"
            alt="Lost treasure map illustration"
            className="w-60 mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
