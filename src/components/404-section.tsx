"use client";

import { Button } from "./ui/button";

const NotFoundSection = () => {
  return (
    /* Background Image */
    <section className="flex flex-col justify-center  h-screen bg-[url('/images/abstract-background.jpg')] bg-cover  bg-center">
      {/* Wrapper */}
      <div className=" lg:p-24 flex flex-col p-5">
        {/* Text & Button */}
        <div className="flex flex-col lg:p-24 gap-16 md:py-16 md:px-4">
          {/* Text pair */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <header className="flex flex-col gap-3">
              <span className="text-indigo-700 font-semibold text-base">Not found</span>
              <h1 className="font-semibold text-neutral-900 text-4xl md:text-6xl">We can’t find the page</h1>
            </header>
            {/* Text */}
            <p className="text-neutral-600 md:text-xl text-lg">Sorry, the page you are looking for doesn't exist or has been moved.</p>
          </div>
          {/* button */}
          <div className="flex">
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