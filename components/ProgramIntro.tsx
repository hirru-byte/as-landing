"use client";

import { motion } from "motion/react";

const items = [
  {
    text: "Làm quen với Digital SAT từ sớm",
    icon: (
      <svg className="h-5 w-5 shrink-0 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "Đánh giá chính xác năng lực hiện tại",
    icon: (
      <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    text: "Xây dựng lộ trình tăng điểm rõ ràng",
    icon: (
      <svg className="h-5 w-5 shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    text: "Tối ưu chiến thuật làm bài",
    icon: (
      <svg className="h-5 w-5 shrink-0 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function ProgramIntro() {
  return (
    <section className="border-t border-scholarship-gold/20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl font-bold uppercase leading-tight text-scholarship-navy sm:text-3xl"
        >
          Giới thiệu chương trình SAT tại
          <br />
          American Study
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-scholarship-navy/90"
        >
          Chương trình được thiết kế nhằm giúp học sinh:
        </motion.p>

        <ul className="mt-6 space-y-4 text-left">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 * i }}
              className="flex items-center gap-3 text-scholarship-navy/90"
            >
              <span className="flex shrink-0">{item.icon}</span>
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 text-scholarship-navy/85"
        >
          Thay vì học đại trà, mỗi học sinh sẽ được xây dựng lộ trình học tập cá nhân hóa dựa trên kết quả kiểm tra đầu vào.
        </motion.p>
      </div>
    </section>
  );
}
