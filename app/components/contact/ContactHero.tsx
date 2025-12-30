"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-24 px-6 text-center">
      
      {/* Luxury background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C6A25A1A,transparent_60%)]"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-6xl font-semibold tracking-wide text-[#C6A25A]"
      >
        Contact BiteBox
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative z-10 mt-4 max-w-xl mx-auto text-sm md:text-base text-gray-400"
      >
        Let’s connect and craft premium food experiences together.
      </motion.p>
    </section>
  );
}
