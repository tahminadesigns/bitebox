"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const restaurants = [
  { name: "Royal Grill", img: "/restaurants/rest1.png" },
  { name: "Urban Bites", img: "/restaurants/rest2.png" },
  { name: "Flame House", img: "/restaurants/rest3.png" },
];

export default function PopularRestaurants() {
  return (
    <section className="relative py-28 bg-[#0E0E0E] overflow-hidden">

      {/* Background text */}
      <h2 className="absolute top-20 left-1/2 -translate-x-1/2 text-[100px] md:text-[160px] font-bold text-white/5 select-none">
        RESTAURANTS
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-white text-center">
          Popular <span className="text-[#D4AF37]">Restaurants</span>
        </h3>

        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {restaurants.map((res, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={res.img}
                  alt={res.name}
                  width={400}
                  height={300}
                  className="group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <h4 className="text-xl text-white font-semibold">
                  {res.name}
                </h4>
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star size={16} /> 4.9
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
