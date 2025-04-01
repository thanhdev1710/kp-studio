"use client";
import { DeleteWedding } from "@/actions/wedding";
import { Wedding } from "@/types/wedding";
import { Lock, Trash } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

export default function PhotoGalleryAndDelete({
  photos,
  children,
  typePage,
}: {
  photos: Wedding[];
  typePage: string;
  children: ReactNode;
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

          <button
            onClick={async () => {
              setLoadingDelete(item.id);
              await DeleteWedding(item.id, typePage);
              setLoadingDelete(null);
            }}
            className={`absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-md transition-all ${
              loadingDelete === item.id
                ? "cursor-not-allowed"
                : "hover:bg-red-700 cursor-pointer"
            }`}
            disabled={loadingDelete === item.id}
          >
            {loadingDelete === item.id ? (
              <Lock size={18} />
            ) : (
              <Trash size={18} />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
