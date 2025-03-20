"use client";
import { DeleteWedding } from "@/actions/wedding";
import { Wedding } from "@/types/wedding";
import { Trash } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

export default function PhotoGallery({
  photos,
  children,
  isDelete = false,
}: {
  photos: Wedding[];
  children?: ReactNode;
  isDelete?: boolean;
}) {
  const [loadingDelete, setLoadingDelete] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
      {children}
      {photos.map((item, index) => (
        <div
          key={item.name + index}
          className="relative w-full h-auto aspect-[3/2] overflow-hidden border rounded-lg"
        >
          {/* Ảnh */}
          <Image
            src={item.image_url}
            alt={`Ảnh ${item.name}`}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={item.blur_data}
            loading="lazy"
            className="w-full h-auto object-cover"
          />

          {/* Nút xóa */}
          {isDelete && (
            <button
              onClick={async () => {
                setLoadingDelete(item.id);
                await DeleteWedding(item.id);
                setLoadingDelete(null);
              }}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-md transition-all"
              disabled={loadingDelete === item.id}
            >
              {loadingDelete === item.id ? "..." : <Trash size={18} />}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
