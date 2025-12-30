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
    <section className="flex justify-center gap-3 px-4 mb-14 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-6 py-2 rounded-full border transition-all duration-300
            ${
              active === cat
                ? "bg-[#C9A45C] text-black border-[#C9A45C]"
                : "border-white/20 text-gray-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            }`}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
