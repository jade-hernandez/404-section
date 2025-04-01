"use client";

import { Button } from "./ui/button";

const NotFoundSection = () => {
  return (
    /* Background Image */
    <section className="flex flex-col justify-center  h-screen bg-[url('/images/abstract-background.jpg')] bg-cover bg-center md:py-[302px] lg:py-[105px] lg:px-24 border border-black">
      {/* Wrapper */}
      <div className=" flex flex-col px-3 py-12 gap-12 border md:px-4 md:py-16 md:gap-8 border-red-500">
        {/* Text & Button */}
        <div className="flex flex-col gap-8 lg:p-24 md:gap-16  border border-green-400">
          {/* Text pair */}
          <div className="flex flex-col gap-6 border border-blue-500">
            {/* Header */}
            <header className="flex flex-col gap-3 border border-yellow-300">
              <span className="text-indigo-700 font-semibold text-base">Not found</span>
              <h1 className="font-semibold text-neutral-900 text-4xl md:text-5xl lg:text-6xl">We can’t find the page</h1>
            </header>
            {/* Text */}
            <p className="text-neutral-600 md:text-xl text-lg">Sorry, the page you are looking for doesn&apos;t  exist or has been moved.</p>
          </div>
          {/* button */}
          <div className="flex border border-purple-500">
            <Button
              className="w-full gap-[6px] px-5 py-3 text-base items-center justify-center md:gap-[10px] md:px-6 md:py-4 md:text-lg rounded md:w-auto"
              variant={"primary"}
              textContent={"Back to Home"}
              aria-label="Navigate back to home page"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default NotFoundSection;