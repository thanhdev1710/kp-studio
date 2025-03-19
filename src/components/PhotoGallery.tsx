"use client";
import { DeleteWedding } from "@/actions/wedding";
import { Wedding } from "@/types/wedding";
import { Eye, Trash, X } from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

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
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [loadingDelete, setLoadingDelete] = useState(false);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
        {children}
        {photos.map((item, index) => (
          <div
            key={item.name + index}
            onClick={() => setImgPreview(item.image_url)}
            className={`w-full h-auto aspect-[3/2] object-cover overflow-hidden relative cursor-pointer group transition-all duration-300`}
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
              <div className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black">
                <Eye />
                <p>Preview</p>
              </div>
            )}
            {isDelete && (
              <div
                onClick={async () => {
                  setLoadingDelete(true);
                  await DeleteWedding(item.id);
                  setLoadingDelete(false);
                }}
                className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black"
              >
                {loadingDelete ? (
                  <p>Đang thực hiện xoá ảnh...</p>
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

      {isPreview && (
        <div
          onClick={() => setImgPreview(null)}
          className={`w-full fixed top-0 z-[60] left-0 h-screen bg-black/60 transition-all duration-500 ${
            imgPreview ? "left-0" : "left-full select-none"
          }`}
        >
          {imgPreview && (
            <div className="md:h-[60vh] md:w-auto w-[80%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                onClick={(e) => e.stopPropagation()}
                width={900}
                height={900}
                alt={`Ảnh ${imgPreview}`}
                quality={100}
                src={imgPreview || ""}
              />
              <button
                onClick={() => setImgPreview(null)}
                className="absolute cursor-pointer -top-5 -right-5 bg-black text-white p-2 rounded-full"
              >
                <X size={26} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
