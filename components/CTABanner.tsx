"use client";

import { motion } from "motion/react";

import AnimatedCounter from "./AnimatedCounter";

type CardItem =
  | { number: number; suffix?: string; content: string }
  | { content: string };

const cards: CardItem[] = [
  { number: 1000, suffix: "+", content: "học sinh đạt SAT 1500+ mỗi năm" },
  { number: 5000, suffix: "+", content: "học sinh đã tham gia chương trình SAT" },
  { number: 200, suffix: "+", content: "Kho đề luyện Digital SAT lớn với hàng trăm đề cập nhật liên tục" },
  { number: 150, suffix: "+", content: "Thi thử mô phỏng kỳ thi SAT thật" },
];

function hasNumber(
  card: CardItem
): card is { number: number; suffix?: string; content: string } {
  return "number" in card && typeof card.number === "number";
}

export default function CTABanner() {
  return (
    <section className="bg-scholarship-navy/80 py-24 md:py-32 relative">

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
            Kết quả học sinh tại American Study
          </h2>
          <p className="mt-4 text-scholarship-cream/85">
            American Study là đơn vị đào tạo SAT chuyên sâu với hệ thống luyện thi bài bản.
          </p>

        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex flex-col border border-scholarship-gold/30 bg-white/5 p-6 backdrop-blur-sm"
            >
              {hasNumber(card) ? (
                <>
                  <p className="mb-3 font-display text-3xl font-bold tabular-nums text-scholarship-gold">
                    <AnimatedCounter number={card.number} inView />
                    {card.suffix ?? ""}
                  </p>
                  <p className="text-sm leading-relaxed text-white">
                    {card.content}
                  </p>
                </>
              ) : (
                <>
                  <span className="mb-3 h-1.5 w-8 shrink-0 rounded-full bg-transparent" aria-hidden />
                  <p className="text-sm leading-relaxed text-white">
                    {card.content}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
