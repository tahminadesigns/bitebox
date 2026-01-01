"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

import SearchDropdown from "./header/SearchDropdown";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const handleSearchClick = () => {
    if (window.innerWidth < 768) {
      router.push("/search");
    } else {
      setOpenSearch((prev) => !prev);
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="BiteBox" width={48} height={48} />
          <span className="text-xl font-semibold text-[#D4AF37] tracking-wide">
            BiteBox
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-gray-200">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <motion.div key={item} whileHover={{ y: -2 }}>
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
        {/* Mobile Back */}
<button
  onClick={() => router.back()}
  className="md:hidden text-gray-200 hover:text-[#D4AF37]"
>
  ←
</button>

        <div className="flex items-center gap-5 text-gray-200">
          <button onClick={handleSearchClick} className="hover:text-[#D4AF37]">
            <Search />
          </button>

          <button onClick={() => router.push("/cart")} className="hover:text-[#D4AF37]">
            <ShoppingCart />
          </button>

          {/* Desktop Sign In */}
          <button
            onClick={() => router.push("/auth/sign-in")}
            className="hidden md:flex items-center gap-2 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            <User size={16} />
            Sign In
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-xl px-6 py-8 space-y-6 text-gray-200"
          >
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                className="block text-lg hover:text-[#D4AF37]"
              >
                {item}
              </Link>
            ))}

            <button
              onClick={() => router.push("/auth/sign-in")}
              className="w-full mt-4 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
            >
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Search Dropdown */}
      <AnimatePresence>
        {openSearch && <SearchDropdown />}
      </AnimatePresence>
    </header>
  );
}
