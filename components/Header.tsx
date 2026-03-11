"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-scholarship-gold/20 bg-scholarship-cream/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold uppercase tracking-wide text-scholarship-navy md:text-xl"
        >
          Chương trình học bổng SAT
        </Link>
        <Link
          href="#form"
          className="rounded-full bg-scholarship-gold px-5 py-2.5 text-sm font-semibold text-scholarship-navy transition hover:bg-scholarship-gold/90"
        >
          Đăng ký ngay
        </Link>
      </div>
    </motion.header>
  );
}
