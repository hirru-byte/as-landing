"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProgramIntro() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14 lg:gap-16">
          {/* Left: Image with border and shadow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-[19px_20px_0px_0px_#f8bf27] md:aspect-[5/4] "
          >
            <Image
              src="/hero.webp"
              alt="Chương trình SAT tại American Study"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={false}
            />
          </motion.div>

          {/* Right: Heading, paragraph, CTA */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-display text-3xl font-bold leading-tight text-scholarship-navy sm:text-4xl"
            >
              Giới thiệu chương trình SAT tại American Study
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-6 text-base leading-relaxed text-scholarship-navy/80 sm:text-lg"
            >
              Chương trình được thiết kế nhằm giúp học sinh làm quen với Digital SAT từ sớm, đánh giá chính xác năng lực hiện tại, xây dựng lộ trình tăng điểm rõ ràng và tối ưu chiến thuật làm bài. Thay vì học đại trà, mỗi học sinh sẽ được xây dựng lộ trình học tập cá nhân hóa dựa trên kết quả kiểm tra đầu vào.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8"
            >
              <Link
                href="#program"
                className="inline-flex items-center gap-3 font-semibold text-scholarship-navy transition-opacity hover:opacity-80"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-scholarship-navy text-white"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                Tìm hiểu thêm về chương trình
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
