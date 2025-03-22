import { ListTab } from "@/types/wedding";
import Link from "next/link";
import React from "react";

export default function Tabs({
  pathname,
  listTab: { tabs },
  type,
}: {
  pathname: string;
  listTab: ListTab;
  type: string;
}) {
  return (
    <div className="relative w-full border-b border-gray-300 pb-4 mb-4">
      {/* Thêm padding để tránh che mất phần tử đầu tiên */}
      <div className="flex justify-start md:justify-center gap-4 overflow-x-auto px-4 pb-2 scroll-px-4 snap-x snap-mandatory">
        {tabs.map((tab) => (
          <Link
            href={`${pathname}?type=${tab.value}`}
            key={tab.label}
            className={`relative px-3 py-1 md:px-6 md:py-2 md:text-lg text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap snap-start ${
              type === tab.value
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
