"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchDropdown from "./SearchDropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (window.innerWidth < 768) {
      router.push("/search");
    } else {
      setOpen((prev) => !prev);
    }
  };

  return (
    <header className="relative bg-[#0B0B0B] px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-[#E6C38A] text-2xl font-semibold">
          BiteBox
        </h1>

        {/* SEARCH BUTTON */}
        <button
          onClick={handleSearch}
          className="text-[#E6C38A] hover:text-[#F3D18F] transition"
        >
          🔍
        </button>
      </div>

      {/* DESKTOP SEARCH */}
      {open && <SearchDropdown />}
    </header>
  );
}
