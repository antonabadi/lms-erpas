import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LMS Yayasan - Portal Belajar",
  description: "Sistem Manajemen Pembelajaran Terintegrasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-theme="light">
      <body className="min-h-screen bg-base-200 antialiased">
        {children}
      </body>
    </html>
  );
}