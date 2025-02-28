import PageSendButton from "@/components/PageSendButton";
import PageTitle from "@/components/PageTitle";
import SocialContacts from "@/components/SocialContacts";
import { Metadata } from "next";
import { IoLocationOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Transferi",
};

export default function page() {
  return (
    <div className="px-4 pb-12 pt-6 lg:pb-28 lg:pt-16">
      <PageTitle title="Transferi" />
      <div className="flex flex-col text-center items-center gap-2 mb-6 opacity-70 max-w-xl lg:mx-auto">
        <p>
          Trebate pouzdan prijevoz do zračne luke ili profesionalni poslovni
          transfer? Taxi Poreč City brine o svim vašim potrebama.
        </p>
        <p>
          Uživajte u udobnosti naših besprijekorno održavanih vozila i
          prepustite se ljubaznom osoblju koje čini svako putovanje ugodnim
          iskustvom.
        </p>
      </div>

      <div className="grid gap-1 grid-cols-2 max-w-sm mx-auto justify-center text-sm font-semibold opacity-50 mb-4 ">
        <p className="justify-center flex items-center gap-1">
          <IoLocationOutline />
          Zagreb
        </p>
        <p className="text-center justify-center flex items-center gap-1">
          <IoLocationOutline />
          Trst
        </p>
        <p className="text-center justify-center flex items-center gap-1">
          <IoLocationOutline />
          Ljubljana
        </p>
        <p className="text-center justify-center flex items-center gap-1">
          <IoLocationOutline />
          Rijeka(Krk)
        </p>
        <p className="text-center justify-center flex items-center gap-1">
          <IoLocationOutline />
          Zadar
        </p>
        <p className="text-center justify-center flex items-center gap-1">
          <IoLocationOutline />
          Pula
        </p>
      </div>

      <div className="bg-[url('/airport.avif')] w-full max-w-4xl lg:mx-auto bg-center h-96 bg-cover rounded-md overflow-hidden relative"></div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <PageSendButton about="transferi" />
        <SocialContacts phone="991985871" />
      </div>
    </div>
  );
}
