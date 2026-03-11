"use client";

import { motion } from "motion/react";
import ScholarshipForm from "@/components/ScholarshipForm";

const benefits = [
  "Thi đánh giá năng lực SAT miễn phí",
  "Nhận tư vấn lộ trình học cá nhân",
  "Xét cấp học bổng SAT",
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function RegisterSection() {
  return (
    <section className="border-t border-scholarship-gold/20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold uppercase tracking-tight text-scholarship-navy sm:text-3xl"
        >
          Đăng ký tham gia chương trình
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-scholarship-navy/90"
        >
          Học sinh đăng ký để:
        </motion.p>

        <ul className="mt-3 space-y-2">
          {benefits.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}
              className="flex items-center gap-2 text-scholarship-navy/90"
            >
              <CheckIcon />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 font-semibold text-scholarship-navy"
        >
          Số lượng học bổng có hạn
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="mt-6"
        >
          <a
            href="#form"
            className="inline-block rounded-lg border-2 border-scholarship-navy bg-scholarship-navy px-6 py-3.5 font-semibold uppercase tracking-wide text-white transition hover:bg-scholarship-navy/90"
          >
            [ Đăng ký ngay ]
          </a>
        </motion.div>

        {/* Form at bottom of section */}
        <div className="mt-14">
          <ScholarshipForm />
        </div>
      </div>
    </section>
  );
}
