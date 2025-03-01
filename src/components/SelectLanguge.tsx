"use client";

import React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function SelectLanguage() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value)}
      className="bg-bgColor font-semibold cursor-pointer focus px-1 border border-opacity-30 w-full border-textColor appearance-none rounded-md"
    >
      <option value="hr">HR</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
      <option value="it">IT</option>
    </select>
  );
}
