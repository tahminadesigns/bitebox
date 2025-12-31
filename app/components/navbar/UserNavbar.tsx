"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UserNavbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-6 text-sm text-gray-300"
    >
      <Image
        src="/avatar.jpg"
        alt="User"
        width={36}
        height={36}
        className="rounded-full border border-[#C6A85C]"
      />

      {["Orders", "Profile", "Logout"].map((item) => (
        <button
          key={item}
          className="hover:text-[#C6A85C] transition"
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
