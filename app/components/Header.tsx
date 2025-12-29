"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="BiteBox" width={56} height={56} />
          <span className="text-2xl font-semibold text-[#D4AF37] tracking-wide">
            BiteBox
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-gray-200">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              key={item}
              href="#"
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6 text-gray-200">
          <motion.div whileHover={{ scale: 1.15 }}>
            <Search className="cursor-pointer hover:text-[#D4AF37]" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }}>
            <ShoppingCart className="cursor-pointer hover:text-[#D4AF37]" />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            <User size={16} />
            Sign In
          </motion.button>
        </div>
      </div>
    </header>
  );
}
