"use client";

import React, { FormEvent, useState } from "react";
import { LuRocket } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { motion } from "framer-motion";
import Subtitle from "./Subtitle";
import { useTranslations } from "next-intl";

const MAIL: string = "an.blaskovic@gmail.com";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !service || !message || message.length < 10) return;
    console.log("submit", name, service, message);
    const date: string = new Date().toLocaleDateString();
    // constructing mail
    const subject: string = `Upit za ${service}-${name}-${date}`;
    const body: string = `${message}`;

    const tempLink = document.createElement("a");
    tempLink.href = `mailto:${MAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    tempLink.click();
    tempLink.remove();
  }

  const [name, setName] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const t = useTranslations("ContactForm");

  return (
    <section id="contact" className="my-10">
      <Subtitle first={t("title1")} second={t("title2")} className="mb-8" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-10 max-w-md mx-auto gap-2"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="service">{t("usluga")}</label>
          <div className="relative w-full">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-bgSecondary w-full rounded-md cursor-pointer px-4 py-2 appearance-none focus"
              id="service"
            >
              <option>{t("placeholder")}</option>
              <option>Taxi</option>
              <option>{t("transferi")}</option>
              <option>{t("ekskurzije")}</option>
              <option>Bike taxi</option>
            </select>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 text-xl text-secondary">
              <TiArrowSortedDown />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="name">{t("name")}</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-bgSecondary cursor-pointer rounded-md px-4 py-2 focus"
            type="text"
            placeholder={t("namePlaceholder")}
            id="name"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message">{t("message")}</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-bgSecondary cursor-pointer resize-none rounded-md px-4 py-2 focus"
            rows={3}
            placeholder="..."
            id="message"
          />
        </div>

        <motion.button
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.94 }}
          className="bg-yellowPrimary  capitalize flex items-center gap-1 px-2 py-1 rounded-md text-bgColor font-semibold mt-2"
          type="submit"
        >
          <LuRocket />
          {t("send")}
        </motion.button>
      </form>
    </section>
  );
}
