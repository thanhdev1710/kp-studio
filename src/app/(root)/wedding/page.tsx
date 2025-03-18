"use client";
import { Eye, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type TabType = "studio" | "phimtruong" | "ngoaicanh";

const photos = {
  studio: [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ],
  phimtruong: ["/images/img3.jpg", "/images/img4.jpg"],
  ngoaicanh: [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ],
};

export default function PhotoGallery() {
  const tabs: TabType[] = ["studio", "phimtruong", "ngoaicanh"];
  const [activeTab, setActiveTab] = useState<TabType>("studio");
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 300);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="container mx-auto p-6 fontMontserrat">
      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-8 border-b border-gray-300 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative md:px-6 md:py-2 px-3 py-1 md:text-lg text-sm font-medium tracking-wide transition-all duration-300 ${
              activeTab === tab
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "studio"
              ? "Studio"
              : tab === "phimtruong"
              ? "Phim Trường"
              : "Ngoại Cảnh"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
        {photos[activeTab].map((src, index) => (
          <div
            key={index}
            onClick={() => setImgPreview(src)}
            className={`overflow-hidden relative cursor-pointer group transition-all duration-300 ${
              animation
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <Image
              width={500}
              height={500}
              src={src}
              alt={`Ảnh ${activeTab} ${index + 1}`}
              className="w-full h-auto aspect-[3/2] object-cover"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all flex left-0 top-0 w-full h-full bg-black/80 items-center justify-center gap-2 text-white font-black">
              <Eye />
              <p>Preview</p>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={() => setImgPreview(null)}
        className={`w-full fixed top-0 z-[60] left-0 h-svh bg-black/60 transition-all duration-500 ${
          imgPreview ? "left-0" : "left-full select-none"
        }`}
      >
        {imgPreview && (
          <div className="h-[60svh] w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              onClick={(e) => e.stopPropagation()}
              width={900}
              height={900}
              alt=""
              priority
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
    </div>
  );
}
