import AlbumSection from "@/components/Section/AlbumSection";
import { ContactSection } from "@/components/Section/ContactSection";
import HeroSection from "@/components/Section/HeroSection";
import MapsSection from "@/components/Section/MapsSection";
import PhotoPackageSection from "@/components/Section/PhotoPackageSection";
import StepPhotoSection from "@/components/Section/StepPhotoSection";
import VideoSection from "@/components/Section/VideoSection";
import { blur } from "@/constants/base";
import { getVideosHomePage } from "@/services/videos";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default async function Home() {
  const videos = await getVideosHomePage();
  const listSlide = [
    { img: "/images/img1.jpg", blur, url: "" },
    { img: "/images/img2.jpg", blur, url: "" },
    { img: "/images/img3.jpg", blur, url: "" },
    { img: "/images/img4.jpg", blur, url: "" },
    { img: "/images/img5.jpg", blur, url: "" },
  ];

  return (
    <div>
      <HeroSection listSlide={listSlide} />
      <StepPhotoSection />
      <PhotoPackageSection />
      <AlbumSection />
      <VideoSection videos={videos} />
      <MapsSection />
      <ContactSection />
    </div>
  );
}
