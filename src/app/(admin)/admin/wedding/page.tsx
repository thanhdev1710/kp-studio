import PhotoGallery from "@/components/PhotoGallery";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import { getWeddingByType } from "@/services/wedding";
import { TabType } from "@/types/wedding";
import { Suspense } from "react";
import ButtonAndForm from "./ButtonAndForm";
import Tabs from "@/components/Tabs";
import { tabs } from "@/constants/base";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ErrorComponent";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ type: TabType }>;
}) {
  const { type = "all" } = await searchParams;

  return (
    <div className="containerCustom py-12">
      <Tabs pathname="/admin/wedding" tabs={tabs} type={type} />
      <ErrorBoundary errorComponent={ErrorComponent}>
        <Suspense key={type} fallback={<PhotoGallerySkeleton />}>
          <FetchData type={type} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

async function FetchData({ type }: { type: TabType }) {
  const { data } = await getWeddingByType(type);
  return (
    <PhotoGallery isDelete={true} isPreview={false} photos={data}>
      <ButtonAndForm />
    </PhotoGallery>
  );
}
