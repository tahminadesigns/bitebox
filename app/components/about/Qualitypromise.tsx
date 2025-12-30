"use client";

import { Sparkles, ShieldCheck, Award } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";

export default function QualityPromise() {
  return (
    <SectionWrapper className="bg-linear-to-b from-[#0b0b0b] to-[#141414]">
      {/* faded background text */}
      <h2 className="absolute text-[90px] md:text-[150px] font-extrabold text-white/5 top-10 right-6 select-none">
        QUALITY
      </h2>

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
          Our Promise
        </p>

        <h3 className="text-3xl md:text-5xl font-semibold mb-16">
          Uncompromised.
          <span className="text-gold"> Always.</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <PromiseCard
            icon={<Award />}
            title="Curated Partners"
            desc="Only premium restaurants that meet our strict standards."
          />
          <PromiseCard
            icon={<ShieldCheck />}
            title="Quality Control"
            desc="Every order is monitored for freshness and accuracy."
          />
          <PromiseCard
            icon={<Sparkles />}
            title="Luxury Experience"
            desc="From packaging to delivery — perfection in every detail."
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

function PromiseCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-gold/50 hover:-translate-y-2">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/40 text-gold group-hover:bg-gold group-hover:text-black transition">
        {icon}
      </div>

      <h4 className="text-xl font-medium mb-3">{title}</h4>
      <p className="text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}
