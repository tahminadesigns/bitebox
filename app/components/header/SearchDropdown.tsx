"use client";

import { motion } from "framer-motion";
import SearchInput from "../search/SearchInput";
import LiveResults from "../search/LiveResults";
import Suggestions from "../search/Suggestions";

export default function SearchDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute left-0 top-full w-full bg-[#0B0B0B] border-t border-[#2A2A2A] z-50"
    >
      <div className="relative px-6 py-12 overflow-hidden">

        {/* Faded big text */}
        <p className="absolute inset-0 flex justify-center items-center text-[120px] font-bold text-white/5 select-none">
          SEARCH
        </p>

        {/* Background icons */}
        <img
          src="/icons/pizza.png"
          className="absolute right-16 top-10 w-24 opacity-10"
        /> 
        <img
          src="/icons/burger.png"
          className="absolute left-10 bottom-10 w-20 opacity-10"
        />
        <img
          src="/icons/kebab.png"
          className="absolute left-10 bottom-10 w-20 opacity-10"
        />


        {/* Content */}
        <div className="relative space-y-12">
          <SearchInput />
          <LiveResults />
          <Suggestions />
        </div>

      </div>
    </motion.div>
  );
}
