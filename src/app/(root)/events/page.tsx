import PhotoGallery from "@/components/PhotoGallery/PhotoGalleryV2";
import ErrorComponent from "@/components/ErrorComponent";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import { getWeddingByType } from "@/services/wedding";
import { TabType } from "@/types/wedding";
import { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Events",
};

export default async function page() {
  return (
    <div className="px-4 md:px-6 fontMontserrat py-12">
      <ErrorBoundary errorComponent={ErrorComponent}>
        <Suspense key={"events"} fallback={<PhotoGallerySkeleton />}>
          <FetchData type={"events"} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

async function FetchData({ type }: { type: TabType }) {
  const { data } = await getWeddingByType(type);
  return <PhotoGallery photos={data} />;
}
