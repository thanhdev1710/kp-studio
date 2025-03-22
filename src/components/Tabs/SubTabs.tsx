"use client";
import { ListTab } from "@/types/wedding";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubTabs({
  pathname,
  listTab: { tabs },
  type,
}: {
  pathname: string;
  listTab: ListTab;
  type: string;
}) {
  const [selected, setSelected] = useState(type || tabs[0].value);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value;
    setSelected(newType);
    router.push(`${pathname}?subType=${newType}`);
  };

  return (
    <div className="flex justify-center mt-6">
      <select
        value={selected}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 focus:outline-none focus:ring-0 bg-transparent"
      >
        {tabs.map((tab) => (
          <option key={tab.value} value={tab.value} className="text-gray-900">
            {tab.label}
          </option>
        ))}
      </select>
    </div>
  );
}
