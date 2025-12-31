"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartSummary() {
  const subtotal = 40;
  const deliveryFee = 4;
  const total = subtotal + deliveryFee;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative overflow-hidden
        bg-linear-to-b from-[#121212] to-black
        rounded-3xl p-7
        border border-white/10
        shadow-[0_20px_60px_rgba(198,167,94,0.12)]
      "
    >
      {/* Luxury glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold/10 blur-[140px]" />

      <h2 className="text-xl font-semibold tracking-wide mb-8 text-gold">
        Order Summary
      </h2>

      {/* Price rows */}
      <div className="space-y-5 text-sm text-white/80">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-white">${subtotal}</span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            Delivery Fee
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold">
              Premium
            </span>
          </span>
          <span className="text-white">${deliveryFee}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-5 flex justify-between text-lg font-medium">
          <span>Total</span>
          <span className="text-gold">${total}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link href="/checkout">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            group mt-10 w-full
            flex items-center justify-center gap-3
            bg-gold text-black
            py-4 rounded-full
            font-semibold tracking-wide
            shadow-[0_10px_40px_rgba(198,167,94,0.35)]
            hover:shadow-[0_10px_70px_rgba(198,167,94,0.55)]
            transition-all
          "
        >
          Proceed to Checkout
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition"
          />
        </motion.button>
      </Link>
    </motion.div>
  );
}
