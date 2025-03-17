import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
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
  openGraph: {
    title:
      "KP Studio | Chụp Ảnh Cưới Nghệ Thuật – Lưu Giữ Khoảnh Khắc Đẹp Nhất",
    description:
      "Studio chụp ảnh cưới chuyên nghiệp, sáng tạo. Đội ngũ photographer tài năng giúp bạn có những bức ảnh ấn tượng. Đặt lịch ngay!",
    url: "https://kpstudio.vn",
    siteName: "KP Studio",
    images: [
      {
        url: "https://kpstudio.vn/banner.jpg",
        width: 1200,
        height: 630,
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
    images: ["https://kpstudio.vn/banner.jpg"],
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
      </body>
    </html>
  );
}
