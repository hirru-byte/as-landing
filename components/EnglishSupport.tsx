"use client";

import { motion } from "motion/react";

const benefits = [
  "Củng cố nền tảng tiếng Anh học thuật",
  "Phát triển kỹ năng đọc hiểu và tư duy logic",
  "Chuẩn bị nền tảng vững chắc trước khi bước vào SAT",
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function EnglishSupport() {
  return (
    <section className=" bg-white py-14 md:py-16">
      <div className="mx-auto max-w-xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl font-bold uppercase tracking-tight text-scholarship-navy"
        >
          Hỗ trợ nền tảng tiếng Anh
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-4 text-scholarship-navy/90"
        >
          Đối với học sinh chưa có nền tảng tiếng Anh học thuật đủ mạnh để bắt đầu SAT:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 flex items-start gap-2"
        >
          <span className="text-2xl" role="img" aria-hidden>
            🎁
          </span>
          <span className="font-semibold text-scholarship-navy">
            Tặng miễn phí khóa học Pre-IELTS (20 buổi)
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-5 text-scholarship-navy/90"
        >
          Khóa học giúp học sinh:
        </motion.p>

        <ul className="mt-3 space-y-2">
          {benefits.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
              className="flex items-start gap-2 text-scholarship-navy/90"
            >
              <CheckIcon />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
