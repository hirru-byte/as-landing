# Chương trình học bổng SAT – Landing Page

Landing page cho chương trình học bổng SAT (dành cho học sinh THPT), dùng **Next.js 15**, **Tailwind CSS** và **Motion**.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **Motion** (`motion/react`)
- **TypeScript**

## Cài đặt & Chạy

```bash
yarn install
cp .env.example .env.local   # thêm URL Google Apps Script
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Gửi form qua Google Apps Script

1. **Biến môi trường**  
   Trong `.env.local` (và trên Vercel/hosting) thêm:
   ```env
   NEXT_PUBLIC_APPSCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Hoặc dùng `APPSCRIPT_URL` (chỉ server) nếu không cần dùng ở client.

2. **Deploy Apps Script**
   - Tạo script tại [script.google.com](https://script.google.com).
   - Deploy **Deploy > New deployment > Web app**:
     - **Execute as**: Me
     - **Who has access**: Anyone
   - Copy URL (dạng `https://script.google.com/macros/s/.../exec`).

3. **Mẫu code Apps Script**  
   Form gửi các field: `name`, `school`, `phone`, `email`, `parentName`, `parentEmail`, `parentPhone`.

```javascript
function doPost(e) {
  const params = e.parameter;
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date(),
    params.name || "",
    params.school || "",
    params.phone || "",
    params.email || "",
    params.parentName || "",
    params.parentEmail || "",
    params.parentPhone || ""
  ]);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Trước khi dùng: tạo sheet với header dòng 1 (ví dụ: `Thời gian`, `Họ tên`, `Trường`, `SĐT`, `Email`, `PH - Họ tên`, `PH - Email`, `PH - SĐT`).

## Scripts

| Lệnh     | Mô tả           |
|----------|-----------------|
| `yarn dev`   | Chạy dev server     |
| `yarn build` | Build production    |
| `yarn start` | Chạy bản production |
| `yarn lint`  | Chạy ESLint         |

## Cấu trúc

- `app/` – Layout, trang chủ, `globals.css`, API route `api/submit`
- `components/` – Header, Hero (nội dung trái + form phải), ScholarshipForm, Footer

Form đăng ký gửi tới `/api/submit`, API route forward sang Google Apps Script URL từ env.
