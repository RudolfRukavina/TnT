import React from "react";
import { BiBus, BiTaxi } from "react-icons/bi";
import { GrBike } from "react-icons/gr";
import { PiVan } from "react-icons/pi";
import Gallery from "./Gallery";
import Subtitle from "./Subtitle";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-10 px-4 border-t border-t-textColor border-opacity-30  lg:border-none"
    >
      <Subtitle first="upoznajte" second="nas" className="mb-8" />

      <div className="flex items-center gap-2 justify-center text-yellowPrimary mb-2">
        <BiTaxi />
        <PiVan />
        <BiBus />
        <GrBike />
      </div>
      <div className="flex flex-col items-center gap-1 text-center mb-4">
        <p className="opacity-70">
          Mi smo obiteljska tvrtka s dugogodišnjim iskustvom u prijevozu
          putnika. Naša misija je osigurati svakom putniku udobnost i
          zadovoljstvo.
        </p>
        <p className="opacity-70">
          Iza nas stoje godine predanog rada i tisuće sretnih korisnika koji nam
          vjeruju!
        </p>
        <p className="border-b border-yellowPrimary">
          Obratite nam se s povjerenjem!
        </p>
      </div>

      {/* gallery */}
      <Gallery />
    </section>
  );
}
