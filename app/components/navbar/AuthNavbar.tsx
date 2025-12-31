"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AuthNavbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full px-6 py-5 bg-black/70 backdrop-blur-xl border-b border-[#C6A85C]/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-[#C6A85C]"
        >
          BITEBOX
        </Link>

        <Link
          href="/"
          className="text-sm text-gray-300 hover:text-[#C6A85C] transition"
        >
          Back to Home
        </Link>
      </div>
    </motion.header>
  );
}
