"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Pizza, Drumstick, } from "lucide-react";

const foods = [
  { title: "Spicy Burger", img: "/foods/burger.png", icon: <Flame /> },
  { title: "Italian Pizza", img: "/foods/pizza.png", icon: <Pizza /> },
  { title: "Grilled Kebab", img: "/foods/kebab.png", icon: <Drumstick /> },
  { title: "Special Biryani", img: "/foods/biryani.png"},
  { title: "Drinks", img: "/foods/drinks.png" },
];

export default function FeaturedFoods() {
  return (
    <section className="relative py-28 bg-[#0B0B0B] overflow-hidden">
      
      {/* Background text */}
      <h2 className="absolute top-16 left-1/2 -translate-x-1/2 text-[120px] md:text-[180px] font-bold text-white/5 select-none">
        FOODS
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-white text-center">
          Featured <span className="text-[#D4AF37]">Foods</span>
        </h3>

        <p className="mt-4 text-gray-400 text-center max-w-xl mx-auto">
          Handpicked dishes crafted for premium taste lovers.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {foods.map((food, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111] rounded-2xl p-6 text-center border border-white/10 hover:border-[#D4AF37]/50"
            >
              <div className="flex justify-center text-[#D4AF37] mb-4">
                {food.icon}
              </div>

              <Image
                src={food.img}
                alt={food.title}
                width={240}
                height={240}
                className="mx-auto rounded-xl"
              />

              <h4 className="mt-6 text-xl text-white font-semibold">
                {food.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
