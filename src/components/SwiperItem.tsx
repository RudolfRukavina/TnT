import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ISwiperItem {
  src: string;
  title: string;
  description: string;
  link: string;
}

export default function SwiperItem({
  src,
  title,
  description,
  link,
}: ISwiperItem) {
  return (
    <div className=" min-h-full   min-w-full   ">
      <div className="relative h-40">
        <Image
          className="scale-x-[-1] object-contain  "
          fill
          src={src}
          alt="image of service"
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-center opacity-70">{description}</p>
      <div className="flex justify-center">
        <Link
          href={link}
          className="bg-yellowPrimary flex items-center gap-1  mt-2 px-2 py-1 rounded-lg text-bgColor font-semibold "
        >
          Saznaj vise <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
