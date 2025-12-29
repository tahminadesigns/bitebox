"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  { name: "Sarah Ahmed", img: "/testimonials/user1.png", text: "Absolutely premium service & taste." },
  { name: "Rahim Khan", img: "/testimonials/user2.png", text: "Best food delivery experience ever." },
  { name: "Nabila Noor", img: "/testimonials/user3.png", text: "Luxury food at home. Loved it!" },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#0E0E0E] overflow-hidden">

      {/* Side bg text + icon */}
      <div className="absolute left-25 top-1/2 -translate-y-1/2 rotate-90 text-white/5 text-[140px] font-bold">
        REVIEWS
      </div>
      <Quote className="absolute left-20 top-20 w-28 h-28 text-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-white text-center">
          What People <span className="text-[#D4AF37]">Say</span>
        </h3>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40"
            >
              <Image
                src={r.img}
                alt={r.name}
                width={180}
                height={180}
                className="rounded-full"
              />

              <p className="mt-6 text-gray-400">
                “{r.text}”
              </p>

              <h4 className="mt-4 text-white font-semibold">
                {r.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
