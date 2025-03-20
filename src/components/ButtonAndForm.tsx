"use client";

import { useState } from "react";
import { PlusIcon, X } from "lucide-react";
import { InsertWedding } from "@/actions/wedding";
import { supabase } from "@/lib/db";
import imageCompression from "browser-image-compression";

export default function ButtonAndForm({
  typePage,
}: {
  typePage: "wedding" | "events";
}) {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  async function convertToWebP(
    file: File,
    quality = 0.7,
    maxSize = 1500
  ): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) return reject("Canvas không được hỗ trợ");

          // Tính toán kích thước ảnh để không vượt quá maxSize
          let { width, height } = img;
          if (width > maxSize || height > maxSize) {
            const scaleFactor = Math.min(maxSize / width, maxSize / height);
            width = Math.round(width * scaleFactor);
            height = Math.round(height * scaleFactor);
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Chuyển sang WebP với chất lượng tối ưu
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(
                  new File(
                    [blob],
                    file.name.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
                    { type: "image/webp" }
                  )
                );
              } else {
                reject("Không thể tạo blob từ ảnh");
              }
            },
            "image/webp",
            quality // Giảm chất lượng xuống mức phù hợp
          );
        };
      };
    });
  }

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
            return convertToWebP(compressedFile, 0.7); // Giảm chất lượng
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
    type: string
  ) => {
    try {
      const uploads = await Promise.all(
        files.map(async (file) => {
          const fileName = `${typePage}/${type}/${name}-${Date.now()}-${
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
        className="group hover:bg-gray-300 transition-all w-full h-auto aspect-[3/2] cursor-pointer bg-gray-200 flex items-center justify-center"
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
                  formData.get("type")?.toString() || ""
                );

                if (!imageUrls) {
                  setError("Lỗi upload ảnh!");
                  setLoading(false);
                  return;
                }

                formData.append("imageUrls", JSON.stringify(imageUrls));
                const result = await InsertWedding(formData);
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

              {typePage === "wedding" ? (
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
              ) : (
                <input type="hidden" name="type" value="events" />
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
