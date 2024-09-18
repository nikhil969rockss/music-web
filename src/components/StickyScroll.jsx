"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import { stickyContent } from "@/utils/constants";


export function StickyScrollRevealDemo() {
  return (
    (<div className="p-10">
      <StickyScroll content={stickyContent} />
    </div>)
  );
}
