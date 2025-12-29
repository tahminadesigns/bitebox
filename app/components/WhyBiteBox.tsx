"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Truck, Star } from "lucide-react";

export default function WhyBiteBox() {
  return (
    <section className="relative py-32 bg-[#0B0B0B] overflow-hidden">

      {/* Side background text + icon */}
      <div className="absolute right-30 top-1/2 -translate-y-1/2 rotate-90 text-white/5 text-[140px] font-bold select-none">
        WHY BITEBOX
      </div>
      <Crown className="absolute right-20 bottom-20 text-white/5 w-32 h-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/why/chef.png"
            alt="Why BiteBox"
            width={480}
            height={520}
            className="rounded-3xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Why <span className="text-[#D4AF37]">BiteBox</span>
          </h3>

          <p className="mt-6 text-gray-400 max-w-lg">
            We don’t just deliver food — we deliver an experience of taste,
            quality and trust.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { icon: <Crown />, title: "Premium Restaurants" },
              { icon: <Truck />, title: "Fast & Reliable Delivery" },
              { icon: <Star />, title: "Top Rated Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-[#111] text-[#D4AF37] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <span className="text-white font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
