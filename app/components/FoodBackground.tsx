"use client";

import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const foods = [
  { src: "/foods/burger.png", size: 140, depth: 30, x: "12%", y: "20%" },
  { src: "/foods/pizza.png", size: 160, depth: 50, x: "70%", y: "12%" },
  { src: "/foods/kebab.png", size: 130, depth: 40, x: "48%", y: "40%" },
];

export default function FoodBackground() {
  /* ✅ hooks ALWAYS same order */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x1 = useTransform(mouseX, v => v * 30);
  const y1 = useTransform(mouseY, v => v * 30);

  const x2 = useTransform(mouseX, v => v * 50);
  const y2 = useTransform(mouseY, v => v * 50);

  const x3 = useTransform(mouseX, v => v * 40);
  const y3 = useTransform(mouseY, v => v * 40);

  const transforms = [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
  ];

  const [enabled, setEnabled] = useState(true);
  const [parallax, setParallax] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("effects");
    if (saved === "off") setEnabled(false);

    setParallax(
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion)").matches
    );

    setDarkMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const toggle = (e: any) => setEnabled(e.detail);
    window.addEventListener("effects-toggle", toggle);
    return () => window.removeEventListener("effects-toggle", toggle);
  }, []);

  useEffect(() => {
    if (!parallax || !enabled) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [parallax, enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-linear-to-b from-black via-[#050505] to-black"
            : "bg-linear-to-b from-[#fff8f0] via-white to-[#f5f5f5]"
        }`}
      />

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(201,164,92,0.06),transparent_50%)]" />

      {/* foods */}
      {foods.map((f, i) => (
        <motion.img
          key={i}
          src={f.src}
          alt=""
          className="absolute opacity-20"
          style={{
            width: f.size,
            left: f.x,
            top: f.y,
            x: parallax ? transforms[i].x : 0,
            y: parallax ? transforms[i].y : 0,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 26 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🍕 crumbs */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        animate={{ y: [0, -80, 0] }}
        transition={{ duration: 50, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,200,120,0.25) 1px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🌫 steam */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-[0.06]"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 36, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at 50% 65%, rgba(255,255,255,0.2), transparent 60%)",
        }}
      />
    </div>
  );
}

