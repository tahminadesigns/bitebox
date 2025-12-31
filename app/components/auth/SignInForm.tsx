"use client";

import { motion } from "framer-motion";
import SocialLogin from "./SocialLogin";
import Link from "next/link";

export default function SignInForm() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md bg-black/70 backdrop-blur-xl p-8 rounded-2xl border border-[#C6A85C]/20 shadow-2xl"
    >
      <h2 className="text-3xl font-semibold text-center text-[#C6A85C] mb-6">
        Welcome Back
      </h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-[#C6A85C] outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-[#C6A85C] outline-none"
        />

        <button className="w-full py-3 rounded-lg bg-[#C6A85C] text-black font-semibold hover:opacity-90 transition">
          Sign In
        </button>
      </form>

      <SocialLogin />

      <p className="text-center text-sm text-gray-400 mt-6">
        Don’t have an account?{" "}
        <Link href="/sign-up" className="text-[#C6A85C] hover:underline">
          Sign Up
        </Link>
      </p>
    </motion.div>
  );
}
