"use client";

import { motion } from "motion/react";
import ScholarshipForm from "./ScholarshipForm";
import Image from "next/image";
import ScholarshipValue from "./ScholarshipValue";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-28 flex flex-col items-center justify-center gap-24">
      <Image src="/hero.webp" alt="Hero Background" objectFit="cover" objectPosition="right" fill className="absolute inset-0 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white from-10% to-white/50 to-70% z-20" />

      <div className="flex flex-col items-center justify-center text-center px-6 z-30">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-2 font-display text-3xl font-semibold uppercase tracking-wide text-scholarship-navy/90 sm:text-4xl"
        >
          NHẬN QUÀ TẶNG KHÓA HỌC SAT TRỊ GIÁ
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold uppercase leading-tight text-scholarship-navy sm:text-4xl md:text-[2.5rem] bg-scholarship-gold px-4 py-2 w-fit"
        >
          22.000.000 VNĐ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-xl leading-relaxed text-scholarship-navy/85 font-medium"
        >
          Học sinh đăng ký tham gia thi thử Digital SAT sẽ có cơ hội nhận khóa học SAT miễn phí và tài khoản luyện thi tại American Study.
        </motion.p>

      </div>
      <div className=" mx-auto flex lg:flex-row flex-col xl:items-center justify-center gap-12 px-[5%] xl:px-[10%] z-30">
        <div className="flex-1">
          <ScholarshipValue />
        </div>
        <div className="self-center sticky top-20">
          <ScholarshipForm />
        </div>
      </div>
    </section>
  );
}
