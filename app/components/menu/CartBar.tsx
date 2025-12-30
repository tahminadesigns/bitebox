"use client";

import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function CartBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#111] border border-[#D4AF37]/40 text-white px-6 py-4 rounded-full flex items-center gap-6 shadow-xl z-50"
    >
      <div className="flex items-center gap-2">
        <ShoppingCart className="text-[#D4AF37]" />
        <span className="text-sm">2 items</span>
      </div>

      <span className="text-[#D4AF37] font-semibold">$19.49</span>

      <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
        Checkout
      </button>
    </motion.div>
  );
}
