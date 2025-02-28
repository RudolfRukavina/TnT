"use client";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialContacts({ phone }: { phone: string }) {
  return (
    <div className="flex items-center gap-2 text-xl ">
      <motion.a
        target="_blank"
        whileTap={{ opacity: 0.5 }}
        href={`https://wa.me/385${phone}`}
      >
        <FaWhatsapp />
      </motion.a>
      <motion.a
        whileTap={{ opacity: 0.5 }}
        target="_blank"
        href={`viber://chat?number=385${phone}`}
      >
        <FaViber />
      </motion.a>
    </div>
  );
}
