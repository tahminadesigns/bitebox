"use client";

import { motion } from "framer-motion";

export default function SocialLogin() {
  return (
    <div className="mt-6 space-y-3">
      {["Google", "Facebook", "Apple"].map((provider) => (
        <motion.button
          whileHover={{ scale: 1.03 }}
          key={provider}
          className="w-full py-3 border border-[#C6A85C]/30 rounded-lg text-sm hover:bg-[#C6A85C]/10 transition"
        >
          Continue with {provider}
        </motion.button>
      ))}
    </div>
  );
}
