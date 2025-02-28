"use client";
import React from "react";
import { PiVan } from "react-icons/pi";
import { BiBus, BiEuro, BiTaxi } from "react-icons/bi";
import { GrBike } from "react-icons/gr";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";

export default function HeroImage() {
  return (
    <div className="relative w-full lg:w-[400px] h-[300px]   ">
      <Image
        src="/blob.svg"
        alt="blob shape background"
        width={350}
        height={200}
        priority
        className="absolute select-none -left-24 fill-yellowPrimary opacity-90   "
      />
      <Image
        src="/superb.png"
        alt="skoda superb hero image"
        width={250}
        height={200}
        className="absolute select-none  top-28 right-20 scale-x-[-1] z-10  "
      />
      {/* blob text */}
      <div className="absolute flex flex-col items-center top-20 left-14 font-semibold  text-bgColor">
        <p className="text-2xl tracking-widest">0-24</p>
        <p className="tracking-widest">PON-NED</p>
      </div>

      {/* services list */}
      <div className="absolute top-[12%] right-8 flex flex-col items-center gap-2">
        <p className="flex items-center gap-1">
          {" "}
          <span className="text-yellowPrimary">
            <BiTaxi />
          </span>
          Taxi
        </p>
        <p className="flex items-center gap-1">
          <span className="text-yellowPrimary">
            <PiVan />
          </span>{" "}
          Transferi
        </p>
        <p className="flex items-center gap-1 ">
          {" "}
          <span className="text-yellowPrimary">
            <BiBus />
          </span>
          Ekskurzije
        </p>
        <p className="flex items-center gap-1">
          {" "}
          <span className="text-yellowPrimary">
            <GrBike />
          </span>
          Bike taxi
        </p>
        <div className="flex items-center gap-1">
          <span className="text-yellowPrimary">
            <BiEuro />
          </span>
          <span className="text-yellowPrimary">
            <IoCardOutline />
          </span>
        </div>
      </div>
    </div>
  );
}
