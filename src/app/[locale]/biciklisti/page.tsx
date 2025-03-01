import PageSendButton from "@/components/PageSendButton";
import PageTitle from "@/components/PageTitle";
import SocialContacts from "@/components/SocialContacts";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Bike Taxi",
};

export default function Page() {
  const t = useTranslations("BikeTaxi");

  return (
    <div className="px-4 pb-12 pt-6 lg:pb-28 lg:pt-16">
      <PageTitle title="Bike Taxi" />
      <div className="flex flex-col text-center items-center gap-2 mb-6 opacity-70 max-w-xl lg:mx-auto">
        <p>{t("firstParagraph")}</p>
        <p>{t("secondaParagprah")}</p>
      </div>

      <div className="grid gap-1 grid-cols-2 max-w-sm mx-auto text-sm font-semibold opacity-50 mb-4 ">
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Parenzana
        </p>
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Učka
        </p>
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Motovunska šuma
        </p>
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Limski kanal
        </p>
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Rovinj
        </p>
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Cape Kamenjak
        </p>
      </div>

      <div className="bg-[url('/bike-taxi.jpg')] w-full max-w-4xl lg:mx-auto bg-center h-96 bg-cover rounded-md overflow-hidden relative"></div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <PageSendButton about="bike taxi" />
        <SocialContacts phone="991985871" />
      </div>
    </div>
  );
}
