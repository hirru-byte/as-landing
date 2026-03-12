"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const STAGE_DURATION = 3;
const STAGE_COUNT = 4;
const CYCLE_DURATION = STAGE_DURATION * STAGE_COUNT; // 28s

const icons = {
  lightbulb: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  code: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  package: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  rocket: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.167 2.62m-5.167-2.62a14.931 14.931 0 01-2.62-5.167m2.62 5.167a15 15 0 01-2.62-5.167" />
    </svg>
  ),
};

const phases = [
  {
    title: "Foundation Accelerator",
    description:
      "Xây dựng nền tảng Digital SAT, hệ thống kiến thức Verbal & Math, làm quen cấu trúc đề thi và rèn kỹ năng quản lý thời gian. Mục tiêu tăng 150–200 điểm.",
    durationLabel: "20 buổi học",
    percentage: 25,
    icon: "lightbulb" as keyof typeof icons,
  },
  {
    title: "SAT ULT",
    description:
      "Tối ưu chiến thuật làm bài, phân tích lỗi sai logic, luyện đề sát đề thi thật và cải thiện tốc độ cùng độ chính xác. Mục tiêu 1400+.",
    durationLabel: "20 buổi + 3 buổi thi thử",
    percentage: 50,
    icon: "code" as keyof typeof icons,
  },
  {
    title: "SAT ADV",
    description:
      "Luyện dạng câu hỏi phân loại điểm cao, phân tích bẫy thường gặp, luyện đề nâng cao và chiến thuật phòng thi. Mục tiêu 1500+.",
    durationLabel: "20 buổi",
    percentage: 75,
    icon: "package" as keyof typeof icons,
  },
  {
    title: "SAT ADV 2",
    description:
      "Các câu hỏi khó nhất của Digital SAT, hoàn thiện chiến thuật điểm cao, tối ưu độ chính xác tuyệt đối và luyện thi thử trong môi trường mô phỏng kỳ thi thật.",
    durationLabel: "Hoàn thành",
    percentage: 100,
    icon: "rocket" as keyof typeof icons,
  },
];

function StageCard({
  item,
  index,
  isVertical = false,
  // cycle,
}: {
  item: (typeof phases)[number];
  index: number;
  isVertical?: boolean;
  // cycle: number;
}) {
  const isLast = index === phases.length - 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: isVertical ? 12 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.08 * index }}
      className={isVertical ? "flex gap-5" : "flex flex-col"}
    >
      {/* Circular icon */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          // animate={{ scale: 1, opacity: 1 }}
          transition={{
            scale: {
              duration: 1,
              delay: index * STAGE_DURATION - 1,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
              delay: index * STAGE_DURATION - 1,
              ease: "easeInOut",
            },
          }}
          className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center  border-2 border-scholarship-gold bg-scholarship-gold text-white shadow-[5px_5px_0px_0px_#f8bf2780] ${isVertical ? "" : "mb-4"}`}
        >
          {icons[item.icon]}
        </motion.div>
        {!isLast &&
          <motion.div
            viewport={{ once: true }}
            whileInView={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            // animate={{ scaleX: 1 }}
            transition={{
              scaleX: {
                duration: STAGE_DURATION,
                delay: index * STAGE_DURATION,
                ease: "easeInOut",
              },
            }}
            className="absolute w-[80%] origin-left -right-2 top-7 h-0.5 bg-gradient-to-r from-scholarship-gold via-scholarship-gold/70 to-scholarship-gold" aria-hidden
          />
        }
      </div>

      {/* Content card */}
      <div className={`min-w-0 flex-1 flex flex-col justify-between ${isVertical ? "" : "w-full"}`}>
        <div>
          <h3 className="font-display text-lg font-bold text-scholarship-navy">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-scholarship-navy/75">{item.description}</p>
        </div>

        {/* Progress bar row */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-scholarship-navy/85">
            <span>{item.durationLabel}</span>
            <span>{item.percentage}%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-scholarship-gold/25">
            <motion.div
              // key={cycle}
              viewport={{ once: true }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: item.percentage / 100 }}
              transition={{ duration: STAGE_DURATION, delay: index * STAGE_DURATION, ease: "easeInOut" }}
              className="h-full w-full origin-left rounded-full bg-scholarship-gold"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {


  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold tracking-tight text-scholarship-navy sm:text-3xl"
        >
          Lộ trình luyện thi SAT
        </motion.h2>

        {/* Desktop: horizontal roadmap with connecting line through circles */}
        <div className="relative mt-12 hidden lg:block">

          <div className="grid grid-cols-4 gap-6">
            {phases.map((item, i) => (
              <StageCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="relative mt-12 lg:hidden">
          <div
            className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-scholarship-gold via-scholarship-gold/70 to-scholarship-gold"
            aria-hidden
          />
          <div className="space-y-10">
            {phases.map((item, i) => (
              <StageCard key={item.title} item={item} index={i} isVertical />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
