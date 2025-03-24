"use client";
import { ListTab } from "@/types/wedding";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubTabs({
  listTab: { tabs },
  type,
}: {
  listTab: ListTab;
  type: string;
}) {
  const pathname = usePathname();
  const [selected, setSelected] = useState(type || tabs[0].value);
  const router = useRouter();

  useEffect(() => {
    router.replace(`${pathname}?subType=${tabs[0].value}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value;
    setSelected(newType);
    router.push(`${pathname}?subType=${newType}`);
  };

  return (
    <div className="flex justify-center my-6">
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
