"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <motion.input
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      type="text"
      placeholder="Search foods or restaurants..."
      className="w-full bg-transparent border-b border-[#E6C38A] pb-3 text-xl text-[#E6C38A] outline-none placeholder:text-white/40"
    />
  );
}
