"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@bitebox.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1234 567 890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Dhaka, Bangladesh",
  },
];

export default function ContactInfo() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="group rounded-2xl p-8 bg-white/5 border border-white/10
            backdrop-blur-xl transition-all duration-300
            hover:border-[#C6A25A]/60 hover:shadow-[0_0_40px_-15px_rgba(198,162,90,0.5)]"
          >
            <item.icon
              className="w-8 h-8 text-[#C6A25A] mb-4
              group-hover:scale-110 transition"
            />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
