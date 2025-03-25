"use client";

import { useFormStatus } from "react-dom";

export default function ButtonAction({
  titleLoading,
  title,
  type,
}: {
  titleLoading: string;
  title: string;
  type: "delete" | "add" | "edit";
}) {
  const { pending } = useFormStatus();

  const typeColors = {
    delete: "bg-red-500 hover:bg-red-700",
    add: "bg-green-500 hover:bg-green-700",
    edit: "bg-blue-500 hover:bg-blue-700",
  };

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full text-white py-2 rounded-md font-medium transition ${
        pending ? "opacity-50 cursor-not-allowed" : typeColors[type]
      }`}
    >
      {pending ? titleLoading : title}
    </button>
  );
}
