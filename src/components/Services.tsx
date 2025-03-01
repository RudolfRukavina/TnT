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
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  const tHelper = useTranslations("ContactForm");

  return (
    <section
      className="border-t lg:border-none border-t-textColor border-opacity-30 p-4 w-full pb-12 pt-12 flex flex-col gap-10"
      id="services"
    >
      <Subtitle first={t("title1")} second={t("title2")} />

      <div className="text-center">
        <div className="flex items-center gap-2 justify-center text-yellowPrimary mb-2 ">
          <BiTaxi />
          <PiVan />
          <BiBus />
          <GrBike />
        </div>
        <div className="flex flex-col gap-1 items-center mb-4">
          <p className=" opacity-70">{t("message1")}</p>
          <p>
            {t("message2")}{" "}
            <span className="border-b border-b-yellowPrimary">
              0-24 - {t("message3")}
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
              title={tHelper("transferi")}
              description={t("descriptionTrans")}
              src="/traffic.png"
              link="/transferi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem
              title={tHelper("ekskurzije")}
              description={t("descriptionEks")}
              src="/mercedes.png"
              link="/ekskurzije"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem
              title="Bixe Taxi"
              description={t("descriptionBike")}
              src="/bike.png"
              link="/biciklisti"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
