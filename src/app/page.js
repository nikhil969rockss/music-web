"use client";
import { BackGround } from "@/components/ui/Background";
import ButtonComponent from "@/components/Button";
import ShimmerButton from "@/components/ShimmerButton";

import {
  cardData,
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
import {
  InfiniteMovingCards,
  MovingCards,
} from "@/components/InfiniteMovingCard";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { WavyBackgroundFooter } from "@/components/Footer";
import Link from "next/link";

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
            <Link href={'/signUp'} ><ButtonComponent>{CTA1}</ButtonComponent></Link>
            <Link href={'/courses'} ><ShimmerButton>{CTA2}</ShimmerButton></Link>
          </div>
        </BackGround>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <AppleCardsCarouselDemo />
        <section className="relative w-full min-h-screen">
          <StickyScroll className="" content={stickyContent} />
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <section className="relative w-full min-h-screen">
          <BackgroundBeams />
          <h4 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Join a Musical Journey <br /> Like No Other.
          </h4>
          <div className="max-w-7xl mt-6 mx-auto flex flex-wrap gap-3 justify-center">
            {cardData.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <section>
          <div className="relative">
            <LampDemo />
          </div>
          <div className="absolute z-20 translate-x-[-50%] translate-y-[-50%] left-[50%] ">
            <MovingCards />
          </div>
        </section>
      </motion.div>
      <footer className="relative">
        <WavyBackgroundFooter />
        <div className="absolute z-40 flex flex-col gap-4  top-[50%] left-[50%] translate-x-[-50%]" >
        
       
            <input
              type="text"
              placeholder="hi@NikhilRandhawa.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-[380px] relative mt-[-3rem] md:mt-4 p-3 bg-transparent focus:bg-blue-[#689CDB] placeholder:text-neutral-200 text-black"
          />
          <div className="flex justify-center">
            <ButtonComponent>Join Now</ButtonComponent>
            </div>
        

        </div>
      </footer>
    </div>
  );
}
