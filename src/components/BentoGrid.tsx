import { Link } from "@/i18n/navigation";
import React from "react";
import MainCallButton from "./MainCallButton";

export default function BentoGrid() {
  return (
    <section id="bento" className=" bg-bgColor py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-secondary">
          Naše usluge
        </h2>
        <p className="mx-auto  mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
          0 - 24 svaki dan
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative  lg:row-span-2">
            <div className="absolute bg-white inset-px rounded-lg   lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-4xl font-semibold text-bgColor tracking-tight  max-lg:text-center">
                  Transferi
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pouzdani i udobni transferi do bilo koje destinacije. Nudimo
                  privatne i grupne vožnje do zračnih luka, hotela i popularnih
                  lokacija, uz profesionalne vozače i vozila visoke klase.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="h-full p-8 w-full flex items-center flex-col gap-8 justify-center">
                  <img
                    className="h-[min(152px,40cqw)]  object-cover"
                    src="/traffic.png"
                    alt=""
                  />

                  <img
                    className="h-[min(152px,40cqw)]  object-cover"
                    src="/mercedes.png"
                    alt=""
                  />
                </div>
              </div>

              <Link
                href="/transferi"
                className="bg-yellowPrimary mx-auto px-3 mb-2 rounded-md text-xl font-semibold text-bgColor"
              >
                Saznaj više
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative  max-lg:row-start-1">
            <div className="absolute bg-white inset-px rounded-lg shadow-xl shadow-secondary/10  max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-4xl text-bgColor font-semibold tracking-tight  max-lg:text-center">
                  Taxi Služba
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Brza i sigurna taxi usluga dostupna 0-24. Bilo da trebate
                  kratku vožnju unutar grada ili dulji prijevoz, naši vozači
                  osiguravaju udobnost i točnost.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="/superb.png"
                  alt=""
                />
              </div>
              <MainCallButton phone="991985871" className="mx-auto mb-2" />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative  max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute bg-white inset-px rounded-lg  shadow-xl shadow-secondary/10"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-4xl text-bgColor font-semibold tracking-tight max-lg:text-center">
                  Prijevoz bicikla
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Specijalizirani prijevoz bicikala za rekreativce i
                  profesionalce. Bilo da planirate biciklističku turu ili
                  trebate prijevoz do startne lokacije, osiguravamo sigurno i
                  praktično rješenje.
                </p>
              </div>
              <div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)]  object-cover"
                  src="/bike.png"
                  alt=""
                />
              </div>
              <Link
                href="/biciklisti"
                className="bg-yellowPrimary mx-auto px-3 mb-2 rounded-md text-xl font-semibold text-bgColor"
              >
                Saznaj više
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative   lg:row-span-2">
            <div className="absolute bg-white inset-px rounded-lg  shadow-xl shadow-secondary/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-bgColor text-4xl font-semibold   tracking-tight  max-lg:text-center">
                  Ekskurzije
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Otkrijte najljepše destinacije kroz naše organizirane izlete.
                  Posjetite Plitvička jezera, Pulska Arena, Motovun, Grožnjan i
                  druge atrakcije uz stručno vođenje i maksimalnu udobnost.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="h-full p-8 w-full flex items-center flex-col gap-8 justify-center">
                  {/* <img
                    className="size-full object-cover h-full object-top rounded-md"
                    src="/airport.avif"
                    alt=""
                  /> */}
                  <img
                    className="h-[min(152px,40cqw)]  object-cover"
                    src="/traffic.png"
                    alt=""
                  />

                  <img
                    className="h-[min(152px,40cqw)]  object-cover"
                    src="/mercedes.png"
                    alt=""
                  />
                </div>
              </div>
              <Link
                href="/transferi"
                className="bg-yellowPrimary mx-auto px-3 mb-2 rounded-md text-xl font-semibold text-bgColor"
              >
                Saznaj više
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
