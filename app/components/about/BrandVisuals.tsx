"use client";

import Image from "next/image";
import SectionWrapper from "../shared/SectionWrapper";

export default function BrandVisuals() {
  return (
    <SectionWrapper className="bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Brand Aesthetic
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold">
            Designed to feel
            <span className="text-gold"> exclusive</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["v1.jpg", "v2.jpg", "v3.jpg", "v4.jpg"].map((img) => (
            <div
              key={img}
              className="relative group overflow-hidden rounded-2xl"
            >
              <Image
                src={`/about/${img}`}
                alt="Brand Visual"
                width={400}
                height={500}
                className="object-cover h-full w-full transition duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
