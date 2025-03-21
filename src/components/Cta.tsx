import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import MainCallButton from "@/components/MainCallButton";
import { useTranslations } from "next-intl";

export default function Cta({ phone }: { phone: string }) {
  const t = useTranslations("Services");

  return (
    <div className="bg-yellowPrimary max-w-full py-4 px-4 flex items-center text-bgColor flex-col gap-2">
      <p className="tracking-widest font-semibold text-xl">+ 0{phone}</p>
      <p className="font-semibold flex items-center gap-1">
        {" "}
        <PiArrowsCounterClockwiseBold />
        0-24 - {t("message3")}
      </p>
      <MainCallButton phone="991985871" type="transparent" />
    </div>
  );
}
