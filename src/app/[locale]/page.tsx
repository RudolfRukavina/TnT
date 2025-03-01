import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaš pouzdani prjevoznik - 0/24",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* section hero */}
      <Hero />

      <div className="hidden lg:block border-b border-b-textColor border-opacity-30 "></div>
      <div className="lg:grid-cols-2 max-w-7xl mx-auto gap-6  lg:px-16 lg:grid ">
        {/* about us */}
        <AboutUs />

        {/* section our services */}
        <Services />
      </div>

      {/* section CTA */}
      <Cta phone="991985871" />

      {/* section Contact */}
      <ContactForm />
    </div>
  );
}
