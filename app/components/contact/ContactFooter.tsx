"use client";

import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer className="relative px-6 py-16 bg-black">
      
      {/* subtle gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-linear-to-r from-transparent via-[#C6A25A] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-xl font-semibold tracking-wide text-[#C6A25A]">
          BiteBox
        </h3>

        <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto">
          Delivering curated food experiences with premium care and design excellence.
        </p>

        <p className="mt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} BiteBox. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
