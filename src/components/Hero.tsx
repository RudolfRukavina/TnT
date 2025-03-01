import { MdKeyboardArrowDown, MdOutlineStarPurple500 } from "react-icons/md";
import MainCallButton from "./MainCallButton";
import SocialContacts from "./SocialContacts";
import HeroImage from "./HeroImage";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className=" h-svh lg:h-full flex flex-col mt-6 lg:mb-8  max-w-[1200px] lg:mx-auto"
      id="hero"
    >
      {/* title */}

      <div className="flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl tracking-wider font-semibold">
          Poreč City
        </h1>
        <p className="text-yellowPrimary text-sm">Taxi & Transfers</p>
        <div className="flex items-center text-yellowPrimary text-xs">
          {[1, 2, 3, 4, 5].map((el) => {
            return (
              <div key={el}>
                <MdOutlineStarPurple500 />
              </div>
            );
          })}
        </div>
      </div>

      {/* image */}
      <HeroImage />

      {/* CTA FIELD */}
      <div className="flex flex-col items-center gap-1  mt-2">
        <p className="text-yellowPrimary font-semibold">+ 099 198 6744</p>
        <MainCallButton
          phone="991985871"
          className="mb-2 text-xl shadow-sm  shadow-yellowPrimary "
        />
        <SocialContacts phone="991985871" />
      </div>

      {/* message */}
      <div className="text-center mt-4">
        <p>
          {t("open")} <span className=" font-semibold">0-24</span>
          <span className=" font-semibold"> {t("sevenDays")}</span> {t("aWeek")}
          !
        </p>
        <p className="opacity-50 italic text-sm">&quot;{t("message")}!&quot;</p>
      </div>

      {/* find more */}
      <div className="flex justify-center">
        <a className="flex items-center underline mt-4" href="#about">
          {t("learnMore")} <MdKeyboardArrowDown />
        </a>
      </div>
    </section>
  );
}
