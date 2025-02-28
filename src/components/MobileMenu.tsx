"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MainCallButton from "@/components/MainCallButton";
import SocialContacts from "@/components/SocialContacts";
import Logo from "@/components/Logo";

export default function MobileMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const bgRef = useRef<HTMLDivElement>(null);

  // exit on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (bgRef.current === e.target) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9, opacity: 0.7 }}
        onClick={() => setOpen((prev) => !prev)}
        className="lg:hidden text-2xl z-30"
      >
        {!isOpen ? <TbMenuDeep /> : <MdClose />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            ref={bgRef}
            className="w-full bg-bgColor/20 backdrop-blur-sm fixed z-0 inset-0 h-screen "
          >
            <motion.div
              initial={{ opacity: 0, right: -200 }}
              animate={{ opacity: 1, right: 0 }}
              exit={{ right: -200 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="h-full z-20  fixed bg-bgColor border-l flex-col border-textColor border-opacity-30 top-0 right-0 w-1/2 flex items-center justify-center "
            >
              <div className="flex flex-col mb-16 items-center">
                <Logo />
                <p className="opacity-50">0-24</p>
              </div>
              <ul className="flex flex-col items-center gap-2 font-semibold text-xl">
                <li className="flex flex-col">
                  <Link href="/">Pocetna</Link>
                  {pathname === "/" && (
                    <div className="h-[2px] bg-yellowPrimary w-4 mx-auto"></div>
                  )}
                </li>
                <li className="flex flex-col">
                  <Link href="/transferi">Transferi</Link>
                  {pathname === "/transferi" && (
                    <div className="h-[2px] bg-yellowPrimary w-4 mx-auto"></div>
                  )}
                </li>
                <li className="flex flex-col">
                  <Link href="/ekskurzije">Ekskurzije</Link>
                  {pathname === "/ekskurzije" && (
                    <div className="h-[2px] bg-yellowPrimary w-4 mx-auto"></div>
                  )}
                </li>
                <li className="flex flex-col">
                  <Link href="/biciklisti">Bike Taxi</Link>
                  {pathname === "/biciklisti" && (
                    <div className="h-[2px] bg-yellowPrimary w-4 mx-auto"></div>
                  )}
                </li>
              </ul>

              <MainCallButton className="mt-12 mb-2" phone="991985871" />
              <SocialContacts phone="991985871" />
              <p className="mt-4 text-xs opacity-50 italic text-center mx-4">
                "Vaše zadvoljstvo naša je zadaća!"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
