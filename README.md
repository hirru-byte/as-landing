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

Landing page gửi form qua API route `/api/submit`; API forward dữ liệu sang Google Apps Script (dạng `application/x-www-form-urlencoded`). Script ghi vào Google Sheet.

### 1. Tạo Google Sheet (lưu đăng ký)

1. Vào [Google Sheets](https://sheets.google.com) → **Blank** (hoặc dùng sheet có sẵn).
2. Đặt tên sheet (ví dụ: `Đăng ký SAT`).
3. Ở **dòng 1** nhập header (đúng thứ tự cột):
   | A | B | C | D | E | F | G | H |
   |---|---|---|---|---|---|---|---|
   | Thời gian | Họ tên | Trường | SĐT | Email | PH - Họ tên | PH - Email | PH - SĐT |
4. Lưu lại. Giữ tab này mở hoặc ghi nhớ URL của sheet.

### 2. Tạo project Apps Script và gắn Sheet

1. Mở [script.google.com](https://script.google.com) và đăng nhập bằng tài khoản Google (cùng tài khoản với Sheet).
2. **New project** → đặt tên (ví dụ: `SAT Form Handler`).
3. Gắn script với Sheet đã tạo:
   - Trong editor: **+** bên trái (Services) hoặc **Extensions → Apps Script** từ chính file Google Sheet.
   - Nếu tạo từ script.google.com: **Editor** (icon bút) → **Project Settings** (bánh răng) → không cần thêm; thay vào đó dùng **SpreadsheetApp.openById()** hoặc tạo script từ **Sheet**: vào Sheet → **Extensions → Apps Script** (sẽ tự gắn sheet hiện tại).

**Cách đơn giản nhất:** Mở đúng file Google Sheet của bạn → **Extensions → Apps Script**. Một project mới sẽ được tạo và đã gắn với sheet đó. Xóa sẵn hàm `function myFunction() {}` và dán code bên dưới.

### 3. Dán code Apps Script

Form gửi các field: `name`, `school`, `phone`, `email`, `parentName`, `parentEmail`, `parentPhone`. Dán toàn bộ code sau vào file `Code.gs`:

```javascript
function doPost(e) {
  try {
    var params = e.parameter;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
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
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

- **SpreadsheetApp.getActiveSpreadsheet()** chỉ hoạt động khi script được tạo từ **Extensions → Apps Script** trong một Sheet (script gắn với sheet đó).
- Nếu bạn tạo script độc lập từ script.google.com thì phải dùng **SpreadsheetApp.openById("ID_CUA_SHEET")** thay cho `getActiveSpreadsheet()`; lấy ID từ URL sheet: `https://docs.google.com/spreadsheets/d/<ID_CUA_SHEET>/edit`.

### 4. Deploy dạng Web app

1. Trong editor Apps Script: **Deploy → New deployment**.
2. Chọn **Select type → Web app**.
3. Cấu hình:
   - **Description**: tùy chọn (ví dụ: `SAT form handler v1`).
   - **Execute as**: **Me** (chạy bằng tài khoản của bạn, có quyền ghi Sheet).
   - **Who has access**: **Anyone** (để API từ Next.js / Vercel gọi được mà không cần đăng nhập).
4. Bấm **Deploy**. Lần đầu có thể yêu cầu **Authorize access**:
   - Chọn tài khoản Google → **Advanced** → **Go to … (unsafe)** → **Allow**.
5. Sau khi deploy xong, copy **Web app URL** (dạng `https://script.google.com/macros/s/xxxxxxxxxx/exec`). Đây là URL cần dùng trong biến môi trường.

**Lưu ý:** Mỗi lần sửa code, cần **Deploy → Manage deployments → Edit (icon bút) → Version → New version** rồi **Deploy**; URL `/exec` giữ nguyên.

### 5. Cấu hình biến môi trường

Trong `.env.local` (và trên Vercel/hosting) thêm:

```env
NEXT_PUBLIC_APPSCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Hoặc dùng `APPSCRIPT_URL` (chỉ chạy ở server). API route ưu tiên: `APPSCRIPT_URL` rồi mới tới `NEXT_PUBLIC_APPSCRIPT_URL`.

Thay `YOUR_SCRIPT_ID` bằng phần ID trong URL vừa copy (đoạn giữa `/s/` và `/exec`).

### 6. Kiểm tra

1. Chạy `yarn dev`, mở form trên landing page, điền thử và gửi.
2. Kiểm tra Google Sheet: dòng mới xuất hiện với thời gian và các cột đã map.
3. Nếu lỗi: mở **Apps Script → Executions** (trái) để xem log và lỗi từ `doPost`.

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
