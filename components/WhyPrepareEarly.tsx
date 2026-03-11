"use client";

import { motion } from "motion/react";

const points = [
  <>Sử dụng rộng rãi trong xét tuyển đại học tại <strong>Hoa Kỳ và nhiều quốc gia trên thế giới</strong></>,
  <>Được nhiều <strong>trường đại học top tại Việt Nam</strong> sử dụng trong phương thức xét tuyển</>,
  <>Là lợi thế lớn khi săn <strong>học bổng quốc tế</strong></>,
  <>Giúp học sinh chuẩn bị hồ sơ đại học từ sớm</>,
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function WhyPrepareEarly() {
  return (
    <section className="border-t border-scholarship-gold/20 bg-scholarship-cream/40 py-14 md:py-16">
      <div className="mx-auto max-w-xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-scholarship-navy sm:text-3xl"
        >
          Vì sao học sinh nên chuẩn bị SAT từ sớm?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-scholarship-navy/90"
        >
          Trong xu hướng hội nhập giáo dục toàn cầu, SAT đã trở thành một trong những chứng chỉ học thuật quan trọng nhất đối với học sinh THPT.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-6 font-medium text-scholarship-navy"
        >
          Điểm SAT hiện được:
        </motion.p>

        <ul className="mt-4 space-y-3 text-left">
          {points.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className="flex items-start gap-2 text-scholarship-navy/90"
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
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 text-scholarship-navy/90"
        >
          Một điểm SAT tốt không chỉ là điểm số, mà là tấm vé mở ra nhiều cơ hội học tập toàn cầu.
        </motion.p>
      </div>
    </section>
  );
}
