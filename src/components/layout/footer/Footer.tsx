"use client";
import Link from "next/link";
export const Footer = () => {
  return (


    <div className=" border-t border-gray-100 p-3 w-screen h-10 fixed bottom-0 bg-[#D7E7F2] z-10">
      <div className="flex justify-between text-sm/relaxed text-gray-500">
        <div className="flex justify-center w-1/2 ">
          <p className="pr-2">©</p>
          <Link
            href="https://github.com/Rosialdo"
            className="text-blue-800 font- pr-2"
          >
            Rosialdo Vidinho
          </Link>
          <p className="pr-2">2023.</p>
        </div>
        <div className="flex justify-center w-1/2">

        </div>
      </div>
    </div>
  );
};