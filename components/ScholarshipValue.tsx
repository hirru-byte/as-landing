"use client";

import { motion } from "motion/react";

const items: {
  title: string;
  description: string[];
  imageSrc?: string;
  price: string;
  buttonText: string;
  buttonHref: string;
}[] = [
    {
      title: "Khóa học SAT 20 buổi",
      price: "15.000.000 VNĐ",
      description:
        ["Xây dựng nền tảng Digital SAT", "Làm quen cấu trúc đề thi thật", "Học chiến thuật làm bài SAT", "Tăng tốc độ và độ chính xác khi làm bài", "Mục tiêu tăng 150 – 400 điểm"],
      buttonText: "Tìm hiểu thêm",
      buttonHref: "#form",
    },
    {
      title: "Nền tảng luyện Digital SAT",
      price: "5.000.000 VNĐ",
      description:
        ["Tài khoản luyện SAT với 500+ đề", "Thi thử mô phỏng SAT thật", "Phân tích lỗi chi tiết", "Báo cáo năng lực cá nhân", "AI hỗ trợ giải thích câu hỏi"],
      buttonText: "Khám phá nền tảng",
      buttonHref: "#form",
    },
    {
      title: "Thi thử SAT chuẩn Digital",
      price: "2.000.000 VNĐ",
      description:
        ["Biết điểm SAT hiện tại", "Biết kỹ năng đang yếu", "Biết cần tăng bao nhiêu điểm"],
      buttonText: "Đăng ký thi thử",
      buttonHref: "#form",
    },
  ];

export default function ScholarshipValue() {
  return (
    <section className="relative ">
      <div className="mx-auto px-6 flex flex-col gap-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold text-scholarship-navy sm:text-3xl"
        >
          GIÁ TRỊ CHƯƠNG TRÌNH HỌC SINH NHẬN ĐƯỢC
        </motion.h2>
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20, shadow: "0px 0px 0px 0px #f8bf27" }}
              whileInView={{ opacity: 1, y: 0, shadow: "19px 20px 0px 0px #f8bf27" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 * i }}

              className="flex flex-col bg-white"
            >

              <div className="flex flex-1 flex-col justify-between p-6 relative">
                <div className="absolute bottom-0 right-0 translate-x-2 translate-y-1/2 text-lg font-semibold text-scholarship-navy/80 bg-scholarship-gold px-2 py-1">{item.price}</div>
                <div>
                  <h3 className="font-display text-base font-bold text-scholarship-navy ">
                    {item.title}
                  </h3>
                  <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 0.7 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="my-3 h-0.5 w-full origin-left bg-scholarship-navy" aria-hidden />
                </div>
                <ul className="mt-3 flex-1 space-y-1.5 text-sm leading-relaxed text-scholarship-navy/80">
                  {item.description.map((point, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scholarship-gold" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.article>
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-lg font-semibold text-scholarship-navy sm:text-xl mt-6"
        >
          Sau bài thi, học sinh sẽ nhận báo cáo điểm chi tiết và tư vấn lộ trình học phù hợp.
        </motion.h2>
      </div>
    </section>
  );
}
