"use client";
import { HiOutlinePhone } from "react-icons/hi";
import { motion } from "framer-motion";

export default function MainCallButton({
  phone,
  type = "solid",
  className,
}: {
  phone: string;
  type?: "transparent" | "solid";
  className?: string;
}) {
  const variants = {
    solid: "bg-yellowPrimary",
    transparent: "bg-transparent border-bgColor border",
  };
  return (
    <motion.a
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.94 }}
      href={`tel:385${phone}`}
      className={`${variants[type]} ${
        className ? className : ""
      }  px-2  py-1 rounded-lg text-bgColor font-semibold flex items-center gap-1`}
    >
      <HiOutlinePhone />
      NARUCI TAXI
    </motion.a>
  );
}
