import { TabType } from "@/types/wedding";
import Link from "next/link";
import React from "react";

export default function Tabs({
  pathname,
  tabs,
  type,
}: {
  pathname: string;
  type: TabType;
  tabs: TabType[];
}) {
  return (
    <div className="flex justify-center space-x-8 mb-8 border-b border-gray-300 pb-4">
      {tabs.map((tab) => (
        <Link
          href={`${pathname}?type=${tab}`}
          key={tab}
          className={`relative md:px-6 md:py-2 px-3 py-1 md:text-lg text-sm font-medium tracking-wide transition-all duration-300 ${
            type === tab
              ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab === "all"
            ? "Tất cả"
            : tab === "studio"
            ? "Studio"
            : tab === "phimtruong"
            ? "Phim Trường"
            : "Ngoại Cảnh"}
        </Link>
      ))}
    </div>
  );
}
