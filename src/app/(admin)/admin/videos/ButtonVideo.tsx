"use client";

import { useFormStatus } from "react-dom";

export default function ButtonVideo() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full bg-black text-white py-2 mt-4 rounded-md font-medium transition ${
        pending ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
      }`}
    >
      {pending ? "Đang lưu..." : "Lưu thay đổi"}
    </button>
  );
}
