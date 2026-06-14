"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      flex-col
      items-center
      justify-center
      px-6
      "
    >

      <h1
        className="
        text-7xl
        font-black
        bg-gradient-to-r
        from-red-500
        to-orange-500
        bg-clip-text
        text-transparent
        "
      >
        ⚠ Error
      </h1>


      <p
        className="
        mt-6
        text-gray-400
        text-center
        max-w-lg
        "
      >
        TrustShield AI encountered an unexpected
        problem while processing your request.
      </p>


      <button
        onClick={() => reset()}
        className="
        mt-8
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        font-bold
        hover:scale-105
        transition
        "
      >
        🔄 Try Again
      </button>

    </main>
  );
}