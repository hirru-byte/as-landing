import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CHƯƠNG TRÌNH HỖ TRỢ NĂNG LỰC SAT TOÀN PHẦN NĂM 2026",
  description:
    "Học sinh đăng ký tham gia thi thử Digital SAT sẽ có cơ hội nhận khóa học SAT miễn phí và tài khoản luyện thi tại American Study.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
