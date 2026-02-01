"use client";

import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function CartBar() {
  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="
        fixed 
        bottom-4 sm:bottom-6
        left-1/2 -translate-x-1/2
        bg-[#111]
        border border-[#D4AF37]/40
        text-white
        px-5 sm:px-6
        py-3 sm:py-4
        rounded-full
        flex items-center gap-4 sm:gap-6
        shadow-xl
        z-40
        max-w-[95%]
      "
    >
      <div className="flex items-center gap-2">
        <ShoppingCart className="text-[#D4AF37] w-5 h-5" />
        <span className="text-xs sm:text-sm">2 items</span>
      </div>

      <span className="text-[#D4AF37] font-semibold text-sm sm:text-base">
        $19.49
      </span>

      <button
        className="
          bg-[#D4AF37]
          text-black
          px-4 sm:px-6
          py-2
          rounded-full
          font-medium
          text-sm sm:text-base
          hover:opacity-90
          transition
        "
      >
        Checkout
      </button>
    </motion.div>
  );
}

