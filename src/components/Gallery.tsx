"use client";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { IoPeopleOutline } from "react-icons/io5";

export default function Gallery() {
  return (
    <div className="flex justify-center items-center mb-6">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper w-[300px] h-[300px]"
      >
        <SwiperSlide className="flex justify-center items-center ">
          <img
            alt="image of mercedes sprinter minibus"
            src="/auto1.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="flex items-center justify-center gap-4 pt-1">
            <p className="font-semibold">Mercedes Sprinter Minibus</p>
            <p className="flex items-center gap-1 text-yellowPrimary">
              <IoPeopleOutline />
              15+1
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  ">
          <img
            alt="image of škoda superb"
            src="/auto2.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="flex items-center justify-center gap-4 pt-1">
            <p className="font-semibold">Škoda Superb</p>
            <p className="flex items-center gap-1 text-yellowPrimary">
              <IoPeopleOutline />
              3+1
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center ">
          <img
            alt="image of renault traffic passenger"
            src="/auto3.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="flex items-center justify-center gap-4 pt-1">
            <p className="font-semibold">Renault Traffic</p>
            <p className="flex items-center gap-1 text-yellowPrimary">
              <IoPeopleOutline />
              8+1
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
