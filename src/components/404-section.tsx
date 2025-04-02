"use client";

import { Button } from "./ui/button";

const NotFoundSection = () => {
  return (
    /* Background Image */
    <section
      style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),url('/images/abstract-background.jpg')" }}
      className="flex justify-start items-center h-[606px] md:h-[calc(100vh-32px)] bg-cover bg-center lg:px-24">
      {/* Wrapper */}
      <div className=" flex flex-col px-3 py-12 gap-12 md:px-4 md:py-16 md:gap-8">
        {/* Text & Button */}
        <div className="flex flex-col gap-8  md:gap-16 ">
          {/* Text pair */}
          <div className="flex flex-col gap-6 ">
            {/* Header */}
            <header className="flex flex-col gap-3 ">
              <span className="text-indigo-700 font-semibold text-base">Not found</span>
              <h1 className="font-semibold text-neutral-900 text-4xl md:text-5xl lg:text-6xl">We can’t find the page</h1>
            </header>
            {/* Text */}
            <p className="text-neutral-600 md:text-xl text-lg">Sorry, the page you are looking for doesn&apos;t  exist or has been moved.</p>
          </div>
          {/* button */}
          <div className="flex ">
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