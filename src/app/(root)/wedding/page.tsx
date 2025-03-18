import PhotoGallery from "@/components/PhotoGallery";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import Tabs from "@/components/Tabs";
import { tabs } from "@/constants/base";
import { getWeddingByType } from "@/services/wedding";
import { TabType } from "@/types/wedding";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Wedding",
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ type: TabType }>;
}) {
  const { type = "studio" } = await searchParams;

  return (
    <div className="containerCustom fontMontserrat py-12">
      <Tabs pathname="/wedding" tabs={tabs.slice(1)} type={type} />
      <Suspense key={type} fallback={<PhotoGallerySkeleton />}>
        <FetchData type={type} />
      </Suspense>
    </div>
  );
}

async function FetchData({ type }: { type: TabType }) {
  const { data } = await getWeddingByType(type);
  return <PhotoGallery photos={data} />;
}
