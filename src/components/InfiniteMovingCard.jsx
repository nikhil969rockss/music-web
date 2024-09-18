"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; 
import { testimonials } from "@/utils/constants";

export function MovingCards({className}) {
  return (
    (<div
      className={`${className} w-screen h-[30rem] mt-[-11rem] rounded-md flex flex-col antialiased bg-white dark:bg-slate-950 dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden px-2`}>
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>)
  );
}

