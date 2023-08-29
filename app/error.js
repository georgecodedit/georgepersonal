"use client"; // Error components must be Client Components
import { LuHome } from "react-icons/lu";
import { useEffect } from "react";
import Link from "next/link";
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl font-semibold text-gray-600">
        Something went wrong!
      </h2>
      <p className="mt-4 text-gray-500">
        We couldn't find what you were looking for.
      </p>
      <Link
        href="/"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        <div className="flex justify-center items-center">
          <LuHome className="mr-2" />
          Go Home
        </div>
      </Link>
    </div>
  );
}
