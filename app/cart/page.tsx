"use client";

import CartList from "@/app/components/cart/CartList";
import CartSummary from "@/app/components/cart/CartSummary";
import { motion } from "framer-motion";

export default function CartPage() {
  return (
    <section className="min-h-screen bg-linear-to-b from-dark to-black px-4 md:px-10 py-24 text-white">
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold tracking-wide mb-12 text-gold"
      >
        Your Cart
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Food List */}
        <div className="md:col-span-2">
          <CartList />
        </div>

        {/* Price Summary */}
        <CartSummary />
      </div>

    </section>
  );
}
