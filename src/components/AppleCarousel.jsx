"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/PhotoCarousel";
import { data, Heading, subHeading } from "@/utils/constants";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    (<div className="w-full h-full py-20 px-3">
      <h2
        className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {Heading}
      </h2>
      <h3 className="max-w-7xl px-4 mx-auto mt-1 md:mt-3 text-sm  md:text-xl dark:text-neutral-400" >{ subHeading}</h3>
      <Carousel items={cards} />
    </div>)
  );
}


