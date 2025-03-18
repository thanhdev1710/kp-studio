import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
};

export default function page() {
  const breadcrumb = [
    {
      title: "Trang chủ",
      link: "trang-chu",
    },
    {
      title: "Điều khoản sử dụng",
      link: "dieu-khoan-su-dung",
    },
  ];
  return (
    <div>
      <div className="flex gap-2">
        {breadcrumb.map((item, i) => (
          <div className="flex gap-2" key={item.title}>
            <span>{i !== 0 && <ChevronRight />}</span>
            {i === breadcrumb.length - 1 ? (
              <p className="font-semibold">{item.title}</p>
            ) : (
              <Link href={item.link}>{item.title}</Link>
            )}
          </div>
        ))}
      </div>
      <section></section>
    </div>
  );
}
