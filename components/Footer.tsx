"use client";

import { motion } from "motion/react";
import Link from "next/link";

function IconHouse() {
  return (
    <svg className="h-4 w-4 shrink-0 text-scholarship-cream/70" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}
function IconEnvelope() {
  return (
    <svg className="h-4 w-4 shrink-0 text-scholarship-cream/70" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="h-4 w-4 shrink-0 text-scholarship-cream/70" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-scholarship-gold/20 bg-scholarship-navy py-12 text-scholarship-cream/70"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-lg font-semibold text-white">American Study</p>
            <p className="mt-1 text-sm">Great Teachers, Great Schools.</p>
            <p className="mt-3 text-sm">Công ty cổ phần giáo dục American Study</p>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <IconHouse />
              <p className="text-sm">
                Tòa Yên Hòa Sunshine, số 9 Vũ Phạm Hàm, phường Yên Hòa, thành phố Hà Nội
              </p>
            </div>
            <div className="flex gap-3">
              <IconHouse />
              <p className="text-sm">
                Tòa nhà Viettel Complex, 285 Cách Mạng Tháng Tám, phường Hòa Hưng, TP Hồ Chí Minh
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <IconEnvelope />
              <a
                href="mailto:support@americanstudy.edu.vn"
                className="text-sm transition hover:text-scholarship-gold"
              >
                support@americanstudy.edu.vn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <IconPhone />
              <a href="tel:0912170676" className="text-sm transition hover:text-scholarship-gold">
                0912 170 676 - 0964 102 268
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 text-center text-sm">
          <p>COPYRIGHT @ AMERICAN STUDY 2026. ALL RIGHT RESERVED</p>
          <Link href="/privacy" className="transition hover:text-scholarship-gold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
