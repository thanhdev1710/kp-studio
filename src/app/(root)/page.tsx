import AlbumSection from "@/components/AlbumSection";
import { ContactSection } from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import MapsSection from "@/components/MapsSection";
import PhotoPackageSection from "@/components/PhotoPackageSection";
import StepPhotoSection from "@/components/StepPhotoSection";
import VideoSection from "@/components/VideoSection";
import { generateBlurDataURL } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default async function Home() {
  const [blurImg1, blurImg2, blurImg3, blurImg4, blurImg5] = await Promise.all([
    generateBlurDataURL("public/images/img1.jpg"),
    generateBlurDataURL("public/images/img2.jpg"),
    generateBlurDataURL("public/images/img3.jpg"),
    generateBlurDataURL("public/images/img4.jpg"),
    generateBlurDataURL("public/images/img5.jpg"),
  ]);

  const listSlide = [
    { img: "/images/img1.jpg", blur: blurImg1 },
    { img: "/images/img2.jpg", blur: blurImg2 },
    { img: "/images/img3.jpg", blur: blurImg3 },
    { img: "/images/img4.jpg", blur: blurImg4 },
    { img: "/images/img5.jpg", blur: blurImg5 },
  ];

  return (
    <div>
      <HeroSection listSlide={listSlide} />
      <StepPhotoSection />
      <PhotoPackageSection />
      <AlbumSection />
      <VideoSection />
      <MapsSection />
      <ContactSection />
    </div>
  );
}
