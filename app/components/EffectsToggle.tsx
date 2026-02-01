"use client";

import { useEffect, useState } from "react";

export default function EffectsToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("effects");
    if (saved === "off") setEnabled(false);
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem("effects", next ? "on" : "off");
    window.dispatchEvent(
      new CustomEvent("effects-toggle", { detail: next })
    );
  };

  return (
    <button
      onClick={toggle}
      className="
        fixed
        bottom-6
        right-6
        z-50
        px-4
        py-2
        rounded-full
        bg-black/70
        border border-white/20
        text-xs
        text-white
        backdrop-blur
        hover:border-[#C9A45C]
        transition
      "
    >
      Effects: {enabled ? "ON" : "OFF"}
    </button>
  );
}
