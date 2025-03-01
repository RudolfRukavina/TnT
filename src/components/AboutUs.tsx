import React from "react";
import { BiBus, BiTaxi } from "react-icons/bi";
import { GrBike } from "react-icons/gr";
import { PiVan } from "react-icons/pi";
import Gallery from "./Gallery";
import Subtitle from "./Subtitle";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <section
      id="about"
      className="py-10 px-4 border-t border-t-textColor border-opacity-30  lg:border-none"
    >
      <Subtitle first={t("title1")} second={t("title2")} className="mb-8" />

      <div className="flex items-center gap-2 justify-center text-yellowPrimary mb-2">
        <BiTaxi />
        <PiVan />
        <BiBus />
        <GrBike />
      </div>
      <div className="flex flex-col items-center gap-1 text-center mb-4">
        <p className="opacity-70">{t("message1")}</p>
        <p className="opacity-70">{t("message2")}</p>
        <p className="border-b border-yellowPrimary">{t("message3")}</p>
      </div>

      {/* gallery */}
      <Gallery />
    </section>
  );
}
