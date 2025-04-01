import BeautifulMomentsSection from "@/components/Section/BeautifulMomentsSection";
// import PhotoPackageSection from "@/components/Section/PhotoPackageSection";
import { ContactSection } from "@/components/Section/ContactSection";
import HeroSection from "@/components/Section/HeroSection";
import InspirationSection from "@/components/Section/InspirationSection";
import MapsSection from "@/components/Section/MapsSection";
import StepPhotoSection from "@/components/Section/StepPhotoSection";
import VideoSection from "@/components/Section/VideoSection";
import BeautifulMomentsSectionSkeleton from "@/components/Skeleton/BeautifulMomentsSectionSkeleton";
import InspirationSectionSkeleton from "@/components/Skeleton/InspirationSectionSkeleton";
import VideoSectionSkeleton from "@/components/Skeleton/VideoSectionSkeleton";
import { getHeroSection } from "@/services/heroSection";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default async function Home() {
  const listSlide = await getHeroSection();

  return (
    <div>
      <HeroSection listSlide={listSlide} />
      <StepPhotoSection />
      {/* <PhotoPackageSection /> */}
      <Suspense fallback={<InspirationSectionSkeleton />}>
        <InspirationSection />
      </Suspense>
      <Suspense fallback={<BeautifulMomentsSectionSkeleton />}>
        <BeautifulMomentsSection />
      </Suspense>
      <Suspense fallback={<VideoSectionSkeleton />}>
        <VideoSection />
      </Suspense>
      <MapsSection />
      <ContactSection />
    </div>
  );
}
