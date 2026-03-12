"use client";

import { motion } from "motion/react";
import Link from "next/link";

const items: {
  title: string;
  description: string[];
  imageSrc?: string;
  buttonText: string;
  buttonHref: string;
}[] = [
    {
      title: "Khóa học SAT 20 buổi",
      description:
        ["Giá trị 15.000.000 VNĐ.", "Xây dựng nền tảng Digital SAT, làm quen cấu trúc đề thi thật, học chiến thuật làm bài và luyện kỹ năng tăng tốc. Mục tiêu tăng 150 – 400 điểm."],
      buttonText: "Tìm hiểu thêm",
      buttonHref: "#form",
    },
    {
      title: "Nền tảng luyện Digital SAT",
      description:
        ["Giá trị 5.000.000 VNĐ.", "Tài khoản luyện SAT với 500+ đề, thi thử mô phỏng, phân tích lỗi chi tiết, báo cáo năng lực và AI hỗ trợ giải thích. Luyện mỗi ngày ngay trên nền tảng."],
      buttonText: "Khám phá nền tảng",
      buttonHref: "#form",
    },
    {
      title: "Thi thử SAT chuẩn Digital",
      description:
        ["Giá trị 2.000.000 VNĐ.", "Biết điểm hiện tại, kỹ năng đang yếu và cần tăng bao nhiêu điểm. Sau bài thi nhận phân tích chi tiết và định hướng lộ trình. Tổng giá trị học bổng 22.000.000 VNĐ."],
      buttonText: "Đăng ký thi thử",
      buttonHref: "#form",
    },
  ];

export default function ScholarshipValue() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold text-scholarship-navy sm:text-3xl"
        >
          Giá trị học bổng học sinh nhận được
        </motion.h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex flex-col bg-white shadow-lg"
            >

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-scholarship-navy sm:text-xl">
                  {item.title}
                </h3>
                <div className="my-3 h-0.5 w-12 bg-scholarship-navy" aria-hidden />
                <div className="flex-1 text-sm leading-relaxed text-scholarship-navy/80">
                  {item.description.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
                <Link
                  href={item.buttonHref}
                  className="mt-5 inline-block self-start bg-scholarship-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-scholarship-navy/90"
                >
                  {item.buttonText}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
