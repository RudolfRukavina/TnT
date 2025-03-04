import { MdOutlineStarPurple500 } from "react-icons/md";
import MainCallButton from "./MainCallButton";
import SocialContacts from "./SocialContacts";
import { IoChevronDown } from "react-icons/io5";

export default function HeroTest() {
  return (
    <section className="bg-center relative h-svh lg:h-auto bg-no-repeat bg-testSlika   bg-cover ">
      {/* Photo by <a href="https://unsplash.com/@hologram01?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Damir Korotaj</a> on <a href="https://unsplash.com/photos/a-large-body-of-water-with-a-small-town-in-the-background-yUcBqEfbIkI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
       */}

      <div className="absolute inset-0 bg-gradient-to-b from-bgColor via-bgColor/70 to-bgColor"></div>
      <div className="px-4 relative mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className=" text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-br from-white  to-secondary bg-clip-text text-transparent">
            Poreč City
          </span>{" "}
          <br />
          <span className="bg-gradient-to-br from-white via-gray-300 to-secondary bg-clip-text text-transparent">
            Taxi & Transfers
          </span>
        </h1>
        <div className="mb-4 flex gap-1 text-yellowPrimary justify-center items-center">
          <div className="flex items-center justify-center text-yellowPrimary text-xl ">
            {[1, 2, 3, 4, 5].map((el) => {
              return (
                <div key={el}>
                  <MdOutlineStarPurple500 />
                </div>
              );
            })}
          </div>

          <div className="bg-secondary/20 px-1 lg:text-sm font-semibold text-xs rounded-md">
            5.0
          </div>
        </div>

        <p className="mb-8 relative text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Otkrijte zašto smo lideri u prjevozničkim uslugama. Dostupni smo{" "}
          <strong className="font-semibold">0-24</strong>, svaki dan, samo za
          Vas.
        </p>
        <div className="flex relative flex-col text-xl space-y-4 mt-24 lg:mt-0 ">
          <MainCallButton
            phone="991985871"
            className="flex justify-center px-6   py-3 lg:!px-10 max-w-xs mx-auto"
          />
          <div className="flex justify-center ">
            <SocialContacts
              className="!text-4xl gap-4 opacity-80"
              phone="991985871"
            />
          </div>
        </div>
        <div className="mt-12 opacity-30 justify-center flex">
          <a href="#bento" className="text-3xl">
            <IoChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
}
