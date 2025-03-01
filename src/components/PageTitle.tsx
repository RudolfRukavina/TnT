import React from "react";

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="mb-6 flex flex-col items-center">
      <h1 className="text-2xl capitalize text-center font-bold tracking-widest lg:text-3xl ">
        {title}
      </h1>
      <div className="h-[2px] bg-yellowPrimary w-6"></div>
    </div>
  );
}
