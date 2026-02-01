"use client";

export default function Filters() {
  return (
    <section
      className="
        max-w-7xl
        mx-auto
        px-4 sm:px-6
        mb-12 sm:mb-16
        pt-28 sm:pt-36
        relative
        z-10
      "
    >
      <div
        className="
          bg-[#111]
          border border-white/10
          rounded-2xl
          p-5 sm:p-6
          flex
          flex-col
          md:flex-row
          gap-6
          justify-between
          items-start
          md:items-center
        "
      >
        {/* Price */}
        <div className="w-full md:w-auto">
          <p className="text-sm text-gray-400 mb-2">
            Price Range
          </p>
          <input
            type="range"
            className="w-full md:w-40 accent-[#D4AF37]"
          />
        </div>

        {/* Rating */}
        <div className="w-full md:w-auto">
          <p className="text-sm text-gray-400 mb-2">
            Rating
          </p>
          <select
            className="
              w-full
              bg-black
              border border-white/20
              rounded-lg
              px-4
              py-2
              text-sm
            "
          >
            <option>4★ & above</option>
            <option>3★ & above</option>
            <option>All</option>
          </select>
        </div>

        {/* Veg / Non-Veg */}
        <div className="flex gap-3 w-full md:w-auto">
          <button
            className="
              flex-1 md:flex-none
              px-5 py-2
              rounded-full
              border border-[#D4AF37]
              text-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-black
              transition
            "
          >
            Veg
          </button>
          <button
            className="
              flex-1 md:flex-none
              px-5 py-2
              rounded-full
              border border-white/20
              hover:border-[#D4AF37]
              transition
            "
          >
            Non-Veg
          </button>
        </div>
      </div>
    </section>
  );
}
