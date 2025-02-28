"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import SwiperItem from "./SwiperItem";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { BiBus, BiTaxi } from "react-icons/bi";
import { PiVan } from "react-icons/pi";
import { GrBike } from "react-icons/gr";
import Subtitle from "./Subtitle";

export default function Services() {
  return (
    <section
      className="border-t lg:border-none border-t-textColor border-opacity-30 p-4 w-full pb-12 pt-12 flex flex-col gap-10"
      id="services"
    >
      <Subtitle first="naše" second="usluge" />

      <div className="text-center">
        <div className="flex items-center gap-2 justify-center text-yellowPrimary mb-2 ">
          <BiTaxi />
          <PiVan />
          <BiBus />
          <GrBike />
        </div>
        <div className="flex flex-col gap-1 items-center mb-4">
          <p className=" opacity-70">
            Tražite pouzdan taxi, prijevoz do zračne luke ili savršen izlet? Na
            pravom ste mjestu!
          </p>
          <p>
            Stojimo vam na raspolaganju{" "}
            <span className="border-b border-b-yellowPrimary">
              0-24 - 7 dana u tjednu!
            </span>
          </p>
        </div>
      </div>

      {/* swiper */}
      <div className=" ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          <SwiperSlide>
            <SwiperItem
              title="Transferi"
              description="Pouzdani transferi za svaku priliku. Osiguravamo udoban prijevoz do zračnih luka u regiji i inozemstvu."
              src="/traffic.png"
              link="/transferi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem
              title="Ekskurzije"
              description="Otkrijte uzbudljive izlete diljem istarske rivijere. Podarite sebi i svojim najdražima nezaboravno iskustvo."
              src="/mercedes.png"
              link="/ekskurzije"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem
              title="Bixe Taxi"
              description="Prijevoz bicikala na željenu lokaciju – savršeno za ljubitelje biciklizma i sportske klubove. Prepustite se avanturi!"
              src="/bike.png"
              link="/biciklisti"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
