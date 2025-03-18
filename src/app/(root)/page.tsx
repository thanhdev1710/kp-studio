import AlbumSection from "@/components/AlbumSection";
import { ContactSection } from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import MapsSection from "@/components/MapsSection";
import PhotoPackageSection from "@/components/PhotoPackageSection";
import StepPhotoSection from "@/components/StepPhotoSection";
import VideoSection from "@/components/VideoSection";
import { blur } from "@/constants/base";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default function Home() {
  const listSlide = [
    { img: "/images/img1.jpg", blur },
    { img: "/images/img2.jpg", blur },
    { img: "/images/img3.jpg", blur },
    { img: "/images/img4.jpg", blur },
    { img: "/images/img5.jpg", blur },
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
