import { NextRequest, NextResponse } from "next/server";

const APPSCRIPT_URL = process.env.APPSCRIPT_URL ?? process.env.NEXT_PUBLIC_APPSCRIPT_URL ?? "";

export async function POST(request: NextRequest) {
  if (!APPSCRIPT_URL) {
    return NextResponse.json(
      { success: false, message: "Form URL chưa được cấu hình." },
      { status: 500 }
    );
  }

  try {
    const body = await request.formData();
    const payload: Record<string, string> = {};
    body.forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : value.toString();
    });

    const response = await fetch(APPSCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload).toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { success: false, message: text || "Gửi form thất bại." },
        { status: response.status }
      );
    }

    try {
      const data = await response.json();
      return NextResponse.json({ success: true, ...data });
    } catch {
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    console.error("AppScript proxy error:", err);
    return NextResponse.json(
      { success: false, message: "Đã có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
