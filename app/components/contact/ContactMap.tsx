"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden
        border border-white/10 shadow-[0_0_60px_-20px_rgba(198,162,90,0.4)]"
      >
        <iframe
          className="w-full h-80 md:h-105 grayscale contrast-125"
          loading="lazy"
          src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
        ></iframe>
      </motion.div>
    </section>
  );
}
