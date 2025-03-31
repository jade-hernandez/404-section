"use client";

import { Button } from "./ui/button";

const NotFoundSection = () => {
  return (
    /* Background Image */
    <section className="flex flex-col justify-center  h-screen bg-[url('/images/abstract-background.jpg')] bg-cover  bg-center">
      {/* Wrapper */}
      <div className=" p-24 flex flex-col border border-red-500">
        {/* Text & Button */}
        <div className="flex flex-col p-24 gap-16 border border-blue-500 ">
          {/* Text pair */}
          <div className="flex flex-col gap-6 border border-green-500">
            {/* Header */}
            <div className="flex flex-col gap-3 border border-red-500">
              <span className="text-indigo-700 font-semibold text-base">Not found</span>
              <h1 className="font-semibold text-neutral-900 text-6xl">We can’t find the page</h1>
            </div>
            {/* Text */}
            <div className="flex flex-col border border-orange-500">
              <span className="text-neutral-600 text-xl">Sorry, the page you are looking for doesn't exist or has been moved.</span>
            </div>
          </div>
          {/* button */}
          <div className="flex border border-purple-500">
            <Button
              size={"lg"}
              variant={"primary"}
              textContent={"Back to Home"}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default NotFoundSection;