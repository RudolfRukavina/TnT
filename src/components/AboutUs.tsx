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
      className="py-10 px-4 border-t border-t-textColor border-opacity-30  lg:border-none max-w-3xl lg:mx-auto"
    >
      {/* <Subtitle first={t("title1")} second={t("title2")} className="mb-8" /> */}
      <h2 className="text-center text-base/7 font-semibold text-secondary">
        Upoznajte
      </h2>
      <p className="mx-auto mb-10  mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
        Naš vozni park
      </p>

      {/* <div className="flex items-center gap-2 justify-center text-yellowPrimary mb-2">
        <BiTaxi />
        <PiVan />
        <BiBus />
        <GrBike />
      </div> */}
      <div className="flex flex-col items-center gap-1 text-center mb-4">
        {/* <p className="opacity-70">{t("message1")}</p>
        <p className="opacity-70">{t("message2")}</p>
        <p className="border-b border-yellowPrimary">{t("message3")}</p> */}
        <p className="opacity-70">
          Naš vozni park sastoji se od moderno opremljenih i uređenih vozila
          koja su redovito servisirana i održavana prema najvišim sigurnosnim
          standardima. Nudimo širok izbor prijevoznih opcija, uključujući udobne
          limuzine, prostrane kombije i luksuzne taksi automobile, kako bismo
          osigurali sigurno i ugodno putovanje za svakog putnika.
        </p>
      </div>

      {/* gallery */}
      <Gallery />
    </section>
  );
}
