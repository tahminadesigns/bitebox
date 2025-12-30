"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="relative px-6 pb-28">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-3xl mx-auto rounded-3xl p-8 md:p-12
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_0_60px_-20px_rgba(198,162,90,0.35)]"
      >

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10
              px-4 py-3 text-sm text-white outline-none
              focus:border-[#C6A25A] focus:ring-1 focus:ring-[#C6A25A]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10
              px-4 py-3 text-sm text-white outline-none
              focus:border-[#C6A25A] focus:ring-1 focus:ring-[#C6A25A]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us what you're looking for..."
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10
              px-4 py-3 text-sm text-white outline-none resize-none
              focus:border-[#C6A25A] focus:ring-1 focus:ring-[#C6A25A]"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-xl py-3 text-sm font-medium tracking-wide
            bg-linear-to-r from-[#C6A25A] to-[#E5C07B]
            text-black shadow-lg"
          >
            Send Message
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
}
