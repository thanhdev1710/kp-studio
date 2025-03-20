"use client";
import { DeleteWedding } from "@/actions/wedding";
import { Wedding } from "@/types/wedding";
import { Eye, Trash } from "lucide-react";
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
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
        {children}
        {photos.map((item, index) => (
          <div
            key={item.name + index}
            className="relative group transition-all duration-300 w-full h-auto aspect-[3/2] overflow-hidden"
          >
            <Image
              src={item.image_url}
              alt={`Ảnh ${item.name}`}
              placeholder={true}
              preview={{ mask: <Eye /> }}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
            {isDelete && (
              <div
                onClick={async () => {
                  setLoadingDelete(true);
                  await DeleteWedding(item.id);
                  setLoadingDelete(false);
                }}
                className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black cursor-pointer"
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
