"use client";

import Image from "next/image";
import SectionWrapper from "../shared/SectionWrapper";

export default function AboutStory() {
  return (
    <SectionWrapper className="bg-linear-to-b from-black to-[#111]">
      {/* background text */}
      <h2 className="absolute text-[80px] md:text-[140px] font-extrabold text-white/5 top-10 left-6 select-none">
        OUR STORY
      </h2>

      <div className="relative grid md:grid-cols-2 gap-14 items-center">
        {/* text */}
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            BiteBox
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Crafted for those who demand
            <span className="text-gold"> excellence</span>
          </h3>

          <p className="text-white/70 leading-relaxed text-lg">
            BiteBox was born from a simple belief — premium food deserves a
            premium experience. From carefully curated restaurants to refined
            delivery aesthetics, every detail is designed to feel indulgent,
            modern, and trustworthy.
          </p>
        </div>

        {/* image */}
        <div className="relative">
          <div className="absolute inset-0 border border-gold/40 rounded-2xl translate-x-4 translate-y-4"></div>

          <Image
            src="/about/story.png"
            alt="BiteBox Story"
            width={600}
            height={500}
            className="relative rounded-2xl object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
