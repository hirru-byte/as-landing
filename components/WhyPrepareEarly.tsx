"use client";

import { motion } from "motion/react";

const points = [
  "Xét tuyển đại học tại Mỹ và nhiều quốc gia",
  "Tăng lợi thế vào các trường đại học top tại Việt Nam",
  "Gia tăng cơ hội săn học bổng quốc tế",
  "Chuẩn bị hồ sơ đại học từ sớm",
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
    <section className="bg-white py-14 md:py-16">

      <div className="mx-auto px-6 flex flex-col justify-center items-center max-lg:gap-12">
        <motion.div
          initial={{ boxShadow: "-5px -5px 0 0 rgba(248, 191, 39, 0.5)" }}
          whileInView={{ boxShadow: "-19px -20px 0 0 rgba(248, 191, 39, 0.5)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-scholarship-gold px-12 py-6 max-w-lg text-center lg:translate-x-[-50%] relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-scholarship-navy sm:text-3xl"
          >
            Vì sao nên chuẩn bị SAT từ sớm
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-6 text-scholarship-navy/90"
          >
            SAT đang trở thành một trong những tiêu chí quan trọng trong xét tuyển đại học.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ boxShadow: "5px 5px 0 0 rgba(15, 23, 42, 0.5)" }}
          whileInView={{ boxShadow: "19px 20px 0 0 rgba(15, 23, 42, 0.5)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-fit p-6 bg-scholarship-navy max-w-lg text-center lg:translate-y-[-20%] lg:translate-x-[40%] relative z-0"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className=" text-white"
          >
            Điểm SAT giúp học sinh:
          </motion.p>

          <ul className="mt-4 space-y-3">
            {points.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                className="flex gap-2 text-white"
              >
                <CheckIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
