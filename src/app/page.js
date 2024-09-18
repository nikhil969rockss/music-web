"use client";
import { BackGround } from "@/components/ui/Background";
import ButtonComponent from "@/components/Button";
import ShimmerButton from "@/components/ShimmerButton";

import {
  CTA1,
  CTA2,
  LandingPageHeading,
  LandingPageSubHeading,
  stickyContent,
} from "@/utils/constants";
import { motion } from "framer-motion";
import { AppleCardsCarouselDemo } from "@/components/AppleCarousel";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { StickyScroll } from "@/components/ui/StickyScrollReveal";
import { Card } from "@/components/CardComponent";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <BackGround>
          <div className="text-[38px] md:text-7xl font-bold dark:text-white text-center">
            {LandingPageHeading}
          </div>
          <div className="font-extralight text-base md:text-xl dark:text-neutral-400 py-4 md:w-[50vw] w-[50vh] text-center">
            {LandingPageSubHeading}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <ButtonComponent>{CTA1}</ButtonComponent>
            <ShimmerButton>{CTA2}</ShimmerButton>
          </div>
        </BackGround>
        <AppleCardsCarouselDemo />
        <section className="relative w-full min-h-screen">
          <StickyScroll className="" content={stickyContent} />
        </section>
        <section className="relative w-full min-h-screen">
          <BackgroundBeams />
          <h4 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Sanjana Airlines, <br /> Sajana Textiles.
          </h4>
          <div className="max-w-7xl mt-6 mx-auto flex flex-wrap gap-3 justify-center">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
