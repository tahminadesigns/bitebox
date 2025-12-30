"use client";

import Image from "next/image";
import { ShieldCheck, Crown, Heart } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";

export default function MissionValues() {
  return (
    <SectionWrapper className="bg-[#0e0e0e]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* image */}
        <Image
          src="/about/mission.png"
          alt="Mission"
          width={600}
          height={500}
          className="rounded-2xl object-cover"
        />

        {/* content */}
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Our Mission
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold mb-10">
            More than food.
            <br /> A promise of quality.
          </h3>

          <div className="space-y-8">
            <ValueItem
              icon={<Crown />}
              title="Premium Experience"
              desc="Every interaction feels refined, elegant, and intentional."
            />
            <ValueItem
              icon={<ShieldCheck />}
              title="Trusted Quality"
              desc="Only verified partners and uncompromised standards."
            />
            <ValueItem
              icon={<Heart />}
              title="Customer First"
              desc="Your satisfaction shapes everything we build."
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ValueItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 items-start">
      <div className="p-3 border border-gold/40 rounded-xl text-gold">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-medium mb-1">{title}</h4>
        <p className="text-white/60">{desc}</p>
      </div>
    </div>
  );
}
