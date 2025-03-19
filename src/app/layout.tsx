import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistPlayfair_Display = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
const geistMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "KP Studio | %s",
    default:
      "KP Studio | Chụp Ảnh Cưới Nghệ Thuật – Lưu Giữ Khoảnh Khắc Đẹp Nhất",
  },
  description:
    "KP Studio – Studio chụp ảnh cưới chuyên nghiệp, phong cách hiện đại. Lưu giữ khoảnh khắc hạnh phúc cùng đội ngũ photographer tài năng. Đặt lịch ngay hôm nay!",
  keywords: [
    "chụp ảnh cưới",
    "studio ảnh cưới",
    "nhiếp ảnh cưới",
    "dịch vụ chụp ảnh cưới",
    "ảnh cưới nghệ thuật",
    "chụp hình cưới chuyên nghiệp",
    "địa điểm chụp ảnh cưới đẹp",
    "KP Studio",
    "ảnh cưới ngoại cảnh",
    "album ảnh cưới đẹp",
  ],
  authors: [
    {
      name: "ThanhDev",
      url: "https://thanhdev.io.vn",
    },
    {
      name: "KP Studio",
      url: "https://kpstudio.vn",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "KP Studio | Chụp Ảnh Cưới Nghệ Thuật – Lưu Giữ Khoảnh Khắc Đẹp Nhất",
    description:
      "Studio chụp ảnh cưới chuyên nghiệp, sáng tạo. Đội ngũ photographer tài năng giúp bạn có những bức ảnh ấn tượng. Đặt lịch ngay!",
    url: "https://kpstudio.vn",
    siteName: "KP Studio",
    images: [
      {
        url: "https://kpstudio.vn/images/banner-kpstudio.jpeg",
        width: 1920,
        height: 1080,
        alt: "KP Studio – Chụp Ảnh Cưới Nghệ Thuật",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KP Studio | Chụp Ảnh Cưới Nghệ Thuật",
    description:
      "KP Studio – Studio chụp ảnh cưới chuyên nghiệp. Lưu giữ khoảnh khắc hạnh phúc của bạn với đội ngũ photographer tài năng.",
    images: ["https://kpstudio.vn/images/banner-kpstudio.jpeg"],
    creator: "@kpstudio", // Nếu có tài khoản Twitter của studio
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPlayfair_Display.variable} ${geistMontserrat.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
