import AboutUs from "@/components/AboutUs";
import BentoGrid from "@/components/BentoGrid";
import ContactForm from "@/components/ContactForm";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";

import HeroTest from "@/components/HeroTest";

import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaš pouzdani prjevoznik - 0/24",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* section hero */}
      <HeroTest />

      <BentoGrid />

      <div className="hidden lg:block border-b border-b-textColor border-opacity-30 "></div>

      {/* about us */}
      <AboutUs />

      {/* section CTA */}
      <Cta phone="991985871" />

      {/* section Contact */}
      <ContactForm />
    </div>
  );
}
