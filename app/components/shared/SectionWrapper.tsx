"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative px-6 md:px-16 py-24 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}
