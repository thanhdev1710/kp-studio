"use client";
import { DeleteWedding } from "@/actions/wedding";
import { Wedding } from "@/types/wedding";
import { Trash } from "lucide-react";
import { Image } from "antd";
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
  const [loadingDelete, setLoadingDelete] = useState(false);

  return (
    <div className="px-4">
      <div className="md:columns-3 sm:columns-2 columns-1 gap-3 space-y-3">
        {children}
        {photos.map((item, index) => (
          <div
            key={item.name + index}
            className="relative break-inside-avoid rounded-lg overflow-hidden"
          >
            <Image
              src={item.image_url}
              alt={`Ảnh ${item.name}`}
              placeholder={true}
              preview={{ mask: false }}
              width="100%"
              loading="lazy"
              className="rounded-lg object-cover block cursor-zoom-in"
            />

            {isDelete && (
              <div
                onClick={async () => {
                  setLoadingDelete(true);
                  await DeleteWedding(item.id);
                  setLoadingDelete(false);
                }}
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black cursor-pointer"
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
    </div>
  );
}
