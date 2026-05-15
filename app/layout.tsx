import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAMY — Casually Perfect | Thời Trang Nữ",
  description:
    "ZAMY - Thương hiệu thời trang nữ cao cấp. Casually Perfect since 2012. Đầm, váy, áo và phụ kiện thời trang.",
  icons: { icon: "/logos/SUBMARK_REDWOOD.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;0,6..96,800;1,6..96,400;1,6..96,500;1,6..96,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full w-full">
        {children}
      </body>
    </html>
  );
}
