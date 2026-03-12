"use client";

import { motion } from "motion/react";

const STAGE_DURATION = 0.5;

const icons = {
  clipboard: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  document: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  gift: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
};

type Phase = {
  title: string;
  description: string;
  bullets?: string[];
  icon: keyof typeof icons;
};

const phases: Phase[] = [
  {
    title: "Bước 1 – Đăng ký thi thử",
    description: "Điền form đăng ký thi thử Digital SAT miễn phí",
    icon: "clipboard",
  },
  {
    title: "Bước 2 – Làm bài thi",
    description: "Tham gia bài thi để đánh giá năng lực SAT hiện tại",
    icon: "document",
  },
  {
    title: "Bước 3 – Nhận tư vấn & khóa học phù hợp",
    description:
      "American Study sẽ gọi điện tư vấn, phân tích kết quả bài thi và trao tặng khóa học SAT miễn phí phù hợp với điểm số và năng lực hiện tại của học sinh.",
    icon: "gift",
  },
];

function StageCard({
  item,
  index,
  isVertical = false,
}: {
  item: Phase;
  index: number;
  isVertical?: boolean;
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
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: STAGE_DURATION, delay: index * STAGE_DURATION, ease: "easeInOut" }}
          className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border-2 border-scholarship-gold bg-scholarship-gold text-white shadow-[5px_5px_0px_0px_#f8bf2780] ${isVertical ? "" : "mb-4"}`}
        >
          {icons[item.icon]}
        </motion.div>
        {!isLast && (
          <motion.div
            viewport={{ once: true }}
            whileInView={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: STAGE_DURATION, delay: index * STAGE_DURATION, ease: "easeInOut" }}
            className="absolute -right-2 top-7 h-0.5 w-[80%] origin-left bg-gradient-to-r from-scholarship-gold via-scholarship-gold/70 to-scholarship-gold"
            aria-hidden
          />
        )}
      </div>

      <div className={`min-w-0 flex-1 flex flex-col justify-between ${isVertical ? "" : "w-full"}`}>
        <h3 className="font-display text-lg font-bold text-scholarship-navy">{item.title}</h3>
        <p className="flex-1 flex items-center mt-2 text-sm leading-relaxed text-scholarship-navy/75">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  return (
    <section className=" bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold uppercase tracking-tight text-scholarship-navy sm:text-3xl"
        >
          Nhận khóa học SAT miễn phí chỉ với 3 bước
        </motion.h2>

        <div className="relative mt-12 hidden lg:block ">
          <div className="grid grid-cols-3 gap-8">
            {phases.map((item, i) => (
              <StageCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>


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
