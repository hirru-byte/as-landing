"use client";

import { useState } from "react";
import { motion } from "motion/react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ScholarshipForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage((data.message as string) || "Gửi form thất bại. Vui lòng thử lại.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Đã có lỗi xảy ra.");
    }
  }

  const inputClass =
    "w-full border border-scholarship-navy/20 bg-white px-4 py-3 text-scholarship-navy placeholder:text-scholarship-navy/50 focus:border-scholarship-gold focus:outline-none focus:ring-2 focus:ring-scholarship-gold/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-scholarship-navy";

  return (
    <motion.div
      id="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-2 border-scholarship-gold/20 bg-white p-6 shadow-[19px_20px_0px_0px_#f8bf2790] hover:shadow-[22px_20px_0px_0px_#f8bf27] transition-all duration-300 sm:p-8"
    >
      <h3 className="font-display text-xl font-semibold text-scholarship-navy">
        Đăng ký thi đánh giá năng lực SAT
      </h3>
      <p className="mt-1 text-sm text-scholarship-navy/70">
        Điền thông tin bên dưới để đăng ký.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Nguyễn Văn A"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="school" className={labelClass}>
            Trường <span className="text-red-500">*</span>
          </label>
          <input
            id="school"
            name="school"
            type="text"
            required
            className={inputClass}
            placeholder="THPT ABC"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="0901234567"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="email@example.com"
            disabled={status === "submitting"}
          />
        </div>

        {/* <div className="border-t border-scholarship-navy/10 pt-4">
          <p className="mb-3 text-sm font-medium text-scholarship-navy/80">
            Thông tin phụ huynh <span className="font-normal text-scholarship-navy/50">(tùy chọn)</span>
          </p>
          <div className="space-y-4">
            <div>
              <label htmlFor="parentName" className={labelClass}>
                Họ tên phụ huynh
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                className={inputClass}
                placeholder="Nguyễn Văn B"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="parentEmail" className={labelClass}>
                Email phụ huynh
              </label>
              <input
                id="parentEmail"
                name="parentEmail"
                type="email"
                className={inputClass}
                placeholder="phuhuynh@example.com"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="parentPhone" className={labelClass}>
                Số điện thoại phụ huynh
              </label>
              <input
                id="parentPhone"
                name="parentPhone"
                type="tel"
                className={inputClass}
                placeholder="0912345678"
                disabled={status === "submitting"}
              />
            </div>
          </div>
        </div> */}

        {status === "error" && (
          <p className="bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>
        )}
        {status === "success" && (
          <p className="bg-green-50 px-3 py-2 text-sm text-green-800">
            Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-scholarship-gold py-3.5 px-4 font-semibold uppercase tracking-wide text-scholarship-navy transition hover:bg-scholarship-gold/90 disabled:opacity-60"
        >
          {status === "submitting" ? "Đang gửi..." : "Đăng ký thi đánh giá năng lực SAT"}
        </button>
      </form>
    </motion.div>
  );
}
