"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User } from "lucide-react";

// ⬇️ IMPORTANT: relative path from app/components/Header.tsx
import SearchDropdown from "./header/SearchDropdown";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter();

  const handleSearchClick = () => {
    if (window.innerWidth < 768) {
      router.push("/search");
    } else {
      setOpenSearch((prev) => !prev);
    }
  };

  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-9999">
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
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6 text-gray-200">
          {/* SEARCH */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            onClick={handleSearchClick}
            className="hover:text-[#D4AF37]"
          >
            <Search />
          </motion.button>

          {/* CART */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            onClick={handleCartClick}
            className="hover:text-[#D4AF37]"
          >
            <ShoppingCart />
          </motion.button>

          {/* SIGN IN */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            <User size={16} />
            Sign In
          </motion.button>
        </div>
      </div>

      {/* 🔍 DESKTOP SEARCH DROPDOWN */}
      <AnimatePresence>
        {openSearch && <SearchDropdown />}
      </AnimatePresence>
    </header>
  );
}
