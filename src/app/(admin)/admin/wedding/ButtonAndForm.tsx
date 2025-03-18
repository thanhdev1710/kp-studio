"use client";

import { useState } from "react";
import { PlusIcon, X } from "lucide-react";
import { InsertWedding } from "@/actions/wedding";

export default function ButtonAndForm() {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      {/* Nút mở form */}
      <div
        onClick={() => setOpenForm(true)}
        className="group hover:bg-gray-300 transition-all w-full h-auto aspect-[3/2] cursor-pointer bg-gray-200 flex items-center justify-center"
      >
        <PlusIcon
          className="text-gray-400 group-hover:text-gray-500"
          size={50}
        />
      </div>

      {/* Modal form */}
      {openForm && (
        <div
          onClick={() => setOpenForm(false)}
          className="fixed top-0 z-[60] left-0 bg-black/60 w-full h-screen flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Thêm ảnh</h2>
              <button
                onClick={() => setOpenForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={async (event) => {
                event.preventDefault(); // Ngăn form reload trang
                setLoading(true);
                setError(null);
                setSuccess(false);

                const formData = new FormData(event.currentTarget);
                const result = await InsertWedding(formData);

                setLoading(false);

                if (result.status === "error") {
                  setError(result.error);
                } else {
                  setSuccess(true);
                  setTimeout(() => setOpenForm(false), 1500);
                }
              }}
              className="space-y-4"
            >
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Chọn ảnh
                </label>
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-gray-700 hover:file:bg-gray-100"
                  required
                />
              </div>

              {/* Tên */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tên
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-black focus:ring-black"
                  placeholder="Nhập tên ảnh"
                  required
                />
              </div>

              {/* Loại */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Loại
                </label>
                <select
                  name="type"
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-black focus:ring-black"
                >
                  <option value="studio">Studio</option>
                  <option value="phimtruong">Phim Trường</option>
                  <option value="ngoaicanh">Ngoại Cảnh</option>
                </select>
              </div>

              {/* Thông báo lỗi */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Thông báo thành công */}
              {success && (
                <p className="text-green-500 text-sm">Tải lên thành công!</p>
              )}

              {/* Nút Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Đang tải lên..." : "Lưu"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
