import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "./components/PageLoader";

export const metadata: Metadata = {
  title: "ZAMY — Casually Perfect | Thời Trang Nữ",
  description:
    "ZAMY - Thương hiệu thời trang nữ cao cấp. Casually Perfect since 2012. Đầm, váy, áo và phụ kiện thời trang.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full w-full">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
