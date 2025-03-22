"use client";

import { useState } from "react";
import { PlusIcon, X } from "lucide-react";
import { InsertWedding } from "@/actions/wedding";
import { supabase } from "@/lib/db";
import imageCompression from "browser-image-compression";
import { convertToWebP } from "@/lib/utils";
import { ListTab } from "@/types/wedding";

export default function ButtonAndForm({
  typePage,
  listTab,
}: {
  typePage: "wedding" | "events";
  listTab: ListTab;
}) {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const [typeLv1, setTypeLv1] = useState(listTab.tabs[1].value);

  const subTabs = listTab.tabs
    .map((tmp) => {
      if (tmp.value !== typeLv1) {
        return undefined;
      }

      if (tmp.children?.tabs.length === 0) {
        return undefined;
      }

      return tmp;
    })
    .filter((tmp) => tmp)[0]?.children;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length > 50) {
        alert("Bạn chỉ có thể tải lên tối đa 50 ảnh!");
        return;
      }

      try {
        const compressedFiles = await Promise.all(
          files.map(async (file) => {
            const options = {
              maxSizeMB: 1, // Giữ ảnh dưới 1MB
              maxWidthOrHeight: 1500, // Giới hạn kích thước ảnh
              useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);
            return convertToWebP(compressedFile, 0.85); // Giảm chất lượng
          })
        );

        setSelectedFiles(compressedFiles);
      } catch (error) {
        console.error("Lỗi nén hoặc chuyển đổi sang WebP:", error);
      }
    }
  };

  const uploadImagesToSupabase = async (
    files: File[],
    name: string,
    typeLv1: string,
    typeLv2: string
  ) => {
    try {
      const pTypeLv2 = typeLv2 ? `/${typeLv2}` : "";
      const uploads = await Promise.all(
        files.map(async (file) => {
          const fileName = `${typePage}/${typeLv1}${pTypeLv2}/${name}-${Date.now()}-${
            file.name
          }`;

          const { error } = await supabase.storage
            .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET!)
            .upload(fileName, file, { contentType: file.type });

          if (error) {
            console.error("Lỗi upload:", error.message);
            return null; // Trả về null nếu upload thất bại
          }

          return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_BUCKET}/${fileName}`;
        })
      );

      return uploads.filter((url) => url !== null); // Loại bỏ các upload thất bại
    } catch (error) {
      console.error("Lỗi trong quá trình upload:", error);
      return [];
    }
  };

  return (
    <div>
      <div
        onClick={() => setOpenForm(true)}
        className="group hover:bg-gray-300 transition-all w-full h-auto aspect-[3/2] cursor-pointer bg-gray-200 flex items-center justify-center rounded-lg"
      >
        <PlusIcon
          className="text-gray-400 group-hover:text-gray-500"
          size={50}
        />
      </div>

      {openForm && (
        <div
          onClick={() => setOpenForm(false)}
          className="fixed top-0 z-[60] left-0 bg-black/60 w-full h-screen flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Thêm ảnh</h2>
              <button
                onClick={() => setOpenForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form
              onSubmit={async (event) => {
                event.preventDefault();
                setLoading(true);
                setError(null);
                setSuccess(false);
                const formData = new FormData(event.currentTarget);

                const imageUrls = await uploadImagesToSupabase(
                  selectedFiles,
                  formData.get("name")?.toString() || "",
                  typeLv1 || "",
                  formData.get("typeLv2")?.toString() || ""
                );

                if (!imageUrls) {
                  setError("Lỗi upload ảnh!");
                  setLoading(false);
                  return;
                }

                formData.append("imageUrls", JSON.stringify(imageUrls));
                const result = await InsertWedding(formData, typePage);
                setLoading(false);

                if (result.status === "error") {
                  setError(result.error);
                } else {
                  setSuccess(true);
                  setTimeout(() => {
                    setOpenForm(false);
                    setSelectedFiles([]);
                    setSuccess(false);
                  }, 1500);
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Chọn ảnh
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  multiple
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-gray-700 hover:file:bg-gray-100"
                  required
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Loại
                </label>
                <select
                  name="typeLv1"
                  value={typeLv1}
                  onChange={(e) => setTypeLv1(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-black focus:ring-black"
                >
                  {listTab.tabs.slice(1).map((item) => (
                    <option key={item.label} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {subTabs && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Loại phụ
                  </label>
                  <select
                    name="typeLv2"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-black focus:ring-black"
                  >
                    {subTabs.tabs.map((item) => (
                      <option key={item.label} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm">Tải lên thành công!</p>
              )}

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
