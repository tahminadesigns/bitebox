"use client";

import { useState } from "react";

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Kebab",
  "Drinks",
  "Desserts",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <section
      className="
        relative
        z-10
        flex
        justify-center
        gap-3
        px-4
        flex-wrap

        pt-28 sm:pt-36   /* 🔥 THIS IS THE REAL FIX */
        mb-14
      "
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`
            px-5 sm:px-6
            py-2
            rounded-full
            border
            text-sm sm:text-base
            transition-all duration-300
            ${
              active === cat
                ? "bg-[#C9A45C] text-black border-[#C9A45C]"
                : "border-white/20 text-gray-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
