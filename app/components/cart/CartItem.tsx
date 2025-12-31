"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CartItem({ item }: any) {
  const [qty, setQty] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-5 bg-darkSoft rounded-2xl p-5 border border-white/5"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={90}
        height={90}
        className="rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="font-medium text-lg">{item.name}</h3>
        <p className="text-gold mt-1">${item.price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3 bg-black rounded-full px-4 py-2">
        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
          <Minus size={16} />
        </button>
        <span className="font-medium">{qty}</span>
        <button onClick={() => setQty(qty + 1)}>
          <Plus size={16} />
        </button>
      </div>
    </motion.div>
  );
}
