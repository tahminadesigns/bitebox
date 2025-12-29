"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/hero-food.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur + dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-m"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Where flavor meets finesse, <br />
          <span className="text-[#D4AF37]">delivered to your door</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-gray-300"
        >
          Premium restaurants, hand-crafted meals, and lightning-fast delivery
          — all in one place.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full shadow-xl"
          >
            Order Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            View Menu
          </motion.button>
        </div>
      </div>

      {/* Big faded text */}
      <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[120px] md:text-[180px] font-bold text-white/5 select-none">
        BITEBOX
      </h2>
    </section>
  );
}


