"use client";

import { motion } from "motion/react";

const phases = [
  {
    phase: "Giai đoạn 1",
    program: "FOUNDATION ACCELERATOR",
    duration: "20 buổi học",
    goal: "Tăng 150 – 200 điểm",
    focus: [
      "Xây dựng nền tảng Digital SAT",
      "Hệ thống kiến thức Verbal & Math",
      "Làm quen cấu trúc đề thi",
      "Rèn kỹ năng quản lý thời gian",
    ],
  },
  {
    phase: "Giai đoạn 2",
    program: "SAT ULT",
    duration: "20 buổi + 3 buổi thi thử",
    goal: "1400+",
    focus: [
      "Tối ưu chiến thuật làm bài",
      "Phân tích lỗi sai logic",
      "Luyện đề sát đề thi thật",
      "Cải thiện tốc độ và độ chính xác",
    ],
  },
  {
    phase: "Giai đoạn 3",
    program: "SAT ADV",
    duration: "20 buổi",
    goal: "1500+",
    focus: [
      "Luyện dạng câu hỏi phân loại điểm cao",
      "Phân tích bẫy thường gặp",
      "Luyện đề nâng cao",
      "Chiến thuật phòng thi",
    ],
  },
  {
    phase: "Giai đoạn 4",
    program: "SAT ADV 2",
    duration: "20 buổi",
    goal: "1500+",
    focus: [
      "Các câu hỏi khó nhất của Digital SAT",
      "Hoàn thiện chiến thuật điểm cao",
      "Tối ưu độ chính xác tuyệt đối",
      "Luyện thi thử trong môi trường mô phỏng kỳ thi thật",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="border-t border-scholarship-gold/20 bg-scholarship-cream/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold uppercase tracking-tight text-scholarship-navy sm:text-3xl"
        >
          Lộ trình luyện thi SAT
        </motion.h2>

        {/* Desktop: horizontal roadmap with path */}
        <div className="relative mt-12 hidden lg:block">
          {/* Road path line */}
          <div
            className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-scholarship-gold via-scholarship-gold/80 to-scholarship-gold"
            aria-hidden
          />
          <div className="grid grid-cols-4 gap-4">
            {phases.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative flex flex-col items-center"
              >
                {/* Node on the path */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-scholarship-gold bg-white font-display text-xl font-bold text-scholarship-gold shadow-md">
                  {i + 1}
                </div>
                {/* Card below node */}
                <div className="mt-6 w-full rounded-xl border border-scholarship-gold/30 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-scholarship-navy">{item.phase}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-scholarship-navy/90">
                    {item.program}
                  </p>
                  <p className="mt-1 text-sm text-scholarship-navy/80">{item.duration}</p>
                  <p className="mt-2 text-sm font-semibold text-scholarship-gold">
                    Mục tiêu: {item.goal}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-scholarship-navy">Trọng tâm:</p>
                  <ul className="mt-1.5 space-y-1 text-sm text-scholarship-navy/85">
                    {item.focus.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scholarship-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Arrow at end of path */}
          <div className="absolute right-0 top-8 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-scholarship-gold" aria-hidden>
            <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Mobile/Tablet: vertical roadmap (timeline) */}
        <div className="relative mt-12 lg:hidden">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-scholarship-gold via-scholarship-gold/80 to-scholarship-gold"
            aria-hidden
          />
          <div className="space-y-8">
            {phases.map((item, i) => (
              <motion.article
                key={item.phase}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="relative flex gap-4 pl-14"
              >
                {/* Node */}
                <div
                  className="absolute left-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-scholarship-gold bg-white font-display text-lg font-bold text-scholarship-gold shadow"
                  aria-hidden
                >
                  {i + 1}
                </div>
                {/* Card */}
                <div className="min-w-0 flex-1 rounded-xl border border-scholarship-gold/30 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-scholarship-navy">{item.phase}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-scholarship-navy/90">
                    {item.program}
                  </p>
                  <p className="mt-1 text-sm text-scholarship-navy/80">{item.duration}</p>
                  <p className="mt-2 text-sm font-semibold text-scholarship-gold">
                    Mục tiêu: {item.goal}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-scholarship-navy">Trọng tâm:</p>
                  <ul className="mt-1.5 space-y-1 text-sm text-scholarship-navy/85">
                    {item.focus.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scholarship-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
