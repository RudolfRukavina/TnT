import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import Logo from "@/components/Logo";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer({ phone }: { phone: string }) {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="flex max-w-full text-sm flex-col border-t border-textColor border-opacity-30 gap-4 items-center justify-center py-4 lg:flex-row-reverse lg:gap-20  ">
      <div className="hidden lg:block">
        <ul className="flex flex-col gap-1 items-center">
          <li className="underline">
            <Link href="/transferi">Transferi</Link>
          </li>
          <li className="underline">
            {" "}
            <Link href="/ekskurzije">Ekskurzije</Link>
          </li>
          <li className="underline">
            <Link href="/biciklisti">Biciklisti</Link>
          </li>
        </ul>
      </div>
      {/* links */}
      <div className="flex flex-col gap-1 items-center">
        <div className="flex items-center gap-1">
          <MdOutlineLocationOn />{" "}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Vrsarska+ul.+24,+52440,+Pore%C4%8D/@45.2331671,13.6070048,17z/data=!3m1!4b1!4m6!3m5!1s0x477c97850eb984a5:0x2a9454b370cb9351!8m2!3d45.2331671!4d13.6095797!16s%2Fg%2F11h4nyzyrb?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
            className="underline"
          >
            Vrsarska Ulica 24,Poreč
          </a>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineEmail />{" "}
          <a href="mailto:an.blaskovic@gmail.com" className="underline">
            taxi-porec@mail.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlinePhone />{" "}
          <a href={`tel:385${phone}`} className="underline">
            + 0{phone}
          </a>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-1 items-center">
        <div className="">
          <Logo size="small" />
        </div>
        <p className="mt-1 text-xs">&copy;{year} Poreč City Taxi & Transfer</p>
        <p className="text-xs">{t("copyright")}</p>
      </div>
    </footer>
  );
}
