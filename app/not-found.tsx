import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="
        min-h-screen
        bg-black
        text-white
        pt-32
        flex
        items-center
        justify-center
        px-6
      ">

        <div className="text-center">

          <h1 className="
            text-8xl
            font-black
            bg-gradient-to-r
            from-red-500
            to-orange-500
            bg-clip-text
            text-transparent
          ">
            404
          </h1>


          <h2 className="
            text-3xl
            font-bold
            mt-5
          ">
            Page Not Found
          </h2>


          <p className="
            text-gray-400
            mt-4
            max-w-lg
          ">
            The page you are looking for does not exist
            or may have been moved.
          </p>


          <Link
            href="/"
            className="
              inline-block
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
            🏠 Return Home
          </Link>

        </div>

      </main>
    </>
  );
}