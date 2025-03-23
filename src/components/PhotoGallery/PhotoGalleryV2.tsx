"use client";
import { Wedding } from "@/types/wedding";
import { Image } from "antd";
import { ReactNode } from "react";

export default function PhotoGallery({
  photos,
  children,
}: {
  photos: Wedding[];
  children?: ReactNode;
}) {
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
          </div>
        ))}
      </div>
    </div>
  );
}
