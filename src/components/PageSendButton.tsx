"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuRocket } from "react-icons/lu";

const MAIL: string = "an.blaskovic@gmail.com";

export default function PageSendButton({ about }: { about: string }) {
  function handleSendMail() {
    const date: string = new Date().toLocaleDateString();
    const subject: string = `Upit za ${about}-${date}`;
    const tempLink = document.createElement("a");
    tempLink.href = `mailto:${MAIL}?subject=${encodeURIComponent(
      subject
    )}&body=`;
    tempLink.click();
    tempLink.remove();
  }

  return (
    <div className="w-full flex justify-center mt-4">
      {" "}
      <motion.button
        onClick={handleSendMail}
        whileHover={{ scale: 0.97 }}
        whileTap={{ scale: 0.94 }}
        className="bg-yellowPrimary flex items-center gap-1 px-2 rounded-md text-bgColor font-semibold py-1 mx-auto"
      >
        <LuRocket />
        Pošalji upit
      </motion.button>
    </div>
  );
}
