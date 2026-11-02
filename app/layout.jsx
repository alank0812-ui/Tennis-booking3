JavaScript
import "./globals.css";

export const metadata = {
  title: "網球個人課程預約",
  description: "線上即時預約專屬網球教學時段",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
