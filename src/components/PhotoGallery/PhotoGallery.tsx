"use client";
import { Wedding } from "@/types/wedding";
import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { DeleteWedding } from "@/actions/wedding";
import Link from "next/link";

export default function PhotoGallery({
  photos,
  children,
  isPreview = true,
  isDelete = false,
}: {
  photos: Wedding[];
  children?: ReactNode;
  isPreview?: boolean;
  isDelete?: boolean;
}) {
  const [loadingDelete, setLoadingDelete] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
        {children}
        {photos.map((item, index) => (
          <div
            key={item.name + index}
            className="w-full h-auto aspect-[3/2] object-cover overflow-hidden relative cursor-pointer group transition-all duration-300"
          >
            <Image
              src={item.image_url}
              alt={`Ảnh ${item.name}`}
              className="object-cover"
              loading={index < 4 ? "eager" : "lazy"}
              priority={index < 4}
              placeholder="blur"
              quality={80}
              blurDataURL={item.blur_data}
              fill
            />
            {isPreview && (
              <Link
                href={item.image_url}
                target="_blank"
                className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black"
              >
                <Eye />
                <p>View</p>
              </Link>
            )}
            {isDelete && (
              <div
                onClick={async (e) => {
                  e.stopPropagation(); // Ngăn mở link khi ấn vào nút xóa
                  setLoadingDelete(true);
                  await DeleteWedding(item.id);
                  setLoadingDelete(false);
                }}
                className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black"
              >
                {loadingDelete ? (
                  <p>Đang xoá...</p>
                ) : (
                  <>
                    <Trash />
                    <p>Delete</p>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
