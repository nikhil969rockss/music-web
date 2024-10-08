"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background"; 

export function WavyBackgroundFooter() {
  return (
    (<WavyBackground className="max-w-4xl mx-auto pb-40">
      <p
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Let’s Make Music Together
      </p>
      <p
        className="text-base md:text-lg my-4 text-white font-normal inter-var text-center">
        Join Our Musical Community
      </p>
    </WavyBackground>)
  );
}
