"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const teachers = [
  {
    id: "1",
    name: "Mr. Daniel Sternberg",
    role: "SAT, SSAT, ACT, TOEFL, AP, CAE",
    bullets: [
      "Thạc sĩ Giáo dục, ĐH Southern California",
      "10+ năm kinh nghiệm giảng dạy chuẩn hóa Mỹ",
      "Chuyên Digital SAT, lộ trình tối ưu, sửa luận du học",
    ],
    bgColor: "bg-violet-100",
    accentColor: "bg-violet-500",
  },
  {
    id: "2",
    name: "Mr. Tommy",
    role: "6+ năm kinh nghiệm",
    bullets: [
      "Cử nhân Đại học Exeter (Anh Quốc)",
      "Tiếng Anh & Tranh biện, Lịch sử Mỹ, Viết sáng tạo",
      "Ôn luyện World Scholar's Cup",
    ],
    bgColor: "bg-sky-100",
    accentColor: "bg-sky-500",
  },
  {
    id: "3",
    name: "Mr. Jonathan",
    role: "SAT, SSAT, IELTS, TOEFL, ACT, GRE, MCAT",
    bullets: [
      "Tốt nghiệp ĐH Northwestern",
      "Nhiều năm SAT, SSAT, ACT và luyện thi sửa luận",
      "Nghiên cứu tài liệu chuẩn hóa quốc tế",
    ],
    bgColor: "bg-emerald-100",
    accentColor: "bg-emerald-500",
  },
  {
    id: "4",
    name: "Mr. Ciaran Lynch",
    role: "SAT, IELTS",
    bullets: [
      "Tốt nghiệp đại học Dundalk",
      "Nhiều năm kinh nghiệm dạy và luyện thi IELTS",
      "Phương pháp năng động, ứng dụng công nghệ trong lớp",
    ],
    bgColor: "bg-amber-100",
    accentColor: "bg-amber-500",
  },
  {
    id: "5",
    name: "Mr. Matiash Oleksandr (Alex)",
    role: "IELTS Speaking, Kid, Debate",
    bullets: [
      "Thạc sĩ Mạng máy tính, National Polytechnic University",
      "English Reading & Writing, Tranh biện & Khoa học, Toán học",
    ],
    bgColor: "bg-rose-100",
    accentColor: "bg-rose-500",
  },
  {
    id: "6",
    name: "Ms. Sheena J.M. Petten",
    role: "SAT, AP, IB, TOEFL, CAE",
    bullets: [
      "Thạc sĩ ĐH British Columbia",
      "Chuyên AP, IB, khoa học xã hội, viết luận đại học",
      "Tư vấn và chỉnh sửa luận vào trường Top Mỹ",
    ],
    bgColor: "bg-yellow-100",
    accentColor: "bg-amber-500",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function TeachersSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const teacher = teachers[selectedIndex];

  const goTo = useCallback((index: number) => {
    setSelectedIndex((index + teachers.length) % teachers.length);
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % teachers.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="border-t border-scholarship-gold/20 bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center font-display text-2xl font-bold uppercase tracking-tight text-scholarship-navy sm:text-3xl"
        >
          Đội ngũ giảng viên
        </motion.h2>

        {/* Desktop: row of thumbnails + expanded detail */}
        <div className="mt-10 hidden lg:flex lg:items-stretch lg:gap-3">
          {teachers.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl ${selectedIndex === i ? "flex-[2.5]" : "flex-1"
                }`}
              aria-pressed={selectedIndex === i}
              aria-label={`Xem thông tin ${t.name}`}
            >
              {selectedIndex === i ? (
                <div
                  className={`flex h-full min-h-[320px] flex-col rounded-xl ${t.bgColor} p-5`}
                >
                  <div className="flex flex-1 gap-4">
                    <div className="flex flex-1 items-center justify-center">
                      <div
                        className={`h-32 w-32 rounded-full ${t.accentColor} flex items-center justify-center text-3xl font-bold text-white`}
                        aria-hidden
                      >
                        {t.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-center text-left">
                      <p className="font-display text-lg font-bold uppercase text-scholarship-navy">
                        {t.name}
                      </p>
                      <p className="mt-1 text-sm font-medium text-scholarship-navy/80">{t.role}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-scholarship-navy/90">
                        {t.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scholarship-gold" />
                            {b}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`flex h-full min-h-[240px] items-center justify-center rounded-xl ${t.bgColor} p-4`}
                >
                  <div
                    className={`h-20 w-20 rounded-full ${t.accentColor} flex items-center justify-center text-2xl font-bold text-white`}
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile/Tablet: carousel */}
        <div className="mt-10 lg:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`rounded-xl ${teacher.bgColor} p-6`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`h-24 w-24 rounded-full ${teacher.accentColor} flex items-center justify-center text-3xl font-bold text-white`}
                  aria-hidden
                >
                  {teacher.name.charAt(0)}
                </div>
                <p className="mt-4 font-display text-lg font-bold uppercase text-scholarship-navy">
                  {teacher.name}
                </p>
                <p className="mt-1 text-sm font-medium text-scholarship-navy/80">
                  {teacher.role}
                </p>
                <ul className="mt-4 w-full space-y-2 text-left text-sm text-scholarship-navy/90">
                  {teacher.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-scholarship-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#form"
                  className="mt-6 inline-block rounded-lg bg-amber-500 px-6 py-3 font-semibold uppercase text-white transition hover:bg-amber-600"
                >
                  Kết nối
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel dots + prev/next */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(selectedIndex - 1)}
              className="rounded-full p-2 text-scholarship-navy/70 transition hover:bg-scholarship-navy/10 hover:text-scholarship-navy"
              aria-label="Giảng viên trước"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {teachers.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === selectedIndex ? "bg-scholarship-gold scale-125" : "bg-scholarship-navy/30"
                    }`}
                  aria-label={`Giảng viên ${i + 1}`}
                  aria-current={i === selectedIndex}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(selectedIndex + 1)}
              className="rounded-full p-2 text-scholarship-navy/70 transition hover:bg-scholarship-navy/10 hover:text-scholarship-navy"
              aria-label="Giảng viên tiếp theo"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: carousel indicator / dots (optional, for consistency) */}
        <div className="mt-6 hidden justify-center gap-2 lg:flex">
          {teachers.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${i === selectedIndex ? "bg-scholarship-gold scale-125" : "bg-scholarship-navy/30"
                }`}
              aria-label={`Chọn giảng viên ${i + 1}`}
              aria-current={i === selectedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
