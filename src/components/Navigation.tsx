"use client";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiArrowSortedDown } from "react-icons/ti";
import MainCallButton from "./MainCallButton";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex sticky bac  bg-bgColor/90 items-center w-full  top-0 justify-between border-b border-b-textColor border-opacity-30 px-4 py-2 z-20 ">
      <Logo />
      <ul className=" items-center gap-10 hidden lg:flex">
        <li className="font-semibold">
          <Link
            className={`${
              pathname === "/transferi" ? "text-yellowPrimary" : ""
            }`}
            href="/transferi"
          >
            Transferi
          </Link>
        </li>
        <li className="font-semibold">
          <Link
            className={`${
              pathname === "/ekskurzije" ? "text-yellowPrimary" : ""
            }`}
            href="/ekskurzije"
          >
            Ekskurzije
          </Link>
        </li>
        <li className="font-semibold">
          <Link
            className={`${
              pathname === "/biciklisti" ? "text-yellowPrimary" : ""
            }`}
            href="/biciklisti"
          >
            Bike Taxi
          </Link>
        </li>
        <li className="">
          <MainCallButton phone="991985871" className="text-sm" />
        </li>
      </ul>
      <div className="flex items-center gap-8 text-sm  ">
        {/* pick language */}
        <div className="relative w-14  ">
          <select className="bg-bgColor cursor-pointer focus px-1 border border-opacity-30 w-full border-textColor appearance-none rounded-md">
            <option>HR</option>
            <option>ENG</option>
            <option>DEU</option>
            <option>IT</option>
          </select>
          <div className="absolute top-1/2 -translate-y-1/2 right-2  text-secondary">
            <TiArrowSortedDown />
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
