"use client";

import { motion } from "motion/react";
import ScholarshipForm from "./ScholarshipForm";
import Image from "next/image";

const benefits = [
  {
    text: "Tặng miễn phí khóa học SAT trị giá 15.000.000 VNĐ",
    icon: (
      <svg className="h-6 w-6 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    text: "Lộ trình cá nhân hóa giúp học sinh hướng tới SAT 1450 – 1550",
    icon: (
      <svg className="h-6 w-6 shrink-0 text-rose-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    text: "Kiểm tra năng lực & tư vấn lộ trình SAT miễn phí",
    icon: (
      <svg className="h-6 w-6 shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-28 flex items-center justify-center">
      <Image src="/hero.webp" alt="Hero Background" objectFit="cover" objectPosition="right" fill className="absolute lg:translate-x-1/4 inset-0 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 from-20% to-white/30 to-70% z-20" />

      <div className="relative mx-auto flex lg:flex-row flex-col items-center justify-center gap-12 max-w-7xl px-6 z-30">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-bold uppercase leading-tight text-scholarship-navy sm:text-4xl md:text-[2.5rem] border bg-scholarship-gold px-4 py-2 w-fit"
          >
            Chương trình học bổng SAT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-scholarship-navy/90 sm:text-3xl"
          >
            Dành riêng cho học sinh THPT
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-scholarship-navy/85 font-medium"
          >
            Cơ hội giúp học sinh tiếp cận kỳ thi Digital SAT bài bản từ sớm, xây dựng hồ sơ đại học quốc tế và mở rộng cơ hội xét tuyển tại nhiều trường đại học trong và ngoài nước.
          </motion.p>

          <ul className="mt-8 space-y-4">
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-3 text-lg font-medium"
              >
                <span className="mt-0.5">{item.icon}</span>
                <span className="text-scholarship-navy/90">{item.text}</span>
              </motion.li>
            ))}
          </ul>


        </div>
        <div className="max-w-2xl">
          <ScholarshipForm />
        </div>
      </div>
    </section>
  );
}
