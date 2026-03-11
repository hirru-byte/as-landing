"use client";

import { motion } from "motion/react";
import Link from "next/link";

const steps = [
  "Đăng ký thi SAT miễn phí",
  "Nhận lộ trình SAT cá nhân",
  "Nhận học bổng SAT ngay",
];

export default function CTABanner() {
  return (
    <section className="border-t border-scholarship-gold/20 bg-scholarship-navy py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
            Đăng ký ngay — nhận ngay ưu đãi
          </h2>
          <p className="mt-2 text-scholarship-cream/80">
            Học sinh đăng ký để nhận đủ 3 bước sau:
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex flex-col items-center rounded-xl border border-scholarship-gold/30 bg-white/5 px-6 py-6 text-center backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-scholarship-gold font-display text-lg font-bold text-scholarship-navy">
                {i + 1}
              </span>
              <p className="mt-3 font-semibold uppercase tracking-wide text-white">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#form"
            className="inline-block rounded-xl bg-scholarship-gold px-8 py-4 font-semibold uppercase tracking-wide text-scholarship-navy transition hover:bg-scholarship-gold/90"
          >
            Đăng ký ngay
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
